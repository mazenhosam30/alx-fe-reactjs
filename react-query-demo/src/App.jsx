import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

<QueryClientProvider client={queryClient}>
    <PostsComponent />
    <ReactQueryDevtools initialIsOpen={false} />
</QueryClientProvider>;

