module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Prevent commiting tests with debugRequests calls.",
      category: "Best Practices",
    },
    schema: [],
    messages: {
      noDebugRequests:
        "Debug requests should be removed before commiting tests.",
    },
  },
  create(context) {
    return {
      Identifier(node) {
        if (node.name === "debugRequests") {
          context.report({
            node,
            messageId: "noDebugRequests",
          });
        }
      },
    };
  },
};
