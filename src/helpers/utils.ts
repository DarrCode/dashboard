import { AbiNames } from '@/enums/abi.enums';

export function isProduction() {
    return process.env.NODE_ENV === 'prod' || process.env.NODE_ENV === 'production'
}

export function calculateBuyerPrice(sellerPrice: number, fee: number) {
    const percentageFee = +fee / 10000;
    const comission = +sellerPrice * +percentageFee;
    const buyerPrice = +sellerPrice + +comission;
    return Math.round(buyerPrice * 100000000) / 100000000;
}

export function calculateSellerPrice(buyerPrice: number, fee: number) {
    const invertedPercentage = (+fee * 100) / +calculateBuyerPrice(100, 1000) / 100;
    const sellerPrice = +buyerPrice * (1 - invertedPercentage / 100);
    return Math.round(sellerPrice * 100000000) / 100000000;
}

export function getToken() {
    return localStorage.getItem('token');
}

export function getNodeEnv() {
    return process.env.NODE_ENV;
}

export function getAbiRoute(name: AbiNames): string {
    return `${getNodeEnv()}/${name}.json`
}