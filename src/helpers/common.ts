export function getValidChain() {
  return process.env.VUE_APP_VALID_CHAIN || '';
}

export function getKeyGA() {
  return process.env.VUE_APP_KEY_GA || '';
}

export function getProviderUrl() {
    return process.env.VUE_APP_PROVIDER_URL || '';
}