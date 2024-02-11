import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

//make documents schema table with title, userId, isArchived, parentDocument
export default defineSchema({
  document: defineTable({
    title: v.string(),
    userId: v.string(),
    isArchived: v.boolean(),
    parentDocument: v.optional(v.id("document")),
    content: v.optional(v.string()),
    coverImage: v.optional(v.string()),
    icon: v.optional(v.string()),
    isPublished: v.boolean(),
  })
    .index("by_user", ["userId"])
    .index("by_user_parent", ["parentDocument"]),
});
