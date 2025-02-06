import { defineSchema, defineTable } from "convex/server";
import { authTables } from "@convex-dev/auth/server";
import { v } from "convex/values";

// Manually define the "users" table by including the default fields and adding the password field
const schema = defineSchema({
  ...authTables, // Spread all default auth tables
  users: defineTable({
    name: v.optional(v.string()),
    image: v.optional(v.string()),
    email: v.optional(v.string()),
    avatar: v.optional(v.string()),
    emailVerificationTime: v.optional(v.number()),
    phone: v.optional(v.string()),
    phoneVerificationTime: v.optional(v.number()),
    isAnonymous: v.optional(v.boolean()),
    password: v.optional(v.string()), // Add password field
  }).index("email", ["email"]), // Keep the email index
  // Add other tables as needed...
});

export default schema;
