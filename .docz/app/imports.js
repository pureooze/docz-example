export const imports = {
  'index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "index" */ 'index.mdx'),
  'src/CustomList.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-custom-list" */ 'src/CustomList.mdx'),
}
