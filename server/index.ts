import { router } from './trpc';
import { publicProcedure, router } from './trpc';

const appRouter = router({
  // ...
});
 

export type AppRouter = typeof appRouter;