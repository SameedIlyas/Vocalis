import { mutation, query } from "./_generated/server";

export const getMany = query({
  // no arguments
  args: {},
  // explicitly define return type
  handler: async (ctx) => {
    return await ctx.db.query("users").collect();
  },
});

export const add = mutation({
  args: {},
  handler: async (ctx) => {
    const userId = await ctx.db.insert("users", {
      name: "Scorpius",
    })
  }
})
