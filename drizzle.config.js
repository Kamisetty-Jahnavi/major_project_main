/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./configs/schema.jsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:SkNog7T2vxeQ@ep-dawn-river-a59aopcz.us-east-2.aws.neon.tech/neondb?sslmode=require',
    }
  };
