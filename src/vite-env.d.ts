/// <reference types="vite/client" />
import { NamespaceEnvironment } from '@/enums'

interface ImportMetaEnv {
	readonly VITE_APP_BASE_URL: string,
  readonly namespace?: NamespaceEnvironment
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}

declare global {

}
