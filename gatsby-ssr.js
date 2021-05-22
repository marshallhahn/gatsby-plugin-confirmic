// Copyright (c) 2021, Marshall B. Hahn
// All rights reserved.

// This source code is licensed under the BSD-style license found in the
// LICENSE file in the root directory of this source tree.

import React from 'react';

export const onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  const { client_id } = pluginOptions;

  setHeadComponents([
    <script
      key="confirmic-config"
      src={`https://config.confirmic.com/config.js?id=${client_id}`}
      crossOrigin="true"
      charSet="utf-8"
    ></script>,
    <script
      key="confirmic-embed"
      src="https://consent-manager.confirmic.com/embed.js"
      crossOrigin="true"
      charSet="utf-8"
    ></script>,
  ]);
};
