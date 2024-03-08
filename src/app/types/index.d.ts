/// <reference types="vite/client" />

import { Panel } from '@vkontakte/vkui';
import { ComponentProps } from 'react';

interface ImportMetaEnv {
  readonly VITE_API_URL: string
  readonly VITE_PORT: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

type Page = ComponentProps<typeof Panel>;