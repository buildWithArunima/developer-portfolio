export const experienceData = [
  {
    id: 1,
    company: "GoComet · Bangalore",
    jobtitle: "Senior Software Development Engineer 1",
    startYear: "Apr 2026",
    endYear: "Present",
    description:
      "Led the D&D billing engine's migration from the Rails monolith to an event-driven Kafka microservice (replay-safe consumers, dead-letter topics, ~50K calculations/day at p95 < 5s). Shipped the critical “Action Required” module in ~5 weeks with zero client-reported bugs.",
  },
  {
    id: 2,
    company: "GoComet · Bangalore",
    jobtitle: "Software Development Engineer 1",
    startYear: "Jan 2025",
    endYear: "Mar 2026",
    description:
      "Rebuilt the Port Mapping engine as v2 (fuzzy matching + LLM fallback via Sidekiq, MongoDB TTL cache), brought ~25% of an enterprise client's unsupported shipments onto the platform, and removed N+1 queries from a cron over ~100K trackings.",
  },
  {
    id: 3,
    company: "GoComet · Bangalore",
    jobtitle: "Backend Developer Intern",
    startYear: "Jan 2024",
    endYear: "Dec 2024",
    description:
      "Re-architected the product health metrics pipeline (7.5M records) with daily MongoDB pre-aggregation on a PostgreSQL read replica, cutting report generation from >5 hours to <2 hours.",
  },
  {
    id: 4,
    company: "Microsoft · Hyderabad",
    jobtitle: "SDE Intern",
    startYear: "May 2023",
    endYear: "Jun 2023",
    description:
      "Built a text prediction feature for Sticky Notes in React Native and TypeScript; UX benchmarks estimated ~30% faster note-taking.",
  },
];
