
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model comments
 * 
 */
export type comments = $Result.DefaultSelection<Prisma.$commentsPayload>
/**
 * Model genres
 * 
 */
export type genres = $Result.DefaultSelection<Prisma.$genresPayload>
/**
 * Model list_friends
 * 
 */
export type list_friends = $Result.DefaultSelection<Prisma.$list_friendsPayload>
/**
 * Model messages
 * 
 */
export type messages = $Result.DefaultSelection<Prisma.$messagesPayload>
/**
 * Model playlist_songs
 * 
 */
export type playlist_songs = $Result.DefaultSelection<Prisma.$playlist_songsPayload>
/**
 * Model playlists
 * 
 */
export type playlists = $Result.DefaultSelection<Prisma.$playlistsPayload>
/**
 * Model songs
 * 
 */
export type songs = $Result.DefaultSelection<Prisma.$songsPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const user_role: {
  admin: 'admin',
  Singer: 'Singer',
  user: 'user'
};

export type user_role = (typeof user_role)[keyof typeof user_role]

}

export type user_role = $Enums.user_role

export const user_role: typeof $Enums.user_role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Comments
 * const comments = await prisma.comments.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Comments
   * const comments = await prisma.comments.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.comments`: Exposes CRUD operations for the **comments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comments.findMany()
    * ```
    */
  get comments(): Prisma.commentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.genres`: Exposes CRUD operations for the **genres** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Genres
    * const genres = await prisma.genres.findMany()
    * ```
    */
  get genres(): Prisma.genresDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.list_friends`: Exposes CRUD operations for the **list_friends** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more List_friends
    * const list_friends = await prisma.list_friends.findMany()
    * ```
    */
  get list_friends(): Prisma.list_friendsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.messages`: Exposes CRUD operations for the **messages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.messages.findMany()
    * ```
    */
  get messages(): Prisma.messagesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.playlist_songs`: Exposes CRUD operations for the **playlist_songs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Playlist_songs
    * const playlist_songs = await prisma.playlist_songs.findMany()
    * ```
    */
  get playlist_songs(): Prisma.playlist_songsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.playlists`: Exposes CRUD operations for the **playlists** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Playlists
    * const playlists = await prisma.playlists.findMany()
    * ```
    */
  get playlists(): Prisma.playlistsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.songs`: Exposes CRUD operations for the **songs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Songs
    * const songs = await prisma.songs.findMany()
    * ```
    */
  get songs(): Prisma.songsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    comments: 'comments',
    genres: 'genres',
    list_friends: 'list_friends',
    messages: 'messages',
    playlist_songs: 'playlist_songs',
    playlists: 'playlists',
    songs: 'songs',
    users: 'users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "comments" | "genres" | "list_friends" | "messages" | "playlist_songs" | "playlists" | "songs" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      comments: {
        payload: Prisma.$commentsPayload<ExtArgs>
        fields: Prisma.commentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.commentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.commentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          findFirst: {
            args: Prisma.commentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.commentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          findMany: {
            args: Prisma.commentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>[]
          }
          create: {
            args: Prisma.commentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          createMany: {
            args: Prisma.commentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.commentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>[]
          }
          delete: {
            args: Prisma.commentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          update: {
            args: Prisma.commentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          deleteMany: {
            args: Prisma.commentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.commentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.commentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>[]
          }
          upsert: {
            args: Prisma.commentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          aggregate: {
            args: Prisma.CommentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComments>
          }
          groupBy: {
            args: Prisma.commentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.commentsCountArgs<ExtArgs>
            result: $Utils.Optional<CommentsCountAggregateOutputType> | number
          }
        }
      }
      genres: {
        payload: Prisma.$genresPayload<ExtArgs>
        fields: Prisma.genresFieldRefs
        operations: {
          findUnique: {
            args: Prisma.genresFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genresPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.genresFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genresPayload>
          }
          findFirst: {
            args: Prisma.genresFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genresPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.genresFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genresPayload>
          }
          findMany: {
            args: Prisma.genresFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genresPayload>[]
          }
          create: {
            args: Prisma.genresCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genresPayload>
          }
          createMany: {
            args: Prisma.genresCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.genresCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genresPayload>[]
          }
          delete: {
            args: Prisma.genresDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genresPayload>
          }
          update: {
            args: Prisma.genresUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genresPayload>
          }
          deleteMany: {
            args: Prisma.genresDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.genresUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.genresUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genresPayload>[]
          }
          upsert: {
            args: Prisma.genresUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genresPayload>
          }
          aggregate: {
            args: Prisma.GenresAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGenres>
          }
          groupBy: {
            args: Prisma.genresGroupByArgs<ExtArgs>
            result: $Utils.Optional<GenresGroupByOutputType>[]
          }
          count: {
            args: Prisma.genresCountArgs<ExtArgs>
            result: $Utils.Optional<GenresCountAggregateOutputType> | number
          }
        }
      }
      list_friends: {
        payload: Prisma.$list_friendsPayload<ExtArgs>
        fields: Prisma.list_friendsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.list_friendsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$list_friendsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.list_friendsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$list_friendsPayload>
          }
          findFirst: {
            args: Prisma.list_friendsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$list_friendsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.list_friendsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$list_friendsPayload>
          }
          findMany: {
            args: Prisma.list_friendsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$list_friendsPayload>[]
          }
          create: {
            args: Prisma.list_friendsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$list_friendsPayload>
          }
          createMany: {
            args: Prisma.list_friendsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.list_friendsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$list_friendsPayload>[]
          }
          delete: {
            args: Prisma.list_friendsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$list_friendsPayload>
          }
          update: {
            args: Prisma.list_friendsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$list_friendsPayload>
          }
          deleteMany: {
            args: Prisma.list_friendsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.list_friendsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.list_friendsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$list_friendsPayload>[]
          }
          upsert: {
            args: Prisma.list_friendsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$list_friendsPayload>
          }
          aggregate: {
            args: Prisma.List_friendsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateList_friends>
          }
          groupBy: {
            args: Prisma.list_friendsGroupByArgs<ExtArgs>
            result: $Utils.Optional<List_friendsGroupByOutputType>[]
          }
          count: {
            args: Prisma.list_friendsCountArgs<ExtArgs>
            result: $Utils.Optional<List_friendsCountAggregateOutputType> | number
          }
        }
      }
      messages: {
        payload: Prisma.$messagesPayload<ExtArgs>
        fields: Prisma.messagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.messagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.messagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          findFirst: {
            args: Prisma.messagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.messagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          findMany: {
            args: Prisma.messagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>[]
          }
          create: {
            args: Prisma.messagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          createMany: {
            args: Prisma.messagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.messagesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>[]
          }
          delete: {
            args: Prisma.messagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          update: {
            args: Prisma.messagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          deleteMany: {
            args: Prisma.messagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.messagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.messagesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>[]
          }
          upsert: {
            args: Prisma.messagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          aggregate: {
            args: Prisma.MessagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessages>
          }
          groupBy: {
            args: Prisma.messagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.messagesCountArgs<ExtArgs>
            result: $Utils.Optional<MessagesCountAggregateOutputType> | number
          }
        }
      }
      playlist_songs: {
        payload: Prisma.$playlist_songsPayload<ExtArgs>
        fields: Prisma.playlist_songsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.playlist_songsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playlist_songsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.playlist_songsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playlist_songsPayload>
          }
          findFirst: {
            args: Prisma.playlist_songsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playlist_songsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.playlist_songsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playlist_songsPayload>
          }
          findMany: {
            args: Prisma.playlist_songsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playlist_songsPayload>[]
          }
          create: {
            args: Prisma.playlist_songsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playlist_songsPayload>
          }
          createMany: {
            args: Prisma.playlist_songsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.playlist_songsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playlist_songsPayload>[]
          }
          delete: {
            args: Prisma.playlist_songsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playlist_songsPayload>
          }
          update: {
            args: Prisma.playlist_songsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playlist_songsPayload>
          }
          deleteMany: {
            args: Prisma.playlist_songsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.playlist_songsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.playlist_songsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playlist_songsPayload>[]
          }
          upsert: {
            args: Prisma.playlist_songsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playlist_songsPayload>
          }
          aggregate: {
            args: Prisma.Playlist_songsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlaylist_songs>
          }
          groupBy: {
            args: Prisma.playlist_songsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Playlist_songsGroupByOutputType>[]
          }
          count: {
            args: Prisma.playlist_songsCountArgs<ExtArgs>
            result: $Utils.Optional<Playlist_songsCountAggregateOutputType> | number
          }
        }
      }
      playlists: {
        payload: Prisma.$playlistsPayload<ExtArgs>
        fields: Prisma.playlistsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.playlistsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playlistsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.playlistsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playlistsPayload>
          }
          findFirst: {
            args: Prisma.playlistsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playlistsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.playlistsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playlistsPayload>
          }
          findMany: {
            args: Prisma.playlistsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playlistsPayload>[]
          }
          create: {
            args: Prisma.playlistsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playlistsPayload>
          }
          createMany: {
            args: Prisma.playlistsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.playlistsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playlistsPayload>[]
          }
          delete: {
            args: Prisma.playlistsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playlistsPayload>
          }
          update: {
            args: Prisma.playlistsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playlistsPayload>
          }
          deleteMany: {
            args: Prisma.playlistsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.playlistsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.playlistsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playlistsPayload>[]
          }
          upsert: {
            args: Prisma.playlistsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playlistsPayload>
          }
          aggregate: {
            args: Prisma.PlaylistsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlaylists>
          }
          groupBy: {
            args: Prisma.playlistsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlaylistsGroupByOutputType>[]
          }
          count: {
            args: Prisma.playlistsCountArgs<ExtArgs>
            result: $Utils.Optional<PlaylistsCountAggregateOutputType> | number
          }
        }
      }
      songs: {
        payload: Prisma.$songsPayload<ExtArgs>
        fields: Prisma.songsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.songsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$songsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.songsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$songsPayload>
          }
          findFirst: {
            args: Prisma.songsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$songsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.songsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$songsPayload>
          }
          findMany: {
            args: Prisma.songsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$songsPayload>[]
          }
          create: {
            args: Prisma.songsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$songsPayload>
          }
          createMany: {
            args: Prisma.songsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.songsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$songsPayload>[]
          }
          delete: {
            args: Prisma.songsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$songsPayload>
          }
          update: {
            args: Prisma.songsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$songsPayload>
          }
          deleteMany: {
            args: Prisma.songsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.songsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.songsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$songsPayload>[]
          }
          upsert: {
            args: Prisma.songsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$songsPayload>
          }
          aggregate: {
            args: Prisma.SongsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSongs>
          }
          groupBy: {
            args: Prisma.songsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SongsGroupByOutputType>[]
          }
          count: {
            args: Prisma.songsCountArgs<ExtArgs>
            result: $Utils.Optional<SongsCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    comments?: commentsOmit
    genres?: genresOmit
    list_friends?: list_friendsOmit
    messages?: messagesOmit
    playlist_songs?: playlist_songsOmit
    playlists?: playlistsOmit
    songs?: songsOmit
    users?: usersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CommentsCountOutputType
   */

  export type CommentsCountOutputType = {
    other_comments: number
  }

  export type CommentsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    other_comments?: boolean | CommentsCountOutputTypeCountOther_commentsArgs
  }

  // Custom InputTypes
  /**
   * CommentsCountOutputType without action
   */
  export type CommentsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentsCountOutputType
     */
    select?: CommentsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CommentsCountOutputType without action
   */
  export type CommentsCountOutputTypeCountOther_commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: commentsWhereInput
  }


  /**
   * Count Type GenresCountOutputType
   */

  export type GenresCountOutputType = {
    songs: number
  }

  export type GenresCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    songs?: boolean | GenresCountOutputTypeCountSongsArgs
  }

  // Custom InputTypes
  /**
   * GenresCountOutputType without action
   */
  export type GenresCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenresCountOutputType
     */
    select?: GenresCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GenresCountOutputType without action
   */
  export type GenresCountOutputTypeCountSongsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: songsWhereInput
  }


  /**
   * Count Type PlaylistsCountOutputType
   */

  export type PlaylistsCountOutputType = {
    playlist_songs: number
  }

  export type PlaylistsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    playlist_songs?: boolean | PlaylistsCountOutputTypeCountPlaylist_songsArgs
  }

  // Custom InputTypes
  /**
   * PlaylistsCountOutputType without action
   */
  export type PlaylistsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistsCountOutputType
     */
    select?: PlaylistsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlaylistsCountOutputType without action
   */
  export type PlaylistsCountOutputTypeCountPlaylist_songsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: playlist_songsWhereInput
  }


  /**
   * Count Type SongsCountOutputType
   */

  export type SongsCountOutputType = {
    comments: number
    playlist_songs: number
  }

  export type SongsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | SongsCountOutputTypeCountCommentsArgs
    playlist_songs?: boolean | SongsCountOutputTypeCountPlaylist_songsArgs
  }

  // Custom InputTypes
  /**
   * SongsCountOutputType without action
   */
  export type SongsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongsCountOutputType
     */
    select?: SongsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SongsCountOutputType without action
   */
  export type SongsCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: commentsWhereInput
  }

  /**
   * SongsCountOutputType without action
   */
  export type SongsCountOutputTypeCountPlaylist_songsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: playlist_songsWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    comments: number
    list_friends_list_friends_friend_idTousers: number
    list_friends_list_friends_user_idTousers: number
    messages: number
    playlists: number
    songs: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | UsersCountOutputTypeCountCommentsArgs
    list_friends_list_friends_friend_idTousers?: boolean | UsersCountOutputTypeCountList_friends_list_friends_friend_idTousersArgs
    list_friends_list_friends_user_idTousers?: boolean | UsersCountOutputTypeCountList_friends_list_friends_user_idTousersArgs
    messages?: boolean | UsersCountOutputTypeCountMessagesArgs
    playlists?: boolean | UsersCountOutputTypeCountPlaylistsArgs
    songs?: boolean | UsersCountOutputTypeCountSongsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: commentsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountList_friends_list_friends_friend_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: list_friendsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountList_friends_list_friends_user_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: list_friendsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: messagesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountPlaylistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: playlistsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountSongsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: songsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model comments
   */

  export type AggregateComments = {
    _count: CommentsCountAggregateOutputType | null
    _avg: CommentsAvgAggregateOutputType | null
    _sum: CommentsSumAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  export type CommentsAvgAggregateOutputType = {
    discuss_id: number | null
    user_id: number | null
    song_id: number | null
    replay_discuss_id: number | null
  }

  export type CommentsSumAggregateOutputType = {
    discuss_id: number | null
    user_id: number | null
    song_id: number | null
    replay_discuss_id: number | null
  }

  export type CommentsMinAggregateOutputType = {
    discuss_id: number | null
    user_id: number | null
    song_id: number | null
    content: string | null
    discuss_date: Date | null
    replay_discuss_id: number | null
  }

  export type CommentsMaxAggregateOutputType = {
    discuss_id: number | null
    user_id: number | null
    song_id: number | null
    content: string | null
    discuss_date: Date | null
    replay_discuss_id: number | null
  }

  export type CommentsCountAggregateOutputType = {
    discuss_id: number
    user_id: number
    song_id: number
    content: number
    discuss_date: number
    replay_discuss_id: number
    _all: number
  }


  export type CommentsAvgAggregateInputType = {
    discuss_id?: true
    user_id?: true
    song_id?: true
    replay_discuss_id?: true
  }

  export type CommentsSumAggregateInputType = {
    discuss_id?: true
    user_id?: true
    song_id?: true
    replay_discuss_id?: true
  }

  export type CommentsMinAggregateInputType = {
    discuss_id?: true
    user_id?: true
    song_id?: true
    content?: true
    discuss_date?: true
    replay_discuss_id?: true
  }

  export type CommentsMaxAggregateInputType = {
    discuss_id?: true
    user_id?: true
    song_id?: true
    content?: true
    discuss_date?: true
    replay_discuss_id?: true
  }

  export type CommentsCountAggregateInputType = {
    discuss_id?: true
    user_id?: true
    song_id?: true
    content?: true
    discuss_date?: true
    replay_discuss_id?: true
    _all?: true
  }

  export type CommentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which comments to aggregate.
     */
    where?: commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned comments
    **/
    _count?: true | CommentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentsMaxAggregateInputType
  }

  export type GetCommentsAggregateType<T extends CommentsAggregateArgs> = {
        [P in keyof T & keyof AggregateComments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComments[P]>
      : GetScalarType<T[P], AggregateComments[P]>
  }




  export type commentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: commentsWhereInput
    orderBy?: commentsOrderByWithAggregationInput | commentsOrderByWithAggregationInput[]
    by: CommentsScalarFieldEnum[] | CommentsScalarFieldEnum
    having?: commentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentsCountAggregateInputType | true
    _avg?: CommentsAvgAggregateInputType
    _sum?: CommentsSumAggregateInputType
    _min?: CommentsMinAggregateInputType
    _max?: CommentsMaxAggregateInputType
  }

  export type CommentsGroupByOutputType = {
    discuss_id: number
    user_id: number | null
    song_id: number | null
    content: string
    discuss_date: Date | null
    replay_discuss_id: number | null
    _count: CommentsCountAggregateOutputType | null
    _avg: CommentsAvgAggregateOutputType | null
    _sum: CommentsSumAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  type GetCommentsGroupByPayload<T extends commentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentsGroupByOutputType[P]>
            : GetScalarType<T[P], CommentsGroupByOutputType[P]>
        }
      >
    >


  export type commentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    discuss_id?: boolean
    user_id?: boolean
    song_id?: boolean
    content?: boolean
    discuss_date?: boolean
    replay_discuss_id?: boolean
    comments?: boolean | comments$commentsArgs<ExtArgs>
    other_comments?: boolean | comments$other_commentsArgs<ExtArgs>
    songs?: boolean | comments$songsArgs<ExtArgs>
    users?: boolean | comments$usersArgs<ExtArgs>
    _count?: boolean | CommentsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comments"]>

  export type commentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    discuss_id?: boolean
    user_id?: boolean
    song_id?: boolean
    content?: boolean
    discuss_date?: boolean
    replay_discuss_id?: boolean
    comments?: boolean | comments$commentsArgs<ExtArgs>
    songs?: boolean | comments$songsArgs<ExtArgs>
    users?: boolean | comments$usersArgs<ExtArgs>
  }, ExtArgs["result"]["comments"]>

  export type commentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    discuss_id?: boolean
    user_id?: boolean
    song_id?: boolean
    content?: boolean
    discuss_date?: boolean
    replay_discuss_id?: boolean
    comments?: boolean | comments$commentsArgs<ExtArgs>
    songs?: boolean | comments$songsArgs<ExtArgs>
    users?: boolean | comments$usersArgs<ExtArgs>
  }, ExtArgs["result"]["comments"]>

  export type commentsSelectScalar = {
    discuss_id?: boolean
    user_id?: boolean
    song_id?: boolean
    content?: boolean
    discuss_date?: boolean
    replay_discuss_id?: boolean
  }

  export type commentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"discuss_id" | "user_id" | "song_id" | "content" | "discuss_date" | "replay_discuss_id", ExtArgs["result"]["comments"]>
  export type commentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | comments$commentsArgs<ExtArgs>
    other_comments?: boolean | comments$other_commentsArgs<ExtArgs>
    songs?: boolean | comments$songsArgs<ExtArgs>
    users?: boolean | comments$usersArgs<ExtArgs>
    _count?: boolean | CommentsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type commentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | comments$commentsArgs<ExtArgs>
    songs?: boolean | comments$songsArgs<ExtArgs>
    users?: boolean | comments$usersArgs<ExtArgs>
  }
  export type commentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | comments$commentsArgs<ExtArgs>
    songs?: boolean | comments$songsArgs<ExtArgs>
    users?: boolean | comments$usersArgs<ExtArgs>
  }

  export type $commentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "comments"
    objects: {
      comments: Prisma.$commentsPayload<ExtArgs> | null
      other_comments: Prisma.$commentsPayload<ExtArgs>[]
      songs: Prisma.$songsPayload<ExtArgs> | null
      users: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      discuss_id: number
      user_id: number | null
      song_id: number | null
      content: string
      discuss_date: Date | null
      replay_discuss_id: number | null
    }, ExtArgs["result"]["comments"]>
    composites: {}
  }

  type commentsGetPayload<S extends boolean | null | undefined | commentsDefaultArgs> = $Result.GetResult<Prisma.$commentsPayload, S>

  type commentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<commentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentsCountAggregateInputType | true
    }

  export interface commentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['comments'], meta: { name: 'comments' } }
    /**
     * Find zero or one Comments that matches the filter.
     * @param {commentsFindUniqueArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends commentsFindUniqueArgs>(args: SelectSubset<T, commentsFindUniqueArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {commentsFindUniqueOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends commentsFindUniqueOrThrowArgs>(args: SelectSubset<T, commentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsFindFirstArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends commentsFindFirstArgs>(args?: SelectSubset<T, commentsFindFirstArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsFindFirstOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends commentsFindFirstOrThrowArgs>(args?: SelectSubset<T, commentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comments.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comments.findMany({ take: 10 })
     * 
     * // Only select the `discuss_id`
     * const commentsWithDiscuss_idOnly = await prisma.comments.findMany({ select: { discuss_id: true } })
     * 
     */
    findMany<T extends commentsFindManyArgs>(args?: SelectSubset<T, commentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comments.
     * @param {commentsCreateArgs} args - Arguments to create a Comments.
     * @example
     * // Create one Comments
     * const Comments = await prisma.comments.create({
     *   data: {
     *     // ... data to create a Comments
     *   }
     * })
     * 
     */
    create<T extends commentsCreateArgs>(args: SelectSubset<T, commentsCreateArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {commentsCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comments = await prisma.comments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends commentsCreateManyArgs>(args?: SelectSubset<T, commentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {commentsCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comments = await prisma.comments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `discuss_id`
     * const commentsWithDiscuss_idOnly = await prisma.comments.createManyAndReturn({
     *   select: { discuss_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends commentsCreateManyAndReturnArgs>(args?: SelectSubset<T, commentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comments.
     * @param {commentsDeleteArgs} args - Arguments to delete one Comments.
     * @example
     * // Delete one Comments
     * const Comments = await prisma.comments.delete({
     *   where: {
     *     // ... filter to delete one Comments
     *   }
     * })
     * 
     */
    delete<T extends commentsDeleteArgs>(args: SelectSubset<T, commentsDeleteArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comments.
     * @param {commentsUpdateArgs} args - Arguments to update one Comments.
     * @example
     * // Update one Comments
     * const comments = await prisma.comments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends commentsUpdateArgs>(args: SelectSubset<T, commentsUpdateArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {commentsDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends commentsDeleteManyArgs>(args?: SelectSubset<T, commentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comments = await prisma.comments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends commentsUpdateManyArgs>(args: SelectSubset<T, commentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {commentsUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comments = await prisma.comments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `discuss_id`
     * const commentsWithDiscuss_idOnly = await prisma.comments.updateManyAndReturn({
     *   select: { discuss_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends commentsUpdateManyAndReturnArgs>(args: SelectSubset<T, commentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comments.
     * @param {commentsUpsertArgs} args - Arguments to update or create a Comments.
     * @example
     * // Update or create a Comments
     * const comments = await prisma.comments.upsert({
     *   create: {
     *     // ... data to create a Comments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comments we want to update
     *   }
     * })
     */
    upsert<T extends commentsUpsertArgs>(args: SelectSubset<T, commentsUpsertArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comments.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends commentsCountArgs>(
      args?: Subset<T, commentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentsAggregateArgs>(args: Subset<T, CommentsAggregateArgs>): Prisma.PrismaPromise<GetCommentsAggregateType<T>>

    /**
     * Group by Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends commentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: commentsGroupByArgs['orderBy'] }
        : { orderBy?: commentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, commentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the comments model
   */
  readonly fields: commentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for comments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__commentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    comments<T extends comments$commentsArgs<ExtArgs> = {}>(args?: Subset<T, comments$commentsArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    other_comments<T extends comments$other_commentsArgs<ExtArgs> = {}>(args?: Subset<T, comments$other_commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    songs<T extends comments$songsArgs<ExtArgs> = {}>(args?: Subset<T, comments$songsArgs<ExtArgs>>): Prisma__songsClient<$Result.GetResult<Prisma.$songsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    users<T extends comments$usersArgs<ExtArgs> = {}>(args?: Subset<T, comments$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the comments model
   */
  interface commentsFieldRefs {
    readonly discuss_id: FieldRef<"comments", 'Int'>
    readonly user_id: FieldRef<"comments", 'Int'>
    readonly song_id: FieldRef<"comments", 'Int'>
    readonly content: FieldRef<"comments", 'String'>
    readonly discuss_date: FieldRef<"comments", 'DateTime'>
    readonly replay_discuss_id: FieldRef<"comments", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * comments findUnique
   */
  export type commentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where: commentsWhereUniqueInput
  }

  /**
   * comments findUniqueOrThrow
   */
  export type commentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where: commentsWhereUniqueInput
  }

  /**
   * comments findFirst
   */
  export type commentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where?: commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for comments.
     */
    cursor?: commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comments.
     */
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * comments findFirstOrThrow
   */
  export type commentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where?: commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for comments.
     */
    cursor?: commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comments.
     */
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * comments findMany
   */
  export type commentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where?: commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing comments.
     */
    cursor?: commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * comments create
   */
  export type commentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * The data needed to create a comments.
     */
    data: XOR<commentsCreateInput, commentsUncheckedCreateInput>
  }

  /**
   * comments createMany
   */
  export type commentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many comments.
     */
    data: commentsCreateManyInput | commentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * comments createManyAndReturn
   */
  export type commentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * The data used to create many comments.
     */
    data: commentsCreateManyInput | commentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * comments update
   */
  export type commentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * The data needed to update a comments.
     */
    data: XOR<commentsUpdateInput, commentsUncheckedUpdateInput>
    /**
     * Choose, which comments to update.
     */
    where: commentsWhereUniqueInput
  }

  /**
   * comments updateMany
   */
  export type commentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update comments.
     */
    data: XOR<commentsUpdateManyMutationInput, commentsUncheckedUpdateManyInput>
    /**
     * Filter which comments to update
     */
    where?: commentsWhereInput
    /**
     * Limit how many comments to update.
     */
    limit?: number
  }

  /**
   * comments updateManyAndReturn
   */
  export type commentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * The data used to update comments.
     */
    data: XOR<commentsUpdateManyMutationInput, commentsUncheckedUpdateManyInput>
    /**
     * Filter which comments to update
     */
    where?: commentsWhereInput
    /**
     * Limit how many comments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * comments upsert
   */
  export type commentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * The filter to search for the comments to update in case it exists.
     */
    where: commentsWhereUniqueInput
    /**
     * In case the comments found by the `where` argument doesn't exist, create a new comments with this data.
     */
    create: XOR<commentsCreateInput, commentsUncheckedCreateInput>
    /**
     * In case the comments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<commentsUpdateInput, commentsUncheckedUpdateInput>
  }

  /**
   * comments delete
   */
  export type commentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter which comments to delete.
     */
    where: commentsWhereUniqueInput
  }

  /**
   * comments deleteMany
   */
  export type commentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which comments to delete
     */
    where?: commentsWhereInput
    /**
     * Limit how many comments to delete.
     */
    limit?: number
  }

  /**
   * comments.comments
   */
  export type comments$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    where?: commentsWhereInput
  }

  /**
   * comments.other_comments
   */
  export type comments$other_commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    where?: commentsWhereInput
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    cursor?: commentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * comments.songs
   */
  export type comments$songsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the songs
     */
    select?: songsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the songs
     */
    omit?: songsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: songsInclude<ExtArgs> | null
    where?: songsWhereInput
  }

  /**
   * comments.users
   */
  export type comments$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * comments without action
   */
  export type commentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
  }


  /**
   * Model genres
   */

  export type AggregateGenres = {
    _count: GenresCountAggregateOutputType | null
    _avg: GenresAvgAggregateOutputType | null
    _sum: GenresSumAggregateOutputType | null
    _min: GenresMinAggregateOutputType | null
    _max: GenresMaxAggregateOutputType | null
  }

  export type GenresAvgAggregateOutputType = {
    genre_id: number | null
  }

  export type GenresSumAggregateOutputType = {
    genre_id: number | null
  }

  export type GenresMinAggregateOutputType = {
    genre_id: number | null
    name_genre: string | null
    create_time: Date | null
  }

  export type GenresMaxAggregateOutputType = {
    genre_id: number | null
    name_genre: string | null
    create_time: Date | null
  }

  export type GenresCountAggregateOutputType = {
    genre_id: number
    name_genre: number
    create_time: number
    _all: number
  }


  export type GenresAvgAggregateInputType = {
    genre_id?: true
  }

  export type GenresSumAggregateInputType = {
    genre_id?: true
  }

  export type GenresMinAggregateInputType = {
    genre_id?: true
    name_genre?: true
    create_time?: true
  }

  export type GenresMaxAggregateInputType = {
    genre_id?: true
    name_genre?: true
    create_time?: true
  }

  export type GenresCountAggregateInputType = {
    genre_id?: true
    name_genre?: true
    create_time?: true
    _all?: true
  }

  export type GenresAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which genres to aggregate.
     */
    where?: genresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of genres to fetch.
     */
    orderBy?: genresOrderByWithRelationInput | genresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: genresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned genres
    **/
    _count?: true | GenresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GenresAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GenresSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GenresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GenresMaxAggregateInputType
  }

  export type GetGenresAggregateType<T extends GenresAggregateArgs> = {
        [P in keyof T & keyof AggregateGenres]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGenres[P]>
      : GetScalarType<T[P], AggregateGenres[P]>
  }




  export type genresGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: genresWhereInput
    orderBy?: genresOrderByWithAggregationInput | genresOrderByWithAggregationInput[]
    by: GenresScalarFieldEnum[] | GenresScalarFieldEnum
    having?: genresScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GenresCountAggregateInputType | true
    _avg?: GenresAvgAggregateInputType
    _sum?: GenresSumAggregateInputType
    _min?: GenresMinAggregateInputType
    _max?: GenresMaxAggregateInputType
  }

  export type GenresGroupByOutputType = {
    genre_id: number
    name_genre: string
    create_time: Date | null
    _count: GenresCountAggregateOutputType | null
    _avg: GenresAvgAggregateOutputType | null
    _sum: GenresSumAggregateOutputType | null
    _min: GenresMinAggregateOutputType | null
    _max: GenresMaxAggregateOutputType | null
  }

  type GetGenresGroupByPayload<T extends genresGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GenresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GenresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GenresGroupByOutputType[P]>
            : GetScalarType<T[P], GenresGroupByOutputType[P]>
        }
      >
    >


  export type genresSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    genre_id?: boolean
    name_genre?: boolean
    create_time?: boolean
    songs?: boolean | genres$songsArgs<ExtArgs>
    _count?: boolean | GenresCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["genres"]>

  export type genresSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    genre_id?: boolean
    name_genre?: boolean
    create_time?: boolean
  }, ExtArgs["result"]["genres"]>

  export type genresSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    genre_id?: boolean
    name_genre?: boolean
    create_time?: boolean
  }, ExtArgs["result"]["genres"]>

  export type genresSelectScalar = {
    genre_id?: boolean
    name_genre?: boolean
    create_time?: boolean
  }

  export type genresOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"genre_id" | "name_genre" | "create_time", ExtArgs["result"]["genres"]>
  export type genresInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    songs?: boolean | genres$songsArgs<ExtArgs>
    _count?: boolean | GenresCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type genresIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type genresIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $genresPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "genres"
    objects: {
      songs: Prisma.$songsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      genre_id: number
      name_genre: string
      create_time: Date | null
    }, ExtArgs["result"]["genres"]>
    composites: {}
  }

  type genresGetPayload<S extends boolean | null | undefined | genresDefaultArgs> = $Result.GetResult<Prisma.$genresPayload, S>

  type genresCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<genresFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GenresCountAggregateInputType | true
    }

  export interface genresDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['genres'], meta: { name: 'genres' } }
    /**
     * Find zero or one Genres that matches the filter.
     * @param {genresFindUniqueArgs} args - Arguments to find a Genres
     * @example
     * // Get one Genres
     * const genres = await prisma.genres.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends genresFindUniqueArgs>(args: SelectSubset<T, genresFindUniqueArgs<ExtArgs>>): Prisma__genresClient<$Result.GetResult<Prisma.$genresPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Genres that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {genresFindUniqueOrThrowArgs} args - Arguments to find a Genres
     * @example
     * // Get one Genres
     * const genres = await prisma.genres.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends genresFindUniqueOrThrowArgs>(args: SelectSubset<T, genresFindUniqueOrThrowArgs<ExtArgs>>): Prisma__genresClient<$Result.GetResult<Prisma.$genresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Genres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {genresFindFirstArgs} args - Arguments to find a Genres
     * @example
     * // Get one Genres
     * const genres = await prisma.genres.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends genresFindFirstArgs>(args?: SelectSubset<T, genresFindFirstArgs<ExtArgs>>): Prisma__genresClient<$Result.GetResult<Prisma.$genresPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Genres that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {genresFindFirstOrThrowArgs} args - Arguments to find a Genres
     * @example
     * // Get one Genres
     * const genres = await prisma.genres.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends genresFindFirstOrThrowArgs>(args?: SelectSubset<T, genresFindFirstOrThrowArgs<ExtArgs>>): Prisma__genresClient<$Result.GetResult<Prisma.$genresPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Genres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {genresFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Genres
     * const genres = await prisma.genres.findMany()
     * 
     * // Get first 10 Genres
     * const genres = await prisma.genres.findMany({ take: 10 })
     * 
     * // Only select the `genre_id`
     * const genresWithGenre_idOnly = await prisma.genres.findMany({ select: { genre_id: true } })
     * 
     */
    findMany<T extends genresFindManyArgs>(args?: SelectSubset<T, genresFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$genresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Genres.
     * @param {genresCreateArgs} args - Arguments to create a Genres.
     * @example
     * // Create one Genres
     * const Genres = await prisma.genres.create({
     *   data: {
     *     // ... data to create a Genres
     *   }
     * })
     * 
     */
    create<T extends genresCreateArgs>(args: SelectSubset<T, genresCreateArgs<ExtArgs>>): Prisma__genresClient<$Result.GetResult<Prisma.$genresPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Genres.
     * @param {genresCreateManyArgs} args - Arguments to create many Genres.
     * @example
     * // Create many Genres
     * const genres = await prisma.genres.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends genresCreateManyArgs>(args?: SelectSubset<T, genresCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Genres and returns the data saved in the database.
     * @param {genresCreateManyAndReturnArgs} args - Arguments to create many Genres.
     * @example
     * // Create many Genres
     * const genres = await prisma.genres.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Genres and only return the `genre_id`
     * const genresWithGenre_idOnly = await prisma.genres.createManyAndReturn({
     *   select: { genre_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends genresCreateManyAndReturnArgs>(args?: SelectSubset<T, genresCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$genresPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Genres.
     * @param {genresDeleteArgs} args - Arguments to delete one Genres.
     * @example
     * // Delete one Genres
     * const Genres = await prisma.genres.delete({
     *   where: {
     *     // ... filter to delete one Genres
     *   }
     * })
     * 
     */
    delete<T extends genresDeleteArgs>(args: SelectSubset<T, genresDeleteArgs<ExtArgs>>): Prisma__genresClient<$Result.GetResult<Prisma.$genresPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Genres.
     * @param {genresUpdateArgs} args - Arguments to update one Genres.
     * @example
     * // Update one Genres
     * const genres = await prisma.genres.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends genresUpdateArgs>(args: SelectSubset<T, genresUpdateArgs<ExtArgs>>): Prisma__genresClient<$Result.GetResult<Prisma.$genresPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Genres.
     * @param {genresDeleteManyArgs} args - Arguments to filter Genres to delete.
     * @example
     * // Delete a few Genres
     * const { count } = await prisma.genres.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends genresDeleteManyArgs>(args?: SelectSubset<T, genresDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {genresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Genres
     * const genres = await prisma.genres.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends genresUpdateManyArgs>(args: SelectSubset<T, genresUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Genres and returns the data updated in the database.
     * @param {genresUpdateManyAndReturnArgs} args - Arguments to update many Genres.
     * @example
     * // Update many Genres
     * const genres = await prisma.genres.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Genres and only return the `genre_id`
     * const genresWithGenre_idOnly = await prisma.genres.updateManyAndReturn({
     *   select: { genre_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends genresUpdateManyAndReturnArgs>(args: SelectSubset<T, genresUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$genresPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Genres.
     * @param {genresUpsertArgs} args - Arguments to update or create a Genres.
     * @example
     * // Update or create a Genres
     * const genres = await prisma.genres.upsert({
     *   create: {
     *     // ... data to create a Genres
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Genres we want to update
     *   }
     * })
     */
    upsert<T extends genresUpsertArgs>(args: SelectSubset<T, genresUpsertArgs<ExtArgs>>): Prisma__genresClient<$Result.GetResult<Prisma.$genresPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {genresCountArgs} args - Arguments to filter Genres to count.
     * @example
     * // Count the number of Genres
     * const count = await prisma.genres.count({
     *   where: {
     *     // ... the filter for the Genres we want to count
     *   }
     * })
    **/
    count<T extends genresCountArgs>(
      args?: Subset<T, genresCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GenresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GenresAggregateArgs>(args: Subset<T, GenresAggregateArgs>): Prisma.PrismaPromise<GetGenresAggregateType<T>>

    /**
     * Group by Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {genresGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends genresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: genresGroupByArgs['orderBy'] }
        : { orderBy?: genresGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, genresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGenresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the genres model
   */
  readonly fields: genresFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for genres.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__genresClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    songs<T extends genres$songsArgs<ExtArgs> = {}>(args?: Subset<T, genres$songsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$songsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the genres model
   */
  interface genresFieldRefs {
    readonly genre_id: FieldRef<"genres", 'Int'>
    readonly name_genre: FieldRef<"genres", 'String'>
    readonly create_time: FieldRef<"genres", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * genres findUnique
   */
  export type genresFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genres
     */
    omit?: genresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genresInclude<ExtArgs> | null
    /**
     * Filter, which genres to fetch.
     */
    where: genresWhereUniqueInput
  }

  /**
   * genres findUniqueOrThrow
   */
  export type genresFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genres
     */
    omit?: genresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genresInclude<ExtArgs> | null
    /**
     * Filter, which genres to fetch.
     */
    where: genresWhereUniqueInput
  }

  /**
   * genres findFirst
   */
  export type genresFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genres
     */
    omit?: genresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genresInclude<ExtArgs> | null
    /**
     * Filter, which genres to fetch.
     */
    where?: genresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of genres to fetch.
     */
    orderBy?: genresOrderByWithRelationInput | genresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for genres.
     */
    cursor?: genresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of genres.
     */
    distinct?: GenresScalarFieldEnum | GenresScalarFieldEnum[]
  }

  /**
   * genres findFirstOrThrow
   */
  export type genresFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genres
     */
    omit?: genresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genresInclude<ExtArgs> | null
    /**
     * Filter, which genres to fetch.
     */
    where?: genresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of genres to fetch.
     */
    orderBy?: genresOrderByWithRelationInput | genresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for genres.
     */
    cursor?: genresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of genres.
     */
    distinct?: GenresScalarFieldEnum | GenresScalarFieldEnum[]
  }

  /**
   * genres findMany
   */
  export type genresFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genres
     */
    omit?: genresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genresInclude<ExtArgs> | null
    /**
     * Filter, which genres to fetch.
     */
    where?: genresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of genres to fetch.
     */
    orderBy?: genresOrderByWithRelationInput | genresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing genres.
     */
    cursor?: genresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` genres.
     */
    skip?: number
    distinct?: GenresScalarFieldEnum | GenresScalarFieldEnum[]
  }

  /**
   * genres create
   */
  export type genresCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genres
     */
    omit?: genresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genresInclude<ExtArgs> | null
    /**
     * The data needed to create a genres.
     */
    data: XOR<genresCreateInput, genresUncheckedCreateInput>
  }

  /**
   * genres createMany
   */
  export type genresCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many genres.
     */
    data: genresCreateManyInput | genresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * genres createManyAndReturn
   */
  export type genresCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the genres
     */
    omit?: genresOmit<ExtArgs> | null
    /**
     * The data used to create many genres.
     */
    data: genresCreateManyInput | genresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * genres update
   */
  export type genresUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genres
     */
    omit?: genresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genresInclude<ExtArgs> | null
    /**
     * The data needed to update a genres.
     */
    data: XOR<genresUpdateInput, genresUncheckedUpdateInput>
    /**
     * Choose, which genres to update.
     */
    where: genresWhereUniqueInput
  }

  /**
   * genres updateMany
   */
  export type genresUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update genres.
     */
    data: XOR<genresUpdateManyMutationInput, genresUncheckedUpdateManyInput>
    /**
     * Filter which genres to update
     */
    where?: genresWhereInput
    /**
     * Limit how many genres to update.
     */
    limit?: number
  }

  /**
   * genres updateManyAndReturn
   */
  export type genresUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the genres
     */
    omit?: genresOmit<ExtArgs> | null
    /**
     * The data used to update genres.
     */
    data: XOR<genresUpdateManyMutationInput, genresUncheckedUpdateManyInput>
    /**
     * Filter which genres to update
     */
    where?: genresWhereInput
    /**
     * Limit how many genres to update.
     */
    limit?: number
  }

  /**
   * genres upsert
   */
  export type genresUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genres
     */
    omit?: genresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genresInclude<ExtArgs> | null
    /**
     * The filter to search for the genres to update in case it exists.
     */
    where: genresWhereUniqueInput
    /**
     * In case the genres found by the `where` argument doesn't exist, create a new genres with this data.
     */
    create: XOR<genresCreateInput, genresUncheckedCreateInput>
    /**
     * In case the genres was found with the provided `where` argument, update it with this data.
     */
    update: XOR<genresUpdateInput, genresUncheckedUpdateInput>
  }

  /**
   * genres delete
   */
  export type genresDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genres
     */
    omit?: genresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genresInclude<ExtArgs> | null
    /**
     * Filter which genres to delete.
     */
    where: genresWhereUniqueInput
  }

  /**
   * genres deleteMany
   */
  export type genresDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which genres to delete
     */
    where?: genresWhereInput
    /**
     * Limit how many genres to delete.
     */
    limit?: number
  }

  /**
   * genres.songs
   */
  export type genres$songsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the songs
     */
    select?: songsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the songs
     */
    omit?: songsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: songsInclude<ExtArgs> | null
    where?: songsWhereInput
    orderBy?: songsOrderByWithRelationInput | songsOrderByWithRelationInput[]
    cursor?: songsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SongsScalarFieldEnum | SongsScalarFieldEnum[]
  }

  /**
   * genres without action
   */
  export type genresDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genres
     */
    omit?: genresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genresInclude<ExtArgs> | null
  }


  /**
   * Model list_friends
   */

  export type AggregateList_friends = {
    _count: List_friendsCountAggregateOutputType | null
    _avg: List_friendsAvgAggregateOutputType | null
    _sum: List_friendsSumAggregateOutputType | null
    _min: List_friendsMinAggregateOutputType | null
    _max: List_friendsMaxAggregateOutputType | null
  }

  export type List_friendsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    friend_id: number | null
  }

  export type List_friendsSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    friend_id: number | null
  }

  export type List_friendsMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    friend_id: number | null
    room_chat: string | null
  }

  export type List_friendsMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    friend_id: number | null
    room_chat: string | null
  }

  export type List_friendsCountAggregateOutputType = {
    id: number
    user_id: number
    friend_id: number
    room_chat: number
    _all: number
  }


  export type List_friendsAvgAggregateInputType = {
    id?: true
    user_id?: true
    friend_id?: true
  }

  export type List_friendsSumAggregateInputType = {
    id?: true
    user_id?: true
    friend_id?: true
  }

  export type List_friendsMinAggregateInputType = {
    id?: true
    user_id?: true
    friend_id?: true
    room_chat?: true
  }

  export type List_friendsMaxAggregateInputType = {
    id?: true
    user_id?: true
    friend_id?: true
    room_chat?: true
  }

  export type List_friendsCountAggregateInputType = {
    id?: true
    user_id?: true
    friend_id?: true
    room_chat?: true
    _all?: true
  }

  export type List_friendsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which list_friends to aggregate.
     */
    where?: list_friendsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of list_friends to fetch.
     */
    orderBy?: list_friendsOrderByWithRelationInput | list_friendsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: list_friendsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` list_friends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` list_friends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned list_friends
    **/
    _count?: true | List_friendsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: List_friendsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: List_friendsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: List_friendsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: List_friendsMaxAggregateInputType
  }

  export type GetList_friendsAggregateType<T extends List_friendsAggregateArgs> = {
        [P in keyof T & keyof AggregateList_friends]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateList_friends[P]>
      : GetScalarType<T[P], AggregateList_friends[P]>
  }




  export type list_friendsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: list_friendsWhereInput
    orderBy?: list_friendsOrderByWithAggregationInput | list_friendsOrderByWithAggregationInput[]
    by: List_friendsScalarFieldEnum[] | List_friendsScalarFieldEnum
    having?: list_friendsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: List_friendsCountAggregateInputType | true
    _avg?: List_friendsAvgAggregateInputType
    _sum?: List_friendsSumAggregateInputType
    _min?: List_friendsMinAggregateInputType
    _max?: List_friendsMaxAggregateInputType
  }

  export type List_friendsGroupByOutputType = {
    id: number
    user_id: number | null
    friend_id: number | null
    room_chat: string | null
    _count: List_friendsCountAggregateOutputType | null
    _avg: List_friendsAvgAggregateOutputType | null
    _sum: List_friendsSumAggregateOutputType | null
    _min: List_friendsMinAggregateOutputType | null
    _max: List_friendsMaxAggregateOutputType | null
  }

  type GetList_friendsGroupByPayload<T extends list_friendsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<List_friendsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof List_friendsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], List_friendsGroupByOutputType[P]>
            : GetScalarType<T[P], List_friendsGroupByOutputType[P]>
        }
      >
    >


  export type list_friendsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    friend_id?: boolean
    room_chat?: boolean
    users_list_friends_friend_idTousers?: boolean | list_friends$users_list_friends_friend_idTousersArgs<ExtArgs>
    users_list_friends_user_idTousers?: boolean | list_friends$users_list_friends_user_idTousersArgs<ExtArgs>
  }, ExtArgs["result"]["list_friends"]>

  export type list_friendsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    friend_id?: boolean
    room_chat?: boolean
    users_list_friends_friend_idTousers?: boolean | list_friends$users_list_friends_friend_idTousersArgs<ExtArgs>
    users_list_friends_user_idTousers?: boolean | list_friends$users_list_friends_user_idTousersArgs<ExtArgs>
  }, ExtArgs["result"]["list_friends"]>

  export type list_friendsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    friend_id?: boolean
    room_chat?: boolean
    users_list_friends_friend_idTousers?: boolean | list_friends$users_list_friends_friend_idTousersArgs<ExtArgs>
    users_list_friends_user_idTousers?: boolean | list_friends$users_list_friends_user_idTousersArgs<ExtArgs>
  }, ExtArgs["result"]["list_friends"]>

  export type list_friendsSelectScalar = {
    id?: boolean
    user_id?: boolean
    friend_id?: boolean
    room_chat?: boolean
  }

  export type list_friendsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "friend_id" | "room_chat", ExtArgs["result"]["list_friends"]>
  export type list_friendsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_list_friends_friend_idTousers?: boolean | list_friends$users_list_friends_friend_idTousersArgs<ExtArgs>
    users_list_friends_user_idTousers?: boolean | list_friends$users_list_friends_user_idTousersArgs<ExtArgs>
  }
  export type list_friendsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_list_friends_friend_idTousers?: boolean | list_friends$users_list_friends_friend_idTousersArgs<ExtArgs>
    users_list_friends_user_idTousers?: boolean | list_friends$users_list_friends_user_idTousersArgs<ExtArgs>
  }
  export type list_friendsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_list_friends_friend_idTousers?: boolean | list_friends$users_list_friends_friend_idTousersArgs<ExtArgs>
    users_list_friends_user_idTousers?: boolean | list_friends$users_list_friends_user_idTousersArgs<ExtArgs>
  }

  export type $list_friendsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "list_friends"
    objects: {
      users_list_friends_friend_idTousers: Prisma.$usersPayload<ExtArgs> | null
      users_list_friends_user_idTousers: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number | null
      friend_id: number | null
      room_chat: string | null
    }, ExtArgs["result"]["list_friends"]>
    composites: {}
  }

  type list_friendsGetPayload<S extends boolean | null | undefined | list_friendsDefaultArgs> = $Result.GetResult<Prisma.$list_friendsPayload, S>

  type list_friendsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<list_friendsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: List_friendsCountAggregateInputType | true
    }

  export interface list_friendsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['list_friends'], meta: { name: 'list_friends' } }
    /**
     * Find zero or one List_friends that matches the filter.
     * @param {list_friendsFindUniqueArgs} args - Arguments to find a List_friends
     * @example
     * // Get one List_friends
     * const list_friends = await prisma.list_friends.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends list_friendsFindUniqueArgs>(args: SelectSubset<T, list_friendsFindUniqueArgs<ExtArgs>>): Prisma__list_friendsClient<$Result.GetResult<Prisma.$list_friendsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one List_friends that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {list_friendsFindUniqueOrThrowArgs} args - Arguments to find a List_friends
     * @example
     * // Get one List_friends
     * const list_friends = await prisma.list_friends.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends list_friendsFindUniqueOrThrowArgs>(args: SelectSubset<T, list_friendsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__list_friendsClient<$Result.GetResult<Prisma.$list_friendsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first List_friends that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {list_friendsFindFirstArgs} args - Arguments to find a List_friends
     * @example
     * // Get one List_friends
     * const list_friends = await prisma.list_friends.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends list_friendsFindFirstArgs>(args?: SelectSubset<T, list_friendsFindFirstArgs<ExtArgs>>): Prisma__list_friendsClient<$Result.GetResult<Prisma.$list_friendsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first List_friends that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {list_friendsFindFirstOrThrowArgs} args - Arguments to find a List_friends
     * @example
     * // Get one List_friends
     * const list_friends = await prisma.list_friends.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends list_friendsFindFirstOrThrowArgs>(args?: SelectSubset<T, list_friendsFindFirstOrThrowArgs<ExtArgs>>): Prisma__list_friendsClient<$Result.GetResult<Prisma.$list_friendsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more List_friends that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {list_friendsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all List_friends
     * const list_friends = await prisma.list_friends.findMany()
     * 
     * // Get first 10 List_friends
     * const list_friends = await prisma.list_friends.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const list_friendsWithIdOnly = await prisma.list_friends.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends list_friendsFindManyArgs>(args?: SelectSubset<T, list_friendsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$list_friendsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a List_friends.
     * @param {list_friendsCreateArgs} args - Arguments to create a List_friends.
     * @example
     * // Create one List_friends
     * const List_friends = await prisma.list_friends.create({
     *   data: {
     *     // ... data to create a List_friends
     *   }
     * })
     * 
     */
    create<T extends list_friendsCreateArgs>(args: SelectSubset<T, list_friendsCreateArgs<ExtArgs>>): Prisma__list_friendsClient<$Result.GetResult<Prisma.$list_friendsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many List_friends.
     * @param {list_friendsCreateManyArgs} args - Arguments to create many List_friends.
     * @example
     * // Create many List_friends
     * const list_friends = await prisma.list_friends.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends list_friendsCreateManyArgs>(args?: SelectSubset<T, list_friendsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many List_friends and returns the data saved in the database.
     * @param {list_friendsCreateManyAndReturnArgs} args - Arguments to create many List_friends.
     * @example
     * // Create many List_friends
     * const list_friends = await prisma.list_friends.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many List_friends and only return the `id`
     * const list_friendsWithIdOnly = await prisma.list_friends.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends list_friendsCreateManyAndReturnArgs>(args?: SelectSubset<T, list_friendsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$list_friendsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a List_friends.
     * @param {list_friendsDeleteArgs} args - Arguments to delete one List_friends.
     * @example
     * // Delete one List_friends
     * const List_friends = await prisma.list_friends.delete({
     *   where: {
     *     // ... filter to delete one List_friends
     *   }
     * })
     * 
     */
    delete<T extends list_friendsDeleteArgs>(args: SelectSubset<T, list_friendsDeleteArgs<ExtArgs>>): Prisma__list_friendsClient<$Result.GetResult<Prisma.$list_friendsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one List_friends.
     * @param {list_friendsUpdateArgs} args - Arguments to update one List_friends.
     * @example
     * // Update one List_friends
     * const list_friends = await prisma.list_friends.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends list_friendsUpdateArgs>(args: SelectSubset<T, list_friendsUpdateArgs<ExtArgs>>): Prisma__list_friendsClient<$Result.GetResult<Prisma.$list_friendsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more List_friends.
     * @param {list_friendsDeleteManyArgs} args - Arguments to filter List_friends to delete.
     * @example
     * // Delete a few List_friends
     * const { count } = await prisma.list_friends.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends list_friendsDeleteManyArgs>(args?: SelectSubset<T, list_friendsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more List_friends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {list_friendsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many List_friends
     * const list_friends = await prisma.list_friends.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends list_friendsUpdateManyArgs>(args: SelectSubset<T, list_friendsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more List_friends and returns the data updated in the database.
     * @param {list_friendsUpdateManyAndReturnArgs} args - Arguments to update many List_friends.
     * @example
     * // Update many List_friends
     * const list_friends = await prisma.list_friends.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more List_friends and only return the `id`
     * const list_friendsWithIdOnly = await prisma.list_friends.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends list_friendsUpdateManyAndReturnArgs>(args: SelectSubset<T, list_friendsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$list_friendsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one List_friends.
     * @param {list_friendsUpsertArgs} args - Arguments to update or create a List_friends.
     * @example
     * // Update or create a List_friends
     * const list_friends = await prisma.list_friends.upsert({
     *   create: {
     *     // ... data to create a List_friends
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the List_friends we want to update
     *   }
     * })
     */
    upsert<T extends list_friendsUpsertArgs>(args: SelectSubset<T, list_friendsUpsertArgs<ExtArgs>>): Prisma__list_friendsClient<$Result.GetResult<Prisma.$list_friendsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of List_friends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {list_friendsCountArgs} args - Arguments to filter List_friends to count.
     * @example
     * // Count the number of List_friends
     * const count = await prisma.list_friends.count({
     *   where: {
     *     // ... the filter for the List_friends we want to count
     *   }
     * })
    **/
    count<T extends list_friendsCountArgs>(
      args?: Subset<T, list_friendsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], List_friendsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a List_friends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {List_friendsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends List_friendsAggregateArgs>(args: Subset<T, List_friendsAggregateArgs>): Prisma.PrismaPromise<GetList_friendsAggregateType<T>>

    /**
     * Group by List_friends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {list_friendsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends list_friendsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: list_friendsGroupByArgs['orderBy'] }
        : { orderBy?: list_friendsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, list_friendsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetList_friendsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the list_friends model
   */
  readonly fields: list_friendsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for list_friends.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__list_friendsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users_list_friends_friend_idTousers<T extends list_friends$users_list_friends_friend_idTousersArgs<ExtArgs> = {}>(args?: Subset<T, list_friends$users_list_friends_friend_idTousersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    users_list_friends_user_idTousers<T extends list_friends$users_list_friends_user_idTousersArgs<ExtArgs> = {}>(args?: Subset<T, list_friends$users_list_friends_user_idTousersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the list_friends model
   */
  interface list_friendsFieldRefs {
    readonly id: FieldRef<"list_friends", 'Int'>
    readonly user_id: FieldRef<"list_friends", 'Int'>
    readonly friend_id: FieldRef<"list_friends", 'Int'>
    readonly room_chat: FieldRef<"list_friends", 'String'>
  }
    

  // Custom InputTypes
  /**
   * list_friends findUnique
   */
  export type list_friendsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the list_friends
     */
    select?: list_friendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the list_friends
     */
    omit?: list_friendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: list_friendsInclude<ExtArgs> | null
    /**
     * Filter, which list_friends to fetch.
     */
    where: list_friendsWhereUniqueInput
  }

  /**
   * list_friends findUniqueOrThrow
   */
  export type list_friendsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the list_friends
     */
    select?: list_friendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the list_friends
     */
    omit?: list_friendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: list_friendsInclude<ExtArgs> | null
    /**
     * Filter, which list_friends to fetch.
     */
    where: list_friendsWhereUniqueInput
  }

  /**
   * list_friends findFirst
   */
  export type list_friendsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the list_friends
     */
    select?: list_friendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the list_friends
     */
    omit?: list_friendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: list_friendsInclude<ExtArgs> | null
    /**
     * Filter, which list_friends to fetch.
     */
    where?: list_friendsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of list_friends to fetch.
     */
    orderBy?: list_friendsOrderByWithRelationInput | list_friendsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for list_friends.
     */
    cursor?: list_friendsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` list_friends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` list_friends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of list_friends.
     */
    distinct?: List_friendsScalarFieldEnum | List_friendsScalarFieldEnum[]
  }

  /**
   * list_friends findFirstOrThrow
   */
  export type list_friendsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the list_friends
     */
    select?: list_friendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the list_friends
     */
    omit?: list_friendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: list_friendsInclude<ExtArgs> | null
    /**
     * Filter, which list_friends to fetch.
     */
    where?: list_friendsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of list_friends to fetch.
     */
    orderBy?: list_friendsOrderByWithRelationInput | list_friendsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for list_friends.
     */
    cursor?: list_friendsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` list_friends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` list_friends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of list_friends.
     */
    distinct?: List_friendsScalarFieldEnum | List_friendsScalarFieldEnum[]
  }

  /**
   * list_friends findMany
   */
  export type list_friendsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the list_friends
     */
    select?: list_friendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the list_friends
     */
    omit?: list_friendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: list_friendsInclude<ExtArgs> | null
    /**
     * Filter, which list_friends to fetch.
     */
    where?: list_friendsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of list_friends to fetch.
     */
    orderBy?: list_friendsOrderByWithRelationInput | list_friendsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing list_friends.
     */
    cursor?: list_friendsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` list_friends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` list_friends.
     */
    skip?: number
    distinct?: List_friendsScalarFieldEnum | List_friendsScalarFieldEnum[]
  }

  /**
   * list_friends create
   */
  export type list_friendsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the list_friends
     */
    select?: list_friendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the list_friends
     */
    omit?: list_friendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: list_friendsInclude<ExtArgs> | null
    /**
     * The data needed to create a list_friends.
     */
    data?: XOR<list_friendsCreateInput, list_friendsUncheckedCreateInput>
  }

  /**
   * list_friends createMany
   */
  export type list_friendsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many list_friends.
     */
    data: list_friendsCreateManyInput | list_friendsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * list_friends createManyAndReturn
   */
  export type list_friendsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the list_friends
     */
    select?: list_friendsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the list_friends
     */
    omit?: list_friendsOmit<ExtArgs> | null
    /**
     * The data used to create many list_friends.
     */
    data: list_friendsCreateManyInput | list_friendsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: list_friendsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * list_friends update
   */
  export type list_friendsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the list_friends
     */
    select?: list_friendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the list_friends
     */
    omit?: list_friendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: list_friendsInclude<ExtArgs> | null
    /**
     * The data needed to update a list_friends.
     */
    data: XOR<list_friendsUpdateInput, list_friendsUncheckedUpdateInput>
    /**
     * Choose, which list_friends to update.
     */
    where: list_friendsWhereUniqueInput
  }

  /**
   * list_friends updateMany
   */
  export type list_friendsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update list_friends.
     */
    data: XOR<list_friendsUpdateManyMutationInput, list_friendsUncheckedUpdateManyInput>
    /**
     * Filter which list_friends to update
     */
    where?: list_friendsWhereInput
    /**
     * Limit how many list_friends to update.
     */
    limit?: number
  }

  /**
   * list_friends updateManyAndReturn
   */
  export type list_friendsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the list_friends
     */
    select?: list_friendsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the list_friends
     */
    omit?: list_friendsOmit<ExtArgs> | null
    /**
     * The data used to update list_friends.
     */
    data: XOR<list_friendsUpdateManyMutationInput, list_friendsUncheckedUpdateManyInput>
    /**
     * Filter which list_friends to update
     */
    where?: list_friendsWhereInput
    /**
     * Limit how many list_friends to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: list_friendsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * list_friends upsert
   */
  export type list_friendsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the list_friends
     */
    select?: list_friendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the list_friends
     */
    omit?: list_friendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: list_friendsInclude<ExtArgs> | null
    /**
     * The filter to search for the list_friends to update in case it exists.
     */
    where: list_friendsWhereUniqueInput
    /**
     * In case the list_friends found by the `where` argument doesn't exist, create a new list_friends with this data.
     */
    create: XOR<list_friendsCreateInput, list_friendsUncheckedCreateInput>
    /**
     * In case the list_friends was found with the provided `where` argument, update it with this data.
     */
    update: XOR<list_friendsUpdateInput, list_friendsUncheckedUpdateInput>
  }

  /**
   * list_friends delete
   */
  export type list_friendsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the list_friends
     */
    select?: list_friendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the list_friends
     */
    omit?: list_friendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: list_friendsInclude<ExtArgs> | null
    /**
     * Filter which list_friends to delete.
     */
    where: list_friendsWhereUniqueInput
  }

  /**
   * list_friends deleteMany
   */
  export type list_friendsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which list_friends to delete
     */
    where?: list_friendsWhereInput
    /**
     * Limit how many list_friends to delete.
     */
    limit?: number
  }

  /**
   * list_friends.users_list_friends_friend_idTousers
   */
  export type list_friends$users_list_friends_friend_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * list_friends.users_list_friends_user_idTousers
   */
  export type list_friends$users_list_friends_user_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * list_friends without action
   */
  export type list_friendsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the list_friends
     */
    select?: list_friendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the list_friends
     */
    omit?: list_friendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: list_friendsInclude<ExtArgs> | null
  }


  /**
   * Model messages
   */

  export type AggregateMessages = {
    _count: MessagesCountAggregateOutputType | null
    _avg: MessagesAvgAggregateOutputType | null
    _sum: MessagesSumAggregateOutputType | null
    _min: MessagesMinAggregateOutputType | null
    _max: MessagesMaxAggregateOutputType | null
  }

  export type MessagesAvgAggregateOutputType = {
    id: number | null
    id_sender: number | null
  }

  export type MessagesSumAggregateOutputType = {
    id: number | null
    id_sender: number | null
  }

  export type MessagesMinAggregateOutputType = {
    id: number | null
    id_sender: number | null
    content_mess: string | null
    time_send: Date | null
    room_chat: string | null
  }

  export type MessagesMaxAggregateOutputType = {
    id: number | null
    id_sender: number | null
    content_mess: string | null
    time_send: Date | null
    room_chat: string | null
  }

  export type MessagesCountAggregateOutputType = {
    id: number
    id_sender: number
    content_mess: number
    time_send: number
    room_chat: number
    _all: number
  }


  export type MessagesAvgAggregateInputType = {
    id?: true
    id_sender?: true
  }

  export type MessagesSumAggregateInputType = {
    id?: true
    id_sender?: true
  }

  export type MessagesMinAggregateInputType = {
    id?: true
    id_sender?: true
    content_mess?: true
    time_send?: true
    room_chat?: true
  }

  export type MessagesMaxAggregateInputType = {
    id?: true
    id_sender?: true
    content_mess?: true
    time_send?: true
    room_chat?: true
  }

  export type MessagesCountAggregateInputType = {
    id?: true
    id_sender?: true
    content_mess?: true
    time_send?: true
    room_chat?: true
    _all?: true
  }

  export type MessagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which messages to aggregate.
     */
    where?: messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned messages
    **/
    _count?: true | MessagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessagesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessagesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessagesMaxAggregateInputType
  }

  export type GetMessagesAggregateType<T extends MessagesAggregateArgs> = {
        [P in keyof T & keyof AggregateMessages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessages[P]>
      : GetScalarType<T[P], AggregateMessages[P]>
  }




  export type messagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: messagesWhereInput
    orderBy?: messagesOrderByWithAggregationInput | messagesOrderByWithAggregationInput[]
    by: MessagesScalarFieldEnum[] | MessagesScalarFieldEnum
    having?: messagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessagesCountAggregateInputType | true
    _avg?: MessagesAvgAggregateInputType
    _sum?: MessagesSumAggregateInputType
    _min?: MessagesMinAggregateInputType
    _max?: MessagesMaxAggregateInputType
  }

  export type MessagesGroupByOutputType = {
    id: number
    id_sender: number | null
    content_mess: string | null
    time_send: Date | null
    room_chat: string | null
    _count: MessagesCountAggregateOutputType | null
    _avg: MessagesAvgAggregateOutputType | null
    _sum: MessagesSumAggregateOutputType | null
    _min: MessagesMinAggregateOutputType | null
    _max: MessagesMaxAggregateOutputType | null
  }

  type GetMessagesGroupByPayload<T extends messagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessagesGroupByOutputType[P]>
            : GetScalarType<T[P], MessagesGroupByOutputType[P]>
        }
      >
    >


  export type messagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_sender?: boolean
    content_mess?: boolean
    time_send?: boolean
    room_chat?: boolean
    users?: boolean | messages$usersArgs<ExtArgs>
  }, ExtArgs["result"]["messages"]>

  export type messagesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_sender?: boolean
    content_mess?: boolean
    time_send?: boolean
    room_chat?: boolean
    users?: boolean | messages$usersArgs<ExtArgs>
  }, ExtArgs["result"]["messages"]>

  export type messagesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_sender?: boolean
    content_mess?: boolean
    time_send?: boolean
    room_chat?: boolean
    users?: boolean | messages$usersArgs<ExtArgs>
  }, ExtArgs["result"]["messages"]>

  export type messagesSelectScalar = {
    id?: boolean
    id_sender?: boolean
    content_mess?: boolean
    time_send?: boolean
    room_chat?: boolean
  }

  export type messagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_sender" | "content_mess" | "time_send" | "room_chat", ExtArgs["result"]["messages"]>
  export type messagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | messages$usersArgs<ExtArgs>
  }
  export type messagesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | messages$usersArgs<ExtArgs>
  }
  export type messagesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | messages$usersArgs<ExtArgs>
  }

  export type $messagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "messages"
    objects: {
      users: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_sender: number | null
      content_mess: string | null
      time_send: Date | null
      room_chat: string | null
    }, ExtArgs["result"]["messages"]>
    composites: {}
  }

  type messagesGetPayload<S extends boolean | null | undefined | messagesDefaultArgs> = $Result.GetResult<Prisma.$messagesPayload, S>

  type messagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<messagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessagesCountAggregateInputType | true
    }

  export interface messagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['messages'], meta: { name: 'messages' } }
    /**
     * Find zero or one Messages that matches the filter.
     * @param {messagesFindUniqueArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends messagesFindUniqueArgs>(args: SelectSubset<T, messagesFindUniqueArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Messages that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {messagesFindUniqueOrThrowArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends messagesFindUniqueOrThrowArgs>(args: SelectSubset<T, messagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesFindFirstArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends messagesFindFirstArgs>(args?: SelectSubset<T, messagesFindFirstArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Messages that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesFindFirstOrThrowArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends messagesFindFirstOrThrowArgs>(args?: SelectSubset<T, messagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.messages.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.messages.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messagesWithIdOnly = await prisma.messages.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends messagesFindManyArgs>(args?: SelectSubset<T, messagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Messages.
     * @param {messagesCreateArgs} args - Arguments to create a Messages.
     * @example
     * // Create one Messages
     * const Messages = await prisma.messages.create({
     *   data: {
     *     // ... data to create a Messages
     *   }
     * })
     * 
     */
    create<T extends messagesCreateArgs>(args: SelectSubset<T, messagesCreateArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {messagesCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const messages = await prisma.messages.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends messagesCreateManyArgs>(args?: SelectSubset<T, messagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {messagesCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const messages = await prisma.messages.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messagesWithIdOnly = await prisma.messages.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends messagesCreateManyAndReturnArgs>(args?: SelectSubset<T, messagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Messages.
     * @param {messagesDeleteArgs} args - Arguments to delete one Messages.
     * @example
     * // Delete one Messages
     * const Messages = await prisma.messages.delete({
     *   where: {
     *     // ... filter to delete one Messages
     *   }
     * })
     * 
     */
    delete<T extends messagesDeleteArgs>(args: SelectSubset<T, messagesDeleteArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Messages.
     * @param {messagesUpdateArgs} args - Arguments to update one Messages.
     * @example
     * // Update one Messages
     * const messages = await prisma.messages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends messagesUpdateArgs>(args: SelectSubset<T, messagesUpdateArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {messagesDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.messages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends messagesDeleteManyArgs>(args?: SelectSubset<T, messagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const messages = await prisma.messages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends messagesUpdateManyArgs>(args: SelectSubset<T, messagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {messagesUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const messages = await prisma.messages.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messagesWithIdOnly = await prisma.messages.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends messagesUpdateManyAndReturnArgs>(args: SelectSubset<T, messagesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Messages.
     * @param {messagesUpsertArgs} args - Arguments to update or create a Messages.
     * @example
     * // Update or create a Messages
     * const messages = await prisma.messages.upsert({
     *   create: {
     *     // ... data to create a Messages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Messages we want to update
     *   }
     * })
     */
    upsert<T extends messagesUpsertArgs>(args: SelectSubset<T, messagesUpsertArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.messages.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends messagesCountArgs>(
      args?: Subset<T, messagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessagesAggregateArgs>(args: Subset<T, MessagesAggregateArgs>): Prisma.PrismaPromise<GetMessagesAggregateType<T>>

    /**
     * Group by Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends messagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: messagesGroupByArgs['orderBy'] }
        : { orderBy?: messagesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, messagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the messages model
   */
  readonly fields: messagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for messages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__messagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends messages$usersArgs<ExtArgs> = {}>(args?: Subset<T, messages$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the messages model
   */
  interface messagesFieldRefs {
    readonly id: FieldRef<"messages", 'Int'>
    readonly id_sender: FieldRef<"messages", 'Int'>
    readonly content_mess: FieldRef<"messages", 'String'>
    readonly time_send: FieldRef<"messages", 'DateTime'>
    readonly room_chat: FieldRef<"messages", 'String'>
  }
    

  // Custom InputTypes
  /**
   * messages findUnique
   */
  export type messagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where: messagesWhereUniqueInput
  }

  /**
   * messages findUniqueOrThrow
   */
  export type messagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where: messagesWhereUniqueInput
  }

  /**
   * messages findFirst
   */
  export type messagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where?: messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for messages.
     */
    cursor?: messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of messages.
     */
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * messages findFirstOrThrow
   */
  export type messagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where?: messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for messages.
     */
    cursor?: messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of messages.
     */
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * messages findMany
   */
  export type messagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where?: messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing messages.
     */
    cursor?: messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * messages create
   */
  export type messagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * The data needed to create a messages.
     */
    data?: XOR<messagesCreateInput, messagesUncheckedCreateInput>
  }

  /**
   * messages createMany
   */
  export type messagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many messages.
     */
    data: messagesCreateManyInput | messagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * messages createManyAndReturn
   */
  export type messagesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * The data used to create many messages.
     */
    data: messagesCreateManyInput | messagesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * messages update
   */
  export type messagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * The data needed to update a messages.
     */
    data: XOR<messagesUpdateInput, messagesUncheckedUpdateInput>
    /**
     * Choose, which messages to update.
     */
    where: messagesWhereUniqueInput
  }

  /**
   * messages updateMany
   */
  export type messagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update messages.
     */
    data: XOR<messagesUpdateManyMutationInput, messagesUncheckedUpdateManyInput>
    /**
     * Filter which messages to update
     */
    where?: messagesWhereInput
    /**
     * Limit how many messages to update.
     */
    limit?: number
  }

  /**
   * messages updateManyAndReturn
   */
  export type messagesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * The data used to update messages.
     */
    data: XOR<messagesUpdateManyMutationInput, messagesUncheckedUpdateManyInput>
    /**
     * Filter which messages to update
     */
    where?: messagesWhereInput
    /**
     * Limit how many messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * messages upsert
   */
  export type messagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * The filter to search for the messages to update in case it exists.
     */
    where: messagesWhereUniqueInput
    /**
     * In case the messages found by the `where` argument doesn't exist, create a new messages with this data.
     */
    create: XOR<messagesCreateInput, messagesUncheckedCreateInput>
    /**
     * In case the messages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<messagesUpdateInput, messagesUncheckedUpdateInput>
  }

  /**
   * messages delete
   */
  export type messagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter which messages to delete.
     */
    where: messagesWhereUniqueInput
  }

  /**
   * messages deleteMany
   */
  export type messagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which messages to delete
     */
    where?: messagesWhereInput
    /**
     * Limit how many messages to delete.
     */
    limit?: number
  }

  /**
   * messages.users
   */
  export type messages$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * messages without action
   */
  export type messagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
  }


  /**
   * Model playlist_songs
   */

  export type AggregatePlaylist_songs = {
    _count: Playlist_songsCountAggregateOutputType | null
    _avg: Playlist_songsAvgAggregateOutputType | null
    _sum: Playlist_songsSumAggregateOutputType | null
    _min: Playlist_songsMinAggregateOutputType | null
    _max: Playlist_songsMaxAggregateOutputType | null
  }

  export type Playlist_songsAvgAggregateOutputType = {
    id: number | null
    playlist_id: number | null
    song_id: number | null
  }

  export type Playlist_songsSumAggregateOutputType = {
    id: number | null
    playlist_id: number | null
    song_id: number | null
  }

  export type Playlist_songsMinAggregateOutputType = {
    id: number | null
    playlist_id: number | null
    song_id: number | null
  }

  export type Playlist_songsMaxAggregateOutputType = {
    id: number | null
    playlist_id: number | null
    song_id: number | null
  }

  export type Playlist_songsCountAggregateOutputType = {
    id: number
    playlist_id: number
    song_id: number
    _all: number
  }


  export type Playlist_songsAvgAggregateInputType = {
    id?: true
    playlist_id?: true
    song_id?: true
  }

  export type Playlist_songsSumAggregateInputType = {
    id?: true
    playlist_id?: true
    song_id?: true
  }

  export type Playlist_songsMinAggregateInputType = {
    id?: true
    playlist_id?: true
    song_id?: true
  }

  export type Playlist_songsMaxAggregateInputType = {
    id?: true
    playlist_id?: true
    song_id?: true
  }

  export type Playlist_songsCountAggregateInputType = {
    id?: true
    playlist_id?: true
    song_id?: true
    _all?: true
  }

  export type Playlist_songsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which playlist_songs to aggregate.
     */
    where?: playlist_songsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of playlist_songs to fetch.
     */
    orderBy?: playlist_songsOrderByWithRelationInput | playlist_songsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: playlist_songsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` playlist_songs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` playlist_songs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned playlist_songs
    **/
    _count?: true | Playlist_songsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Playlist_songsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Playlist_songsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Playlist_songsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Playlist_songsMaxAggregateInputType
  }

  export type GetPlaylist_songsAggregateType<T extends Playlist_songsAggregateArgs> = {
        [P in keyof T & keyof AggregatePlaylist_songs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlaylist_songs[P]>
      : GetScalarType<T[P], AggregatePlaylist_songs[P]>
  }




  export type playlist_songsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: playlist_songsWhereInput
    orderBy?: playlist_songsOrderByWithAggregationInput | playlist_songsOrderByWithAggregationInput[]
    by: Playlist_songsScalarFieldEnum[] | Playlist_songsScalarFieldEnum
    having?: playlist_songsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Playlist_songsCountAggregateInputType | true
    _avg?: Playlist_songsAvgAggregateInputType
    _sum?: Playlist_songsSumAggregateInputType
    _min?: Playlist_songsMinAggregateInputType
    _max?: Playlist_songsMaxAggregateInputType
  }

  export type Playlist_songsGroupByOutputType = {
    id: number
    playlist_id: number | null
    song_id: number | null
    _count: Playlist_songsCountAggregateOutputType | null
    _avg: Playlist_songsAvgAggregateOutputType | null
    _sum: Playlist_songsSumAggregateOutputType | null
    _min: Playlist_songsMinAggregateOutputType | null
    _max: Playlist_songsMaxAggregateOutputType | null
  }

  type GetPlaylist_songsGroupByPayload<T extends playlist_songsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Playlist_songsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Playlist_songsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Playlist_songsGroupByOutputType[P]>
            : GetScalarType<T[P], Playlist_songsGroupByOutputType[P]>
        }
      >
    >


  export type playlist_songsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playlist_id?: boolean
    song_id?: boolean
    playlists?: boolean | playlist_songs$playlistsArgs<ExtArgs>
    songs?: boolean | playlist_songs$songsArgs<ExtArgs>
  }, ExtArgs["result"]["playlist_songs"]>

  export type playlist_songsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playlist_id?: boolean
    song_id?: boolean
    playlists?: boolean | playlist_songs$playlistsArgs<ExtArgs>
    songs?: boolean | playlist_songs$songsArgs<ExtArgs>
  }, ExtArgs["result"]["playlist_songs"]>

  export type playlist_songsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playlist_id?: boolean
    song_id?: boolean
    playlists?: boolean | playlist_songs$playlistsArgs<ExtArgs>
    songs?: boolean | playlist_songs$songsArgs<ExtArgs>
  }, ExtArgs["result"]["playlist_songs"]>

  export type playlist_songsSelectScalar = {
    id?: boolean
    playlist_id?: boolean
    song_id?: boolean
  }

  export type playlist_songsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "playlist_id" | "song_id", ExtArgs["result"]["playlist_songs"]>
  export type playlist_songsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    playlists?: boolean | playlist_songs$playlistsArgs<ExtArgs>
    songs?: boolean | playlist_songs$songsArgs<ExtArgs>
  }
  export type playlist_songsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    playlists?: boolean | playlist_songs$playlistsArgs<ExtArgs>
    songs?: boolean | playlist_songs$songsArgs<ExtArgs>
  }
  export type playlist_songsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    playlists?: boolean | playlist_songs$playlistsArgs<ExtArgs>
    songs?: boolean | playlist_songs$songsArgs<ExtArgs>
  }

  export type $playlist_songsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "playlist_songs"
    objects: {
      playlists: Prisma.$playlistsPayload<ExtArgs> | null
      songs: Prisma.$songsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      playlist_id: number | null
      song_id: number | null
    }, ExtArgs["result"]["playlist_songs"]>
    composites: {}
  }

  type playlist_songsGetPayload<S extends boolean | null | undefined | playlist_songsDefaultArgs> = $Result.GetResult<Prisma.$playlist_songsPayload, S>

  type playlist_songsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<playlist_songsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Playlist_songsCountAggregateInputType | true
    }

  export interface playlist_songsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['playlist_songs'], meta: { name: 'playlist_songs' } }
    /**
     * Find zero or one Playlist_songs that matches the filter.
     * @param {playlist_songsFindUniqueArgs} args - Arguments to find a Playlist_songs
     * @example
     * // Get one Playlist_songs
     * const playlist_songs = await prisma.playlist_songs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends playlist_songsFindUniqueArgs>(args: SelectSubset<T, playlist_songsFindUniqueArgs<ExtArgs>>): Prisma__playlist_songsClient<$Result.GetResult<Prisma.$playlist_songsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Playlist_songs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {playlist_songsFindUniqueOrThrowArgs} args - Arguments to find a Playlist_songs
     * @example
     * // Get one Playlist_songs
     * const playlist_songs = await prisma.playlist_songs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends playlist_songsFindUniqueOrThrowArgs>(args: SelectSubset<T, playlist_songsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__playlist_songsClient<$Result.GetResult<Prisma.$playlist_songsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Playlist_songs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playlist_songsFindFirstArgs} args - Arguments to find a Playlist_songs
     * @example
     * // Get one Playlist_songs
     * const playlist_songs = await prisma.playlist_songs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends playlist_songsFindFirstArgs>(args?: SelectSubset<T, playlist_songsFindFirstArgs<ExtArgs>>): Prisma__playlist_songsClient<$Result.GetResult<Prisma.$playlist_songsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Playlist_songs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playlist_songsFindFirstOrThrowArgs} args - Arguments to find a Playlist_songs
     * @example
     * // Get one Playlist_songs
     * const playlist_songs = await prisma.playlist_songs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends playlist_songsFindFirstOrThrowArgs>(args?: SelectSubset<T, playlist_songsFindFirstOrThrowArgs<ExtArgs>>): Prisma__playlist_songsClient<$Result.GetResult<Prisma.$playlist_songsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Playlist_songs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playlist_songsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Playlist_songs
     * const playlist_songs = await prisma.playlist_songs.findMany()
     * 
     * // Get first 10 Playlist_songs
     * const playlist_songs = await prisma.playlist_songs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playlist_songsWithIdOnly = await prisma.playlist_songs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends playlist_songsFindManyArgs>(args?: SelectSubset<T, playlist_songsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$playlist_songsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Playlist_songs.
     * @param {playlist_songsCreateArgs} args - Arguments to create a Playlist_songs.
     * @example
     * // Create one Playlist_songs
     * const Playlist_songs = await prisma.playlist_songs.create({
     *   data: {
     *     // ... data to create a Playlist_songs
     *   }
     * })
     * 
     */
    create<T extends playlist_songsCreateArgs>(args: SelectSubset<T, playlist_songsCreateArgs<ExtArgs>>): Prisma__playlist_songsClient<$Result.GetResult<Prisma.$playlist_songsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Playlist_songs.
     * @param {playlist_songsCreateManyArgs} args - Arguments to create many Playlist_songs.
     * @example
     * // Create many Playlist_songs
     * const playlist_songs = await prisma.playlist_songs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends playlist_songsCreateManyArgs>(args?: SelectSubset<T, playlist_songsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Playlist_songs and returns the data saved in the database.
     * @param {playlist_songsCreateManyAndReturnArgs} args - Arguments to create many Playlist_songs.
     * @example
     * // Create many Playlist_songs
     * const playlist_songs = await prisma.playlist_songs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Playlist_songs and only return the `id`
     * const playlist_songsWithIdOnly = await prisma.playlist_songs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends playlist_songsCreateManyAndReturnArgs>(args?: SelectSubset<T, playlist_songsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$playlist_songsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Playlist_songs.
     * @param {playlist_songsDeleteArgs} args - Arguments to delete one Playlist_songs.
     * @example
     * // Delete one Playlist_songs
     * const Playlist_songs = await prisma.playlist_songs.delete({
     *   where: {
     *     // ... filter to delete one Playlist_songs
     *   }
     * })
     * 
     */
    delete<T extends playlist_songsDeleteArgs>(args: SelectSubset<T, playlist_songsDeleteArgs<ExtArgs>>): Prisma__playlist_songsClient<$Result.GetResult<Prisma.$playlist_songsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Playlist_songs.
     * @param {playlist_songsUpdateArgs} args - Arguments to update one Playlist_songs.
     * @example
     * // Update one Playlist_songs
     * const playlist_songs = await prisma.playlist_songs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends playlist_songsUpdateArgs>(args: SelectSubset<T, playlist_songsUpdateArgs<ExtArgs>>): Prisma__playlist_songsClient<$Result.GetResult<Prisma.$playlist_songsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Playlist_songs.
     * @param {playlist_songsDeleteManyArgs} args - Arguments to filter Playlist_songs to delete.
     * @example
     * // Delete a few Playlist_songs
     * const { count } = await prisma.playlist_songs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends playlist_songsDeleteManyArgs>(args?: SelectSubset<T, playlist_songsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Playlist_songs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playlist_songsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Playlist_songs
     * const playlist_songs = await prisma.playlist_songs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends playlist_songsUpdateManyArgs>(args: SelectSubset<T, playlist_songsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Playlist_songs and returns the data updated in the database.
     * @param {playlist_songsUpdateManyAndReturnArgs} args - Arguments to update many Playlist_songs.
     * @example
     * // Update many Playlist_songs
     * const playlist_songs = await prisma.playlist_songs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Playlist_songs and only return the `id`
     * const playlist_songsWithIdOnly = await prisma.playlist_songs.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends playlist_songsUpdateManyAndReturnArgs>(args: SelectSubset<T, playlist_songsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$playlist_songsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Playlist_songs.
     * @param {playlist_songsUpsertArgs} args - Arguments to update or create a Playlist_songs.
     * @example
     * // Update or create a Playlist_songs
     * const playlist_songs = await prisma.playlist_songs.upsert({
     *   create: {
     *     // ... data to create a Playlist_songs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Playlist_songs we want to update
     *   }
     * })
     */
    upsert<T extends playlist_songsUpsertArgs>(args: SelectSubset<T, playlist_songsUpsertArgs<ExtArgs>>): Prisma__playlist_songsClient<$Result.GetResult<Prisma.$playlist_songsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Playlist_songs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playlist_songsCountArgs} args - Arguments to filter Playlist_songs to count.
     * @example
     * // Count the number of Playlist_songs
     * const count = await prisma.playlist_songs.count({
     *   where: {
     *     // ... the filter for the Playlist_songs we want to count
     *   }
     * })
    **/
    count<T extends playlist_songsCountArgs>(
      args?: Subset<T, playlist_songsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Playlist_songsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Playlist_songs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Playlist_songsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Playlist_songsAggregateArgs>(args: Subset<T, Playlist_songsAggregateArgs>): Prisma.PrismaPromise<GetPlaylist_songsAggregateType<T>>

    /**
     * Group by Playlist_songs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playlist_songsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends playlist_songsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: playlist_songsGroupByArgs['orderBy'] }
        : { orderBy?: playlist_songsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, playlist_songsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlaylist_songsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the playlist_songs model
   */
  readonly fields: playlist_songsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for playlist_songs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__playlist_songsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    playlists<T extends playlist_songs$playlistsArgs<ExtArgs> = {}>(args?: Subset<T, playlist_songs$playlistsArgs<ExtArgs>>): Prisma__playlistsClient<$Result.GetResult<Prisma.$playlistsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    songs<T extends playlist_songs$songsArgs<ExtArgs> = {}>(args?: Subset<T, playlist_songs$songsArgs<ExtArgs>>): Prisma__songsClient<$Result.GetResult<Prisma.$songsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the playlist_songs model
   */
  interface playlist_songsFieldRefs {
    readonly id: FieldRef<"playlist_songs", 'Int'>
    readonly playlist_id: FieldRef<"playlist_songs", 'Int'>
    readonly song_id: FieldRef<"playlist_songs", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * playlist_songs findUnique
   */
  export type playlist_songsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlist_songs
     */
    select?: playlist_songsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the playlist_songs
     */
    omit?: playlist_songsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playlist_songsInclude<ExtArgs> | null
    /**
     * Filter, which playlist_songs to fetch.
     */
    where: playlist_songsWhereUniqueInput
  }

  /**
   * playlist_songs findUniqueOrThrow
   */
  export type playlist_songsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlist_songs
     */
    select?: playlist_songsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the playlist_songs
     */
    omit?: playlist_songsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playlist_songsInclude<ExtArgs> | null
    /**
     * Filter, which playlist_songs to fetch.
     */
    where: playlist_songsWhereUniqueInput
  }

  /**
   * playlist_songs findFirst
   */
  export type playlist_songsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlist_songs
     */
    select?: playlist_songsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the playlist_songs
     */
    omit?: playlist_songsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playlist_songsInclude<ExtArgs> | null
    /**
     * Filter, which playlist_songs to fetch.
     */
    where?: playlist_songsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of playlist_songs to fetch.
     */
    orderBy?: playlist_songsOrderByWithRelationInput | playlist_songsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for playlist_songs.
     */
    cursor?: playlist_songsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` playlist_songs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` playlist_songs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of playlist_songs.
     */
    distinct?: Playlist_songsScalarFieldEnum | Playlist_songsScalarFieldEnum[]
  }

  /**
   * playlist_songs findFirstOrThrow
   */
  export type playlist_songsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlist_songs
     */
    select?: playlist_songsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the playlist_songs
     */
    omit?: playlist_songsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playlist_songsInclude<ExtArgs> | null
    /**
     * Filter, which playlist_songs to fetch.
     */
    where?: playlist_songsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of playlist_songs to fetch.
     */
    orderBy?: playlist_songsOrderByWithRelationInput | playlist_songsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for playlist_songs.
     */
    cursor?: playlist_songsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` playlist_songs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` playlist_songs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of playlist_songs.
     */
    distinct?: Playlist_songsScalarFieldEnum | Playlist_songsScalarFieldEnum[]
  }

  /**
   * playlist_songs findMany
   */
  export type playlist_songsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlist_songs
     */
    select?: playlist_songsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the playlist_songs
     */
    omit?: playlist_songsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playlist_songsInclude<ExtArgs> | null
    /**
     * Filter, which playlist_songs to fetch.
     */
    where?: playlist_songsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of playlist_songs to fetch.
     */
    orderBy?: playlist_songsOrderByWithRelationInput | playlist_songsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing playlist_songs.
     */
    cursor?: playlist_songsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` playlist_songs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` playlist_songs.
     */
    skip?: number
    distinct?: Playlist_songsScalarFieldEnum | Playlist_songsScalarFieldEnum[]
  }

  /**
   * playlist_songs create
   */
  export type playlist_songsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlist_songs
     */
    select?: playlist_songsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the playlist_songs
     */
    omit?: playlist_songsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playlist_songsInclude<ExtArgs> | null
    /**
     * The data needed to create a playlist_songs.
     */
    data?: XOR<playlist_songsCreateInput, playlist_songsUncheckedCreateInput>
  }

  /**
   * playlist_songs createMany
   */
  export type playlist_songsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many playlist_songs.
     */
    data: playlist_songsCreateManyInput | playlist_songsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * playlist_songs createManyAndReturn
   */
  export type playlist_songsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlist_songs
     */
    select?: playlist_songsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the playlist_songs
     */
    omit?: playlist_songsOmit<ExtArgs> | null
    /**
     * The data used to create many playlist_songs.
     */
    data: playlist_songsCreateManyInput | playlist_songsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playlist_songsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * playlist_songs update
   */
  export type playlist_songsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlist_songs
     */
    select?: playlist_songsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the playlist_songs
     */
    omit?: playlist_songsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playlist_songsInclude<ExtArgs> | null
    /**
     * The data needed to update a playlist_songs.
     */
    data: XOR<playlist_songsUpdateInput, playlist_songsUncheckedUpdateInput>
    /**
     * Choose, which playlist_songs to update.
     */
    where: playlist_songsWhereUniqueInput
  }

  /**
   * playlist_songs updateMany
   */
  export type playlist_songsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update playlist_songs.
     */
    data: XOR<playlist_songsUpdateManyMutationInput, playlist_songsUncheckedUpdateManyInput>
    /**
     * Filter which playlist_songs to update
     */
    where?: playlist_songsWhereInput
    /**
     * Limit how many playlist_songs to update.
     */
    limit?: number
  }

  /**
   * playlist_songs updateManyAndReturn
   */
  export type playlist_songsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlist_songs
     */
    select?: playlist_songsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the playlist_songs
     */
    omit?: playlist_songsOmit<ExtArgs> | null
    /**
     * The data used to update playlist_songs.
     */
    data: XOR<playlist_songsUpdateManyMutationInput, playlist_songsUncheckedUpdateManyInput>
    /**
     * Filter which playlist_songs to update
     */
    where?: playlist_songsWhereInput
    /**
     * Limit how many playlist_songs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playlist_songsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * playlist_songs upsert
   */
  export type playlist_songsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlist_songs
     */
    select?: playlist_songsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the playlist_songs
     */
    omit?: playlist_songsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playlist_songsInclude<ExtArgs> | null
    /**
     * The filter to search for the playlist_songs to update in case it exists.
     */
    where: playlist_songsWhereUniqueInput
    /**
     * In case the playlist_songs found by the `where` argument doesn't exist, create a new playlist_songs with this data.
     */
    create: XOR<playlist_songsCreateInput, playlist_songsUncheckedCreateInput>
    /**
     * In case the playlist_songs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<playlist_songsUpdateInput, playlist_songsUncheckedUpdateInput>
  }

  /**
   * playlist_songs delete
   */
  export type playlist_songsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlist_songs
     */
    select?: playlist_songsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the playlist_songs
     */
    omit?: playlist_songsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playlist_songsInclude<ExtArgs> | null
    /**
     * Filter which playlist_songs to delete.
     */
    where: playlist_songsWhereUniqueInput
  }

  /**
   * playlist_songs deleteMany
   */
  export type playlist_songsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which playlist_songs to delete
     */
    where?: playlist_songsWhereInput
    /**
     * Limit how many playlist_songs to delete.
     */
    limit?: number
  }

  /**
   * playlist_songs.playlists
   */
  export type playlist_songs$playlistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlists
     */
    select?: playlistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the playlists
     */
    omit?: playlistsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playlistsInclude<ExtArgs> | null
    where?: playlistsWhereInput
  }

  /**
   * playlist_songs.songs
   */
  export type playlist_songs$songsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the songs
     */
    select?: songsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the songs
     */
    omit?: songsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: songsInclude<ExtArgs> | null
    where?: songsWhereInput
  }

  /**
   * playlist_songs without action
   */
  export type playlist_songsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlist_songs
     */
    select?: playlist_songsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the playlist_songs
     */
    omit?: playlist_songsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playlist_songsInclude<ExtArgs> | null
  }


  /**
   * Model playlists
   */

  export type AggregatePlaylists = {
    _count: PlaylistsCountAggregateOutputType | null
    _avg: PlaylistsAvgAggregateOutputType | null
    _sum: PlaylistsSumAggregateOutputType | null
    _min: PlaylistsMinAggregateOutputType | null
    _max: PlaylistsMaxAggregateOutputType | null
  }

  export type PlaylistsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type PlaylistsSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type PlaylistsMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    image_path: string | null
    playlist_name: string | null
    description: string | null
    create_date: Date | null
  }

  export type PlaylistsMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    image_path: string | null
    playlist_name: string | null
    description: string | null
    create_date: Date | null
  }

  export type PlaylistsCountAggregateOutputType = {
    id: number
    user_id: number
    image_path: number
    playlist_name: number
    description: number
    create_date: number
    _all: number
  }


  export type PlaylistsAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type PlaylistsSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type PlaylistsMinAggregateInputType = {
    id?: true
    user_id?: true
    image_path?: true
    playlist_name?: true
    description?: true
    create_date?: true
  }

  export type PlaylistsMaxAggregateInputType = {
    id?: true
    user_id?: true
    image_path?: true
    playlist_name?: true
    description?: true
    create_date?: true
  }

  export type PlaylistsCountAggregateInputType = {
    id?: true
    user_id?: true
    image_path?: true
    playlist_name?: true
    description?: true
    create_date?: true
    _all?: true
  }

  export type PlaylistsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which playlists to aggregate.
     */
    where?: playlistsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of playlists to fetch.
     */
    orderBy?: playlistsOrderByWithRelationInput | playlistsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: playlistsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` playlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned playlists
    **/
    _count?: true | PlaylistsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlaylistsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlaylistsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlaylistsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlaylistsMaxAggregateInputType
  }

  export type GetPlaylistsAggregateType<T extends PlaylistsAggregateArgs> = {
        [P in keyof T & keyof AggregatePlaylists]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlaylists[P]>
      : GetScalarType<T[P], AggregatePlaylists[P]>
  }




  export type playlistsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: playlistsWhereInput
    orderBy?: playlistsOrderByWithAggregationInput | playlistsOrderByWithAggregationInput[]
    by: PlaylistsScalarFieldEnum[] | PlaylistsScalarFieldEnum
    having?: playlistsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlaylistsCountAggregateInputType | true
    _avg?: PlaylistsAvgAggregateInputType
    _sum?: PlaylistsSumAggregateInputType
    _min?: PlaylistsMinAggregateInputType
    _max?: PlaylistsMaxAggregateInputType
  }

  export type PlaylistsGroupByOutputType = {
    id: number
    user_id: number | null
    image_path: string | null
    playlist_name: string | null
    description: string | null
    create_date: Date | null
    _count: PlaylistsCountAggregateOutputType | null
    _avg: PlaylistsAvgAggregateOutputType | null
    _sum: PlaylistsSumAggregateOutputType | null
    _min: PlaylistsMinAggregateOutputType | null
    _max: PlaylistsMaxAggregateOutputType | null
  }

  type GetPlaylistsGroupByPayload<T extends playlistsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlaylistsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlaylistsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlaylistsGroupByOutputType[P]>
            : GetScalarType<T[P], PlaylistsGroupByOutputType[P]>
        }
      >
    >


  export type playlistsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    image_path?: boolean
    playlist_name?: boolean
    description?: boolean
    create_date?: boolean
    playlist_songs?: boolean | playlists$playlist_songsArgs<ExtArgs>
    users?: boolean | playlists$usersArgs<ExtArgs>
    _count?: boolean | PlaylistsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playlists"]>

  export type playlistsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    image_path?: boolean
    playlist_name?: boolean
    description?: boolean
    create_date?: boolean
    users?: boolean | playlists$usersArgs<ExtArgs>
  }, ExtArgs["result"]["playlists"]>

  export type playlistsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    image_path?: boolean
    playlist_name?: boolean
    description?: boolean
    create_date?: boolean
    users?: boolean | playlists$usersArgs<ExtArgs>
  }, ExtArgs["result"]["playlists"]>

  export type playlistsSelectScalar = {
    id?: boolean
    user_id?: boolean
    image_path?: boolean
    playlist_name?: boolean
    description?: boolean
    create_date?: boolean
  }

  export type playlistsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "image_path" | "playlist_name" | "description" | "create_date", ExtArgs["result"]["playlists"]>
  export type playlistsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    playlist_songs?: boolean | playlists$playlist_songsArgs<ExtArgs>
    users?: boolean | playlists$usersArgs<ExtArgs>
    _count?: boolean | PlaylistsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type playlistsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | playlists$usersArgs<ExtArgs>
  }
  export type playlistsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | playlists$usersArgs<ExtArgs>
  }

  export type $playlistsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "playlists"
    objects: {
      playlist_songs: Prisma.$playlist_songsPayload<ExtArgs>[]
      users: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number | null
      image_path: string | null
      playlist_name: string | null
      description: string | null
      create_date: Date | null
    }, ExtArgs["result"]["playlists"]>
    composites: {}
  }

  type playlistsGetPayload<S extends boolean | null | undefined | playlistsDefaultArgs> = $Result.GetResult<Prisma.$playlistsPayload, S>

  type playlistsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<playlistsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlaylistsCountAggregateInputType | true
    }

  export interface playlistsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['playlists'], meta: { name: 'playlists' } }
    /**
     * Find zero or one Playlists that matches the filter.
     * @param {playlistsFindUniqueArgs} args - Arguments to find a Playlists
     * @example
     * // Get one Playlists
     * const playlists = await prisma.playlists.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends playlistsFindUniqueArgs>(args: SelectSubset<T, playlistsFindUniqueArgs<ExtArgs>>): Prisma__playlistsClient<$Result.GetResult<Prisma.$playlistsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Playlists that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {playlistsFindUniqueOrThrowArgs} args - Arguments to find a Playlists
     * @example
     * // Get one Playlists
     * const playlists = await prisma.playlists.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends playlistsFindUniqueOrThrowArgs>(args: SelectSubset<T, playlistsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__playlistsClient<$Result.GetResult<Prisma.$playlistsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Playlists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playlistsFindFirstArgs} args - Arguments to find a Playlists
     * @example
     * // Get one Playlists
     * const playlists = await prisma.playlists.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends playlistsFindFirstArgs>(args?: SelectSubset<T, playlistsFindFirstArgs<ExtArgs>>): Prisma__playlistsClient<$Result.GetResult<Prisma.$playlistsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Playlists that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playlistsFindFirstOrThrowArgs} args - Arguments to find a Playlists
     * @example
     * // Get one Playlists
     * const playlists = await prisma.playlists.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends playlistsFindFirstOrThrowArgs>(args?: SelectSubset<T, playlistsFindFirstOrThrowArgs<ExtArgs>>): Prisma__playlistsClient<$Result.GetResult<Prisma.$playlistsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Playlists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playlistsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Playlists
     * const playlists = await prisma.playlists.findMany()
     * 
     * // Get first 10 Playlists
     * const playlists = await prisma.playlists.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playlistsWithIdOnly = await prisma.playlists.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends playlistsFindManyArgs>(args?: SelectSubset<T, playlistsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$playlistsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Playlists.
     * @param {playlistsCreateArgs} args - Arguments to create a Playlists.
     * @example
     * // Create one Playlists
     * const Playlists = await prisma.playlists.create({
     *   data: {
     *     // ... data to create a Playlists
     *   }
     * })
     * 
     */
    create<T extends playlistsCreateArgs>(args: SelectSubset<T, playlistsCreateArgs<ExtArgs>>): Prisma__playlistsClient<$Result.GetResult<Prisma.$playlistsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Playlists.
     * @param {playlistsCreateManyArgs} args - Arguments to create many Playlists.
     * @example
     * // Create many Playlists
     * const playlists = await prisma.playlists.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends playlistsCreateManyArgs>(args?: SelectSubset<T, playlistsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Playlists and returns the data saved in the database.
     * @param {playlistsCreateManyAndReturnArgs} args - Arguments to create many Playlists.
     * @example
     * // Create many Playlists
     * const playlists = await prisma.playlists.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Playlists and only return the `id`
     * const playlistsWithIdOnly = await prisma.playlists.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends playlistsCreateManyAndReturnArgs>(args?: SelectSubset<T, playlistsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$playlistsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Playlists.
     * @param {playlistsDeleteArgs} args - Arguments to delete one Playlists.
     * @example
     * // Delete one Playlists
     * const Playlists = await prisma.playlists.delete({
     *   where: {
     *     // ... filter to delete one Playlists
     *   }
     * })
     * 
     */
    delete<T extends playlistsDeleteArgs>(args: SelectSubset<T, playlistsDeleteArgs<ExtArgs>>): Prisma__playlistsClient<$Result.GetResult<Prisma.$playlistsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Playlists.
     * @param {playlistsUpdateArgs} args - Arguments to update one Playlists.
     * @example
     * // Update one Playlists
     * const playlists = await prisma.playlists.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends playlistsUpdateArgs>(args: SelectSubset<T, playlistsUpdateArgs<ExtArgs>>): Prisma__playlistsClient<$Result.GetResult<Prisma.$playlistsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Playlists.
     * @param {playlistsDeleteManyArgs} args - Arguments to filter Playlists to delete.
     * @example
     * // Delete a few Playlists
     * const { count } = await prisma.playlists.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends playlistsDeleteManyArgs>(args?: SelectSubset<T, playlistsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Playlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playlistsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Playlists
     * const playlists = await prisma.playlists.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends playlistsUpdateManyArgs>(args: SelectSubset<T, playlistsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Playlists and returns the data updated in the database.
     * @param {playlistsUpdateManyAndReturnArgs} args - Arguments to update many Playlists.
     * @example
     * // Update many Playlists
     * const playlists = await prisma.playlists.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Playlists and only return the `id`
     * const playlistsWithIdOnly = await prisma.playlists.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends playlistsUpdateManyAndReturnArgs>(args: SelectSubset<T, playlistsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$playlistsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Playlists.
     * @param {playlistsUpsertArgs} args - Arguments to update or create a Playlists.
     * @example
     * // Update or create a Playlists
     * const playlists = await prisma.playlists.upsert({
     *   create: {
     *     // ... data to create a Playlists
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Playlists we want to update
     *   }
     * })
     */
    upsert<T extends playlistsUpsertArgs>(args: SelectSubset<T, playlistsUpsertArgs<ExtArgs>>): Prisma__playlistsClient<$Result.GetResult<Prisma.$playlistsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Playlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playlistsCountArgs} args - Arguments to filter Playlists to count.
     * @example
     * // Count the number of Playlists
     * const count = await prisma.playlists.count({
     *   where: {
     *     // ... the filter for the Playlists we want to count
     *   }
     * })
    **/
    count<T extends playlistsCountArgs>(
      args?: Subset<T, playlistsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlaylistsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Playlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlaylistsAggregateArgs>(args: Subset<T, PlaylistsAggregateArgs>): Prisma.PrismaPromise<GetPlaylistsAggregateType<T>>

    /**
     * Group by Playlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playlistsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends playlistsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: playlistsGroupByArgs['orderBy'] }
        : { orderBy?: playlistsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, playlistsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlaylistsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the playlists model
   */
  readonly fields: playlistsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for playlists.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__playlistsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    playlist_songs<T extends playlists$playlist_songsArgs<ExtArgs> = {}>(args?: Subset<T, playlists$playlist_songsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$playlist_songsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends playlists$usersArgs<ExtArgs> = {}>(args?: Subset<T, playlists$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the playlists model
   */
  interface playlistsFieldRefs {
    readonly id: FieldRef<"playlists", 'Int'>
    readonly user_id: FieldRef<"playlists", 'Int'>
    readonly image_path: FieldRef<"playlists", 'String'>
    readonly playlist_name: FieldRef<"playlists", 'String'>
    readonly description: FieldRef<"playlists", 'String'>
    readonly create_date: FieldRef<"playlists", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * playlists findUnique
   */
  export type playlistsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlists
     */
    select?: playlistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the playlists
     */
    omit?: playlistsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playlistsInclude<ExtArgs> | null
    /**
     * Filter, which playlists to fetch.
     */
    where: playlistsWhereUniqueInput
  }

  /**
   * playlists findUniqueOrThrow
   */
  export type playlistsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlists
     */
    select?: playlistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the playlists
     */
    omit?: playlistsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playlistsInclude<ExtArgs> | null
    /**
     * Filter, which playlists to fetch.
     */
    where: playlistsWhereUniqueInput
  }

  /**
   * playlists findFirst
   */
  export type playlistsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlists
     */
    select?: playlistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the playlists
     */
    omit?: playlistsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playlistsInclude<ExtArgs> | null
    /**
     * Filter, which playlists to fetch.
     */
    where?: playlistsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of playlists to fetch.
     */
    orderBy?: playlistsOrderByWithRelationInput | playlistsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for playlists.
     */
    cursor?: playlistsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` playlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of playlists.
     */
    distinct?: PlaylistsScalarFieldEnum | PlaylistsScalarFieldEnum[]
  }

  /**
   * playlists findFirstOrThrow
   */
  export type playlistsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlists
     */
    select?: playlistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the playlists
     */
    omit?: playlistsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playlistsInclude<ExtArgs> | null
    /**
     * Filter, which playlists to fetch.
     */
    where?: playlistsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of playlists to fetch.
     */
    orderBy?: playlistsOrderByWithRelationInput | playlistsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for playlists.
     */
    cursor?: playlistsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` playlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of playlists.
     */
    distinct?: PlaylistsScalarFieldEnum | PlaylistsScalarFieldEnum[]
  }

  /**
   * playlists findMany
   */
  export type playlistsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlists
     */
    select?: playlistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the playlists
     */
    omit?: playlistsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playlistsInclude<ExtArgs> | null
    /**
     * Filter, which playlists to fetch.
     */
    where?: playlistsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of playlists to fetch.
     */
    orderBy?: playlistsOrderByWithRelationInput | playlistsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing playlists.
     */
    cursor?: playlistsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` playlists.
     */
    skip?: number
    distinct?: PlaylistsScalarFieldEnum | PlaylistsScalarFieldEnum[]
  }

  /**
   * playlists create
   */
  export type playlistsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlists
     */
    select?: playlistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the playlists
     */
    omit?: playlistsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playlistsInclude<ExtArgs> | null
    /**
     * The data needed to create a playlists.
     */
    data?: XOR<playlistsCreateInput, playlistsUncheckedCreateInput>
  }

  /**
   * playlists createMany
   */
  export type playlistsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many playlists.
     */
    data: playlistsCreateManyInput | playlistsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * playlists createManyAndReturn
   */
  export type playlistsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlists
     */
    select?: playlistsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the playlists
     */
    omit?: playlistsOmit<ExtArgs> | null
    /**
     * The data used to create many playlists.
     */
    data: playlistsCreateManyInput | playlistsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playlistsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * playlists update
   */
  export type playlistsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlists
     */
    select?: playlistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the playlists
     */
    omit?: playlistsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playlistsInclude<ExtArgs> | null
    /**
     * The data needed to update a playlists.
     */
    data: XOR<playlistsUpdateInput, playlistsUncheckedUpdateInput>
    /**
     * Choose, which playlists to update.
     */
    where: playlistsWhereUniqueInput
  }

  /**
   * playlists updateMany
   */
  export type playlistsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update playlists.
     */
    data: XOR<playlistsUpdateManyMutationInput, playlistsUncheckedUpdateManyInput>
    /**
     * Filter which playlists to update
     */
    where?: playlistsWhereInput
    /**
     * Limit how many playlists to update.
     */
    limit?: number
  }

  /**
   * playlists updateManyAndReturn
   */
  export type playlistsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlists
     */
    select?: playlistsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the playlists
     */
    omit?: playlistsOmit<ExtArgs> | null
    /**
     * The data used to update playlists.
     */
    data: XOR<playlistsUpdateManyMutationInput, playlistsUncheckedUpdateManyInput>
    /**
     * Filter which playlists to update
     */
    where?: playlistsWhereInput
    /**
     * Limit how many playlists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playlistsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * playlists upsert
   */
  export type playlistsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlists
     */
    select?: playlistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the playlists
     */
    omit?: playlistsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playlistsInclude<ExtArgs> | null
    /**
     * The filter to search for the playlists to update in case it exists.
     */
    where: playlistsWhereUniqueInput
    /**
     * In case the playlists found by the `where` argument doesn't exist, create a new playlists with this data.
     */
    create: XOR<playlistsCreateInput, playlistsUncheckedCreateInput>
    /**
     * In case the playlists was found with the provided `where` argument, update it with this data.
     */
    update: XOR<playlistsUpdateInput, playlistsUncheckedUpdateInput>
  }

  /**
   * playlists delete
   */
  export type playlistsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlists
     */
    select?: playlistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the playlists
     */
    omit?: playlistsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playlistsInclude<ExtArgs> | null
    /**
     * Filter which playlists to delete.
     */
    where: playlistsWhereUniqueInput
  }

  /**
   * playlists deleteMany
   */
  export type playlistsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which playlists to delete
     */
    where?: playlistsWhereInput
    /**
     * Limit how many playlists to delete.
     */
    limit?: number
  }

  /**
   * playlists.playlist_songs
   */
  export type playlists$playlist_songsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlist_songs
     */
    select?: playlist_songsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the playlist_songs
     */
    omit?: playlist_songsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playlist_songsInclude<ExtArgs> | null
    where?: playlist_songsWhereInput
    orderBy?: playlist_songsOrderByWithRelationInput | playlist_songsOrderByWithRelationInput[]
    cursor?: playlist_songsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Playlist_songsScalarFieldEnum | Playlist_songsScalarFieldEnum[]
  }

  /**
   * playlists.users
   */
  export type playlists$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * playlists without action
   */
  export type playlistsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlists
     */
    select?: playlistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the playlists
     */
    omit?: playlistsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playlistsInclude<ExtArgs> | null
  }


  /**
   * Model songs
   */

  export type AggregateSongs = {
    _count: SongsCountAggregateOutputType | null
    _avg: SongsAvgAggregateOutputType | null
    _sum: SongsSumAggregateOutputType | null
    _min: SongsMinAggregateOutputType | null
    _max: SongsMaxAggregateOutputType | null
  }

  export type SongsAvgAggregateOutputType = {
    song_id: number | null
    user_id: number | null
    genre_id: number | null
    viewer: number | null
    discuss_quality: number | null
  }

  export type SongsSumAggregateOutputType = {
    song_id: number | null
    user_id: number | null
    genre_id: number | null
    viewer: number | null
    discuss_quality: number | null
  }

  export type SongsMinAggregateOutputType = {
    song_id: number | null
    user_id: number | null
    genre_id: number | null
    song_name: string | null
    viewer: number | null
    duration: string | null
    popular: boolean | null
    description: string | null
    song_image: string | null
    public_date: Date | null
    file_path: string | null
    discuss_quality: number | null
  }

  export type SongsMaxAggregateOutputType = {
    song_id: number | null
    user_id: number | null
    genre_id: number | null
    song_name: string | null
    viewer: number | null
    duration: string | null
    popular: boolean | null
    description: string | null
    song_image: string | null
    public_date: Date | null
    file_path: string | null
    discuss_quality: number | null
  }

  export type SongsCountAggregateOutputType = {
    song_id: number
    user_id: number
    genre_id: number
    song_name: number
    viewer: number
    duration: number
    popular: number
    description: number
    song_image: number
    public_date: number
    file_path: number
    discuss_quality: number
    _all: number
  }


  export type SongsAvgAggregateInputType = {
    song_id?: true
    user_id?: true
    genre_id?: true
    viewer?: true
    discuss_quality?: true
  }

  export type SongsSumAggregateInputType = {
    song_id?: true
    user_id?: true
    genre_id?: true
    viewer?: true
    discuss_quality?: true
  }

  export type SongsMinAggregateInputType = {
    song_id?: true
    user_id?: true
    genre_id?: true
    song_name?: true
    viewer?: true
    duration?: true
    popular?: true
    description?: true
    song_image?: true
    public_date?: true
    file_path?: true
    discuss_quality?: true
  }

  export type SongsMaxAggregateInputType = {
    song_id?: true
    user_id?: true
    genre_id?: true
    song_name?: true
    viewer?: true
    duration?: true
    popular?: true
    description?: true
    song_image?: true
    public_date?: true
    file_path?: true
    discuss_quality?: true
  }

  export type SongsCountAggregateInputType = {
    song_id?: true
    user_id?: true
    genre_id?: true
    song_name?: true
    viewer?: true
    duration?: true
    popular?: true
    description?: true
    song_image?: true
    public_date?: true
    file_path?: true
    discuss_quality?: true
    _all?: true
  }

  export type SongsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which songs to aggregate.
     */
    where?: songsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of songs to fetch.
     */
    orderBy?: songsOrderByWithRelationInput | songsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: songsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` songs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` songs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned songs
    **/
    _count?: true | SongsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SongsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SongsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SongsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SongsMaxAggregateInputType
  }

  export type GetSongsAggregateType<T extends SongsAggregateArgs> = {
        [P in keyof T & keyof AggregateSongs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSongs[P]>
      : GetScalarType<T[P], AggregateSongs[P]>
  }




  export type songsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: songsWhereInput
    orderBy?: songsOrderByWithAggregationInput | songsOrderByWithAggregationInput[]
    by: SongsScalarFieldEnum[] | SongsScalarFieldEnum
    having?: songsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SongsCountAggregateInputType | true
    _avg?: SongsAvgAggregateInputType
    _sum?: SongsSumAggregateInputType
    _min?: SongsMinAggregateInputType
    _max?: SongsMaxAggregateInputType
  }

  export type SongsGroupByOutputType = {
    song_id: number
    user_id: number | null
    genre_id: number | null
    song_name: string
    viewer: number | null
    duration: string | null
    popular: boolean | null
    description: string | null
    song_image: string | null
    public_date: Date | null
    file_path: string | null
    discuss_quality: number | null
    _count: SongsCountAggregateOutputType | null
    _avg: SongsAvgAggregateOutputType | null
    _sum: SongsSumAggregateOutputType | null
    _min: SongsMinAggregateOutputType | null
    _max: SongsMaxAggregateOutputType | null
  }

  type GetSongsGroupByPayload<T extends songsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SongsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SongsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SongsGroupByOutputType[P]>
            : GetScalarType<T[P], SongsGroupByOutputType[P]>
        }
      >
    >


  export type songsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    song_id?: boolean
    user_id?: boolean
    genre_id?: boolean
    song_name?: boolean
    viewer?: boolean
    duration?: boolean
    popular?: boolean
    description?: boolean
    song_image?: boolean
    public_date?: boolean
    file_path?: boolean
    discuss_quality?: boolean
    comments?: boolean | songs$commentsArgs<ExtArgs>
    playlist_songs?: boolean | songs$playlist_songsArgs<ExtArgs>
    genres?: boolean | songs$genresArgs<ExtArgs>
    users?: boolean | songs$usersArgs<ExtArgs>
    _count?: boolean | SongsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["songs"]>

  export type songsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    song_id?: boolean
    user_id?: boolean
    genre_id?: boolean
    song_name?: boolean
    viewer?: boolean
    duration?: boolean
    popular?: boolean
    description?: boolean
    song_image?: boolean
    public_date?: boolean
    file_path?: boolean
    discuss_quality?: boolean
    genres?: boolean | songs$genresArgs<ExtArgs>
    users?: boolean | songs$usersArgs<ExtArgs>
  }, ExtArgs["result"]["songs"]>

  export type songsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    song_id?: boolean
    user_id?: boolean
    genre_id?: boolean
    song_name?: boolean
    viewer?: boolean
    duration?: boolean
    popular?: boolean
    description?: boolean
    song_image?: boolean
    public_date?: boolean
    file_path?: boolean
    discuss_quality?: boolean
    genres?: boolean | songs$genresArgs<ExtArgs>
    users?: boolean | songs$usersArgs<ExtArgs>
  }, ExtArgs["result"]["songs"]>

  export type songsSelectScalar = {
    song_id?: boolean
    user_id?: boolean
    genre_id?: boolean
    song_name?: boolean
    viewer?: boolean
    duration?: boolean
    popular?: boolean
    description?: boolean
    song_image?: boolean
    public_date?: boolean
    file_path?: boolean
    discuss_quality?: boolean
  }

  export type songsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"song_id" | "user_id" | "genre_id" | "song_name" | "viewer" | "duration" | "popular" | "description" | "song_image" | "public_date" | "file_path" | "discuss_quality", ExtArgs["result"]["songs"]>
  export type songsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | songs$commentsArgs<ExtArgs>
    playlist_songs?: boolean | songs$playlist_songsArgs<ExtArgs>
    genres?: boolean | songs$genresArgs<ExtArgs>
    users?: boolean | songs$usersArgs<ExtArgs>
    _count?: boolean | SongsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type songsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    genres?: boolean | songs$genresArgs<ExtArgs>
    users?: boolean | songs$usersArgs<ExtArgs>
  }
  export type songsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    genres?: boolean | songs$genresArgs<ExtArgs>
    users?: boolean | songs$usersArgs<ExtArgs>
  }

  export type $songsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "songs"
    objects: {
      comments: Prisma.$commentsPayload<ExtArgs>[]
      playlist_songs: Prisma.$playlist_songsPayload<ExtArgs>[]
      genres: Prisma.$genresPayload<ExtArgs> | null
      users: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      song_id: number
      user_id: number | null
      genre_id: number | null
      song_name: string
      viewer: number | null
      duration: string | null
      popular: boolean | null
      description: string | null
      song_image: string | null
      public_date: Date | null
      file_path: string | null
      discuss_quality: number | null
    }, ExtArgs["result"]["songs"]>
    composites: {}
  }

  type songsGetPayload<S extends boolean | null | undefined | songsDefaultArgs> = $Result.GetResult<Prisma.$songsPayload, S>

  type songsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<songsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SongsCountAggregateInputType | true
    }

  export interface songsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['songs'], meta: { name: 'songs' } }
    /**
     * Find zero or one Songs that matches the filter.
     * @param {songsFindUniqueArgs} args - Arguments to find a Songs
     * @example
     * // Get one Songs
     * const songs = await prisma.songs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends songsFindUniqueArgs>(args: SelectSubset<T, songsFindUniqueArgs<ExtArgs>>): Prisma__songsClient<$Result.GetResult<Prisma.$songsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Songs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {songsFindUniqueOrThrowArgs} args - Arguments to find a Songs
     * @example
     * // Get one Songs
     * const songs = await prisma.songs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends songsFindUniqueOrThrowArgs>(args: SelectSubset<T, songsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__songsClient<$Result.GetResult<Prisma.$songsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Songs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {songsFindFirstArgs} args - Arguments to find a Songs
     * @example
     * // Get one Songs
     * const songs = await prisma.songs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends songsFindFirstArgs>(args?: SelectSubset<T, songsFindFirstArgs<ExtArgs>>): Prisma__songsClient<$Result.GetResult<Prisma.$songsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Songs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {songsFindFirstOrThrowArgs} args - Arguments to find a Songs
     * @example
     * // Get one Songs
     * const songs = await prisma.songs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends songsFindFirstOrThrowArgs>(args?: SelectSubset<T, songsFindFirstOrThrowArgs<ExtArgs>>): Prisma__songsClient<$Result.GetResult<Prisma.$songsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Songs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {songsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Songs
     * const songs = await prisma.songs.findMany()
     * 
     * // Get first 10 Songs
     * const songs = await prisma.songs.findMany({ take: 10 })
     * 
     * // Only select the `song_id`
     * const songsWithSong_idOnly = await prisma.songs.findMany({ select: { song_id: true } })
     * 
     */
    findMany<T extends songsFindManyArgs>(args?: SelectSubset<T, songsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$songsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Songs.
     * @param {songsCreateArgs} args - Arguments to create a Songs.
     * @example
     * // Create one Songs
     * const Songs = await prisma.songs.create({
     *   data: {
     *     // ... data to create a Songs
     *   }
     * })
     * 
     */
    create<T extends songsCreateArgs>(args: SelectSubset<T, songsCreateArgs<ExtArgs>>): Prisma__songsClient<$Result.GetResult<Prisma.$songsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Songs.
     * @param {songsCreateManyArgs} args - Arguments to create many Songs.
     * @example
     * // Create many Songs
     * const songs = await prisma.songs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends songsCreateManyArgs>(args?: SelectSubset<T, songsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Songs and returns the data saved in the database.
     * @param {songsCreateManyAndReturnArgs} args - Arguments to create many Songs.
     * @example
     * // Create many Songs
     * const songs = await prisma.songs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Songs and only return the `song_id`
     * const songsWithSong_idOnly = await prisma.songs.createManyAndReturn({
     *   select: { song_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends songsCreateManyAndReturnArgs>(args?: SelectSubset<T, songsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$songsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Songs.
     * @param {songsDeleteArgs} args - Arguments to delete one Songs.
     * @example
     * // Delete one Songs
     * const Songs = await prisma.songs.delete({
     *   where: {
     *     // ... filter to delete one Songs
     *   }
     * })
     * 
     */
    delete<T extends songsDeleteArgs>(args: SelectSubset<T, songsDeleteArgs<ExtArgs>>): Prisma__songsClient<$Result.GetResult<Prisma.$songsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Songs.
     * @param {songsUpdateArgs} args - Arguments to update one Songs.
     * @example
     * // Update one Songs
     * const songs = await prisma.songs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends songsUpdateArgs>(args: SelectSubset<T, songsUpdateArgs<ExtArgs>>): Prisma__songsClient<$Result.GetResult<Prisma.$songsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Songs.
     * @param {songsDeleteManyArgs} args - Arguments to filter Songs to delete.
     * @example
     * // Delete a few Songs
     * const { count } = await prisma.songs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends songsDeleteManyArgs>(args?: SelectSubset<T, songsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Songs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {songsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Songs
     * const songs = await prisma.songs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends songsUpdateManyArgs>(args: SelectSubset<T, songsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Songs and returns the data updated in the database.
     * @param {songsUpdateManyAndReturnArgs} args - Arguments to update many Songs.
     * @example
     * // Update many Songs
     * const songs = await prisma.songs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Songs and only return the `song_id`
     * const songsWithSong_idOnly = await prisma.songs.updateManyAndReturn({
     *   select: { song_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends songsUpdateManyAndReturnArgs>(args: SelectSubset<T, songsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$songsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Songs.
     * @param {songsUpsertArgs} args - Arguments to update or create a Songs.
     * @example
     * // Update or create a Songs
     * const songs = await prisma.songs.upsert({
     *   create: {
     *     // ... data to create a Songs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Songs we want to update
     *   }
     * })
     */
    upsert<T extends songsUpsertArgs>(args: SelectSubset<T, songsUpsertArgs<ExtArgs>>): Prisma__songsClient<$Result.GetResult<Prisma.$songsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Songs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {songsCountArgs} args - Arguments to filter Songs to count.
     * @example
     * // Count the number of Songs
     * const count = await prisma.songs.count({
     *   where: {
     *     // ... the filter for the Songs we want to count
     *   }
     * })
    **/
    count<T extends songsCountArgs>(
      args?: Subset<T, songsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SongsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Songs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SongsAggregateArgs>(args: Subset<T, SongsAggregateArgs>): Prisma.PrismaPromise<GetSongsAggregateType<T>>

    /**
     * Group by Songs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {songsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends songsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: songsGroupByArgs['orderBy'] }
        : { orderBy?: songsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, songsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSongsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the songs model
   */
  readonly fields: songsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for songs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__songsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    comments<T extends songs$commentsArgs<ExtArgs> = {}>(args?: Subset<T, songs$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    playlist_songs<T extends songs$playlist_songsArgs<ExtArgs> = {}>(args?: Subset<T, songs$playlist_songsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$playlist_songsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    genres<T extends songs$genresArgs<ExtArgs> = {}>(args?: Subset<T, songs$genresArgs<ExtArgs>>): Prisma__genresClient<$Result.GetResult<Prisma.$genresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    users<T extends songs$usersArgs<ExtArgs> = {}>(args?: Subset<T, songs$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the songs model
   */
  interface songsFieldRefs {
    readonly song_id: FieldRef<"songs", 'Int'>
    readonly user_id: FieldRef<"songs", 'Int'>
    readonly genre_id: FieldRef<"songs", 'Int'>
    readonly song_name: FieldRef<"songs", 'String'>
    readonly viewer: FieldRef<"songs", 'Int'>
    readonly duration: FieldRef<"songs", 'String'>
    readonly popular: FieldRef<"songs", 'Boolean'>
    readonly description: FieldRef<"songs", 'String'>
    readonly song_image: FieldRef<"songs", 'String'>
    readonly public_date: FieldRef<"songs", 'DateTime'>
    readonly file_path: FieldRef<"songs", 'String'>
    readonly discuss_quality: FieldRef<"songs", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * songs findUnique
   */
  export type songsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the songs
     */
    select?: songsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the songs
     */
    omit?: songsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: songsInclude<ExtArgs> | null
    /**
     * Filter, which songs to fetch.
     */
    where: songsWhereUniqueInput
  }

  /**
   * songs findUniqueOrThrow
   */
  export type songsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the songs
     */
    select?: songsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the songs
     */
    omit?: songsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: songsInclude<ExtArgs> | null
    /**
     * Filter, which songs to fetch.
     */
    where: songsWhereUniqueInput
  }

  /**
   * songs findFirst
   */
  export type songsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the songs
     */
    select?: songsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the songs
     */
    omit?: songsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: songsInclude<ExtArgs> | null
    /**
     * Filter, which songs to fetch.
     */
    where?: songsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of songs to fetch.
     */
    orderBy?: songsOrderByWithRelationInput | songsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for songs.
     */
    cursor?: songsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` songs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` songs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of songs.
     */
    distinct?: SongsScalarFieldEnum | SongsScalarFieldEnum[]
  }

  /**
   * songs findFirstOrThrow
   */
  export type songsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the songs
     */
    select?: songsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the songs
     */
    omit?: songsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: songsInclude<ExtArgs> | null
    /**
     * Filter, which songs to fetch.
     */
    where?: songsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of songs to fetch.
     */
    orderBy?: songsOrderByWithRelationInput | songsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for songs.
     */
    cursor?: songsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` songs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` songs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of songs.
     */
    distinct?: SongsScalarFieldEnum | SongsScalarFieldEnum[]
  }

  /**
   * songs findMany
   */
  export type songsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the songs
     */
    select?: songsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the songs
     */
    omit?: songsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: songsInclude<ExtArgs> | null
    /**
     * Filter, which songs to fetch.
     */
    where?: songsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of songs to fetch.
     */
    orderBy?: songsOrderByWithRelationInput | songsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing songs.
     */
    cursor?: songsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` songs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` songs.
     */
    skip?: number
    distinct?: SongsScalarFieldEnum | SongsScalarFieldEnum[]
  }

  /**
   * songs create
   */
  export type songsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the songs
     */
    select?: songsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the songs
     */
    omit?: songsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: songsInclude<ExtArgs> | null
    /**
     * The data needed to create a songs.
     */
    data: XOR<songsCreateInput, songsUncheckedCreateInput>
  }

  /**
   * songs createMany
   */
  export type songsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many songs.
     */
    data: songsCreateManyInput | songsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * songs createManyAndReturn
   */
  export type songsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the songs
     */
    select?: songsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the songs
     */
    omit?: songsOmit<ExtArgs> | null
    /**
     * The data used to create many songs.
     */
    data: songsCreateManyInput | songsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: songsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * songs update
   */
  export type songsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the songs
     */
    select?: songsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the songs
     */
    omit?: songsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: songsInclude<ExtArgs> | null
    /**
     * The data needed to update a songs.
     */
    data: XOR<songsUpdateInput, songsUncheckedUpdateInput>
    /**
     * Choose, which songs to update.
     */
    where: songsWhereUniqueInput
  }

  /**
   * songs updateMany
   */
  export type songsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update songs.
     */
    data: XOR<songsUpdateManyMutationInput, songsUncheckedUpdateManyInput>
    /**
     * Filter which songs to update
     */
    where?: songsWhereInput
    /**
     * Limit how many songs to update.
     */
    limit?: number
  }

  /**
   * songs updateManyAndReturn
   */
  export type songsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the songs
     */
    select?: songsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the songs
     */
    omit?: songsOmit<ExtArgs> | null
    /**
     * The data used to update songs.
     */
    data: XOR<songsUpdateManyMutationInput, songsUncheckedUpdateManyInput>
    /**
     * Filter which songs to update
     */
    where?: songsWhereInput
    /**
     * Limit how many songs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: songsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * songs upsert
   */
  export type songsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the songs
     */
    select?: songsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the songs
     */
    omit?: songsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: songsInclude<ExtArgs> | null
    /**
     * The filter to search for the songs to update in case it exists.
     */
    where: songsWhereUniqueInput
    /**
     * In case the songs found by the `where` argument doesn't exist, create a new songs with this data.
     */
    create: XOR<songsCreateInput, songsUncheckedCreateInput>
    /**
     * In case the songs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<songsUpdateInput, songsUncheckedUpdateInput>
  }

  /**
   * songs delete
   */
  export type songsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the songs
     */
    select?: songsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the songs
     */
    omit?: songsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: songsInclude<ExtArgs> | null
    /**
     * Filter which songs to delete.
     */
    where: songsWhereUniqueInput
  }

  /**
   * songs deleteMany
   */
  export type songsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which songs to delete
     */
    where?: songsWhereInput
    /**
     * Limit how many songs to delete.
     */
    limit?: number
  }

  /**
   * songs.comments
   */
  export type songs$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    where?: commentsWhereInput
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    cursor?: commentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * songs.playlist_songs
   */
  export type songs$playlist_songsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlist_songs
     */
    select?: playlist_songsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the playlist_songs
     */
    omit?: playlist_songsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playlist_songsInclude<ExtArgs> | null
    where?: playlist_songsWhereInput
    orderBy?: playlist_songsOrderByWithRelationInput | playlist_songsOrderByWithRelationInput[]
    cursor?: playlist_songsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Playlist_songsScalarFieldEnum | Playlist_songsScalarFieldEnum[]
  }

  /**
   * songs.genres
   */
  export type songs$genresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genres
     */
    omit?: genresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genresInclude<ExtArgs> | null
    where?: genresWhereInput
  }

  /**
   * songs.users
   */
  export type songs$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * songs without action
   */
  export type songsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the songs
     */
    select?: songsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the songs
     */
    omit?: songsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: songsInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    user_id: number | null
  }

  export type UsersSumAggregateOutputType = {
    user_id: number | null
  }

  export type UsersMinAggregateOutputType = {
    user_id: number | null
    account: string | null
    name: string | null
    nationality: string | null
    chanal_name: string | null
    avatar: string | null
    desciption: string | null
    refresh_token: string | null
    password: string | null
    banner: string | null
    role: $Enums.user_role | null
  }

  export type UsersMaxAggregateOutputType = {
    user_id: number | null
    account: string | null
    name: string | null
    nationality: string | null
    chanal_name: string | null
    avatar: string | null
    desciption: string | null
    refresh_token: string | null
    password: string | null
    banner: string | null
    role: $Enums.user_role | null
  }

  export type UsersCountAggregateOutputType = {
    user_id: number
    account: number
    name: number
    nationality: number
    chanal_name: number
    avatar: number
    desciption: number
    refresh_token: number
    password: number
    banner: number
    role: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    user_id?: true
  }

  export type UsersSumAggregateInputType = {
    user_id?: true
  }

  export type UsersMinAggregateInputType = {
    user_id?: true
    account?: true
    name?: true
    nationality?: true
    chanal_name?: true
    avatar?: true
    desciption?: true
    refresh_token?: true
    password?: true
    banner?: true
    role?: true
  }

  export type UsersMaxAggregateInputType = {
    user_id?: true
    account?: true
    name?: true
    nationality?: true
    chanal_name?: true
    avatar?: true
    desciption?: true
    refresh_token?: true
    password?: true
    banner?: true
    role?: true
  }

  export type UsersCountAggregateInputType = {
    user_id?: true
    account?: true
    name?: true
    nationality?: true
    chanal_name?: true
    avatar?: true
    desciption?: true
    refresh_token?: true
    password?: true
    banner?: true
    role?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    user_id: number
    account: string
    name: string
    nationality: string | null
    chanal_name: string | null
    avatar: string | null
    desciption: string | null
    refresh_token: string | null
    password: string
    banner: string | null
    role: $Enums.user_role
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    account?: boolean
    name?: boolean
    nationality?: boolean
    chanal_name?: boolean
    avatar?: boolean
    desciption?: boolean
    refresh_token?: boolean
    password?: boolean
    banner?: boolean
    role?: boolean
    comments?: boolean | users$commentsArgs<ExtArgs>
    list_friends_list_friends_friend_idTousers?: boolean | users$list_friends_list_friends_friend_idTousersArgs<ExtArgs>
    list_friends_list_friends_user_idTousers?: boolean | users$list_friends_list_friends_user_idTousersArgs<ExtArgs>
    messages?: boolean | users$messagesArgs<ExtArgs>
    playlists?: boolean | users$playlistsArgs<ExtArgs>
    songs?: boolean | users$songsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    account?: boolean
    name?: boolean
    nationality?: boolean
    chanal_name?: boolean
    avatar?: boolean
    desciption?: boolean
    refresh_token?: boolean
    password?: boolean
    banner?: boolean
    role?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    account?: boolean
    name?: boolean
    nationality?: boolean
    chanal_name?: boolean
    avatar?: boolean
    desciption?: boolean
    refresh_token?: boolean
    password?: boolean
    banner?: boolean
    role?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    user_id?: boolean
    account?: boolean
    name?: boolean
    nationality?: boolean
    chanal_name?: boolean
    avatar?: boolean
    desciption?: boolean
    refresh_token?: boolean
    password?: boolean
    banner?: boolean
    role?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "account" | "name" | "nationality" | "chanal_name" | "avatar" | "desciption" | "refresh_token" | "password" | "banner" | "role", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | users$commentsArgs<ExtArgs>
    list_friends_list_friends_friend_idTousers?: boolean | users$list_friends_list_friends_friend_idTousersArgs<ExtArgs>
    list_friends_list_friends_user_idTousers?: boolean | users$list_friends_list_friends_user_idTousersArgs<ExtArgs>
    messages?: boolean | users$messagesArgs<ExtArgs>
    playlists?: boolean | users$playlistsArgs<ExtArgs>
    songs?: boolean | users$songsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      comments: Prisma.$commentsPayload<ExtArgs>[]
      list_friends_list_friends_friend_idTousers: Prisma.$list_friendsPayload<ExtArgs>[]
      list_friends_list_friends_user_idTousers: Prisma.$list_friendsPayload<ExtArgs>[]
      messages: Prisma.$messagesPayload<ExtArgs>[]
      playlists: Prisma.$playlistsPayload<ExtArgs>[]
      songs: Prisma.$songsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      account: string
      name: string
      nationality: string | null
      chanal_name: string | null
      avatar: string | null
      desciption: string | null
      refresh_token: string | null
      password: string
      banner: string | null
      role: $Enums.user_role
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const usersWithUser_idOnly = await prisma.users.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `user_id`
     * const usersWithUser_idOnly = await prisma.users.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `user_id`
     * const usersWithUser_idOnly = await prisma.users.updateManyAndReturn({
     *   select: { user_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    comments<T extends users$commentsArgs<ExtArgs> = {}>(args?: Subset<T, users$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    list_friends_list_friends_friend_idTousers<T extends users$list_friends_list_friends_friend_idTousersArgs<ExtArgs> = {}>(args?: Subset<T, users$list_friends_list_friends_friend_idTousersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$list_friendsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    list_friends_list_friends_user_idTousers<T extends users$list_friends_list_friends_user_idTousersArgs<ExtArgs> = {}>(args?: Subset<T, users$list_friends_list_friends_user_idTousersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$list_friendsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messages<T extends users$messagesArgs<ExtArgs> = {}>(args?: Subset<T, users$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    playlists<T extends users$playlistsArgs<ExtArgs> = {}>(args?: Subset<T, users$playlistsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$playlistsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    songs<T extends users$songsArgs<ExtArgs> = {}>(args?: Subset<T, users$songsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$songsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly user_id: FieldRef<"users", 'Int'>
    readonly account: FieldRef<"users", 'String'>
    readonly name: FieldRef<"users", 'String'>
    readonly nationality: FieldRef<"users", 'String'>
    readonly chanal_name: FieldRef<"users", 'String'>
    readonly avatar: FieldRef<"users", 'String'>
    readonly desciption: FieldRef<"users", 'String'>
    readonly refresh_token: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly banner: FieldRef<"users", 'String'>
    readonly role: FieldRef<"users", 'user_role'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.comments
   */
  export type users$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    where?: commentsWhereInput
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    cursor?: commentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * users.list_friends_list_friends_friend_idTousers
   */
  export type users$list_friends_list_friends_friend_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the list_friends
     */
    select?: list_friendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the list_friends
     */
    omit?: list_friendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: list_friendsInclude<ExtArgs> | null
    where?: list_friendsWhereInput
    orderBy?: list_friendsOrderByWithRelationInput | list_friendsOrderByWithRelationInput[]
    cursor?: list_friendsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: List_friendsScalarFieldEnum | List_friendsScalarFieldEnum[]
  }

  /**
   * users.list_friends_list_friends_user_idTousers
   */
  export type users$list_friends_list_friends_user_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the list_friends
     */
    select?: list_friendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the list_friends
     */
    omit?: list_friendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: list_friendsInclude<ExtArgs> | null
    where?: list_friendsWhereInput
    orderBy?: list_friendsOrderByWithRelationInput | list_friendsOrderByWithRelationInput[]
    cursor?: list_friendsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: List_friendsScalarFieldEnum | List_friendsScalarFieldEnum[]
  }

  /**
   * users.messages
   */
  export type users$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    where?: messagesWhereInput
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    cursor?: messagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * users.playlists
   */
  export type users$playlistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlists
     */
    select?: playlistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the playlists
     */
    omit?: playlistsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playlistsInclude<ExtArgs> | null
    where?: playlistsWhereInput
    orderBy?: playlistsOrderByWithRelationInput | playlistsOrderByWithRelationInput[]
    cursor?: playlistsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlaylistsScalarFieldEnum | PlaylistsScalarFieldEnum[]
  }

  /**
   * users.songs
   */
  export type users$songsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the songs
     */
    select?: songsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the songs
     */
    omit?: songsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: songsInclude<ExtArgs> | null
    where?: songsWhereInput
    orderBy?: songsOrderByWithRelationInput | songsOrderByWithRelationInput[]
    cursor?: songsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SongsScalarFieldEnum | SongsScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CommentsScalarFieldEnum: {
    discuss_id: 'discuss_id',
    user_id: 'user_id',
    song_id: 'song_id',
    content: 'content',
    discuss_date: 'discuss_date',
    replay_discuss_id: 'replay_discuss_id'
  };

  export type CommentsScalarFieldEnum = (typeof CommentsScalarFieldEnum)[keyof typeof CommentsScalarFieldEnum]


  export const GenresScalarFieldEnum: {
    genre_id: 'genre_id',
    name_genre: 'name_genre',
    create_time: 'create_time'
  };

  export type GenresScalarFieldEnum = (typeof GenresScalarFieldEnum)[keyof typeof GenresScalarFieldEnum]


  export const List_friendsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    friend_id: 'friend_id',
    room_chat: 'room_chat'
  };

  export type List_friendsScalarFieldEnum = (typeof List_friendsScalarFieldEnum)[keyof typeof List_friendsScalarFieldEnum]


  export const MessagesScalarFieldEnum: {
    id: 'id',
    id_sender: 'id_sender',
    content_mess: 'content_mess',
    time_send: 'time_send',
    room_chat: 'room_chat'
  };

  export type MessagesScalarFieldEnum = (typeof MessagesScalarFieldEnum)[keyof typeof MessagesScalarFieldEnum]


  export const Playlist_songsScalarFieldEnum: {
    id: 'id',
    playlist_id: 'playlist_id',
    song_id: 'song_id'
  };

  export type Playlist_songsScalarFieldEnum = (typeof Playlist_songsScalarFieldEnum)[keyof typeof Playlist_songsScalarFieldEnum]


  export const PlaylistsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    image_path: 'image_path',
    playlist_name: 'playlist_name',
    description: 'description',
    create_date: 'create_date'
  };

  export type PlaylistsScalarFieldEnum = (typeof PlaylistsScalarFieldEnum)[keyof typeof PlaylistsScalarFieldEnum]


  export const SongsScalarFieldEnum: {
    song_id: 'song_id',
    user_id: 'user_id',
    genre_id: 'genre_id',
    song_name: 'song_name',
    viewer: 'viewer',
    duration: 'duration',
    popular: 'popular',
    description: 'description',
    song_image: 'song_image',
    public_date: 'public_date',
    file_path: 'file_path',
    discuss_quality: 'discuss_quality'
  };

  export type SongsScalarFieldEnum = (typeof SongsScalarFieldEnum)[keyof typeof SongsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    user_id: 'user_id',
    account: 'account',
    name: 'name',
    nationality: 'nationality',
    chanal_name: 'chanal_name',
    avatar: 'avatar',
    desciption: 'desciption',
    refresh_token: 'refresh_token',
    password: 'password',
    banner: 'banner',
    role: 'role'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'user_role'
   */
  export type Enumuser_roleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'user_role'>
    


  /**
   * Reference to a field of type 'user_role[]'
   */
  export type ListEnumuser_roleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'user_role[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type commentsWhereInput = {
    AND?: commentsWhereInput | commentsWhereInput[]
    OR?: commentsWhereInput[]
    NOT?: commentsWhereInput | commentsWhereInput[]
    discuss_id?: IntFilter<"comments"> | number
    user_id?: IntNullableFilter<"comments"> | number | null
    song_id?: IntNullableFilter<"comments"> | number | null
    content?: StringFilter<"comments"> | string
    discuss_date?: DateTimeNullableFilter<"comments"> | Date | string | null
    replay_discuss_id?: IntNullableFilter<"comments"> | number | null
    comments?: XOR<CommentsNullableScalarRelationFilter, commentsWhereInput> | null
    other_comments?: CommentsListRelationFilter
    songs?: XOR<SongsNullableScalarRelationFilter, songsWhereInput> | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export type commentsOrderByWithRelationInput = {
    discuss_id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    song_id?: SortOrderInput | SortOrder
    content?: SortOrder
    discuss_date?: SortOrderInput | SortOrder
    replay_discuss_id?: SortOrderInput | SortOrder
    comments?: commentsOrderByWithRelationInput
    other_comments?: commentsOrderByRelationAggregateInput
    songs?: songsOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type commentsWhereUniqueInput = Prisma.AtLeast<{
    discuss_id?: number
    AND?: commentsWhereInput | commentsWhereInput[]
    OR?: commentsWhereInput[]
    NOT?: commentsWhereInput | commentsWhereInput[]
    user_id?: IntNullableFilter<"comments"> | number | null
    song_id?: IntNullableFilter<"comments"> | number | null
    content?: StringFilter<"comments"> | string
    discuss_date?: DateTimeNullableFilter<"comments"> | Date | string | null
    replay_discuss_id?: IntNullableFilter<"comments"> | number | null
    comments?: XOR<CommentsNullableScalarRelationFilter, commentsWhereInput> | null
    other_comments?: CommentsListRelationFilter
    songs?: XOR<SongsNullableScalarRelationFilter, songsWhereInput> | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, "discuss_id">

  export type commentsOrderByWithAggregationInput = {
    discuss_id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    song_id?: SortOrderInput | SortOrder
    content?: SortOrder
    discuss_date?: SortOrderInput | SortOrder
    replay_discuss_id?: SortOrderInput | SortOrder
    _count?: commentsCountOrderByAggregateInput
    _avg?: commentsAvgOrderByAggregateInput
    _max?: commentsMaxOrderByAggregateInput
    _min?: commentsMinOrderByAggregateInput
    _sum?: commentsSumOrderByAggregateInput
  }

  export type commentsScalarWhereWithAggregatesInput = {
    AND?: commentsScalarWhereWithAggregatesInput | commentsScalarWhereWithAggregatesInput[]
    OR?: commentsScalarWhereWithAggregatesInput[]
    NOT?: commentsScalarWhereWithAggregatesInput | commentsScalarWhereWithAggregatesInput[]
    discuss_id?: IntWithAggregatesFilter<"comments"> | number
    user_id?: IntNullableWithAggregatesFilter<"comments"> | number | null
    song_id?: IntNullableWithAggregatesFilter<"comments"> | number | null
    content?: StringWithAggregatesFilter<"comments"> | string
    discuss_date?: DateTimeNullableWithAggregatesFilter<"comments"> | Date | string | null
    replay_discuss_id?: IntNullableWithAggregatesFilter<"comments"> | number | null
  }

  export type genresWhereInput = {
    AND?: genresWhereInput | genresWhereInput[]
    OR?: genresWhereInput[]
    NOT?: genresWhereInput | genresWhereInput[]
    genre_id?: IntFilter<"genres"> | number
    name_genre?: StringFilter<"genres"> | string
    create_time?: DateTimeNullableFilter<"genres"> | Date | string | null
    songs?: SongsListRelationFilter
  }

  export type genresOrderByWithRelationInput = {
    genre_id?: SortOrder
    name_genre?: SortOrder
    create_time?: SortOrderInput | SortOrder
    songs?: songsOrderByRelationAggregateInput
  }

  export type genresWhereUniqueInput = Prisma.AtLeast<{
    genre_id?: number
    AND?: genresWhereInput | genresWhereInput[]
    OR?: genresWhereInput[]
    NOT?: genresWhereInput | genresWhereInput[]
    name_genre?: StringFilter<"genres"> | string
    create_time?: DateTimeNullableFilter<"genres"> | Date | string | null
    songs?: SongsListRelationFilter
  }, "genre_id">

  export type genresOrderByWithAggregationInput = {
    genre_id?: SortOrder
    name_genre?: SortOrder
    create_time?: SortOrderInput | SortOrder
    _count?: genresCountOrderByAggregateInput
    _avg?: genresAvgOrderByAggregateInput
    _max?: genresMaxOrderByAggregateInput
    _min?: genresMinOrderByAggregateInput
    _sum?: genresSumOrderByAggregateInput
  }

  export type genresScalarWhereWithAggregatesInput = {
    AND?: genresScalarWhereWithAggregatesInput | genresScalarWhereWithAggregatesInput[]
    OR?: genresScalarWhereWithAggregatesInput[]
    NOT?: genresScalarWhereWithAggregatesInput | genresScalarWhereWithAggregatesInput[]
    genre_id?: IntWithAggregatesFilter<"genres"> | number
    name_genre?: StringWithAggregatesFilter<"genres"> | string
    create_time?: DateTimeNullableWithAggregatesFilter<"genres"> | Date | string | null
  }

  export type list_friendsWhereInput = {
    AND?: list_friendsWhereInput | list_friendsWhereInput[]
    OR?: list_friendsWhereInput[]
    NOT?: list_friendsWhereInput | list_friendsWhereInput[]
    id?: IntFilter<"list_friends"> | number
    user_id?: IntNullableFilter<"list_friends"> | number | null
    friend_id?: IntNullableFilter<"list_friends"> | number | null
    room_chat?: StringNullableFilter<"list_friends"> | string | null
    users_list_friends_friend_idTousers?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    users_list_friends_user_idTousers?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export type list_friendsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    friend_id?: SortOrderInput | SortOrder
    room_chat?: SortOrderInput | SortOrder
    users_list_friends_friend_idTousers?: usersOrderByWithRelationInput
    users_list_friends_user_idTousers?: usersOrderByWithRelationInput
  }

  export type list_friendsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: list_friendsWhereInput | list_friendsWhereInput[]
    OR?: list_friendsWhereInput[]
    NOT?: list_friendsWhereInput | list_friendsWhereInput[]
    user_id?: IntNullableFilter<"list_friends"> | number | null
    friend_id?: IntNullableFilter<"list_friends"> | number | null
    room_chat?: StringNullableFilter<"list_friends"> | string | null
    users_list_friends_friend_idTousers?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    users_list_friends_user_idTousers?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, "id">

  export type list_friendsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    friend_id?: SortOrderInput | SortOrder
    room_chat?: SortOrderInput | SortOrder
    _count?: list_friendsCountOrderByAggregateInput
    _avg?: list_friendsAvgOrderByAggregateInput
    _max?: list_friendsMaxOrderByAggregateInput
    _min?: list_friendsMinOrderByAggregateInput
    _sum?: list_friendsSumOrderByAggregateInput
  }

  export type list_friendsScalarWhereWithAggregatesInput = {
    AND?: list_friendsScalarWhereWithAggregatesInput | list_friendsScalarWhereWithAggregatesInput[]
    OR?: list_friendsScalarWhereWithAggregatesInput[]
    NOT?: list_friendsScalarWhereWithAggregatesInput | list_friendsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"list_friends"> | number
    user_id?: IntNullableWithAggregatesFilter<"list_friends"> | number | null
    friend_id?: IntNullableWithAggregatesFilter<"list_friends"> | number | null
    room_chat?: StringNullableWithAggregatesFilter<"list_friends"> | string | null
  }

  export type messagesWhereInput = {
    AND?: messagesWhereInput | messagesWhereInput[]
    OR?: messagesWhereInput[]
    NOT?: messagesWhereInput | messagesWhereInput[]
    id?: IntFilter<"messages"> | number
    id_sender?: IntNullableFilter<"messages"> | number | null
    content_mess?: StringNullableFilter<"messages"> | string | null
    time_send?: DateTimeNullableFilter<"messages"> | Date | string | null
    room_chat?: StringNullableFilter<"messages"> | string | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export type messagesOrderByWithRelationInput = {
    id?: SortOrder
    id_sender?: SortOrderInput | SortOrder
    content_mess?: SortOrderInput | SortOrder
    time_send?: SortOrderInput | SortOrder
    room_chat?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
  }

  export type messagesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: messagesWhereInput | messagesWhereInput[]
    OR?: messagesWhereInput[]
    NOT?: messagesWhereInput | messagesWhereInput[]
    id_sender?: IntNullableFilter<"messages"> | number | null
    content_mess?: StringNullableFilter<"messages"> | string | null
    time_send?: DateTimeNullableFilter<"messages"> | Date | string | null
    room_chat?: StringNullableFilter<"messages"> | string | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, "id">

  export type messagesOrderByWithAggregationInput = {
    id?: SortOrder
    id_sender?: SortOrderInput | SortOrder
    content_mess?: SortOrderInput | SortOrder
    time_send?: SortOrderInput | SortOrder
    room_chat?: SortOrderInput | SortOrder
    _count?: messagesCountOrderByAggregateInput
    _avg?: messagesAvgOrderByAggregateInput
    _max?: messagesMaxOrderByAggregateInput
    _min?: messagesMinOrderByAggregateInput
    _sum?: messagesSumOrderByAggregateInput
  }

  export type messagesScalarWhereWithAggregatesInput = {
    AND?: messagesScalarWhereWithAggregatesInput | messagesScalarWhereWithAggregatesInput[]
    OR?: messagesScalarWhereWithAggregatesInput[]
    NOT?: messagesScalarWhereWithAggregatesInput | messagesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"messages"> | number
    id_sender?: IntNullableWithAggregatesFilter<"messages"> | number | null
    content_mess?: StringNullableWithAggregatesFilter<"messages"> | string | null
    time_send?: DateTimeNullableWithAggregatesFilter<"messages"> | Date | string | null
    room_chat?: StringNullableWithAggregatesFilter<"messages"> | string | null
  }

  export type playlist_songsWhereInput = {
    AND?: playlist_songsWhereInput | playlist_songsWhereInput[]
    OR?: playlist_songsWhereInput[]
    NOT?: playlist_songsWhereInput | playlist_songsWhereInput[]
    id?: IntFilter<"playlist_songs"> | number
    playlist_id?: IntNullableFilter<"playlist_songs"> | number | null
    song_id?: IntNullableFilter<"playlist_songs"> | number | null
    playlists?: XOR<PlaylistsNullableScalarRelationFilter, playlistsWhereInput> | null
    songs?: XOR<SongsNullableScalarRelationFilter, songsWhereInput> | null
  }

  export type playlist_songsOrderByWithRelationInput = {
    id?: SortOrder
    playlist_id?: SortOrderInput | SortOrder
    song_id?: SortOrderInput | SortOrder
    playlists?: playlistsOrderByWithRelationInput
    songs?: songsOrderByWithRelationInput
  }

  export type playlist_songsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: playlist_songsWhereInput | playlist_songsWhereInput[]
    OR?: playlist_songsWhereInput[]
    NOT?: playlist_songsWhereInput | playlist_songsWhereInput[]
    playlist_id?: IntNullableFilter<"playlist_songs"> | number | null
    song_id?: IntNullableFilter<"playlist_songs"> | number | null
    playlists?: XOR<PlaylistsNullableScalarRelationFilter, playlistsWhereInput> | null
    songs?: XOR<SongsNullableScalarRelationFilter, songsWhereInput> | null
  }, "id">

  export type playlist_songsOrderByWithAggregationInput = {
    id?: SortOrder
    playlist_id?: SortOrderInput | SortOrder
    song_id?: SortOrderInput | SortOrder
    _count?: playlist_songsCountOrderByAggregateInput
    _avg?: playlist_songsAvgOrderByAggregateInput
    _max?: playlist_songsMaxOrderByAggregateInput
    _min?: playlist_songsMinOrderByAggregateInput
    _sum?: playlist_songsSumOrderByAggregateInput
  }

  export type playlist_songsScalarWhereWithAggregatesInput = {
    AND?: playlist_songsScalarWhereWithAggregatesInput | playlist_songsScalarWhereWithAggregatesInput[]
    OR?: playlist_songsScalarWhereWithAggregatesInput[]
    NOT?: playlist_songsScalarWhereWithAggregatesInput | playlist_songsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"playlist_songs"> | number
    playlist_id?: IntNullableWithAggregatesFilter<"playlist_songs"> | number | null
    song_id?: IntNullableWithAggregatesFilter<"playlist_songs"> | number | null
  }

  export type playlistsWhereInput = {
    AND?: playlistsWhereInput | playlistsWhereInput[]
    OR?: playlistsWhereInput[]
    NOT?: playlistsWhereInput | playlistsWhereInput[]
    id?: IntFilter<"playlists"> | number
    user_id?: IntNullableFilter<"playlists"> | number | null
    image_path?: StringNullableFilter<"playlists"> | string | null
    playlist_name?: StringNullableFilter<"playlists"> | string | null
    description?: StringNullableFilter<"playlists"> | string | null
    create_date?: DateTimeNullableFilter<"playlists"> | Date | string | null
    playlist_songs?: Playlist_songsListRelationFilter
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export type playlistsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    image_path?: SortOrderInput | SortOrder
    playlist_name?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    create_date?: SortOrderInput | SortOrder
    playlist_songs?: playlist_songsOrderByRelationAggregateInput
    users?: usersOrderByWithRelationInput
  }

  export type playlistsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: playlistsWhereInput | playlistsWhereInput[]
    OR?: playlistsWhereInput[]
    NOT?: playlistsWhereInput | playlistsWhereInput[]
    user_id?: IntNullableFilter<"playlists"> | number | null
    image_path?: StringNullableFilter<"playlists"> | string | null
    playlist_name?: StringNullableFilter<"playlists"> | string | null
    description?: StringNullableFilter<"playlists"> | string | null
    create_date?: DateTimeNullableFilter<"playlists"> | Date | string | null
    playlist_songs?: Playlist_songsListRelationFilter
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, "id">

  export type playlistsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    image_path?: SortOrderInput | SortOrder
    playlist_name?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    create_date?: SortOrderInput | SortOrder
    _count?: playlistsCountOrderByAggregateInput
    _avg?: playlistsAvgOrderByAggregateInput
    _max?: playlistsMaxOrderByAggregateInput
    _min?: playlistsMinOrderByAggregateInput
    _sum?: playlistsSumOrderByAggregateInput
  }

  export type playlistsScalarWhereWithAggregatesInput = {
    AND?: playlistsScalarWhereWithAggregatesInput | playlistsScalarWhereWithAggregatesInput[]
    OR?: playlistsScalarWhereWithAggregatesInput[]
    NOT?: playlistsScalarWhereWithAggregatesInput | playlistsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"playlists"> | number
    user_id?: IntNullableWithAggregatesFilter<"playlists"> | number | null
    image_path?: StringNullableWithAggregatesFilter<"playlists"> | string | null
    playlist_name?: StringNullableWithAggregatesFilter<"playlists"> | string | null
    description?: StringNullableWithAggregatesFilter<"playlists"> | string | null
    create_date?: DateTimeNullableWithAggregatesFilter<"playlists"> | Date | string | null
  }

  export type songsWhereInput = {
    AND?: songsWhereInput | songsWhereInput[]
    OR?: songsWhereInput[]
    NOT?: songsWhereInput | songsWhereInput[]
    song_id?: IntFilter<"songs"> | number
    user_id?: IntNullableFilter<"songs"> | number | null
    genre_id?: IntNullableFilter<"songs"> | number | null
    song_name?: StringFilter<"songs"> | string
    viewer?: IntNullableFilter<"songs"> | number | null
    duration?: StringNullableFilter<"songs"> | string | null
    popular?: BoolNullableFilter<"songs"> | boolean | null
    description?: StringNullableFilter<"songs"> | string | null
    song_image?: StringNullableFilter<"songs"> | string | null
    public_date?: DateTimeNullableFilter<"songs"> | Date | string | null
    file_path?: StringNullableFilter<"songs"> | string | null
    discuss_quality?: IntNullableFilter<"songs"> | number | null
    comments?: CommentsListRelationFilter
    playlist_songs?: Playlist_songsListRelationFilter
    genres?: XOR<GenresNullableScalarRelationFilter, genresWhereInput> | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export type songsOrderByWithRelationInput = {
    song_id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    genre_id?: SortOrderInput | SortOrder
    song_name?: SortOrder
    viewer?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    popular?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    song_image?: SortOrderInput | SortOrder
    public_date?: SortOrderInput | SortOrder
    file_path?: SortOrderInput | SortOrder
    discuss_quality?: SortOrderInput | SortOrder
    comments?: commentsOrderByRelationAggregateInput
    playlist_songs?: playlist_songsOrderByRelationAggregateInput
    genres?: genresOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type songsWhereUniqueInput = Prisma.AtLeast<{
    song_id?: number
    AND?: songsWhereInput | songsWhereInput[]
    OR?: songsWhereInput[]
    NOT?: songsWhereInput | songsWhereInput[]
    user_id?: IntNullableFilter<"songs"> | number | null
    genre_id?: IntNullableFilter<"songs"> | number | null
    song_name?: StringFilter<"songs"> | string
    viewer?: IntNullableFilter<"songs"> | number | null
    duration?: StringNullableFilter<"songs"> | string | null
    popular?: BoolNullableFilter<"songs"> | boolean | null
    description?: StringNullableFilter<"songs"> | string | null
    song_image?: StringNullableFilter<"songs"> | string | null
    public_date?: DateTimeNullableFilter<"songs"> | Date | string | null
    file_path?: StringNullableFilter<"songs"> | string | null
    discuss_quality?: IntNullableFilter<"songs"> | number | null
    comments?: CommentsListRelationFilter
    playlist_songs?: Playlist_songsListRelationFilter
    genres?: XOR<GenresNullableScalarRelationFilter, genresWhereInput> | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, "song_id">

  export type songsOrderByWithAggregationInput = {
    song_id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    genre_id?: SortOrderInput | SortOrder
    song_name?: SortOrder
    viewer?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    popular?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    song_image?: SortOrderInput | SortOrder
    public_date?: SortOrderInput | SortOrder
    file_path?: SortOrderInput | SortOrder
    discuss_quality?: SortOrderInput | SortOrder
    _count?: songsCountOrderByAggregateInput
    _avg?: songsAvgOrderByAggregateInput
    _max?: songsMaxOrderByAggregateInput
    _min?: songsMinOrderByAggregateInput
    _sum?: songsSumOrderByAggregateInput
  }

  export type songsScalarWhereWithAggregatesInput = {
    AND?: songsScalarWhereWithAggregatesInput | songsScalarWhereWithAggregatesInput[]
    OR?: songsScalarWhereWithAggregatesInput[]
    NOT?: songsScalarWhereWithAggregatesInput | songsScalarWhereWithAggregatesInput[]
    song_id?: IntWithAggregatesFilter<"songs"> | number
    user_id?: IntNullableWithAggregatesFilter<"songs"> | number | null
    genre_id?: IntNullableWithAggregatesFilter<"songs"> | number | null
    song_name?: StringWithAggregatesFilter<"songs"> | string
    viewer?: IntNullableWithAggregatesFilter<"songs"> | number | null
    duration?: StringNullableWithAggregatesFilter<"songs"> | string | null
    popular?: BoolNullableWithAggregatesFilter<"songs"> | boolean | null
    description?: StringNullableWithAggregatesFilter<"songs"> | string | null
    song_image?: StringNullableWithAggregatesFilter<"songs"> | string | null
    public_date?: DateTimeNullableWithAggregatesFilter<"songs"> | Date | string | null
    file_path?: StringNullableWithAggregatesFilter<"songs"> | string | null
    discuss_quality?: IntNullableWithAggregatesFilter<"songs"> | number | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    user_id?: IntFilter<"users"> | number
    account?: StringFilter<"users"> | string
    name?: StringFilter<"users"> | string
    nationality?: StringNullableFilter<"users"> | string | null
    chanal_name?: StringNullableFilter<"users"> | string | null
    avatar?: StringNullableFilter<"users"> | string | null
    desciption?: StringNullableFilter<"users"> | string | null
    refresh_token?: StringNullableFilter<"users"> | string | null
    password?: StringFilter<"users"> | string
    banner?: StringNullableFilter<"users"> | string | null
    role?: Enumuser_roleFilter<"users"> | $Enums.user_role
    comments?: CommentsListRelationFilter
    list_friends_list_friends_friend_idTousers?: List_friendsListRelationFilter
    list_friends_list_friends_user_idTousers?: List_friendsListRelationFilter
    messages?: MessagesListRelationFilter
    playlists?: PlaylistsListRelationFilter
    songs?: SongsListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    user_id?: SortOrder
    account?: SortOrder
    name?: SortOrder
    nationality?: SortOrderInput | SortOrder
    chanal_name?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    desciption?: SortOrderInput | SortOrder
    refresh_token?: SortOrderInput | SortOrder
    password?: SortOrder
    banner?: SortOrderInput | SortOrder
    role?: SortOrder
    comments?: commentsOrderByRelationAggregateInput
    list_friends_list_friends_friend_idTousers?: list_friendsOrderByRelationAggregateInput
    list_friends_list_friends_user_idTousers?: list_friendsOrderByRelationAggregateInput
    messages?: messagesOrderByRelationAggregateInput
    playlists?: playlistsOrderByRelationAggregateInput
    songs?: songsOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    user_id?: number
    account?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    name?: StringFilter<"users"> | string
    nationality?: StringNullableFilter<"users"> | string | null
    chanal_name?: StringNullableFilter<"users"> | string | null
    avatar?: StringNullableFilter<"users"> | string | null
    desciption?: StringNullableFilter<"users"> | string | null
    refresh_token?: StringNullableFilter<"users"> | string | null
    password?: StringFilter<"users"> | string
    banner?: StringNullableFilter<"users"> | string | null
    role?: Enumuser_roleFilter<"users"> | $Enums.user_role
    comments?: CommentsListRelationFilter
    list_friends_list_friends_friend_idTousers?: List_friendsListRelationFilter
    list_friends_list_friends_user_idTousers?: List_friendsListRelationFilter
    messages?: MessagesListRelationFilter
    playlists?: PlaylistsListRelationFilter
    songs?: SongsListRelationFilter
  }, "user_id" | "account">

  export type usersOrderByWithAggregationInput = {
    user_id?: SortOrder
    account?: SortOrder
    name?: SortOrder
    nationality?: SortOrderInput | SortOrder
    chanal_name?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    desciption?: SortOrderInput | SortOrder
    refresh_token?: SortOrderInput | SortOrder
    password?: SortOrder
    banner?: SortOrderInput | SortOrder
    role?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"users"> | number
    account?: StringWithAggregatesFilter<"users"> | string
    name?: StringWithAggregatesFilter<"users"> | string
    nationality?: StringNullableWithAggregatesFilter<"users"> | string | null
    chanal_name?: StringNullableWithAggregatesFilter<"users"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"users"> | string | null
    desciption?: StringNullableWithAggregatesFilter<"users"> | string | null
    refresh_token?: StringNullableWithAggregatesFilter<"users"> | string | null
    password?: StringWithAggregatesFilter<"users"> | string
    banner?: StringNullableWithAggregatesFilter<"users"> | string | null
    role?: Enumuser_roleWithAggregatesFilter<"users"> | $Enums.user_role
  }

  export type commentsCreateInput = {
    content: string
    discuss_date?: Date | string | null
    comments?: commentsCreateNestedOneWithoutOther_commentsInput
    other_comments?: commentsCreateNestedManyWithoutCommentsInput
    songs?: songsCreateNestedOneWithoutCommentsInput
    users?: usersCreateNestedOneWithoutCommentsInput
  }

  export type commentsUncheckedCreateInput = {
    discuss_id?: number
    user_id?: number | null
    song_id?: number | null
    content: string
    discuss_date?: Date | string | null
    replay_discuss_id?: number | null
    other_comments?: commentsUncheckedCreateNestedManyWithoutCommentsInput
  }

  export type commentsUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    discuss_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: commentsUpdateOneWithoutOther_commentsNestedInput
    other_comments?: commentsUpdateManyWithoutCommentsNestedInput
    songs?: songsUpdateOneWithoutCommentsNestedInput
    users?: usersUpdateOneWithoutCommentsNestedInput
  }

  export type commentsUncheckedUpdateInput = {
    discuss_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    song_id?: NullableIntFieldUpdateOperationsInput | number | null
    content?: StringFieldUpdateOperationsInput | string
    discuss_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replay_discuss_id?: NullableIntFieldUpdateOperationsInput | number | null
    other_comments?: commentsUncheckedUpdateManyWithoutCommentsNestedInput
  }

  export type commentsCreateManyInput = {
    discuss_id?: number
    user_id?: number | null
    song_id?: number | null
    content: string
    discuss_date?: Date | string | null
    replay_discuss_id?: number | null
  }

  export type commentsUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    discuss_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type commentsUncheckedUpdateManyInput = {
    discuss_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    song_id?: NullableIntFieldUpdateOperationsInput | number | null
    content?: StringFieldUpdateOperationsInput | string
    discuss_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replay_discuss_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type genresCreateInput = {
    name_genre: string
    create_time?: Date | string | null
    songs?: songsCreateNestedManyWithoutGenresInput
  }

  export type genresUncheckedCreateInput = {
    genre_id?: number
    name_genre: string
    create_time?: Date | string | null
    songs?: songsUncheckedCreateNestedManyWithoutGenresInput
  }

  export type genresUpdateInput = {
    name_genre?: StringFieldUpdateOperationsInput | string
    create_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    songs?: songsUpdateManyWithoutGenresNestedInput
  }

  export type genresUncheckedUpdateInput = {
    genre_id?: IntFieldUpdateOperationsInput | number
    name_genre?: StringFieldUpdateOperationsInput | string
    create_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    songs?: songsUncheckedUpdateManyWithoutGenresNestedInput
  }

  export type genresCreateManyInput = {
    genre_id?: number
    name_genre: string
    create_time?: Date | string | null
  }

  export type genresUpdateManyMutationInput = {
    name_genre?: StringFieldUpdateOperationsInput | string
    create_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type genresUncheckedUpdateManyInput = {
    genre_id?: IntFieldUpdateOperationsInput | number
    name_genre?: StringFieldUpdateOperationsInput | string
    create_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type list_friendsCreateInput = {
    room_chat?: string | null
    users_list_friends_friend_idTousers?: usersCreateNestedOneWithoutList_friends_list_friends_friend_idTousersInput
    users_list_friends_user_idTousers?: usersCreateNestedOneWithoutList_friends_list_friends_user_idTousersInput
  }

  export type list_friendsUncheckedCreateInput = {
    id?: number
    user_id?: number | null
    friend_id?: number | null
    room_chat?: string | null
  }

  export type list_friendsUpdateInput = {
    room_chat?: NullableStringFieldUpdateOperationsInput | string | null
    users_list_friends_friend_idTousers?: usersUpdateOneWithoutList_friends_list_friends_friend_idTousersNestedInput
    users_list_friends_user_idTousers?: usersUpdateOneWithoutList_friends_list_friends_user_idTousersNestedInput
  }

  export type list_friendsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    friend_id?: NullableIntFieldUpdateOperationsInput | number | null
    room_chat?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type list_friendsCreateManyInput = {
    id?: number
    user_id?: number | null
    friend_id?: number | null
    room_chat?: string | null
  }

  export type list_friendsUpdateManyMutationInput = {
    room_chat?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type list_friendsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    friend_id?: NullableIntFieldUpdateOperationsInput | number | null
    room_chat?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type messagesCreateInput = {
    content_mess?: string | null
    time_send?: Date | string | null
    room_chat?: string | null
    users?: usersCreateNestedOneWithoutMessagesInput
  }

  export type messagesUncheckedCreateInput = {
    id?: number
    id_sender?: number | null
    content_mess?: string | null
    time_send?: Date | string | null
    room_chat?: string | null
  }

  export type messagesUpdateInput = {
    content_mess?: NullableStringFieldUpdateOperationsInput | string | null
    time_send?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    room_chat?: NullableStringFieldUpdateOperationsInput | string | null
    users?: usersUpdateOneWithoutMessagesNestedInput
  }

  export type messagesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_sender?: NullableIntFieldUpdateOperationsInput | number | null
    content_mess?: NullableStringFieldUpdateOperationsInput | string | null
    time_send?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    room_chat?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type messagesCreateManyInput = {
    id?: number
    id_sender?: number | null
    content_mess?: string | null
    time_send?: Date | string | null
    room_chat?: string | null
  }

  export type messagesUpdateManyMutationInput = {
    content_mess?: NullableStringFieldUpdateOperationsInput | string | null
    time_send?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    room_chat?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type messagesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_sender?: NullableIntFieldUpdateOperationsInput | number | null
    content_mess?: NullableStringFieldUpdateOperationsInput | string | null
    time_send?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    room_chat?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type playlist_songsCreateInput = {
    playlists?: playlistsCreateNestedOneWithoutPlaylist_songsInput
    songs?: songsCreateNestedOneWithoutPlaylist_songsInput
  }

  export type playlist_songsUncheckedCreateInput = {
    id?: number
    playlist_id?: number | null
    song_id?: number | null
  }

  export type playlist_songsUpdateInput = {
    playlists?: playlistsUpdateOneWithoutPlaylist_songsNestedInput
    songs?: songsUpdateOneWithoutPlaylist_songsNestedInput
  }

  export type playlist_songsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    playlist_id?: NullableIntFieldUpdateOperationsInput | number | null
    song_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type playlist_songsCreateManyInput = {
    id?: number
    playlist_id?: number | null
    song_id?: number | null
  }

  export type playlist_songsUpdateManyMutationInput = {

  }

  export type playlist_songsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    playlist_id?: NullableIntFieldUpdateOperationsInput | number | null
    song_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type playlistsCreateInput = {
    image_path?: string | null
    playlist_name?: string | null
    description?: string | null
    create_date?: Date | string | null
    playlist_songs?: playlist_songsCreateNestedManyWithoutPlaylistsInput
    users?: usersCreateNestedOneWithoutPlaylistsInput
  }

  export type playlistsUncheckedCreateInput = {
    id?: number
    user_id?: number | null
    image_path?: string | null
    playlist_name?: string | null
    description?: string | null
    create_date?: Date | string | null
    playlist_songs?: playlist_songsUncheckedCreateNestedManyWithoutPlaylistsInput
  }

  export type playlistsUpdateInput = {
    image_path?: NullableStringFieldUpdateOperationsInput | string | null
    playlist_name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    create_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    playlist_songs?: playlist_songsUpdateManyWithoutPlaylistsNestedInput
    users?: usersUpdateOneWithoutPlaylistsNestedInput
  }

  export type playlistsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    image_path?: NullableStringFieldUpdateOperationsInput | string | null
    playlist_name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    create_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    playlist_songs?: playlist_songsUncheckedUpdateManyWithoutPlaylistsNestedInput
  }

  export type playlistsCreateManyInput = {
    id?: number
    user_id?: number | null
    image_path?: string | null
    playlist_name?: string | null
    description?: string | null
    create_date?: Date | string | null
  }

  export type playlistsUpdateManyMutationInput = {
    image_path?: NullableStringFieldUpdateOperationsInput | string | null
    playlist_name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    create_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type playlistsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    image_path?: NullableStringFieldUpdateOperationsInput | string | null
    playlist_name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    create_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type songsCreateInput = {
    song_name: string
    viewer?: number | null
    duration?: string | null
    popular?: boolean | null
    description?: string | null
    song_image?: string | null
    public_date?: Date | string | null
    file_path?: string | null
    discuss_quality?: number | null
    comments?: commentsCreateNestedManyWithoutSongsInput
    playlist_songs?: playlist_songsCreateNestedManyWithoutSongsInput
    genres?: genresCreateNestedOneWithoutSongsInput
    users?: usersCreateNestedOneWithoutSongsInput
  }

  export type songsUncheckedCreateInput = {
    song_id?: number
    user_id?: number | null
    genre_id?: number | null
    song_name: string
    viewer?: number | null
    duration?: string | null
    popular?: boolean | null
    description?: string | null
    song_image?: string | null
    public_date?: Date | string | null
    file_path?: string | null
    discuss_quality?: number | null
    comments?: commentsUncheckedCreateNestedManyWithoutSongsInput
    playlist_songs?: playlist_songsUncheckedCreateNestedManyWithoutSongsInput
  }

  export type songsUpdateInput = {
    song_name?: StringFieldUpdateOperationsInput | string
    viewer?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    popular?: NullableBoolFieldUpdateOperationsInput | boolean | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    song_image?: NullableStringFieldUpdateOperationsInput | string | null
    public_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    file_path?: NullableStringFieldUpdateOperationsInput | string | null
    discuss_quality?: NullableIntFieldUpdateOperationsInput | number | null
    comments?: commentsUpdateManyWithoutSongsNestedInput
    playlist_songs?: playlist_songsUpdateManyWithoutSongsNestedInput
    genres?: genresUpdateOneWithoutSongsNestedInput
    users?: usersUpdateOneWithoutSongsNestedInput
  }

  export type songsUncheckedUpdateInput = {
    song_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    genre_id?: NullableIntFieldUpdateOperationsInput | number | null
    song_name?: StringFieldUpdateOperationsInput | string
    viewer?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    popular?: NullableBoolFieldUpdateOperationsInput | boolean | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    song_image?: NullableStringFieldUpdateOperationsInput | string | null
    public_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    file_path?: NullableStringFieldUpdateOperationsInput | string | null
    discuss_quality?: NullableIntFieldUpdateOperationsInput | number | null
    comments?: commentsUncheckedUpdateManyWithoutSongsNestedInput
    playlist_songs?: playlist_songsUncheckedUpdateManyWithoutSongsNestedInput
  }

  export type songsCreateManyInput = {
    song_id?: number
    user_id?: number | null
    genre_id?: number | null
    song_name: string
    viewer?: number | null
    duration?: string | null
    popular?: boolean | null
    description?: string | null
    song_image?: string | null
    public_date?: Date | string | null
    file_path?: string | null
    discuss_quality?: number | null
  }

  export type songsUpdateManyMutationInput = {
    song_name?: StringFieldUpdateOperationsInput | string
    viewer?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    popular?: NullableBoolFieldUpdateOperationsInput | boolean | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    song_image?: NullableStringFieldUpdateOperationsInput | string | null
    public_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    file_path?: NullableStringFieldUpdateOperationsInput | string | null
    discuss_quality?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type songsUncheckedUpdateManyInput = {
    song_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    genre_id?: NullableIntFieldUpdateOperationsInput | number | null
    song_name?: StringFieldUpdateOperationsInput | string
    viewer?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    popular?: NullableBoolFieldUpdateOperationsInput | boolean | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    song_image?: NullableStringFieldUpdateOperationsInput | string | null
    public_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    file_path?: NullableStringFieldUpdateOperationsInput | string | null
    discuss_quality?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type usersCreateInput = {
    account: string
    name: string
    nationality?: string | null
    chanal_name?: string | null
    avatar?: string | null
    desciption?: string | null
    refresh_token?: string | null
    password: string
    banner?: string | null
    role: $Enums.user_role
    comments?: commentsCreateNestedManyWithoutUsersInput
    list_friends_list_friends_friend_idTousers?: list_friendsCreateNestedManyWithoutUsers_list_friends_friend_idTousersInput
    list_friends_list_friends_user_idTousers?: list_friendsCreateNestedManyWithoutUsers_list_friends_user_idTousersInput
    messages?: messagesCreateNestedManyWithoutUsersInput
    playlists?: playlistsCreateNestedManyWithoutUsersInput
    songs?: songsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    user_id?: number
    account: string
    name: string
    nationality?: string | null
    chanal_name?: string | null
    avatar?: string | null
    desciption?: string | null
    refresh_token?: string | null
    password: string
    banner?: string | null
    role: $Enums.user_role
    comments?: commentsUncheckedCreateNestedManyWithoutUsersInput
    list_friends_list_friends_friend_idTousers?: list_friendsUncheckedCreateNestedManyWithoutUsers_list_friends_friend_idTousersInput
    list_friends_list_friends_user_idTousers?: list_friendsUncheckedCreateNestedManyWithoutUsers_list_friends_user_idTousersInput
    messages?: messagesUncheckedCreateNestedManyWithoutUsersInput
    playlists?: playlistsUncheckedCreateNestedManyWithoutUsersInput
    songs?: songsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    account?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    chanal_name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    desciption?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    comments?: commentsUpdateManyWithoutUsersNestedInput
    list_friends_list_friends_friend_idTousers?: list_friendsUpdateManyWithoutUsers_list_friends_friend_idTousersNestedInput
    list_friends_list_friends_user_idTousers?: list_friendsUpdateManyWithoutUsers_list_friends_user_idTousersNestedInput
    messages?: messagesUpdateManyWithoutUsersNestedInput
    playlists?: playlistsUpdateManyWithoutUsersNestedInput
    songs?: songsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    account?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    chanal_name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    desciption?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    comments?: commentsUncheckedUpdateManyWithoutUsersNestedInput
    list_friends_list_friends_friend_idTousers?: list_friendsUncheckedUpdateManyWithoutUsers_list_friends_friend_idTousersNestedInput
    list_friends_list_friends_user_idTousers?: list_friendsUncheckedUpdateManyWithoutUsers_list_friends_user_idTousersNestedInput
    messages?: messagesUncheckedUpdateManyWithoutUsersNestedInput
    playlists?: playlistsUncheckedUpdateManyWithoutUsersNestedInput
    songs?: songsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    user_id?: number
    account: string
    name: string
    nationality?: string | null
    chanal_name?: string | null
    avatar?: string | null
    desciption?: string | null
    refresh_token?: string | null
    password: string
    banner?: string | null
    role: $Enums.user_role
  }

  export type usersUpdateManyMutationInput = {
    account?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    chanal_name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    desciption?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
  }

  export type usersUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    account?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    chanal_name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    desciption?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type CommentsNullableScalarRelationFilter = {
    is?: commentsWhereInput | null
    isNot?: commentsWhereInput | null
  }

  export type CommentsListRelationFilter = {
    every?: commentsWhereInput
    some?: commentsWhereInput
    none?: commentsWhereInput
  }

  export type SongsNullableScalarRelationFilter = {
    is?: songsWhereInput | null
    isNot?: songsWhereInput | null
  }

  export type UsersNullableScalarRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type commentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type commentsCountOrderByAggregateInput = {
    discuss_id?: SortOrder
    user_id?: SortOrder
    song_id?: SortOrder
    content?: SortOrder
    discuss_date?: SortOrder
    replay_discuss_id?: SortOrder
  }

  export type commentsAvgOrderByAggregateInput = {
    discuss_id?: SortOrder
    user_id?: SortOrder
    song_id?: SortOrder
    replay_discuss_id?: SortOrder
  }

  export type commentsMaxOrderByAggregateInput = {
    discuss_id?: SortOrder
    user_id?: SortOrder
    song_id?: SortOrder
    content?: SortOrder
    discuss_date?: SortOrder
    replay_discuss_id?: SortOrder
  }

  export type commentsMinOrderByAggregateInput = {
    discuss_id?: SortOrder
    user_id?: SortOrder
    song_id?: SortOrder
    content?: SortOrder
    discuss_date?: SortOrder
    replay_discuss_id?: SortOrder
  }

  export type commentsSumOrderByAggregateInput = {
    discuss_id?: SortOrder
    user_id?: SortOrder
    song_id?: SortOrder
    replay_discuss_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type SongsListRelationFilter = {
    every?: songsWhereInput
    some?: songsWhereInput
    none?: songsWhereInput
  }

  export type songsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type genresCountOrderByAggregateInput = {
    genre_id?: SortOrder
    name_genre?: SortOrder
    create_time?: SortOrder
  }

  export type genresAvgOrderByAggregateInput = {
    genre_id?: SortOrder
  }

  export type genresMaxOrderByAggregateInput = {
    genre_id?: SortOrder
    name_genre?: SortOrder
    create_time?: SortOrder
  }

  export type genresMinOrderByAggregateInput = {
    genre_id?: SortOrder
    name_genre?: SortOrder
    create_time?: SortOrder
  }

  export type genresSumOrderByAggregateInput = {
    genre_id?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type list_friendsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    friend_id?: SortOrder
    room_chat?: SortOrder
  }

  export type list_friendsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    friend_id?: SortOrder
  }

  export type list_friendsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    friend_id?: SortOrder
    room_chat?: SortOrder
  }

  export type list_friendsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    friend_id?: SortOrder
    room_chat?: SortOrder
  }

  export type list_friendsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    friend_id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type messagesCountOrderByAggregateInput = {
    id?: SortOrder
    id_sender?: SortOrder
    content_mess?: SortOrder
    time_send?: SortOrder
    room_chat?: SortOrder
  }

  export type messagesAvgOrderByAggregateInput = {
    id?: SortOrder
    id_sender?: SortOrder
  }

  export type messagesMaxOrderByAggregateInput = {
    id?: SortOrder
    id_sender?: SortOrder
    content_mess?: SortOrder
    time_send?: SortOrder
    room_chat?: SortOrder
  }

  export type messagesMinOrderByAggregateInput = {
    id?: SortOrder
    id_sender?: SortOrder
    content_mess?: SortOrder
    time_send?: SortOrder
    room_chat?: SortOrder
  }

  export type messagesSumOrderByAggregateInput = {
    id?: SortOrder
    id_sender?: SortOrder
  }

  export type PlaylistsNullableScalarRelationFilter = {
    is?: playlistsWhereInput | null
    isNot?: playlistsWhereInput | null
  }

  export type playlist_songsCountOrderByAggregateInput = {
    id?: SortOrder
    playlist_id?: SortOrder
    song_id?: SortOrder
  }

  export type playlist_songsAvgOrderByAggregateInput = {
    id?: SortOrder
    playlist_id?: SortOrder
    song_id?: SortOrder
  }

  export type playlist_songsMaxOrderByAggregateInput = {
    id?: SortOrder
    playlist_id?: SortOrder
    song_id?: SortOrder
  }

  export type playlist_songsMinOrderByAggregateInput = {
    id?: SortOrder
    playlist_id?: SortOrder
    song_id?: SortOrder
  }

  export type playlist_songsSumOrderByAggregateInput = {
    id?: SortOrder
    playlist_id?: SortOrder
    song_id?: SortOrder
  }

  export type Playlist_songsListRelationFilter = {
    every?: playlist_songsWhereInput
    some?: playlist_songsWhereInput
    none?: playlist_songsWhereInput
  }

  export type playlist_songsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type playlistsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    image_path?: SortOrder
    playlist_name?: SortOrder
    description?: SortOrder
    create_date?: SortOrder
  }

  export type playlistsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type playlistsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    image_path?: SortOrder
    playlist_name?: SortOrder
    description?: SortOrder
    create_date?: SortOrder
  }

  export type playlistsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    image_path?: SortOrder
    playlist_name?: SortOrder
    description?: SortOrder
    create_date?: SortOrder
  }

  export type playlistsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type GenresNullableScalarRelationFilter = {
    is?: genresWhereInput | null
    isNot?: genresWhereInput | null
  }

  export type songsCountOrderByAggregateInput = {
    song_id?: SortOrder
    user_id?: SortOrder
    genre_id?: SortOrder
    song_name?: SortOrder
    viewer?: SortOrder
    duration?: SortOrder
    popular?: SortOrder
    description?: SortOrder
    song_image?: SortOrder
    public_date?: SortOrder
    file_path?: SortOrder
    discuss_quality?: SortOrder
  }

  export type songsAvgOrderByAggregateInput = {
    song_id?: SortOrder
    user_id?: SortOrder
    genre_id?: SortOrder
    viewer?: SortOrder
    discuss_quality?: SortOrder
  }

  export type songsMaxOrderByAggregateInput = {
    song_id?: SortOrder
    user_id?: SortOrder
    genre_id?: SortOrder
    song_name?: SortOrder
    viewer?: SortOrder
    duration?: SortOrder
    popular?: SortOrder
    description?: SortOrder
    song_image?: SortOrder
    public_date?: SortOrder
    file_path?: SortOrder
    discuss_quality?: SortOrder
  }

  export type songsMinOrderByAggregateInput = {
    song_id?: SortOrder
    user_id?: SortOrder
    genre_id?: SortOrder
    song_name?: SortOrder
    viewer?: SortOrder
    duration?: SortOrder
    popular?: SortOrder
    description?: SortOrder
    song_image?: SortOrder
    public_date?: SortOrder
    file_path?: SortOrder
    discuss_quality?: SortOrder
  }

  export type songsSumOrderByAggregateInput = {
    song_id?: SortOrder
    user_id?: SortOrder
    genre_id?: SortOrder
    viewer?: SortOrder
    discuss_quality?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type Enumuser_roleFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Enumuser_roleFieldRefInput<$PrismaModel>
    in?: $Enums.user_role[] | ListEnumuser_roleFieldRefInput<$PrismaModel>
    notIn?: $Enums.user_role[] | ListEnumuser_roleFieldRefInput<$PrismaModel>
    not?: NestedEnumuser_roleFilter<$PrismaModel> | $Enums.user_role
  }

  export type List_friendsListRelationFilter = {
    every?: list_friendsWhereInput
    some?: list_friendsWhereInput
    none?: list_friendsWhereInput
  }

  export type MessagesListRelationFilter = {
    every?: messagesWhereInput
    some?: messagesWhereInput
    none?: messagesWhereInput
  }

  export type PlaylistsListRelationFilter = {
    every?: playlistsWhereInput
    some?: playlistsWhereInput
    none?: playlistsWhereInput
  }

  export type list_friendsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type messagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type playlistsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    user_id?: SortOrder
    account?: SortOrder
    name?: SortOrder
    nationality?: SortOrder
    chanal_name?: SortOrder
    avatar?: SortOrder
    desciption?: SortOrder
    refresh_token?: SortOrder
    password?: SortOrder
    banner?: SortOrder
    role?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    user_id?: SortOrder
    account?: SortOrder
    name?: SortOrder
    nationality?: SortOrder
    chanal_name?: SortOrder
    avatar?: SortOrder
    desciption?: SortOrder
    refresh_token?: SortOrder
    password?: SortOrder
    banner?: SortOrder
    role?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    user_id?: SortOrder
    account?: SortOrder
    name?: SortOrder
    nationality?: SortOrder
    chanal_name?: SortOrder
    avatar?: SortOrder
    desciption?: SortOrder
    refresh_token?: SortOrder
    password?: SortOrder
    banner?: SortOrder
    role?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type Enumuser_roleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Enumuser_roleFieldRefInput<$PrismaModel>
    in?: $Enums.user_role[] | ListEnumuser_roleFieldRefInput<$PrismaModel>
    notIn?: $Enums.user_role[] | ListEnumuser_roleFieldRefInput<$PrismaModel>
    not?: NestedEnumuser_roleWithAggregatesFilter<$PrismaModel> | $Enums.user_role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumuser_roleFilter<$PrismaModel>
    _max?: NestedEnumuser_roleFilter<$PrismaModel>
  }

  export type commentsCreateNestedOneWithoutOther_commentsInput = {
    create?: XOR<commentsCreateWithoutOther_commentsInput, commentsUncheckedCreateWithoutOther_commentsInput>
    connectOrCreate?: commentsCreateOrConnectWithoutOther_commentsInput
    connect?: commentsWhereUniqueInput
  }

  export type commentsCreateNestedManyWithoutCommentsInput = {
    create?: XOR<commentsCreateWithoutCommentsInput, commentsUncheckedCreateWithoutCommentsInput> | commentsCreateWithoutCommentsInput[] | commentsUncheckedCreateWithoutCommentsInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutCommentsInput | commentsCreateOrConnectWithoutCommentsInput[]
    createMany?: commentsCreateManyCommentsInputEnvelope
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
  }

  export type songsCreateNestedOneWithoutCommentsInput = {
    create?: XOR<songsCreateWithoutCommentsInput, songsUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: songsCreateOrConnectWithoutCommentsInput
    connect?: songsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutCommentsInput = {
    create?: XOR<usersCreateWithoutCommentsInput, usersUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: usersCreateOrConnectWithoutCommentsInput
    connect?: usersWhereUniqueInput
  }

  export type commentsUncheckedCreateNestedManyWithoutCommentsInput = {
    create?: XOR<commentsCreateWithoutCommentsInput, commentsUncheckedCreateWithoutCommentsInput> | commentsCreateWithoutCommentsInput[] | commentsUncheckedCreateWithoutCommentsInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutCommentsInput | commentsCreateOrConnectWithoutCommentsInput[]
    createMany?: commentsCreateManyCommentsInputEnvelope
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type commentsUpdateOneWithoutOther_commentsNestedInput = {
    create?: XOR<commentsCreateWithoutOther_commentsInput, commentsUncheckedCreateWithoutOther_commentsInput>
    connectOrCreate?: commentsCreateOrConnectWithoutOther_commentsInput
    upsert?: commentsUpsertWithoutOther_commentsInput
    disconnect?: commentsWhereInput | boolean
    delete?: commentsWhereInput | boolean
    connect?: commentsWhereUniqueInput
    update?: XOR<XOR<commentsUpdateToOneWithWhereWithoutOther_commentsInput, commentsUpdateWithoutOther_commentsInput>, commentsUncheckedUpdateWithoutOther_commentsInput>
  }

  export type commentsUpdateManyWithoutCommentsNestedInput = {
    create?: XOR<commentsCreateWithoutCommentsInput, commentsUncheckedCreateWithoutCommentsInput> | commentsCreateWithoutCommentsInput[] | commentsUncheckedCreateWithoutCommentsInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutCommentsInput | commentsCreateOrConnectWithoutCommentsInput[]
    upsert?: commentsUpsertWithWhereUniqueWithoutCommentsInput | commentsUpsertWithWhereUniqueWithoutCommentsInput[]
    createMany?: commentsCreateManyCommentsInputEnvelope
    set?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    disconnect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    delete?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    update?: commentsUpdateWithWhereUniqueWithoutCommentsInput | commentsUpdateWithWhereUniqueWithoutCommentsInput[]
    updateMany?: commentsUpdateManyWithWhereWithoutCommentsInput | commentsUpdateManyWithWhereWithoutCommentsInput[]
    deleteMany?: commentsScalarWhereInput | commentsScalarWhereInput[]
  }

  export type songsUpdateOneWithoutCommentsNestedInput = {
    create?: XOR<songsCreateWithoutCommentsInput, songsUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: songsCreateOrConnectWithoutCommentsInput
    upsert?: songsUpsertWithoutCommentsInput
    disconnect?: songsWhereInput | boolean
    delete?: songsWhereInput | boolean
    connect?: songsWhereUniqueInput
    update?: XOR<XOR<songsUpdateToOneWithWhereWithoutCommentsInput, songsUpdateWithoutCommentsInput>, songsUncheckedUpdateWithoutCommentsInput>
  }

  export type usersUpdateOneWithoutCommentsNestedInput = {
    create?: XOR<usersCreateWithoutCommentsInput, usersUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: usersCreateOrConnectWithoutCommentsInput
    upsert?: usersUpsertWithoutCommentsInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutCommentsInput, usersUpdateWithoutCommentsInput>, usersUncheckedUpdateWithoutCommentsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type commentsUncheckedUpdateManyWithoutCommentsNestedInput = {
    create?: XOR<commentsCreateWithoutCommentsInput, commentsUncheckedCreateWithoutCommentsInput> | commentsCreateWithoutCommentsInput[] | commentsUncheckedCreateWithoutCommentsInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutCommentsInput | commentsCreateOrConnectWithoutCommentsInput[]
    upsert?: commentsUpsertWithWhereUniqueWithoutCommentsInput | commentsUpsertWithWhereUniqueWithoutCommentsInput[]
    createMany?: commentsCreateManyCommentsInputEnvelope
    set?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    disconnect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    delete?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    update?: commentsUpdateWithWhereUniqueWithoutCommentsInput | commentsUpdateWithWhereUniqueWithoutCommentsInput[]
    updateMany?: commentsUpdateManyWithWhereWithoutCommentsInput | commentsUpdateManyWithWhereWithoutCommentsInput[]
    deleteMany?: commentsScalarWhereInput | commentsScalarWhereInput[]
  }

  export type songsCreateNestedManyWithoutGenresInput = {
    create?: XOR<songsCreateWithoutGenresInput, songsUncheckedCreateWithoutGenresInput> | songsCreateWithoutGenresInput[] | songsUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: songsCreateOrConnectWithoutGenresInput | songsCreateOrConnectWithoutGenresInput[]
    createMany?: songsCreateManyGenresInputEnvelope
    connect?: songsWhereUniqueInput | songsWhereUniqueInput[]
  }

  export type songsUncheckedCreateNestedManyWithoutGenresInput = {
    create?: XOR<songsCreateWithoutGenresInput, songsUncheckedCreateWithoutGenresInput> | songsCreateWithoutGenresInput[] | songsUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: songsCreateOrConnectWithoutGenresInput | songsCreateOrConnectWithoutGenresInput[]
    createMany?: songsCreateManyGenresInputEnvelope
    connect?: songsWhereUniqueInput | songsWhereUniqueInput[]
  }

  export type songsUpdateManyWithoutGenresNestedInput = {
    create?: XOR<songsCreateWithoutGenresInput, songsUncheckedCreateWithoutGenresInput> | songsCreateWithoutGenresInput[] | songsUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: songsCreateOrConnectWithoutGenresInput | songsCreateOrConnectWithoutGenresInput[]
    upsert?: songsUpsertWithWhereUniqueWithoutGenresInput | songsUpsertWithWhereUniqueWithoutGenresInput[]
    createMany?: songsCreateManyGenresInputEnvelope
    set?: songsWhereUniqueInput | songsWhereUniqueInput[]
    disconnect?: songsWhereUniqueInput | songsWhereUniqueInput[]
    delete?: songsWhereUniqueInput | songsWhereUniqueInput[]
    connect?: songsWhereUniqueInput | songsWhereUniqueInput[]
    update?: songsUpdateWithWhereUniqueWithoutGenresInput | songsUpdateWithWhereUniqueWithoutGenresInput[]
    updateMany?: songsUpdateManyWithWhereWithoutGenresInput | songsUpdateManyWithWhereWithoutGenresInput[]
    deleteMany?: songsScalarWhereInput | songsScalarWhereInput[]
  }

  export type songsUncheckedUpdateManyWithoutGenresNestedInput = {
    create?: XOR<songsCreateWithoutGenresInput, songsUncheckedCreateWithoutGenresInput> | songsCreateWithoutGenresInput[] | songsUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: songsCreateOrConnectWithoutGenresInput | songsCreateOrConnectWithoutGenresInput[]
    upsert?: songsUpsertWithWhereUniqueWithoutGenresInput | songsUpsertWithWhereUniqueWithoutGenresInput[]
    createMany?: songsCreateManyGenresInputEnvelope
    set?: songsWhereUniqueInput | songsWhereUniqueInput[]
    disconnect?: songsWhereUniqueInput | songsWhereUniqueInput[]
    delete?: songsWhereUniqueInput | songsWhereUniqueInput[]
    connect?: songsWhereUniqueInput | songsWhereUniqueInput[]
    update?: songsUpdateWithWhereUniqueWithoutGenresInput | songsUpdateWithWhereUniqueWithoutGenresInput[]
    updateMany?: songsUpdateManyWithWhereWithoutGenresInput | songsUpdateManyWithWhereWithoutGenresInput[]
    deleteMany?: songsScalarWhereInput | songsScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutList_friends_list_friends_friend_idTousersInput = {
    create?: XOR<usersCreateWithoutList_friends_list_friends_friend_idTousersInput, usersUncheckedCreateWithoutList_friends_list_friends_friend_idTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutList_friends_list_friends_friend_idTousersInput
    connect?: usersWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutList_friends_list_friends_user_idTousersInput = {
    create?: XOR<usersCreateWithoutList_friends_list_friends_user_idTousersInput, usersUncheckedCreateWithoutList_friends_list_friends_user_idTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutList_friends_list_friends_user_idTousersInput
    connect?: usersWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type usersUpdateOneWithoutList_friends_list_friends_friend_idTousersNestedInput = {
    create?: XOR<usersCreateWithoutList_friends_list_friends_friend_idTousersInput, usersUncheckedCreateWithoutList_friends_list_friends_friend_idTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutList_friends_list_friends_friend_idTousersInput
    upsert?: usersUpsertWithoutList_friends_list_friends_friend_idTousersInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutList_friends_list_friends_friend_idTousersInput, usersUpdateWithoutList_friends_list_friends_friend_idTousersInput>, usersUncheckedUpdateWithoutList_friends_list_friends_friend_idTousersInput>
  }

  export type usersUpdateOneWithoutList_friends_list_friends_user_idTousersNestedInput = {
    create?: XOR<usersCreateWithoutList_friends_list_friends_user_idTousersInput, usersUncheckedCreateWithoutList_friends_list_friends_user_idTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutList_friends_list_friends_user_idTousersInput
    upsert?: usersUpsertWithoutList_friends_list_friends_user_idTousersInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutList_friends_list_friends_user_idTousersInput, usersUpdateWithoutList_friends_list_friends_user_idTousersInput>, usersUncheckedUpdateWithoutList_friends_list_friends_user_idTousersInput>
  }

  export type usersCreateNestedOneWithoutMessagesInput = {
    create?: XOR<usersCreateWithoutMessagesInput, usersUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: usersCreateOrConnectWithoutMessagesInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneWithoutMessagesNestedInput = {
    create?: XOR<usersCreateWithoutMessagesInput, usersUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: usersCreateOrConnectWithoutMessagesInput
    upsert?: usersUpsertWithoutMessagesInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutMessagesInput, usersUpdateWithoutMessagesInput>, usersUncheckedUpdateWithoutMessagesInput>
  }

  export type playlistsCreateNestedOneWithoutPlaylist_songsInput = {
    create?: XOR<playlistsCreateWithoutPlaylist_songsInput, playlistsUncheckedCreateWithoutPlaylist_songsInput>
    connectOrCreate?: playlistsCreateOrConnectWithoutPlaylist_songsInput
    connect?: playlistsWhereUniqueInput
  }

  export type songsCreateNestedOneWithoutPlaylist_songsInput = {
    create?: XOR<songsCreateWithoutPlaylist_songsInput, songsUncheckedCreateWithoutPlaylist_songsInput>
    connectOrCreate?: songsCreateOrConnectWithoutPlaylist_songsInput
    connect?: songsWhereUniqueInput
  }

  export type playlistsUpdateOneWithoutPlaylist_songsNestedInput = {
    create?: XOR<playlistsCreateWithoutPlaylist_songsInput, playlistsUncheckedCreateWithoutPlaylist_songsInput>
    connectOrCreate?: playlistsCreateOrConnectWithoutPlaylist_songsInput
    upsert?: playlistsUpsertWithoutPlaylist_songsInput
    disconnect?: playlistsWhereInput | boolean
    delete?: playlistsWhereInput | boolean
    connect?: playlistsWhereUniqueInput
    update?: XOR<XOR<playlistsUpdateToOneWithWhereWithoutPlaylist_songsInput, playlistsUpdateWithoutPlaylist_songsInput>, playlistsUncheckedUpdateWithoutPlaylist_songsInput>
  }

  export type songsUpdateOneWithoutPlaylist_songsNestedInput = {
    create?: XOR<songsCreateWithoutPlaylist_songsInput, songsUncheckedCreateWithoutPlaylist_songsInput>
    connectOrCreate?: songsCreateOrConnectWithoutPlaylist_songsInput
    upsert?: songsUpsertWithoutPlaylist_songsInput
    disconnect?: songsWhereInput | boolean
    delete?: songsWhereInput | boolean
    connect?: songsWhereUniqueInput
    update?: XOR<XOR<songsUpdateToOneWithWhereWithoutPlaylist_songsInput, songsUpdateWithoutPlaylist_songsInput>, songsUncheckedUpdateWithoutPlaylist_songsInput>
  }

  export type playlist_songsCreateNestedManyWithoutPlaylistsInput = {
    create?: XOR<playlist_songsCreateWithoutPlaylistsInput, playlist_songsUncheckedCreateWithoutPlaylistsInput> | playlist_songsCreateWithoutPlaylistsInput[] | playlist_songsUncheckedCreateWithoutPlaylistsInput[]
    connectOrCreate?: playlist_songsCreateOrConnectWithoutPlaylistsInput | playlist_songsCreateOrConnectWithoutPlaylistsInput[]
    createMany?: playlist_songsCreateManyPlaylistsInputEnvelope
    connect?: playlist_songsWhereUniqueInput | playlist_songsWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutPlaylistsInput = {
    create?: XOR<usersCreateWithoutPlaylistsInput, usersUncheckedCreateWithoutPlaylistsInput>
    connectOrCreate?: usersCreateOrConnectWithoutPlaylistsInput
    connect?: usersWhereUniqueInput
  }

  export type playlist_songsUncheckedCreateNestedManyWithoutPlaylistsInput = {
    create?: XOR<playlist_songsCreateWithoutPlaylistsInput, playlist_songsUncheckedCreateWithoutPlaylistsInput> | playlist_songsCreateWithoutPlaylistsInput[] | playlist_songsUncheckedCreateWithoutPlaylistsInput[]
    connectOrCreate?: playlist_songsCreateOrConnectWithoutPlaylistsInput | playlist_songsCreateOrConnectWithoutPlaylistsInput[]
    createMany?: playlist_songsCreateManyPlaylistsInputEnvelope
    connect?: playlist_songsWhereUniqueInput | playlist_songsWhereUniqueInput[]
  }

  export type playlist_songsUpdateManyWithoutPlaylistsNestedInput = {
    create?: XOR<playlist_songsCreateWithoutPlaylistsInput, playlist_songsUncheckedCreateWithoutPlaylistsInput> | playlist_songsCreateWithoutPlaylistsInput[] | playlist_songsUncheckedCreateWithoutPlaylistsInput[]
    connectOrCreate?: playlist_songsCreateOrConnectWithoutPlaylistsInput | playlist_songsCreateOrConnectWithoutPlaylistsInput[]
    upsert?: playlist_songsUpsertWithWhereUniqueWithoutPlaylistsInput | playlist_songsUpsertWithWhereUniqueWithoutPlaylistsInput[]
    createMany?: playlist_songsCreateManyPlaylistsInputEnvelope
    set?: playlist_songsWhereUniqueInput | playlist_songsWhereUniqueInput[]
    disconnect?: playlist_songsWhereUniqueInput | playlist_songsWhereUniqueInput[]
    delete?: playlist_songsWhereUniqueInput | playlist_songsWhereUniqueInput[]
    connect?: playlist_songsWhereUniqueInput | playlist_songsWhereUniqueInput[]
    update?: playlist_songsUpdateWithWhereUniqueWithoutPlaylistsInput | playlist_songsUpdateWithWhereUniqueWithoutPlaylistsInput[]
    updateMany?: playlist_songsUpdateManyWithWhereWithoutPlaylistsInput | playlist_songsUpdateManyWithWhereWithoutPlaylistsInput[]
    deleteMany?: playlist_songsScalarWhereInput | playlist_songsScalarWhereInput[]
  }

  export type usersUpdateOneWithoutPlaylistsNestedInput = {
    create?: XOR<usersCreateWithoutPlaylistsInput, usersUncheckedCreateWithoutPlaylistsInput>
    connectOrCreate?: usersCreateOrConnectWithoutPlaylistsInput
    upsert?: usersUpsertWithoutPlaylistsInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutPlaylistsInput, usersUpdateWithoutPlaylistsInput>, usersUncheckedUpdateWithoutPlaylistsInput>
  }

  export type playlist_songsUncheckedUpdateManyWithoutPlaylistsNestedInput = {
    create?: XOR<playlist_songsCreateWithoutPlaylistsInput, playlist_songsUncheckedCreateWithoutPlaylistsInput> | playlist_songsCreateWithoutPlaylistsInput[] | playlist_songsUncheckedCreateWithoutPlaylistsInput[]
    connectOrCreate?: playlist_songsCreateOrConnectWithoutPlaylistsInput | playlist_songsCreateOrConnectWithoutPlaylistsInput[]
    upsert?: playlist_songsUpsertWithWhereUniqueWithoutPlaylistsInput | playlist_songsUpsertWithWhereUniqueWithoutPlaylistsInput[]
    createMany?: playlist_songsCreateManyPlaylistsInputEnvelope
    set?: playlist_songsWhereUniqueInput | playlist_songsWhereUniqueInput[]
    disconnect?: playlist_songsWhereUniqueInput | playlist_songsWhereUniqueInput[]
    delete?: playlist_songsWhereUniqueInput | playlist_songsWhereUniqueInput[]
    connect?: playlist_songsWhereUniqueInput | playlist_songsWhereUniqueInput[]
    update?: playlist_songsUpdateWithWhereUniqueWithoutPlaylistsInput | playlist_songsUpdateWithWhereUniqueWithoutPlaylistsInput[]
    updateMany?: playlist_songsUpdateManyWithWhereWithoutPlaylistsInput | playlist_songsUpdateManyWithWhereWithoutPlaylistsInput[]
    deleteMany?: playlist_songsScalarWhereInput | playlist_songsScalarWhereInput[]
  }

  export type commentsCreateNestedManyWithoutSongsInput = {
    create?: XOR<commentsCreateWithoutSongsInput, commentsUncheckedCreateWithoutSongsInput> | commentsCreateWithoutSongsInput[] | commentsUncheckedCreateWithoutSongsInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutSongsInput | commentsCreateOrConnectWithoutSongsInput[]
    createMany?: commentsCreateManySongsInputEnvelope
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
  }

  export type playlist_songsCreateNestedManyWithoutSongsInput = {
    create?: XOR<playlist_songsCreateWithoutSongsInput, playlist_songsUncheckedCreateWithoutSongsInput> | playlist_songsCreateWithoutSongsInput[] | playlist_songsUncheckedCreateWithoutSongsInput[]
    connectOrCreate?: playlist_songsCreateOrConnectWithoutSongsInput | playlist_songsCreateOrConnectWithoutSongsInput[]
    createMany?: playlist_songsCreateManySongsInputEnvelope
    connect?: playlist_songsWhereUniqueInput | playlist_songsWhereUniqueInput[]
  }

  export type genresCreateNestedOneWithoutSongsInput = {
    create?: XOR<genresCreateWithoutSongsInput, genresUncheckedCreateWithoutSongsInput>
    connectOrCreate?: genresCreateOrConnectWithoutSongsInput
    connect?: genresWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutSongsInput = {
    create?: XOR<usersCreateWithoutSongsInput, usersUncheckedCreateWithoutSongsInput>
    connectOrCreate?: usersCreateOrConnectWithoutSongsInput
    connect?: usersWhereUniqueInput
  }

  export type commentsUncheckedCreateNestedManyWithoutSongsInput = {
    create?: XOR<commentsCreateWithoutSongsInput, commentsUncheckedCreateWithoutSongsInput> | commentsCreateWithoutSongsInput[] | commentsUncheckedCreateWithoutSongsInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutSongsInput | commentsCreateOrConnectWithoutSongsInput[]
    createMany?: commentsCreateManySongsInputEnvelope
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
  }

  export type playlist_songsUncheckedCreateNestedManyWithoutSongsInput = {
    create?: XOR<playlist_songsCreateWithoutSongsInput, playlist_songsUncheckedCreateWithoutSongsInput> | playlist_songsCreateWithoutSongsInput[] | playlist_songsUncheckedCreateWithoutSongsInput[]
    connectOrCreate?: playlist_songsCreateOrConnectWithoutSongsInput | playlist_songsCreateOrConnectWithoutSongsInput[]
    createMany?: playlist_songsCreateManySongsInputEnvelope
    connect?: playlist_songsWhereUniqueInput | playlist_songsWhereUniqueInput[]
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type commentsUpdateManyWithoutSongsNestedInput = {
    create?: XOR<commentsCreateWithoutSongsInput, commentsUncheckedCreateWithoutSongsInput> | commentsCreateWithoutSongsInput[] | commentsUncheckedCreateWithoutSongsInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutSongsInput | commentsCreateOrConnectWithoutSongsInput[]
    upsert?: commentsUpsertWithWhereUniqueWithoutSongsInput | commentsUpsertWithWhereUniqueWithoutSongsInput[]
    createMany?: commentsCreateManySongsInputEnvelope
    set?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    disconnect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    delete?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    update?: commentsUpdateWithWhereUniqueWithoutSongsInput | commentsUpdateWithWhereUniqueWithoutSongsInput[]
    updateMany?: commentsUpdateManyWithWhereWithoutSongsInput | commentsUpdateManyWithWhereWithoutSongsInput[]
    deleteMany?: commentsScalarWhereInput | commentsScalarWhereInput[]
  }

  export type playlist_songsUpdateManyWithoutSongsNestedInput = {
    create?: XOR<playlist_songsCreateWithoutSongsInput, playlist_songsUncheckedCreateWithoutSongsInput> | playlist_songsCreateWithoutSongsInput[] | playlist_songsUncheckedCreateWithoutSongsInput[]
    connectOrCreate?: playlist_songsCreateOrConnectWithoutSongsInput | playlist_songsCreateOrConnectWithoutSongsInput[]
    upsert?: playlist_songsUpsertWithWhereUniqueWithoutSongsInput | playlist_songsUpsertWithWhereUniqueWithoutSongsInput[]
    createMany?: playlist_songsCreateManySongsInputEnvelope
    set?: playlist_songsWhereUniqueInput | playlist_songsWhereUniqueInput[]
    disconnect?: playlist_songsWhereUniqueInput | playlist_songsWhereUniqueInput[]
    delete?: playlist_songsWhereUniqueInput | playlist_songsWhereUniqueInput[]
    connect?: playlist_songsWhereUniqueInput | playlist_songsWhereUniqueInput[]
    update?: playlist_songsUpdateWithWhereUniqueWithoutSongsInput | playlist_songsUpdateWithWhereUniqueWithoutSongsInput[]
    updateMany?: playlist_songsUpdateManyWithWhereWithoutSongsInput | playlist_songsUpdateManyWithWhereWithoutSongsInput[]
    deleteMany?: playlist_songsScalarWhereInput | playlist_songsScalarWhereInput[]
  }

  export type genresUpdateOneWithoutSongsNestedInput = {
    create?: XOR<genresCreateWithoutSongsInput, genresUncheckedCreateWithoutSongsInput>
    connectOrCreate?: genresCreateOrConnectWithoutSongsInput
    upsert?: genresUpsertWithoutSongsInput
    disconnect?: genresWhereInput | boolean
    delete?: genresWhereInput | boolean
    connect?: genresWhereUniqueInput
    update?: XOR<XOR<genresUpdateToOneWithWhereWithoutSongsInput, genresUpdateWithoutSongsInput>, genresUncheckedUpdateWithoutSongsInput>
  }

  export type usersUpdateOneWithoutSongsNestedInput = {
    create?: XOR<usersCreateWithoutSongsInput, usersUncheckedCreateWithoutSongsInput>
    connectOrCreate?: usersCreateOrConnectWithoutSongsInput
    upsert?: usersUpsertWithoutSongsInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutSongsInput, usersUpdateWithoutSongsInput>, usersUncheckedUpdateWithoutSongsInput>
  }

  export type commentsUncheckedUpdateManyWithoutSongsNestedInput = {
    create?: XOR<commentsCreateWithoutSongsInput, commentsUncheckedCreateWithoutSongsInput> | commentsCreateWithoutSongsInput[] | commentsUncheckedCreateWithoutSongsInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutSongsInput | commentsCreateOrConnectWithoutSongsInput[]
    upsert?: commentsUpsertWithWhereUniqueWithoutSongsInput | commentsUpsertWithWhereUniqueWithoutSongsInput[]
    createMany?: commentsCreateManySongsInputEnvelope
    set?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    disconnect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    delete?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    update?: commentsUpdateWithWhereUniqueWithoutSongsInput | commentsUpdateWithWhereUniqueWithoutSongsInput[]
    updateMany?: commentsUpdateManyWithWhereWithoutSongsInput | commentsUpdateManyWithWhereWithoutSongsInput[]
    deleteMany?: commentsScalarWhereInput | commentsScalarWhereInput[]
  }

  export type playlist_songsUncheckedUpdateManyWithoutSongsNestedInput = {
    create?: XOR<playlist_songsCreateWithoutSongsInput, playlist_songsUncheckedCreateWithoutSongsInput> | playlist_songsCreateWithoutSongsInput[] | playlist_songsUncheckedCreateWithoutSongsInput[]
    connectOrCreate?: playlist_songsCreateOrConnectWithoutSongsInput | playlist_songsCreateOrConnectWithoutSongsInput[]
    upsert?: playlist_songsUpsertWithWhereUniqueWithoutSongsInput | playlist_songsUpsertWithWhereUniqueWithoutSongsInput[]
    createMany?: playlist_songsCreateManySongsInputEnvelope
    set?: playlist_songsWhereUniqueInput | playlist_songsWhereUniqueInput[]
    disconnect?: playlist_songsWhereUniqueInput | playlist_songsWhereUniqueInput[]
    delete?: playlist_songsWhereUniqueInput | playlist_songsWhereUniqueInput[]
    connect?: playlist_songsWhereUniqueInput | playlist_songsWhereUniqueInput[]
    update?: playlist_songsUpdateWithWhereUniqueWithoutSongsInput | playlist_songsUpdateWithWhereUniqueWithoutSongsInput[]
    updateMany?: playlist_songsUpdateManyWithWhereWithoutSongsInput | playlist_songsUpdateManyWithWhereWithoutSongsInput[]
    deleteMany?: playlist_songsScalarWhereInput | playlist_songsScalarWhereInput[]
  }

  export type commentsCreateNestedManyWithoutUsersInput = {
    create?: XOR<commentsCreateWithoutUsersInput, commentsUncheckedCreateWithoutUsersInput> | commentsCreateWithoutUsersInput[] | commentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutUsersInput | commentsCreateOrConnectWithoutUsersInput[]
    createMany?: commentsCreateManyUsersInputEnvelope
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
  }

  export type list_friendsCreateNestedManyWithoutUsers_list_friends_friend_idTousersInput = {
    create?: XOR<list_friendsCreateWithoutUsers_list_friends_friend_idTousersInput, list_friendsUncheckedCreateWithoutUsers_list_friends_friend_idTousersInput> | list_friendsCreateWithoutUsers_list_friends_friend_idTousersInput[] | list_friendsUncheckedCreateWithoutUsers_list_friends_friend_idTousersInput[]
    connectOrCreate?: list_friendsCreateOrConnectWithoutUsers_list_friends_friend_idTousersInput | list_friendsCreateOrConnectWithoutUsers_list_friends_friend_idTousersInput[]
    createMany?: list_friendsCreateManyUsers_list_friends_friend_idTousersInputEnvelope
    connect?: list_friendsWhereUniqueInput | list_friendsWhereUniqueInput[]
  }

  export type list_friendsCreateNestedManyWithoutUsers_list_friends_user_idTousersInput = {
    create?: XOR<list_friendsCreateWithoutUsers_list_friends_user_idTousersInput, list_friendsUncheckedCreateWithoutUsers_list_friends_user_idTousersInput> | list_friendsCreateWithoutUsers_list_friends_user_idTousersInput[] | list_friendsUncheckedCreateWithoutUsers_list_friends_user_idTousersInput[]
    connectOrCreate?: list_friendsCreateOrConnectWithoutUsers_list_friends_user_idTousersInput | list_friendsCreateOrConnectWithoutUsers_list_friends_user_idTousersInput[]
    createMany?: list_friendsCreateManyUsers_list_friends_user_idTousersInputEnvelope
    connect?: list_friendsWhereUniqueInput | list_friendsWhereUniqueInput[]
  }

  export type messagesCreateNestedManyWithoutUsersInput = {
    create?: XOR<messagesCreateWithoutUsersInput, messagesUncheckedCreateWithoutUsersInput> | messagesCreateWithoutUsersInput[] | messagesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutUsersInput | messagesCreateOrConnectWithoutUsersInput[]
    createMany?: messagesCreateManyUsersInputEnvelope
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
  }

  export type playlistsCreateNestedManyWithoutUsersInput = {
    create?: XOR<playlistsCreateWithoutUsersInput, playlistsUncheckedCreateWithoutUsersInput> | playlistsCreateWithoutUsersInput[] | playlistsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: playlistsCreateOrConnectWithoutUsersInput | playlistsCreateOrConnectWithoutUsersInput[]
    createMany?: playlistsCreateManyUsersInputEnvelope
    connect?: playlistsWhereUniqueInput | playlistsWhereUniqueInput[]
  }

  export type songsCreateNestedManyWithoutUsersInput = {
    create?: XOR<songsCreateWithoutUsersInput, songsUncheckedCreateWithoutUsersInput> | songsCreateWithoutUsersInput[] | songsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: songsCreateOrConnectWithoutUsersInput | songsCreateOrConnectWithoutUsersInput[]
    createMany?: songsCreateManyUsersInputEnvelope
    connect?: songsWhereUniqueInput | songsWhereUniqueInput[]
  }

  export type commentsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<commentsCreateWithoutUsersInput, commentsUncheckedCreateWithoutUsersInput> | commentsCreateWithoutUsersInput[] | commentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutUsersInput | commentsCreateOrConnectWithoutUsersInput[]
    createMany?: commentsCreateManyUsersInputEnvelope
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
  }

  export type list_friendsUncheckedCreateNestedManyWithoutUsers_list_friends_friend_idTousersInput = {
    create?: XOR<list_friendsCreateWithoutUsers_list_friends_friend_idTousersInput, list_friendsUncheckedCreateWithoutUsers_list_friends_friend_idTousersInput> | list_friendsCreateWithoutUsers_list_friends_friend_idTousersInput[] | list_friendsUncheckedCreateWithoutUsers_list_friends_friend_idTousersInput[]
    connectOrCreate?: list_friendsCreateOrConnectWithoutUsers_list_friends_friend_idTousersInput | list_friendsCreateOrConnectWithoutUsers_list_friends_friend_idTousersInput[]
    createMany?: list_friendsCreateManyUsers_list_friends_friend_idTousersInputEnvelope
    connect?: list_friendsWhereUniqueInput | list_friendsWhereUniqueInput[]
  }

  export type list_friendsUncheckedCreateNestedManyWithoutUsers_list_friends_user_idTousersInput = {
    create?: XOR<list_friendsCreateWithoutUsers_list_friends_user_idTousersInput, list_friendsUncheckedCreateWithoutUsers_list_friends_user_idTousersInput> | list_friendsCreateWithoutUsers_list_friends_user_idTousersInput[] | list_friendsUncheckedCreateWithoutUsers_list_friends_user_idTousersInput[]
    connectOrCreate?: list_friendsCreateOrConnectWithoutUsers_list_friends_user_idTousersInput | list_friendsCreateOrConnectWithoutUsers_list_friends_user_idTousersInput[]
    createMany?: list_friendsCreateManyUsers_list_friends_user_idTousersInputEnvelope
    connect?: list_friendsWhereUniqueInput | list_friendsWhereUniqueInput[]
  }

  export type messagesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<messagesCreateWithoutUsersInput, messagesUncheckedCreateWithoutUsersInput> | messagesCreateWithoutUsersInput[] | messagesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutUsersInput | messagesCreateOrConnectWithoutUsersInput[]
    createMany?: messagesCreateManyUsersInputEnvelope
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
  }

  export type playlistsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<playlistsCreateWithoutUsersInput, playlistsUncheckedCreateWithoutUsersInput> | playlistsCreateWithoutUsersInput[] | playlistsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: playlistsCreateOrConnectWithoutUsersInput | playlistsCreateOrConnectWithoutUsersInput[]
    createMany?: playlistsCreateManyUsersInputEnvelope
    connect?: playlistsWhereUniqueInput | playlistsWhereUniqueInput[]
  }

  export type songsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<songsCreateWithoutUsersInput, songsUncheckedCreateWithoutUsersInput> | songsCreateWithoutUsersInput[] | songsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: songsCreateOrConnectWithoutUsersInput | songsCreateOrConnectWithoutUsersInput[]
    createMany?: songsCreateManyUsersInputEnvelope
    connect?: songsWhereUniqueInput | songsWhereUniqueInput[]
  }

  export type Enumuser_roleFieldUpdateOperationsInput = {
    set?: $Enums.user_role
  }

  export type commentsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<commentsCreateWithoutUsersInput, commentsUncheckedCreateWithoutUsersInput> | commentsCreateWithoutUsersInput[] | commentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutUsersInput | commentsCreateOrConnectWithoutUsersInput[]
    upsert?: commentsUpsertWithWhereUniqueWithoutUsersInput | commentsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: commentsCreateManyUsersInputEnvelope
    set?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    disconnect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    delete?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    update?: commentsUpdateWithWhereUniqueWithoutUsersInput | commentsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: commentsUpdateManyWithWhereWithoutUsersInput | commentsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: commentsScalarWhereInput | commentsScalarWhereInput[]
  }

  export type list_friendsUpdateManyWithoutUsers_list_friends_friend_idTousersNestedInput = {
    create?: XOR<list_friendsCreateWithoutUsers_list_friends_friend_idTousersInput, list_friendsUncheckedCreateWithoutUsers_list_friends_friend_idTousersInput> | list_friendsCreateWithoutUsers_list_friends_friend_idTousersInput[] | list_friendsUncheckedCreateWithoutUsers_list_friends_friend_idTousersInput[]
    connectOrCreate?: list_friendsCreateOrConnectWithoutUsers_list_friends_friend_idTousersInput | list_friendsCreateOrConnectWithoutUsers_list_friends_friend_idTousersInput[]
    upsert?: list_friendsUpsertWithWhereUniqueWithoutUsers_list_friends_friend_idTousersInput | list_friendsUpsertWithWhereUniqueWithoutUsers_list_friends_friend_idTousersInput[]
    createMany?: list_friendsCreateManyUsers_list_friends_friend_idTousersInputEnvelope
    set?: list_friendsWhereUniqueInput | list_friendsWhereUniqueInput[]
    disconnect?: list_friendsWhereUniqueInput | list_friendsWhereUniqueInput[]
    delete?: list_friendsWhereUniqueInput | list_friendsWhereUniqueInput[]
    connect?: list_friendsWhereUniqueInput | list_friendsWhereUniqueInput[]
    update?: list_friendsUpdateWithWhereUniqueWithoutUsers_list_friends_friend_idTousersInput | list_friendsUpdateWithWhereUniqueWithoutUsers_list_friends_friend_idTousersInput[]
    updateMany?: list_friendsUpdateManyWithWhereWithoutUsers_list_friends_friend_idTousersInput | list_friendsUpdateManyWithWhereWithoutUsers_list_friends_friend_idTousersInput[]
    deleteMany?: list_friendsScalarWhereInput | list_friendsScalarWhereInput[]
  }

  export type list_friendsUpdateManyWithoutUsers_list_friends_user_idTousersNestedInput = {
    create?: XOR<list_friendsCreateWithoutUsers_list_friends_user_idTousersInput, list_friendsUncheckedCreateWithoutUsers_list_friends_user_idTousersInput> | list_friendsCreateWithoutUsers_list_friends_user_idTousersInput[] | list_friendsUncheckedCreateWithoutUsers_list_friends_user_idTousersInput[]
    connectOrCreate?: list_friendsCreateOrConnectWithoutUsers_list_friends_user_idTousersInput | list_friendsCreateOrConnectWithoutUsers_list_friends_user_idTousersInput[]
    upsert?: list_friendsUpsertWithWhereUniqueWithoutUsers_list_friends_user_idTousersInput | list_friendsUpsertWithWhereUniqueWithoutUsers_list_friends_user_idTousersInput[]
    createMany?: list_friendsCreateManyUsers_list_friends_user_idTousersInputEnvelope
    set?: list_friendsWhereUniqueInput | list_friendsWhereUniqueInput[]
    disconnect?: list_friendsWhereUniqueInput | list_friendsWhereUniqueInput[]
    delete?: list_friendsWhereUniqueInput | list_friendsWhereUniqueInput[]
    connect?: list_friendsWhereUniqueInput | list_friendsWhereUniqueInput[]
    update?: list_friendsUpdateWithWhereUniqueWithoutUsers_list_friends_user_idTousersInput | list_friendsUpdateWithWhereUniqueWithoutUsers_list_friends_user_idTousersInput[]
    updateMany?: list_friendsUpdateManyWithWhereWithoutUsers_list_friends_user_idTousersInput | list_friendsUpdateManyWithWhereWithoutUsers_list_friends_user_idTousersInput[]
    deleteMany?: list_friendsScalarWhereInput | list_friendsScalarWhereInput[]
  }

  export type messagesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<messagesCreateWithoutUsersInput, messagesUncheckedCreateWithoutUsersInput> | messagesCreateWithoutUsersInput[] | messagesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutUsersInput | messagesCreateOrConnectWithoutUsersInput[]
    upsert?: messagesUpsertWithWhereUniqueWithoutUsersInput | messagesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: messagesCreateManyUsersInputEnvelope
    set?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    disconnect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    delete?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    update?: messagesUpdateWithWhereUniqueWithoutUsersInput | messagesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: messagesUpdateManyWithWhereWithoutUsersInput | messagesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: messagesScalarWhereInput | messagesScalarWhereInput[]
  }

  export type playlistsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<playlistsCreateWithoutUsersInput, playlistsUncheckedCreateWithoutUsersInput> | playlistsCreateWithoutUsersInput[] | playlistsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: playlistsCreateOrConnectWithoutUsersInput | playlistsCreateOrConnectWithoutUsersInput[]
    upsert?: playlistsUpsertWithWhereUniqueWithoutUsersInput | playlistsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: playlistsCreateManyUsersInputEnvelope
    set?: playlistsWhereUniqueInput | playlistsWhereUniqueInput[]
    disconnect?: playlistsWhereUniqueInput | playlistsWhereUniqueInput[]
    delete?: playlistsWhereUniqueInput | playlistsWhereUniqueInput[]
    connect?: playlistsWhereUniqueInput | playlistsWhereUniqueInput[]
    update?: playlistsUpdateWithWhereUniqueWithoutUsersInput | playlistsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: playlistsUpdateManyWithWhereWithoutUsersInput | playlistsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: playlistsScalarWhereInput | playlistsScalarWhereInput[]
  }

  export type songsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<songsCreateWithoutUsersInput, songsUncheckedCreateWithoutUsersInput> | songsCreateWithoutUsersInput[] | songsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: songsCreateOrConnectWithoutUsersInput | songsCreateOrConnectWithoutUsersInput[]
    upsert?: songsUpsertWithWhereUniqueWithoutUsersInput | songsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: songsCreateManyUsersInputEnvelope
    set?: songsWhereUniqueInput | songsWhereUniqueInput[]
    disconnect?: songsWhereUniqueInput | songsWhereUniqueInput[]
    delete?: songsWhereUniqueInput | songsWhereUniqueInput[]
    connect?: songsWhereUniqueInput | songsWhereUniqueInput[]
    update?: songsUpdateWithWhereUniqueWithoutUsersInput | songsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: songsUpdateManyWithWhereWithoutUsersInput | songsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: songsScalarWhereInput | songsScalarWhereInput[]
  }

  export type commentsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<commentsCreateWithoutUsersInput, commentsUncheckedCreateWithoutUsersInput> | commentsCreateWithoutUsersInput[] | commentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutUsersInput | commentsCreateOrConnectWithoutUsersInput[]
    upsert?: commentsUpsertWithWhereUniqueWithoutUsersInput | commentsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: commentsCreateManyUsersInputEnvelope
    set?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    disconnect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    delete?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    update?: commentsUpdateWithWhereUniqueWithoutUsersInput | commentsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: commentsUpdateManyWithWhereWithoutUsersInput | commentsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: commentsScalarWhereInput | commentsScalarWhereInput[]
  }

  export type list_friendsUncheckedUpdateManyWithoutUsers_list_friends_friend_idTousersNestedInput = {
    create?: XOR<list_friendsCreateWithoutUsers_list_friends_friend_idTousersInput, list_friendsUncheckedCreateWithoutUsers_list_friends_friend_idTousersInput> | list_friendsCreateWithoutUsers_list_friends_friend_idTousersInput[] | list_friendsUncheckedCreateWithoutUsers_list_friends_friend_idTousersInput[]
    connectOrCreate?: list_friendsCreateOrConnectWithoutUsers_list_friends_friend_idTousersInput | list_friendsCreateOrConnectWithoutUsers_list_friends_friend_idTousersInput[]
    upsert?: list_friendsUpsertWithWhereUniqueWithoutUsers_list_friends_friend_idTousersInput | list_friendsUpsertWithWhereUniqueWithoutUsers_list_friends_friend_idTousersInput[]
    createMany?: list_friendsCreateManyUsers_list_friends_friend_idTousersInputEnvelope
    set?: list_friendsWhereUniqueInput | list_friendsWhereUniqueInput[]
    disconnect?: list_friendsWhereUniqueInput | list_friendsWhereUniqueInput[]
    delete?: list_friendsWhereUniqueInput | list_friendsWhereUniqueInput[]
    connect?: list_friendsWhereUniqueInput | list_friendsWhereUniqueInput[]
    update?: list_friendsUpdateWithWhereUniqueWithoutUsers_list_friends_friend_idTousersInput | list_friendsUpdateWithWhereUniqueWithoutUsers_list_friends_friend_idTousersInput[]
    updateMany?: list_friendsUpdateManyWithWhereWithoutUsers_list_friends_friend_idTousersInput | list_friendsUpdateManyWithWhereWithoutUsers_list_friends_friend_idTousersInput[]
    deleteMany?: list_friendsScalarWhereInput | list_friendsScalarWhereInput[]
  }

  export type list_friendsUncheckedUpdateManyWithoutUsers_list_friends_user_idTousersNestedInput = {
    create?: XOR<list_friendsCreateWithoutUsers_list_friends_user_idTousersInput, list_friendsUncheckedCreateWithoutUsers_list_friends_user_idTousersInput> | list_friendsCreateWithoutUsers_list_friends_user_idTousersInput[] | list_friendsUncheckedCreateWithoutUsers_list_friends_user_idTousersInput[]
    connectOrCreate?: list_friendsCreateOrConnectWithoutUsers_list_friends_user_idTousersInput | list_friendsCreateOrConnectWithoutUsers_list_friends_user_idTousersInput[]
    upsert?: list_friendsUpsertWithWhereUniqueWithoutUsers_list_friends_user_idTousersInput | list_friendsUpsertWithWhereUniqueWithoutUsers_list_friends_user_idTousersInput[]
    createMany?: list_friendsCreateManyUsers_list_friends_user_idTousersInputEnvelope
    set?: list_friendsWhereUniqueInput | list_friendsWhereUniqueInput[]
    disconnect?: list_friendsWhereUniqueInput | list_friendsWhereUniqueInput[]
    delete?: list_friendsWhereUniqueInput | list_friendsWhereUniqueInput[]
    connect?: list_friendsWhereUniqueInput | list_friendsWhereUniqueInput[]
    update?: list_friendsUpdateWithWhereUniqueWithoutUsers_list_friends_user_idTousersInput | list_friendsUpdateWithWhereUniqueWithoutUsers_list_friends_user_idTousersInput[]
    updateMany?: list_friendsUpdateManyWithWhereWithoutUsers_list_friends_user_idTousersInput | list_friendsUpdateManyWithWhereWithoutUsers_list_friends_user_idTousersInput[]
    deleteMany?: list_friendsScalarWhereInput | list_friendsScalarWhereInput[]
  }

  export type messagesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<messagesCreateWithoutUsersInput, messagesUncheckedCreateWithoutUsersInput> | messagesCreateWithoutUsersInput[] | messagesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutUsersInput | messagesCreateOrConnectWithoutUsersInput[]
    upsert?: messagesUpsertWithWhereUniqueWithoutUsersInput | messagesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: messagesCreateManyUsersInputEnvelope
    set?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    disconnect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    delete?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    update?: messagesUpdateWithWhereUniqueWithoutUsersInput | messagesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: messagesUpdateManyWithWhereWithoutUsersInput | messagesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: messagesScalarWhereInput | messagesScalarWhereInput[]
  }

  export type playlistsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<playlistsCreateWithoutUsersInput, playlistsUncheckedCreateWithoutUsersInput> | playlistsCreateWithoutUsersInput[] | playlistsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: playlistsCreateOrConnectWithoutUsersInput | playlistsCreateOrConnectWithoutUsersInput[]
    upsert?: playlistsUpsertWithWhereUniqueWithoutUsersInput | playlistsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: playlistsCreateManyUsersInputEnvelope
    set?: playlistsWhereUniqueInput | playlistsWhereUniqueInput[]
    disconnect?: playlistsWhereUniqueInput | playlistsWhereUniqueInput[]
    delete?: playlistsWhereUniqueInput | playlistsWhereUniqueInput[]
    connect?: playlistsWhereUniqueInput | playlistsWhereUniqueInput[]
    update?: playlistsUpdateWithWhereUniqueWithoutUsersInput | playlistsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: playlistsUpdateManyWithWhereWithoutUsersInput | playlistsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: playlistsScalarWhereInput | playlistsScalarWhereInput[]
  }

  export type songsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<songsCreateWithoutUsersInput, songsUncheckedCreateWithoutUsersInput> | songsCreateWithoutUsersInput[] | songsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: songsCreateOrConnectWithoutUsersInput | songsCreateOrConnectWithoutUsersInput[]
    upsert?: songsUpsertWithWhereUniqueWithoutUsersInput | songsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: songsCreateManyUsersInputEnvelope
    set?: songsWhereUniqueInput | songsWhereUniqueInput[]
    disconnect?: songsWhereUniqueInput | songsWhereUniqueInput[]
    delete?: songsWhereUniqueInput | songsWhereUniqueInput[]
    connect?: songsWhereUniqueInput | songsWhereUniqueInput[]
    update?: songsUpdateWithWhereUniqueWithoutUsersInput | songsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: songsUpdateManyWithWhereWithoutUsersInput | songsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: songsScalarWhereInput | songsScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedEnumuser_roleFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Enumuser_roleFieldRefInput<$PrismaModel>
    in?: $Enums.user_role[] | ListEnumuser_roleFieldRefInput<$PrismaModel>
    notIn?: $Enums.user_role[] | ListEnumuser_roleFieldRefInput<$PrismaModel>
    not?: NestedEnumuser_roleFilter<$PrismaModel> | $Enums.user_role
  }

  export type NestedEnumuser_roleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Enumuser_roleFieldRefInput<$PrismaModel>
    in?: $Enums.user_role[] | ListEnumuser_roleFieldRefInput<$PrismaModel>
    notIn?: $Enums.user_role[] | ListEnumuser_roleFieldRefInput<$PrismaModel>
    not?: NestedEnumuser_roleWithAggregatesFilter<$PrismaModel> | $Enums.user_role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumuser_roleFilter<$PrismaModel>
    _max?: NestedEnumuser_roleFilter<$PrismaModel>
  }

  export type commentsCreateWithoutOther_commentsInput = {
    content: string
    discuss_date?: Date | string | null
    comments?: commentsCreateNestedOneWithoutOther_commentsInput
    songs?: songsCreateNestedOneWithoutCommentsInput
    users?: usersCreateNestedOneWithoutCommentsInput
  }

  export type commentsUncheckedCreateWithoutOther_commentsInput = {
    discuss_id?: number
    user_id?: number | null
    song_id?: number | null
    content: string
    discuss_date?: Date | string | null
    replay_discuss_id?: number | null
  }

  export type commentsCreateOrConnectWithoutOther_commentsInput = {
    where: commentsWhereUniqueInput
    create: XOR<commentsCreateWithoutOther_commentsInput, commentsUncheckedCreateWithoutOther_commentsInput>
  }

  export type commentsCreateWithoutCommentsInput = {
    content: string
    discuss_date?: Date | string | null
    other_comments?: commentsCreateNestedManyWithoutCommentsInput
    songs?: songsCreateNestedOneWithoutCommentsInput
    users?: usersCreateNestedOneWithoutCommentsInput
  }

  export type commentsUncheckedCreateWithoutCommentsInput = {
    discuss_id?: number
    user_id?: number | null
    song_id?: number | null
    content: string
    discuss_date?: Date | string | null
    other_comments?: commentsUncheckedCreateNestedManyWithoutCommentsInput
  }

  export type commentsCreateOrConnectWithoutCommentsInput = {
    where: commentsWhereUniqueInput
    create: XOR<commentsCreateWithoutCommentsInput, commentsUncheckedCreateWithoutCommentsInput>
  }

  export type commentsCreateManyCommentsInputEnvelope = {
    data: commentsCreateManyCommentsInput | commentsCreateManyCommentsInput[]
    skipDuplicates?: boolean
  }

  export type songsCreateWithoutCommentsInput = {
    song_name: string
    viewer?: number | null
    duration?: string | null
    popular?: boolean | null
    description?: string | null
    song_image?: string | null
    public_date?: Date | string | null
    file_path?: string | null
    discuss_quality?: number | null
    playlist_songs?: playlist_songsCreateNestedManyWithoutSongsInput
    genres?: genresCreateNestedOneWithoutSongsInput
    users?: usersCreateNestedOneWithoutSongsInput
  }

  export type songsUncheckedCreateWithoutCommentsInput = {
    song_id?: number
    user_id?: number | null
    genre_id?: number | null
    song_name: string
    viewer?: number | null
    duration?: string | null
    popular?: boolean | null
    description?: string | null
    song_image?: string | null
    public_date?: Date | string | null
    file_path?: string | null
    discuss_quality?: number | null
    playlist_songs?: playlist_songsUncheckedCreateNestedManyWithoutSongsInput
  }

  export type songsCreateOrConnectWithoutCommentsInput = {
    where: songsWhereUniqueInput
    create: XOR<songsCreateWithoutCommentsInput, songsUncheckedCreateWithoutCommentsInput>
  }

  export type usersCreateWithoutCommentsInput = {
    account: string
    name: string
    nationality?: string | null
    chanal_name?: string | null
    avatar?: string | null
    desciption?: string | null
    refresh_token?: string | null
    password: string
    banner?: string | null
    role: $Enums.user_role
    list_friends_list_friends_friend_idTousers?: list_friendsCreateNestedManyWithoutUsers_list_friends_friend_idTousersInput
    list_friends_list_friends_user_idTousers?: list_friendsCreateNestedManyWithoutUsers_list_friends_user_idTousersInput
    messages?: messagesCreateNestedManyWithoutUsersInput
    playlists?: playlistsCreateNestedManyWithoutUsersInput
    songs?: songsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutCommentsInput = {
    user_id?: number
    account: string
    name: string
    nationality?: string | null
    chanal_name?: string | null
    avatar?: string | null
    desciption?: string | null
    refresh_token?: string | null
    password: string
    banner?: string | null
    role: $Enums.user_role
    list_friends_list_friends_friend_idTousers?: list_friendsUncheckedCreateNestedManyWithoutUsers_list_friends_friend_idTousersInput
    list_friends_list_friends_user_idTousers?: list_friendsUncheckedCreateNestedManyWithoutUsers_list_friends_user_idTousersInput
    messages?: messagesUncheckedCreateNestedManyWithoutUsersInput
    playlists?: playlistsUncheckedCreateNestedManyWithoutUsersInput
    songs?: songsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutCommentsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutCommentsInput, usersUncheckedCreateWithoutCommentsInput>
  }

  export type commentsUpsertWithoutOther_commentsInput = {
    update: XOR<commentsUpdateWithoutOther_commentsInput, commentsUncheckedUpdateWithoutOther_commentsInput>
    create: XOR<commentsCreateWithoutOther_commentsInput, commentsUncheckedCreateWithoutOther_commentsInput>
    where?: commentsWhereInput
  }

  export type commentsUpdateToOneWithWhereWithoutOther_commentsInput = {
    where?: commentsWhereInput
    data: XOR<commentsUpdateWithoutOther_commentsInput, commentsUncheckedUpdateWithoutOther_commentsInput>
  }

  export type commentsUpdateWithoutOther_commentsInput = {
    content?: StringFieldUpdateOperationsInput | string
    discuss_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: commentsUpdateOneWithoutOther_commentsNestedInput
    songs?: songsUpdateOneWithoutCommentsNestedInput
    users?: usersUpdateOneWithoutCommentsNestedInput
  }

  export type commentsUncheckedUpdateWithoutOther_commentsInput = {
    discuss_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    song_id?: NullableIntFieldUpdateOperationsInput | number | null
    content?: StringFieldUpdateOperationsInput | string
    discuss_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replay_discuss_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type commentsUpsertWithWhereUniqueWithoutCommentsInput = {
    where: commentsWhereUniqueInput
    update: XOR<commentsUpdateWithoutCommentsInput, commentsUncheckedUpdateWithoutCommentsInput>
    create: XOR<commentsCreateWithoutCommentsInput, commentsUncheckedCreateWithoutCommentsInput>
  }

  export type commentsUpdateWithWhereUniqueWithoutCommentsInput = {
    where: commentsWhereUniqueInput
    data: XOR<commentsUpdateWithoutCommentsInput, commentsUncheckedUpdateWithoutCommentsInput>
  }

  export type commentsUpdateManyWithWhereWithoutCommentsInput = {
    where: commentsScalarWhereInput
    data: XOR<commentsUpdateManyMutationInput, commentsUncheckedUpdateManyWithoutCommentsInput>
  }

  export type commentsScalarWhereInput = {
    AND?: commentsScalarWhereInput | commentsScalarWhereInput[]
    OR?: commentsScalarWhereInput[]
    NOT?: commentsScalarWhereInput | commentsScalarWhereInput[]
    discuss_id?: IntFilter<"comments"> | number
    user_id?: IntNullableFilter<"comments"> | number | null
    song_id?: IntNullableFilter<"comments"> | number | null
    content?: StringFilter<"comments"> | string
    discuss_date?: DateTimeNullableFilter<"comments"> | Date | string | null
    replay_discuss_id?: IntNullableFilter<"comments"> | number | null
  }

  export type songsUpsertWithoutCommentsInput = {
    update: XOR<songsUpdateWithoutCommentsInput, songsUncheckedUpdateWithoutCommentsInput>
    create: XOR<songsCreateWithoutCommentsInput, songsUncheckedCreateWithoutCommentsInput>
    where?: songsWhereInput
  }

  export type songsUpdateToOneWithWhereWithoutCommentsInput = {
    where?: songsWhereInput
    data: XOR<songsUpdateWithoutCommentsInput, songsUncheckedUpdateWithoutCommentsInput>
  }

  export type songsUpdateWithoutCommentsInput = {
    song_name?: StringFieldUpdateOperationsInput | string
    viewer?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    popular?: NullableBoolFieldUpdateOperationsInput | boolean | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    song_image?: NullableStringFieldUpdateOperationsInput | string | null
    public_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    file_path?: NullableStringFieldUpdateOperationsInput | string | null
    discuss_quality?: NullableIntFieldUpdateOperationsInput | number | null
    playlist_songs?: playlist_songsUpdateManyWithoutSongsNestedInput
    genres?: genresUpdateOneWithoutSongsNestedInput
    users?: usersUpdateOneWithoutSongsNestedInput
  }

  export type songsUncheckedUpdateWithoutCommentsInput = {
    song_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    genre_id?: NullableIntFieldUpdateOperationsInput | number | null
    song_name?: StringFieldUpdateOperationsInput | string
    viewer?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    popular?: NullableBoolFieldUpdateOperationsInput | boolean | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    song_image?: NullableStringFieldUpdateOperationsInput | string | null
    public_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    file_path?: NullableStringFieldUpdateOperationsInput | string | null
    discuss_quality?: NullableIntFieldUpdateOperationsInput | number | null
    playlist_songs?: playlist_songsUncheckedUpdateManyWithoutSongsNestedInput
  }

  export type usersUpsertWithoutCommentsInput = {
    update: XOR<usersUpdateWithoutCommentsInput, usersUncheckedUpdateWithoutCommentsInput>
    create: XOR<usersCreateWithoutCommentsInput, usersUncheckedCreateWithoutCommentsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutCommentsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutCommentsInput, usersUncheckedUpdateWithoutCommentsInput>
  }

  export type usersUpdateWithoutCommentsInput = {
    account?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    chanal_name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    desciption?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    list_friends_list_friends_friend_idTousers?: list_friendsUpdateManyWithoutUsers_list_friends_friend_idTousersNestedInput
    list_friends_list_friends_user_idTousers?: list_friendsUpdateManyWithoutUsers_list_friends_user_idTousersNestedInput
    messages?: messagesUpdateManyWithoutUsersNestedInput
    playlists?: playlistsUpdateManyWithoutUsersNestedInput
    songs?: songsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutCommentsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    account?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    chanal_name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    desciption?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    list_friends_list_friends_friend_idTousers?: list_friendsUncheckedUpdateManyWithoutUsers_list_friends_friend_idTousersNestedInput
    list_friends_list_friends_user_idTousers?: list_friendsUncheckedUpdateManyWithoutUsers_list_friends_user_idTousersNestedInput
    messages?: messagesUncheckedUpdateManyWithoutUsersNestedInput
    playlists?: playlistsUncheckedUpdateManyWithoutUsersNestedInput
    songs?: songsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type songsCreateWithoutGenresInput = {
    song_name: string
    viewer?: number | null
    duration?: string | null
    popular?: boolean | null
    description?: string | null
    song_image?: string | null
    public_date?: Date | string | null
    file_path?: string | null
    discuss_quality?: number | null
    comments?: commentsCreateNestedManyWithoutSongsInput
    playlist_songs?: playlist_songsCreateNestedManyWithoutSongsInput
    users?: usersCreateNestedOneWithoutSongsInput
  }

  export type songsUncheckedCreateWithoutGenresInput = {
    song_id?: number
    user_id?: number | null
    song_name: string
    viewer?: number | null
    duration?: string | null
    popular?: boolean | null
    description?: string | null
    song_image?: string | null
    public_date?: Date | string | null
    file_path?: string | null
    discuss_quality?: number | null
    comments?: commentsUncheckedCreateNestedManyWithoutSongsInput
    playlist_songs?: playlist_songsUncheckedCreateNestedManyWithoutSongsInput
  }

  export type songsCreateOrConnectWithoutGenresInput = {
    where: songsWhereUniqueInput
    create: XOR<songsCreateWithoutGenresInput, songsUncheckedCreateWithoutGenresInput>
  }

  export type songsCreateManyGenresInputEnvelope = {
    data: songsCreateManyGenresInput | songsCreateManyGenresInput[]
    skipDuplicates?: boolean
  }

  export type songsUpsertWithWhereUniqueWithoutGenresInput = {
    where: songsWhereUniqueInput
    update: XOR<songsUpdateWithoutGenresInput, songsUncheckedUpdateWithoutGenresInput>
    create: XOR<songsCreateWithoutGenresInput, songsUncheckedCreateWithoutGenresInput>
  }

  export type songsUpdateWithWhereUniqueWithoutGenresInput = {
    where: songsWhereUniqueInput
    data: XOR<songsUpdateWithoutGenresInput, songsUncheckedUpdateWithoutGenresInput>
  }

  export type songsUpdateManyWithWhereWithoutGenresInput = {
    where: songsScalarWhereInput
    data: XOR<songsUpdateManyMutationInput, songsUncheckedUpdateManyWithoutGenresInput>
  }

  export type songsScalarWhereInput = {
    AND?: songsScalarWhereInput | songsScalarWhereInput[]
    OR?: songsScalarWhereInput[]
    NOT?: songsScalarWhereInput | songsScalarWhereInput[]
    song_id?: IntFilter<"songs"> | number
    user_id?: IntNullableFilter<"songs"> | number | null
    genre_id?: IntNullableFilter<"songs"> | number | null
    song_name?: StringFilter<"songs"> | string
    viewer?: IntNullableFilter<"songs"> | number | null
    duration?: StringNullableFilter<"songs"> | string | null
    popular?: BoolNullableFilter<"songs"> | boolean | null
    description?: StringNullableFilter<"songs"> | string | null
    song_image?: StringNullableFilter<"songs"> | string | null
    public_date?: DateTimeNullableFilter<"songs"> | Date | string | null
    file_path?: StringNullableFilter<"songs"> | string | null
    discuss_quality?: IntNullableFilter<"songs"> | number | null
  }

  export type usersCreateWithoutList_friends_list_friends_friend_idTousersInput = {
    account: string
    name: string
    nationality?: string | null
    chanal_name?: string | null
    avatar?: string | null
    desciption?: string | null
    refresh_token?: string | null
    password: string
    banner?: string | null
    role: $Enums.user_role
    comments?: commentsCreateNestedManyWithoutUsersInput
    list_friends_list_friends_user_idTousers?: list_friendsCreateNestedManyWithoutUsers_list_friends_user_idTousersInput
    messages?: messagesCreateNestedManyWithoutUsersInput
    playlists?: playlistsCreateNestedManyWithoutUsersInput
    songs?: songsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutList_friends_list_friends_friend_idTousersInput = {
    user_id?: number
    account: string
    name: string
    nationality?: string | null
    chanal_name?: string | null
    avatar?: string | null
    desciption?: string | null
    refresh_token?: string | null
    password: string
    banner?: string | null
    role: $Enums.user_role
    comments?: commentsUncheckedCreateNestedManyWithoutUsersInput
    list_friends_list_friends_user_idTousers?: list_friendsUncheckedCreateNestedManyWithoutUsers_list_friends_user_idTousersInput
    messages?: messagesUncheckedCreateNestedManyWithoutUsersInput
    playlists?: playlistsUncheckedCreateNestedManyWithoutUsersInput
    songs?: songsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutList_friends_list_friends_friend_idTousersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutList_friends_list_friends_friend_idTousersInput, usersUncheckedCreateWithoutList_friends_list_friends_friend_idTousersInput>
  }

  export type usersCreateWithoutList_friends_list_friends_user_idTousersInput = {
    account: string
    name: string
    nationality?: string | null
    chanal_name?: string | null
    avatar?: string | null
    desciption?: string | null
    refresh_token?: string | null
    password: string
    banner?: string | null
    role: $Enums.user_role
    comments?: commentsCreateNestedManyWithoutUsersInput
    list_friends_list_friends_friend_idTousers?: list_friendsCreateNestedManyWithoutUsers_list_friends_friend_idTousersInput
    messages?: messagesCreateNestedManyWithoutUsersInput
    playlists?: playlistsCreateNestedManyWithoutUsersInput
    songs?: songsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutList_friends_list_friends_user_idTousersInput = {
    user_id?: number
    account: string
    name: string
    nationality?: string | null
    chanal_name?: string | null
    avatar?: string | null
    desciption?: string | null
    refresh_token?: string | null
    password: string
    banner?: string | null
    role: $Enums.user_role
    comments?: commentsUncheckedCreateNestedManyWithoutUsersInput
    list_friends_list_friends_friend_idTousers?: list_friendsUncheckedCreateNestedManyWithoutUsers_list_friends_friend_idTousersInput
    messages?: messagesUncheckedCreateNestedManyWithoutUsersInput
    playlists?: playlistsUncheckedCreateNestedManyWithoutUsersInput
    songs?: songsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutList_friends_list_friends_user_idTousersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutList_friends_list_friends_user_idTousersInput, usersUncheckedCreateWithoutList_friends_list_friends_user_idTousersInput>
  }

  export type usersUpsertWithoutList_friends_list_friends_friend_idTousersInput = {
    update: XOR<usersUpdateWithoutList_friends_list_friends_friend_idTousersInput, usersUncheckedUpdateWithoutList_friends_list_friends_friend_idTousersInput>
    create: XOR<usersCreateWithoutList_friends_list_friends_friend_idTousersInput, usersUncheckedCreateWithoutList_friends_list_friends_friend_idTousersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutList_friends_list_friends_friend_idTousersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutList_friends_list_friends_friend_idTousersInput, usersUncheckedUpdateWithoutList_friends_list_friends_friend_idTousersInput>
  }

  export type usersUpdateWithoutList_friends_list_friends_friend_idTousersInput = {
    account?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    chanal_name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    desciption?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    comments?: commentsUpdateManyWithoutUsersNestedInput
    list_friends_list_friends_user_idTousers?: list_friendsUpdateManyWithoutUsers_list_friends_user_idTousersNestedInput
    messages?: messagesUpdateManyWithoutUsersNestedInput
    playlists?: playlistsUpdateManyWithoutUsersNestedInput
    songs?: songsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutList_friends_list_friends_friend_idTousersInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    account?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    chanal_name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    desciption?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    comments?: commentsUncheckedUpdateManyWithoutUsersNestedInput
    list_friends_list_friends_user_idTousers?: list_friendsUncheckedUpdateManyWithoutUsers_list_friends_user_idTousersNestedInput
    messages?: messagesUncheckedUpdateManyWithoutUsersNestedInput
    playlists?: playlistsUncheckedUpdateManyWithoutUsersNestedInput
    songs?: songsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersUpsertWithoutList_friends_list_friends_user_idTousersInput = {
    update: XOR<usersUpdateWithoutList_friends_list_friends_user_idTousersInput, usersUncheckedUpdateWithoutList_friends_list_friends_user_idTousersInput>
    create: XOR<usersCreateWithoutList_friends_list_friends_user_idTousersInput, usersUncheckedCreateWithoutList_friends_list_friends_user_idTousersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutList_friends_list_friends_user_idTousersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutList_friends_list_friends_user_idTousersInput, usersUncheckedUpdateWithoutList_friends_list_friends_user_idTousersInput>
  }

  export type usersUpdateWithoutList_friends_list_friends_user_idTousersInput = {
    account?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    chanal_name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    desciption?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    comments?: commentsUpdateManyWithoutUsersNestedInput
    list_friends_list_friends_friend_idTousers?: list_friendsUpdateManyWithoutUsers_list_friends_friend_idTousersNestedInput
    messages?: messagesUpdateManyWithoutUsersNestedInput
    playlists?: playlistsUpdateManyWithoutUsersNestedInput
    songs?: songsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutList_friends_list_friends_user_idTousersInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    account?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    chanal_name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    desciption?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    comments?: commentsUncheckedUpdateManyWithoutUsersNestedInput
    list_friends_list_friends_friend_idTousers?: list_friendsUncheckedUpdateManyWithoutUsers_list_friends_friend_idTousersNestedInput
    messages?: messagesUncheckedUpdateManyWithoutUsersNestedInput
    playlists?: playlistsUncheckedUpdateManyWithoutUsersNestedInput
    songs?: songsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateWithoutMessagesInput = {
    account: string
    name: string
    nationality?: string | null
    chanal_name?: string | null
    avatar?: string | null
    desciption?: string | null
    refresh_token?: string | null
    password: string
    banner?: string | null
    role: $Enums.user_role
    comments?: commentsCreateNestedManyWithoutUsersInput
    list_friends_list_friends_friend_idTousers?: list_friendsCreateNestedManyWithoutUsers_list_friends_friend_idTousersInput
    list_friends_list_friends_user_idTousers?: list_friendsCreateNestedManyWithoutUsers_list_friends_user_idTousersInput
    playlists?: playlistsCreateNestedManyWithoutUsersInput
    songs?: songsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutMessagesInput = {
    user_id?: number
    account: string
    name: string
    nationality?: string | null
    chanal_name?: string | null
    avatar?: string | null
    desciption?: string | null
    refresh_token?: string | null
    password: string
    banner?: string | null
    role: $Enums.user_role
    comments?: commentsUncheckedCreateNestedManyWithoutUsersInput
    list_friends_list_friends_friend_idTousers?: list_friendsUncheckedCreateNestedManyWithoutUsers_list_friends_friend_idTousersInput
    list_friends_list_friends_user_idTousers?: list_friendsUncheckedCreateNestedManyWithoutUsers_list_friends_user_idTousersInput
    playlists?: playlistsUncheckedCreateNestedManyWithoutUsersInput
    songs?: songsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutMessagesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutMessagesInput, usersUncheckedCreateWithoutMessagesInput>
  }

  export type usersUpsertWithoutMessagesInput = {
    update: XOR<usersUpdateWithoutMessagesInput, usersUncheckedUpdateWithoutMessagesInput>
    create: XOR<usersCreateWithoutMessagesInput, usersUncheckedCreateWithoutMessagesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutMessagesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutMessagesInput, usersUncheckedUpdateWithoutMessagesInput>
  }

  export type usersUpdateWithoutMessagesInput = {
    account?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    chanal_name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    desciption?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    comments?: commentsUpdateManyWithoutUsersNestedInput
    list_friends_list_friends_friend_idTousers?: list_friendsUpdateManyWithoutUsers_list_friends_friend_idTousersNestedInput
    list_friends_list_friends_user_idTousers?: list_friendsUpdateManyWithoutUsers_list_friends_user_idTousersNestedInput
    playlists?: playlistsUpdateManyWithoutUsersNestedInput
    songs?: songsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutMessagesInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    account?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    chanal_name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    desciption?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    comments?: commentsUncheckedUpdateManyWithoutUsersNestedInput
    list_friends_list_friends_friend_idTousers?: list_friendsUncheckedUpdateManyWithoutUsers_list_friends_friend_idTousersNestedInput
    list_friends_list_friends_user_idTousers?: list_friendsUncheckedUpdateManyWithoutUsers_list_friends_user_idTousersNestedInput
    playlists?: playlistsUncheckedUpdateManyWithoutUsersNestedInput
    songs?: songsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type playlistsCreateWithoutPlaylist_songsInput = {
    image_path?: string | null
    playlist_name?: string | null
    description?: string | null
    create_date?: Date | string | null
    users?: usersCreateNestedOneWithoutPlaylistsInput
  }

  export type playlistsUncheckedCreateWithoutPlaylist_songsInput = {
    id?: number
    user_id?: number | null
    image_path?: string | null
    playlist_name?: string | null
    description?: string | null
    create_date?: Date | string | null
  }

  export type playlistsCreateOrConnectWithoutPlaylist_songsInput = {
    where: playlistsWhereUniqueInput
    create: XOR<playlistsCreateWithoutPlaylist_songsInput, playlistsUncheckedCreateWithoutPlaylist_songsInput>
  }

  export type songsCreateWithoutPlaylist_songsInput = {
    song_name: string
    viewer?: number | null
    duration?: string | null
    popular?: boolean | null
    description?: string | null
    song_image?: string | null
    public_date?: Date | string | null
    file_path?: string | null
    discuss_quality?: number | null
    comments?: commentsCreateNestedManyWithoutSongsInput
    genres?: genresCreateNestedOneWithoutSongsInput
    users?: usersCreateNestedOneWithoutSongsInput
  }

  export type songsUncheckedCreateWithoutPlaylist_songsInput = {
    song_id?: number
    user_id?: number | null
    genre_id?: number | null
    song_name: string
    viewer?: number | null
    duration?: string | null
    popular?: boolean | null
    description?: string | null
    song_image?: string | null
    public_date?: Date | string | null
    file_path?: string | null
    discuss_quality?: number | null
    comments?: commentsUncheckedCreateNestedManyWithoutSongsInput
  }

  export type songsCreateOrConnectWithoutPlaylist_songsInput = {
    where: songsWhereUniqueInput
    create: XOR<songsCreateWithoutPlaylist_songsInput, songsUncheckedCreateWithoutPlaylist_songsInput>
  }

  export type playlistsUpsertWithoutPlaylist_songsInput = {
    update: XOR<playlistsUpdateWithoutPlaylist_songsInput, playlistsUncheckedUpdateWithoutPlaylist_songsInput>
    create: XOR<playlistsCreateWithoutPlaylist_songsInput, playlistsUncheckedCreateWithoutPlaylist_songsInput>
    where?: playlistsWhereInput
  }

  export type playlistsUpdateToOneWithWhereWithoutPlaylist_songsInput = {
    where?: playlistsWhereInput
    data: XOR<playlistsUpdateWithoutPlaylist_songsInput, playlistsUncheckedUpdateWithoutPlaylist_songsInput>
  }

  export type playlistsUpdateWithoutPlaylist_songsInput = {
    image_path?: NullableStringFieldUpdateOperationsInput | string | null
    playlist_name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    create_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneWithoutPlaylistsNestedInput
  }

  export type playlistsUncheckedUpdateWithoutPlaylist_songsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    image_path?: NullableStringFieldUpdateOperationsInput | string | null
    playlist_name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    create_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type songsUpsertWithoutPlaylist_songsInput = {
    update: XOR<songsUpdateWithoutPlaylist_songsInput, songsUncheckedUpdateWithoutPlaylist_songsInput>
    create: XOR<songsCreateWithoutPlaylist_songsInput, songsUncheckedCreateWithoutPlaylist_songsInput>
    where?: songsWhereInput
  }

  export type songsUpdateToOneWithWhereWithoutPlaylist_songsInput = {
    where?: songsWhereInput
    data: XOR<songsUpdateWithoutPlaylist_songsInput, songsUncheckedUpdateWithoutPlaylist_songsInput>
  }

  export type songsUpdateWithoutPlaylist_songsInput = {
    song_name?: StringFieldUpdateOperationsInput | string
    viewer?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    popular?: NullableBoolFieldUpdateOperationsInput | boolean | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    song_image?: NullableStringFieldUpdateOperationsInput | string | null
    public_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    file_path?: NullableStringFieldUpdateOperationsInput | string | null
    discuss_quality?: NullableIntFieldUpdateOperationsInput | number | null
    comments?: commentsUpdateManyWithoutSongsNestedInput
    genres?: genresUpdateOneWithoutSongsNestedInput
    users?: usersUpdateOneWithoutSongsNestedInput
  }

  export type songsUncheckedUpdateWithoutPlaylist_songsInput = {
    song_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    genre_id?: NullableIntFieldUpdateOperationsInput | number | null
    song_name?: StringFieldUpdateOperationsInput | string
    viewer?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    popular?: NullableBoolFieldUpdateOperationsInput | boolean | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    song_image?: NullableStringFieldUpdateOperationsInput | string | null
    public_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    file_path?: NullableStringFieldUpdateOperationsInput | string | null
    discuss_quality?: NullableIntFieldUpdateOperationsInput | number | null
    comments?: commentsUncheckedUpdateManyWithoutSongsNestedInput
  }

  export type playlist_songsCreateWithoutPlaylistsInput = {
    songs?: songsCreateNestedOneWithoutPlaylist_songsInput
  }

  export type playlist_songsUncheckedCreateWithoutPlaylistsInput = {
    id?: number
    song_id?: number | null
  }

  export type playlist_songsCreateOrConnectWithoutPlaylistsInput = {
    where: playlist_songsWhereUniqueInput
    create: XOR<playlist_songsCreateWithoutPlaylistsInput, playlist_songsUncheckedCreateWithoutPlaylistsInput>
  }

  export type playlist_songsCreateManyPlaylistsInputEnvelope = {
    data: playlist_songsCreateManyPlaylistsInput | playlist_songsCreateManyPlaylistsInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutPlaylistsInput = {
    account: string
    name: string
    nationality?: string | null
    chanal_name?: string | null
    avatar?: string | null
    desciption?: string | null
    refresh_token?: string | null
    password: string
    banner?: string | null
    role: $Enums.user_role
    comments?: commentsCreateNestedManyWithoutUsersInput
    list_friends_list_friends_friend_idTousers?: list_friendsCreateNestedManyWithoutUsers_list_friends_friend_idTousersInput
    list_friends_list_friends_user_idTousers?: list_friendsCreateNestedManyWithoutUsers_list_friends_user_idTousersInput
    messages?: messagesCreateNestedManyWithoutUsersInput
    songs?: songsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutPlaylistsInput = {
    user_id?: number
    account: string
    name: string
    nationality?: string | null
    chanal_name?: string | null
    avatar?: string | null
    desciption?: string | null
    refresh_token?: string | null
    password: string
    banner?: string | null
    role: $Enums.user_role
    comments?: commentsUncheckedCreateNestedManyWithoutUsersInput
    list_friends_list_friends_friend_idTousers?: list_friendsUncheckedCreateNestedManyWithoutUsers_list_friends_friend_idTousersInput
    list_friends_list_friends_user_idTousers?: list_friendsUncheckedCreateNestedManyWithoutUsers_list_friends_user_idTousersInput
    messages?: messagesUncheckedCreateNestedManyWithoutUsersInput
    songs?: songsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutPlaylistsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutPlaylistsInput, usersUncheckedCreateWithoutPlaylistsInput>
  }

  export type playlist_songsUpsertWithWhereUniqueWithoutPlaylistsInput = {
    where: playlist_songsWhereUniqueInput
    update: XOR<playlist_songsUpdateWithoutPlaylistsInput, playlist_songsUncheckedUpdateWithoutPlaylistsInput>
    create: XOR<playlist_songsCreateWithoutPlaylistsInput, playlist_songsUncheckedCreateWithoutPlaylistsInput>
  }

  export type playlist_songsUpdateWithWhereUniqueWithoutPlaylistsInput = {
    where: playlist_songsWhereUniqueInput
    data: XOR<playlist_songsUpdateWithoutPlaylistsInput, playlist_songsUncheckedUpdateWithoutPlaylistsInput>
  }

  export type playlist_songsUpdateManyWithWhereWithoutPlaylistsInput = {
    where: playlist_songsScalarWhereInput
    data: XOR<playlist_songsUpdateManyMutationInput, playlist_songsUncheckedUpdateManyWithoutPlaylistsInput>
  }

  export type playlist_songsScalarWhereInput = {
    AND?: playlist_songsScalarWhereInput | playlist_songsScalarWhereInput[]
    OR?: playlist_songsScalarWhereInput[]
    NOT?: playlist_songsScalarWhereInput | playlist_songsScalarWhereInput[]
    id?: IntFilter<"playlist_songs"> | number
    playlist_id?: IntNullableFilter<"playlist_songs"> | number | null
    song_id?: IntNullableFilter<"playlist_songs"> | number | null
  }

  export type usersUpsertWithoutPlaylistsInput = {
    update: XOR<usersUpdateWithoutPlaylistsInput, usersUncheckedUpdateWithoutPlaylistsInput>
    create: XOR<usersCreateWithoutPlaylistsInput, usersUncheckedCreateWithoutPlaylistsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutPlaylistsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutPlaylistsInput, usersUncheckedUpdateWithoutPlaylistsInput>
  }

  export type usersUpdateWithoutPlaylistsInput = {
    account?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    chanal_name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    desciption?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    comments?: commentsUpdateManyWithoutUsersNestedInput
    list_friends_list_friends_friend_idTousers?: list_friendsUpdateManyWithoutUsers_list_friends_friend_idTousersNestedInput
    list_friends_list_friends_user_idTousers?: list_friendsUpdateManyWithoutUsers_list_friends_user_idTousersNestedInput
    messages?: messagesUpdateManyWithoutUsersNestedInput
    songs?: songsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutPlaylistsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    account?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    chanal_name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    desciption?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    comments?: commentsUncheckedUpdateManyWithoutUsersNestedInput
    list_friends_list_friends_friend_idTousers?: list_friendsUncheckedUpdateManyWithoutUsers_list_friends_friend_idTousersNestedInput
    list_friends_list_friends_user_idTousers?: list_friendsUncheckedUpdateManyWithoutUsers_list_friends_user_idTousersNestedInput
    messages?: messagesUncheckedUpdateManyWithoutUsersNestedInput
    songs?: songsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type commentsCreateWithoutSongsInput = {
    content: string
    discuss_date?: Date | string | null
    comments?: commentsCreateNestedOneWithoutOther_commentsInput
    other_comments?: commentsCreateNestedManyWithoutCommentsInput
    users?: usersCreateNestedOneWithoutCommentsInput
  }

  export type commentsUncheckedCreateWithoutSongsInput = {
    discuss_id?: number
    user_id?: number | null
    content: string
    discuss_date?: Date | string | null
    replay_discuss_id?: number | null
    other_comments?: commentsUncheckedCreateNestedManyWithoutCommentsInput
  }

  export type commentsCreateOrConnectWithoutSongsInput = {
    where: commentsWhereUniqueInput
    create: XOR<commentsCreateWithoutSongsInput, commentsUncheckedCreateWithoutSongsInput>
  }

  export type commentsCreateManySongsInputEnvelope = {
    data: commentsCreateManySongsInput | commentsCreateManySongsInput[]
    skipDuplicates?: boolean
  }

  export type playlist_songsCreateWithoutSongsInput = {
    playlists?: playlistsCreateNestedOneWithoutPlaylist_songsInput
  }

  export type playlist_songsUncheckedCreateWithoutSongsInput = {
    id?: number
    playlist_id?: number | null
  }

  export type playlist_songsCreateOrConnectWithoutSongsInput = {
    where: playlist_songsWhereUniqueInput
    create: XOR<playlist_songsCreateWithoutSongsInput, playlist_songsUncheckedCreateWithoutSongsInput>
  }

  export type playlist_songsCreateManySongsInputEnvelope = {
    data: playlist_songsCreateManySongsInput | playlist_songsCreateManySongsInput[]
    skipDuplicates?: boolean
  }

  export type genresCreateWithoutSongsInput = {
    name_genre: string
    create_time?: Date | string | null
  }

  export type genresUncheckedCreateWithoutSongsInput = {
    genre_id?: number
    name_genre: string
    create_time?: Date | string | null
  }

  export type genresCreateOrConnectWithoutSongsInput = {
    where: genresWhereUniqueInput
    create: XOR<genresCreateWithoutSongsInput, genresUncheckedCreateWithoutSongsInput>
  }

  export type usersCreateWithoutSongsInput = {
    account: string
    name: string
    nationality?: string | null
    chanal_name?: string | null
    avatar?: string | null
    desciption?: string | null
    refresh_token?: string | null
    password: string
    banner?: string | null
    role: $Enums.user_role
    comments?: commentsCreateNestedManyWithoutUsersInput
    list_friends_list_friends_friend_idTousers?: list_friendsCreateNestedManyWithoutUsers_list_friends_friend_idTousersInput
    list_friends_list_friends_user_idTousers?: list_friendsCreateNestedManyWithoutUsers_list_friends_user_idTousersInput
    messages?: messagesCreateNestedManyWithoutUsersInput
    playlists?: playlistsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutSongsInput = {
    user_id?: number
    account: string
    name: string
    nationality?: string | null
    chanal_name?: string | null
    avatar?: string | null
    desciption?: string | null
    refresh_token?: string | null
    password: string
    banner?: string | null
    role: $Enums.user_role
    comments?: commentsUncheckedCreateNestedManyWithoutUsersInput
    list_friends_list_friends_friend_idTousers?: list_friendsUncheckedCreateNestedManyWithoutUsers_list_friends_friend_idTousersInput
    list_friends_list_friends_user_idTousers?: list_friendsUncheckedCreateNestedManyWithoutUsers_list_friends_user_idTousersInput
    messages?: messagesUncheckedCreateNestedManyWithoutUsersInput
    playlists?: playlistsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutSongsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutSongsInput, usersUncheckedCreateWithoutSongsInput>
  }

  export type commentsUpsertWithWhereUniqueWithoutSongsInput = {
    where: commentsWhereUniqueInput
    update: XOR<commentsUpdateWithoutSongsInput, commentsUncheckedUpdateWithoutSongsInput>
    create: XOR<commentsCreateWithoutSongsInput, commentsUncheckedCreateWithoutSongsInput>
  }

  export type commentsUpdateWithWhereUniqueWithoutSongsInput = {
    where: commentsWhereUniqueInput
    data: XOR<commentsUpdateWithoutSongsInput, commentsUncheckedUpdateWithoutSongsInput>
  }

  export type commentsUpdateManyWithWhereWithoutSongsInput = {
    where: commentsScalarWhereInput
    data: XOR<commentsUpdateManyMutationInput, commentsUncheckedUpdateManyWithoutSongsInput>
  }

  export type playlist_songsUpsertWithWhereUniqueWithoutSongsInput = {
    where: playlist_songsWhereUniqueInput
    update: XOR<playlist_songsUpdateWithoutSongsInput, playlist_songsUncheckedUpdateWithoutSongsInput>
    create: XOR<playlist_songsCreateWithoutSongsInput, playlist_songsUncheckedCreateWithoutSongsInput>
  }

  export type playlist_songsUpdateWithWhereUniqueWithoutSongsInput = {
    where: playlist_songsWhereUniqueInput
    data: XOR<playlist_songsUpdateWithoutSongsInput, playlist_songsUncheckedUpdateWithoutSongsInput>
  }

  export type playlist_songsUpdateManyWithWhereWithoutSongsInput = {
    where: playlist_songsScalarWhereInput
    data: XOR<playlist_songsUpdateManyMutationInput, playlist_songsUncheckedUpdateManyWithoutSongsInput>
  }

  export type genresUpsertWithoutSongsInput = {
    update: XOR<genresUpdateWithoutSongsInput, genresUncheckedUpdateWithoutSongsInput>
    create: XOR<genresCreateWithoutSongsInput, genresUncheckedCreateWithoutSongsInput>
    where?: genresWhereInput
  }

  export type genresUpdateToOneWithWhereWithoutSongsInput = {
    where?: genresWhereInput
    data: XOR<genresUpdateWithoutSongsInput, genresUncheckedUpdateWithoutSongsInput>
  }

  export type genresUpdateWithoutSongsInput = {
    name_genre?: StringFieldUpdateOperationsInput | string
    create_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type genresUncheckedUpdateWithoutSongsInput = {
    genre_id?: IntFieldUpdateOperationsInput | number
    name_genre?: StringFieldUpdateOperationsInput | string
    create_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUpsertWithoutSongsInput = {
    update: XOR<usersUpdateWithoutSongsInput, usersUncheckedUpdateWithoutSongsInput>
    create: XOR<usersCreateWithoutSongsInput, usersUncheckedCreateWithoutSongsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutSongsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutSongsInput, usersUncheckedUpdateWithoutSongsInput>
  }

  export type usersUpdateWithoutSongsInput = {
    account?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    chanal_name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    desciption?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    comments?: commentsUpdateManyWithoutUsersNestedInput
    list_friends_list_friends_friend_idTousers?: list_friendsUpdateManyWithoutUsers_list_friends_friend_idTousersNestedInput
    list_friends_list_friends_user_idTousers?: list_friendsUpdateManyWithoutUsers_list_friends_user_idTousersNestedInput
    messages?: messagesUpdateManyWithoutUsersNestedInput
    playlists?: playlistsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutSongsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    account?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    chanal_name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    desciption?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    comments?: commentsUncheckedUpdateManyWithoutUsersNestedInput
    list_friends_list_friends_friend_idTousers?: list_friendsUncheckedUpdateManyWithoutUsers_list_friends_friend_idTousersNestedInput
    list_friends_list_friends_user_idTousers?: list_friendsUncheckedUpdateManyWithoutUsers_list_friends_user_idTousersNestedInput
    messages?: messagesUncheckedUpdateManyWithoutUsersNestedInput
    playlists?: playlistsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type commentsCreateWithoutUsersInput = {
    content: string
    discuss_date?: Date | string | null
    comments?: commentsCreateNestedOneWithoutOther_commentsInput
    other_comments?: commentsCreateNestedManyWithoutCommentsInput
    songs?: songsCreateNestedOneWithoutCommentsInput
  }

  export type commentsUncheckedCreateWithoutUsersInput = {
    discuss_id?: number
    song_id?: number | null
    content: string
    discuss_date?: Date | string | null
    replay_discuss_id?: number | null
    other_comments?: commentsUncheckedCreateNestedManyWithoutCommentsInput
  }

  export type commentsCreateOrConnectWithoutUsersInput = {
    where: commentsWhereUniqueInput
    create: XOR<commentsCreateWithoutUsersInput, commentsUncheckedCreateWithoutUsersInput>
  }

  export type commentsCreateManyUsersInputEnvelope = {
    data: commentsCreateManyUsersInput | commentsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type list_friendsCreateWithoutUsers_list_friends_friend_idTousersInput = {
    room_chat?: string | null
    users_list_friends_user_idTousers?: usersCreateNestedOneWithoutList_friends_list_friends_user_idTousersInput
  }

  export type list_friendsUncheckedCreateWithoutUsers_list_friends_friend_idTousersInput = {
    id?: number
    user_id?: number | null
    room_chat?: string | null
  }

  export type list_friendsCreateOrConnectWithoutUsers_list_friends_friend_idTousersInput = {
    where: list_friendsWhereUniqueInput
    create: XOR<list_friendsCreateWithoutUsers_list_friends_friend_idTousersInput, list_friendsUncheckedCreateWithoutUsers_list_friends_friend_idTousersInput>
  }

  export type list_friendsCreateManyUsers_list_friends_friend_idTousersInputEnvelope = {
    data: list_friendsCreateManyUsers_list_friends_friend_idTousersInput | list_friendsCreateManyUsers_list_friends_friend_idTousersInput[]
    skipDuplicates?: boolean
  }

  export type list_friendsCreateWithoutUsers_list_friends_user_idTousersInput = {
    room_chat?: string | null
    users_list_friends_friend_idTousers?: usersCreateNestedOneWithoutList_friends_list_friends_friend_idTousersInput
  }

  export type list_friendsUncheckedCreateWithoutUsers_list_friends_user_idTousersInput = {
    id?: number
    friend_id?: number | null
    room_chat?: string | null
  }

  export type list_friendsCreateOrConnectWithoutUsers_list_friends_user_idTousersInput = {
    where: list_friendsWhereUniqueInput
    create: XOR<list_friendsCreateWithoutUsers_list_friends_user_idTousersInput, list_friendsUncheckedCreateWithoutUsers_list_friends_user_idTousersInput>
  }

  export type list_friendsCreateManyUsers_list_friends_user_idTousersInputEnvelope = {
    data: list_friendsCreateManyUsers_list_friends_user_idTousersInput | list_friendsCreateManyUsers_list_friends_user_idTousersInput[]
    skipDuplicates?: boolean
  }

  export type messagesCreateWithoutUsersInput = {
    content_mess?: string | null
    time_send?: Date | string | null
    room_chat?: string | null
  }

  export type messagesUncheckedCreateWithoutUsersInput = {
    id?: number
    content_mess?: string | null
    time_send?: Date | string | null
    room_chat?: string | null
  }

  export type messagesCreateOrConnectWithoutUsersInput = {
    where: messagesWhereUniqueInput
    create: XOR<messagesCreateWithoutUsersInput, messagesUncheckedCreateWithoutUsersInput>
  }

  export type messagesCreateManyUsersInputEnvelope = {
    data: messagesCreateManyUsersInput | messagesCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type playlistsCreateWithoutUsersInput = {
    image_path?: string | null
    playlist_name?: string | null
    description?: string | null
    create_date?: Date | string | null
    playlist_songs?: playlist_songsCreateNestedManyWithoutPlaylistsInput
  }

  export type playlistsUncheckedCreateWithoutUsersInput = {
    id?: number
    image_path?: string | null
    playlist_name?: string | null
    description?: string | null
    create_date?: Date | string | null
    playlist_songs?: playlist_songsUncheckedCreateNestedManyWithoutPlaylistsInput
  }

  export type playlistsCreateOrConnectWithoutUsersInput = {
    where: playlistsWhereUniqueInput
    create: XOR<playlistsCreateWithoutUsersInput, playlistsUncheckedCreateWithoutUsersInput>
  }

  export type playlistsCreateManyUsersInputEnvelope = {
    data: playlistsCreateManyUsersInput | playlistsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type songsCreateWithoutUsersInput = {
    song_name: string
    viewer?: number | null
    duration?: string | null
    popular?: boolean | null
    description?: string | null
    song_image?: string | null
    public_date?: Date | string | null
    file_path?: string | null
    discuss_quality?: number | null
    comments?: commentsCreateNestedManyWithoutSongsInput
    playlist_songs?: playlist_songsCreateNestedManyWithoutSongsInput
    genres?: genresCreateNestedOneWithoutSongsInput
  }

  export type songsUncheckedCreateWithoutUsersInput = {
    song_id?: number
    genre_id?: number | null
    song_name: string
    viewer?: number | null
    duration?: string | null
    popular?: boolean | null
    description?: string | null
    song_image?: string | null
    public_date?: Date | string | null
    file_path?: string | null
    discuss_quality?: number | null
    comments?: commentsUncheckedCreateNestedManyWithoutSongsInput
    playlist_songs?: playlist_songsUncheckedCreateNestedManyWithoutSongsInput
  }

  export type songsCreateOrConnectWithoutUsersInput = {
    where: songsWhereUniqueInput
    create: XOR<songsCreateWithoutUsersInput, songsUncheckedCreateWithoutUsersInput>
  }

  export type songsCreateManyUsersInputEnvelope = {
    data: songsCreateManyUsersInput | songsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type commentsUpsertWithWhereUniqueWithoutUsersInput = {
    where: commentsWhereUniqueInput
    update: XOR<commentsUpdateWithoutUsersInput, commentsUncheckedUpdateWithoutUsersInput>
    create: XOR<commentsCreateWithoutUsersInput, commentsUncheckedCreateWithoutUsersInput>
  }

  export type commentsUpdateWithWhereUniqueWithoutUsersInput = {
    where: commentsWhereUniqueInput
    data: XOR<commentsUpdateWithoutUsersInput, commentsUncheckedUpdateWithoutUsersInput>
  }

  export type commentsUpdateManyWithWhereWithoutUsersInput = {
    where: commentsScalarWhereInput
    data: XOR<commentsUpdateManyMutationInput, commentsUncheckedUpdateManyWithoutUsersInput>
  }

  export type list_friendsUpsertWithWhereUniqueWithoutUsers_list_friends_friend_idTousersInput = {
    where: list_friendsWhereUniqueInput
    update: XOR<list_friendsUpdateWithoutUsers_list_friends_friend_idTousersInput, list_friendsUncheckedUpdateWithoutUsers_list_friends_friend_idTousersInput>
    create: XOR<list_friendsCreateWithoutUsers_list_friends_friend_idTousersInput, list_friendsUncheckedCreateWithoutUsers_list_friends_friend_idTousersInput>
  }

  export type list_friendsUpdateWithWhereUniqueWithoutUsers_list_friends_friend_idTousersInput = {
    where: list_friendsWhereUniqueInput
    data: XOR<list_friendsUpdateWithoutUsers_list_friends_friend_idTousersInput, list_friendsUncheckedUpdateWithoutUsers_list_friends_friend_idTousersInput>
  }

  export type list_friendsUpdateManyWithWhereWithoutUsers_list_friends_friend_idTousersInput = {
    where: list_friendsScalarWhereInput
    data: XOR<list_friendsUpdateManyMutationInput, list_friendsUncheckedUpdateManyWithoutUsers_list_friends_friend_idTousersInput>
  }

  export type list_friendsScalarWhereInput = {
    AND?: list_friendsScalarWhereInput | list_friendsScalarWhereInput[]
    OR?: list_friendsScalarWhereInput[]
    NOT?: list_friendsScalarWhereInput | list_friendsScalarWhereInput[]
    id?: IntFilter<"list_friends"> | number
    user_id?: IntNullableFilter<"list_friends"> | number | null
    friend_id?: IntNullableFilter<"list_friends"> | number | null
    room_chat?: StringNullableFilter<"list_friends"> | string | null
  }

  export type list_friendsUpsertWithWhereUniqueWithoutUsers_list_friends_user_idTousersInput = {
    where: list_friendsWhereUniqueInput
    update: XOR<list_friendsUpdateWithoutUsers_list_friends_user_idTousersInput, list_friendsUncheckedUpdateWithoutUsers_list_friends_user_idTousersInput>
    create: XOR<list_friendsCreateWithoutUsers_list_friends_user_idTousersInput, list_friendsUncheckedCreateWithoutUsers_list_friends_user_idTousersInput>
  }

  export type list_friendsUpdateWithWhereUniqueWithoutUsers_list_friends_user_idTousersInput = {
    where: list_friendsWhereUniqueInput
    data: XOR<list_friendsUpdateWithoutUsers_list_friends_user_idTousersInput, list_friendsUncheckedUpdateWithoutUsers_list_friends_user_idTousersInput>
  }

  export type list_friendsUpdateManyWithWhereWithoutUsers_list_friends_user_idTousersInput = {
    where: list_friendsScalarWhereInput
    data: XOR<list_friendsUpdateManyMutationInput, list_friendsUncheckedUpdateManyWithoutUsers_list_friends_user_idTousersInput>
  }

  export type messagesUpsertWithWhereUniqueWithoutUsersInput = {
    where: messagesWhereUniqueInput
    update: XOR<messagesUpdateWithoutUsersInput, messagesUncheckedUpdateWithoutUsersInput>
    create: XOR<messagesCreateWithoutUsersInput, messagesUncheckedCreateWithoutUsersInput>
  }

  export type messagesUpdateWithWhereUniqueWithoutUsersInput = {
    where: messagesWhereUniqueInput
    data: XOR<messagesUpdateWithoutUsersInput, messagesUncheckedUpdateWithoutUsersInput>
  }

  export type messagesUpdateManyWithWhereWithoutUsersInput = {
    where: messagesScalarWhereInput
    data: XOR<messagesUpdateManyMutationInput, messagesUncheckedUpdateManyWithoutUsersInput>
  }

  export type messagesScalarWhereInput = {
    AND?: messagesScalarWhereInput | messagesScalarWhereInput[]
    OR?: messagesScalarWhereInput[]
    NOT?: messagesScalarWhereInput | messagesScalarWhereInput[]
    id?: IntFilter<"messages"> | number
    id_sender?: IntNullableFilter<"messages"> | number | null
    content_mess?: StringNullableFilter<"messages"> | string | null
    time_send?: DateTimeNullableFilter<"messages"> | Date | string | null
    room_chat?: StringNullableFilter<"messages"> | string | null
  }

  export type playlistsUpsertWithWhereUniqueWithoutUsersInput = {
    where: playlistsWhereUniqueInput
    update: XOR<playlistsUpdateWithoutUsersInput, playlistsUncheckedUpdateWithoutUsersInput>
    create: XOR<playlistsCreateWithoutUsersInput, playlistsUncheckedCreateWithoutUsersInput>
  }

  export type playlistsUpdateWithWhereUniqueWithoutUsersInput = {
    where: playlistsWhereUniqueInput
    data: XOR<playlistsUpdateWithoutUsersInput, playlistsUncheckedUpdateWithoutUsersInput>
  }

  export type playlistsUpdateManyWithWhereWithoutUsersInput = {
    where: playlistsScalarWhereInput
    data: XOR<playlistsUpdateManyMutationInput, playlistsUncheckedUpdateManyWithoutUsersInput>
  }

  export type playlistsScalarWhereInput = {
    AND?: playlistsScalarWhereInput | playlistsScalarWhereInput[]
    OR?: playlistsScalarWhereInput[]
    NOT?: playlistsScalarWhereInput | playlistsScalarWhereInput[]
    id?: IntFilter<"playlists"> | number
    user_id?: IntNullableFilter<"playlists"> | number | null
    image_path?: StringNullableFilter<"playlists"> | string | null
    playlist_name?: StringNullableFilter<"playlists"> | string | null
    description?: StringNullableFilter<"playlists"> | string | null
    create_date?: DateTimeNullableFilter<"playlists"> | Date | string | null
  }

  export type songsUpsertWithWhereUniqueWithoutUsersInput = {
    where: songsWhereUniqueInput
    update: XOR<songsUpdateWithoutUsersInput, songsUncheckedUpdateWithoutUsersInput>
    create: XOR<songsCreateWithoutUsersInput, songsUncheckedCreateWithoutUsersInput>
  }

  export type songsUpdateWithWhereUniqueWithoutUsersInput = {
    where: songsWhereUniqueInput
    data: XOR<songsUpdateWithoutUsersInput, songsUncheckedUpdateWithoutUsersInput>
  }

  export type songsUpdateManyWithWhereWithoutUsersInput = {
    where: songsScalarWhereInput
    data: XOR<songsUpdateManyMutationInput, songsUncheckedUpdateManyWithoutUsersInput>
  }

  export type commentsCreateManyCommentsInput = {
    discuss_id?: number
    user_id?: number | null
    song_id?: number | null
    content: string
    discuss_date?: Date | string | null
  }

  export type commentsUpdateWithoutCommentsInput = {
    content?: StringFieldUpdateOperationsInput | string
    discuss_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    other_comments?: commentsUpdateManyWithoutCommentsNestedInput
    songs?: songsUpdateOneWithoutCommentsNestedInput
    users?: usersUpdateOneWithoutCommentsNestedInput
  }

  export type commentsUncheckedUpdateWithoutCommentsInput = {
    discuss_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    song_id?: NullableIntFieldUpdateOperationsInput | number | null
    content?: StringFieldUpdateOperationsInput | string
    discuss_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    other_comments?: commentsUncheckedUpdateManyWithoutCommentsNestedInput
  }

  export type commentsUncheckedUpdateManyWithoutCommentsInput = {
    discuss_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    song_id?: NullableIntFieldUpdateOperationsInput | number | null
    content?: StringFieldUpdateOperationsInput | string
    discuss_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type songsCreateManyGenresInput = {
    song_id?: number
    user_id?: number | null
    song_name: string
    viewer?: number | null
    duration?: string | null
    popular?: boolean | null
    description?: string | null
    song_image?: string | null
    public_date?: Date | string | null
    file_path?: string | null
    discuss_quality?: number | null
  }

  export type songsUpdateWithoutGenresInput = {
    song_name?: StringFieldUpdateOperationsInput | string
    viewer?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    popular?: NullableBoolFieldUpdateOperationsInput | boolean | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    song_image?: NullableStringFieldUpdateOperationsInput | string | null
    public_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    file_path?: NullableStringFieldUpdateOperationsInput | string | null
    discuss_quality?: NullableIntFieldUpdateOperationsInput | number | null
    comments?: commentsUpdateManyWithoutSongsNestedInput
    playlist_songs?: playlist_songsUpdateManyWithoutSongsNestedInput
    users?: usersUpdateOneWithoutSongsNestedInput
  }

  export type songsUncheckedUpdateWithoutGenresInput = {
    song_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    song_name?: StringFieldUpdateOperationsInput | string
    viewer?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    popular?: NullableBoolFieldUpdateOperationsInput | boolean | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    song_image?: NullableStringFieldUpdateOperationsInput | string | null
    public_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    file_path?: NullableStringFieldUpdateOperationsInput | string | null
    discuss_quality?: NullableIntFieldUpdateOperationsInput | number | null
    comments?: commentsUncheckedUpdateManyWithoutSongsNestedInput
    playlist_songs?: playlist_songsUncheckedUpdateManyWithoutSongsNestedInput
  }

  export type songsUncheckedUpdateManyWithoutGenresInput = {
    song_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    song_name?: StringFieldUpdateOperationsInput | string
    viewer?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    popular?: NullableBoolFieldUpdateOperationsInput | boolean | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    song_image?: NullableStringFieldUpdateOperationsInput | string | null
    public_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    file_path?: NullableStringFieldUpdateOperationsInput | string | null
    discuss_quality?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type playlist_songsCreateManyPlaylistsInput = {
    id?: number
    song_id?: number | null
  }

  export type playlist_songsUpdateWithoutPlaylistsInput = {
    songs?: songsUpdateOneWithoutPlaylist_songsNestedInput
  }

  export type playlist_songsUncheckedUpdateWithoutPlaylistsInput = {
    id?: IntFieldUpdateOperationsInput | number
    song_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type playlist_songsUncheckedUpdateManyWithoutPlaylistsInput = {
    id?: IntFieldUpdateOperationsInput | number
    song_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type commentsCreateManySongsInput = {
    discuss_id?: number
    user_id?: number | null
    content: string
    discuss_date?: Date | string | null
    replay_discuss_id?: number | null
  }

  export type playlist_songsCreateManySongsInput = {
    id?: number
    playlist_id?: number | null
  }

  export type commentsUpdateWithoutSongsInput = {
    content?: StringFieldUpdateOperationsInput | string
    discuss_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: commentsUpdateOneWithoutOther_commentsNestedInput
    other_comments?: commentsUpdateManyWithoutCommentsNestedInput
    users?: usersUpdateOneWithoutCommentsNestedInput
  }

  export type commentsUncheckedUpdateWithoutSongsInput = {
    discuss_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    content?: StringFieldUpdateOperationsInput | string
    discuss_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replay_discuss_id?: NullableIntFieldUpdateOperationsInput | number | null
    other_comments?: commentsUncheckedUpdateManyWithoutCommentsNestedInput
  }

  export type commentsUncheckedUpdateManyWithoutSongsInput = {
    discuss_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    content?: StringFieldUpdateOperationsInput | string
    discuss_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replay_discuss_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type playlist_songsUpdateWithoutSongsInput = {
    playlists?: playlistsUpdateOneWithoutPlaylist_songsNestedInput
  }

  export type playlist_songsUncheckedUpdateWithoutSongsInput = {
    id?: IntFieldUpdateOperationsInput | number
    playlist_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type playlist_songsUncheckedUpdateManyWithoutSongsInput = {
    id?: IntFieldUpdateOperationsInput | number
    playlist_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type commentsCreateManyUsersInput = {
    discuss_id?: number
    song_id?: number | null
    content: string
    discuss_date?: Date | string | null
    replay_discuss_id?: number | null
  }

  export type list_friendsCreateManyUsers_list_friends_friend_idTousersInput = {
    id?: number
    user_id?: number | null
    room_chat?: string | null
  }

  export type list_friendsCreateManyUsers_list_friends_user_idTousersInput = {
    id?: number
    friend_id?: number | null
    room_chat?: string | null
  }

  export type messagesCreateManyUsersInput = {
    id?: number
    content_mess?: string | null
    time_send?: Date | string | null
    room_chat?: string | null
  }

  export type playlistsCreateManyUsersInput = {
    id?: number
    image_path?: string | null
    playlist_name?: string | null
    description?: string | null
    create_date?: Date | string | null
  }

  export type songsCreateManyUsersInput = {
    song_id?: number
    genre_id?: number | null
    song_name: string
    viewer?: number | null
    duration?: string | null
    popular?: boolean | null
    description?: string | null
    song_image?: string | null
    public_date?: Date | string | null
    file_path?: string | null
    discuss_quality?: number | null
  }

  export type commentsUpdateWithoutUsersInput = {
    content?: StringFieldUpdateOperationsInput | string
    discuss_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: commentsUpdateOneWithoutOther_commentsNestedInput
    other_comments?: commentsUpdateManyWithoutCommentsNestedInput
    songs?: songsUpdateOneWithoutCommentsNestedInput
  }

  export type commentsUncheckedUpdateWithoutUsersInput = {
    discuss_id?: IntFieldUpdateOperationsInput | number
    song_id?: NullableIntFieldUpdateOperationsInput | number | null
    content?: StringFieldUpdateOperationsInput | string
    discuss_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replay_discuss_id?: NullableIntFieldUpdateOperationsInput | number | null
    other_comments?: commentsUncheckedUpdateManyWithoutCommentsNestedInput
  }

  export type commentsUncheckedUpdateManyWithoutUsersInput = {
    discuss_id?: IntFieldUpdateOperationsInput | number
    song_id?: NullableIntFieldUpdateOperationsInput | number | null
    content?: StringFieldUpdateOperationsInput | string
    discuss_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replay_discuss_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type list_friendsUpdateWithoutUsers_list_friends_friend_idTousersInput = {
    room_chat?: NullableStringFieldUpdateOperationsInput | string | null
    users_list_friends_user_idTousers?: usersUpdateOneWithoutList_friends_list_friends_user_idTousersNestedInput
  }

  export type list_friendsUncheckedUpdateWithoutUsers_list_friends_friend_idTousersInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    room_chat?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type list_friendsUncheckedUpdateManyWithoutUsers_list_friends_friend_idTousersInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    room_chat?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type list_friendsUpdateWithoutUsers_list_friends_user_idTousersInput = {
    room_chat?: NullableStringFieldUpdateOperationsInput | string | null
    users_list_friends_friend_idTousers?: usersUpdateOneWithoutList_friends_list_friends_friend_idTousersNestedInput
  }

  export type list_friendsUncheckedUpdateWithoutUsers_list_friends_user_idTousersInput = {
    id?: IntFieldUpdateOperationsInput | number
    friend_id?: NullableIntFieldUpdateOperationsInput | number | null
    room_chat?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type list_friendsUncheckedUpdateManyWithoutUsers_list_friends_user_idTousersInput = {
    id?: IntFieldUpdateOperationsInput | number
    friend_id?: NullableIntFieldUpdateOperationsInput | number | null
    room_chat?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type messagesUpdateWithoutUsersInput = {
    content_mess?: NullableStringFieldUpdateOperationsInput | string | null
    time_send?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    room_chat?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type messagesUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    content_mess?: NullableStringFieldUpdateOperationsInput | string | null
    time_send?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    room_chat?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type messagesUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    content_mess?: NullableStringFieldUpdateOperationsInput | string | null
    time_send?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    room_chat?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type playlistsUpdateWithoutUsersInput = {
    image_path?: NullableStringFieldUpdateOperationsInput | string | null
    playlist_name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    create_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    playlist_songs?: playlist_songsUpdateManyWithoutPlaylistsNestedInput
  }

  export type playlistsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    image_path?: NullableStringFieldUpdateOperationsInput | string | null
    playlist_name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    create_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    playlist_songs?: playlist_songsUncheckedUpdateManyWithoutPlaylistsNestedInput
  }

  export type playlistsUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    image_path?: NullableStringFieldUpdateOperationsInput | string | null
    playlist_name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    create_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type songsUpdateWithoutUsersInput = {
    song_name?: StringFieldUpdateOperationsInput | string
    viewer?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    popular?: NullableBoolFieldUpdateOperationsInput | boolean | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    song_image?: NullableStringFieldUpdateOperationsInput | string | null
    public_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    file_path?: NullableStringFieldUpdateOperationsInput | string | null
    discuss_quality?: NullableIntFieldUpdateOperationsInput | number | null
    comments?: commentsUpdateManyWithoutSongsNestedInput
    playlist_songs?: playlist_songsUpdateManyWithoutSongsNestedInput
    genres?: genresUpdateOneWithoutSongsNestedInput
  }

  export type songsUncheckedUpdateWithoutUsersInput = {
    song_id?: IntFieldUpdateOperationsInput | number
    genre_id?: NullableIntFieldUpdateOperationsInput | number | null
    song_name?: StringFieldUpdateOperationsInput | string
    viewer?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    popular?: NullableBoolFieldUpdateOperationsInput | boolean | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    song_image?: NullableStringFieldUpdateOperationsInput | string | null
    public_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    file_path?: NullableStringFieldUpdateOperationsInput | string | null
    discuss_quality?: NullableIntFieldUpdateOperationsInput | number | null
    comments?: commentsUncheckedUpdateManyWithoutSongsNestedInput
    playlist_songs?: playlist_songsUncheckedUpdateManyWithoutSongsNestedInput
  }

  export type songsUncheckedUpdateManyWithoutUsersInput = {
    song_id?: IntFieldUpdateOperationsInput | number
    genre_id?: NullableIntFieldUpdateOperationsInput | number | null
    song_name?: StringFieldUpdateOperationsInput | string
    viewer?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    popular?: NullableBoolFieldUpdateOperationsInput | boolean | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    song_image?: NullableStringFieldUpdateOperationsInput | string | null
    public_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    file_path?: NullableStringFieldUpdateOperationsInput | string | null
    discuss_quality?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}