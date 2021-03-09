module.exports = function (api) {
  const presets = [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript',
  ];

  const plugins = [
    [
      'styled-components',
      {
        ssr: true,
        displayName: true,
      },
    ],
  ];

  api.cache(true);

  return { presets, plugins };
};
