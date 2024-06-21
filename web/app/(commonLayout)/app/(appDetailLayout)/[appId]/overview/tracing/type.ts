export enum TracingProvider {
  langSmith = 'langSmith',
  langfuse = 'langfuse',
}

export type LangSmitConfig = {
  api_key: string
  project: string
  endpoint: string
}

export type LangFuseConfig = {
  public_key: string
  secret_key: string
  host: string
}
