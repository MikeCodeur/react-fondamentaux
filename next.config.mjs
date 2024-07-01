/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx"],
  excludeDefaultMomentLocales: true,
  webpack: (config, options) => {
    config.module.rules.push(
      {
        test: /\.html$/i,
        use: [
          {
            loader: "html-loader",
            options: {
              sources: false, // Désactive la gestion des ressources dans les fichiers HTML
            },
          },
        ],
      },
      {
        test: /\.md$/,
        use: "raw-loader",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      }
    )
    return config
  },
}

export default nextConfig
