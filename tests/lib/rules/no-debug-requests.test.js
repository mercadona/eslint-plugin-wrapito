const rule = require("../../../lib/rules/no-debug-requests");
const { RuleTester } = require("eslint");

const ruleTester = new RuleTester();

ruleTester.run("no-debug-requests", rule, {
  valid: [
    {
      code: `wrap(App).withNetwork().mount()`,
    },
    {
      code: `// debugRequests()`,
    },
    {
      code: `
        wrap(App)
            .withNetwork([
                {
                    path: '/api/message/',
                    responseBody: 'hello',
                }
            ])
            //.debugRequests()
            .mount()
        `,
    },
  ],
  invalid: [
    {
      code: `wrap(App).withNetwork().debugRequests().mount()`,
      errors: [{ messageId: "noDebugRequests" }],
    },
    {
      code: `wrap(App).withNetwork().withDefaultRequests().debugRequests().mount()`,
      errors: [{ messageId: "noDebugRequests" }],
    },
    {
      code: `wrap(App).debugRequests().withNetwork().withDefaultRequests().mount()`,
      errors: [{ messageId: "noDebugRequests" }],
    },
    {
      code: `wrap(App)
            .withNetwork([
                {
                    path: '/api/message/',
                    responseBody: 'hello',
                }
            ])
            .debugRequests()
            .mount()`,
      errors: [{ messageId: "noDebugRequests" }],
    },
  ],
});
