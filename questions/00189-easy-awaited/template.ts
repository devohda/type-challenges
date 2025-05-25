type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer U> ? 
                        U extends Promise<any> ?
                            MyAwaited<U> 
                            : U 
                    : never
