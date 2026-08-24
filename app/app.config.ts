export default defineAppConfig({
  ui: {
    colors: {
      primary: "rose",
    },
    modal: {
      slots: {
        content: "bg-base-600",
      },
      variants: {
        fullscreen: {
          false: {
            content: "lg:w-[calc(100%-320px)] w-full max-w-screen h-[calc(100%-128px)]",
          },
        },
      },
    },
  },
});
