
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Problem
 * 
 */
export type Problem = $Result.DefaultSelection<Prisma.$ProblemPayload>
/**
 * Model Submission
 * 
 */
export type Submission = $Result.DefaultSelection<Prisma.$SubmissionPayload>
/**
 * Model TestCaseResult
 * 
 */
export type TestCaseResult = $Result.DefaultSelection<Prisma.$TestCaseResultPayload>
/**
 * Model problemSolved
 * 
 */
export type problemSolved = $Result.DefaultSelection<Prisma.$problemSolvedPayload>
/**
 * Model PlayList
 * 
 */
export type PlayList = $Result.DefaultSelection<Prisma.$PlayListPayload>
/**
 * Model ProblemInPlayList
 * 
 */
export type ProblemInPlayList = $Result.DefaultSelection<Prisma.$ProblemInPlayListPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRoles: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type UserRoles = (typeof UserRoles)[keyof typeof UserRoles]


export const Difficulty: {
  EASY: 'EASY',
  MEDIUM: 'MEDIUM',
  HARD: 'HARD'
};

export type Difficulty = (typeof Difficulty)[keyof typeof Difficulty]

}

export type UserRoles = $Enums.UserRoles

export const UserRoles: typeof $Enums.UserRoles

export type Difficulty = $Enums.Difficulty

export const Difficulty: typeof $Enums.Difficulty

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.problem`: Exposes CRUD operations for the **Problem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Problems
    * const problems = await prisma.problem.findMany()
    * ```
    */
  get problem(): Prisma.ProblemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.submission`: Exposes CRUD operations for the **Submission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Submissions
    * const submissions = await prisma.submission.findMany()
    * ```
    */
  get submission(): Prisma.SubmissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.testCaseResult`: Exposes CRUD operations for the **TestCaseResult** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TestCaseResults
    * const testCaseResults = await prisma.testCaseResult.findMany()
    * ```
    */
  get testCaseResult(): Prisma.TestCaseResultDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.problemSolved`: Exposes CRUD operations for the **problemSolved** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProblemSolveds
    * const problemSolveds = await prisma.problemSolved.findMany()
    * ```
    */
  get problemSolved(): Prisma.problemSolvedDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.playList`: Exposes CRUD operations for the **PlayList** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlayLists
    * const playLists = await prisma.playList.findMany()
    * ```
    */
  get playList(): Prisma.PlayListDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.problemInPlayList`: Exposes CRUD operations for the **ProblemInPlayList** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProblemInPlayLists
    * const problemInPlayLists = await prisma.problemInPlayList.findMany()
    * ```
    */
  get problemInPlayList(): Prisma.ProblemInPlayListDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
    User: 'User',
    Problem: 'Problem',
    Submission: 'Submission',
    TestCaseResult: 'TestCaseResult',
    problemSolved: 'problemSolved',
    PlayList: 'PlayList',
    ProblemInPlayList: 'ProblemInPlayList'
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
      modelProps: "user" | "problem" | "submission" | "testCaseResult" | "problemSolved" | "playList" | "problemInPlayList"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Problem: {
        payload: Prisma.$ProblemPayload<ExtArgs>
        fields: Prisma.ProblemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProblemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProblemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>
          }
          findFirst: {
            args: Prisma.ProblemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProblemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>
          }
          findMany: {
            args: Prisma.ProblemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>[]
          }
          create: {
            args: Prisma.ProblemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>
          }
          createMany: {
            args: Prisma.ProblemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProblemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>[]
          }
          delete: {
            args: Prisma.ProblemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>
          }
          update: {
            args: Prisma.ProblemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>
          }
          deleteMany: {
            args: Prisma.ProblemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProblemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProblemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>[]
          }
          upsert: {
            args: Prisma.ProblemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>
          }
          aggregate: {
            args: Prisma.ProblemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProblem>
          }
          groupBy: {
            args: Prisma.ProblemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProblemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProblemCountArgs<ExtArgs>
            result: $Utils.Optional<ProblemCountAggregateOutputType> | number
          }
        }
      }
      Submission: {
        payload: Prisma.$SubmissionPayload<ExtArgs>
        fields: Prisma.SubmissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubmissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubmissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          findFirst: {
            args: Prisma.SubmissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubmissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          findMany: {
            args: Prisma.SubmissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>[]
          }
          create: {
            args: Prisma.SubmissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          createMany: {
            args: Prisma.SubmissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubmissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>[]
          }
          delete: {
            args: Prisma.SubmissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          update: {
            args: Prisma.SubmissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          deleteMany: {
            args: Prisma.SubmissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubmissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubmissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>[]
          }
          upsert: {
            args: Prisma.SubmissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          aggregate: {
            args: Prisma.SubmissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubmission>
          }
          groupBy: {
            args: Prisma.SubmissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubmissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubmissionCountArgs<ExtArgs>
            result: $Utils.Optional<SubmissionCountAggregateOutputType> | number
          }
        }
      }
      TestCaseResult: {
        payload: Prisma.$TestCaseResultPayload<ExtArgs>
        fields: Prisma.TestCaseResultFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TestCaseResultFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCaseResultPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TestCaseResultFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCaseResultPayload>
          }
          findFirst: {
            args: Prisma.TestCaseResultFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCaseResultPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TestCaseResultFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCaseResultPayload>
          }
          findMany: {
            args: Prisma.TestCaseResultFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCaseResultPayload>[]
          }
          create: {
            args: Prisma.TestCaseResultCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCaseResultPayload>
          }
          createMany: {
            args: Prisma.TestCaseResultCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TestCaseResultCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCaseResultPayload>[]
          }
          delete: {
            args: Prisma.TestCaseResultDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCaseResultPayload>
          }
          update: {
            args: Prisma.TestCaseResultUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCaseResultPayload>
          }
          deleteMany: {
            args: Prisma.TestCaseResultDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TestCaseResultUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TestCaseResultUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCaseResultPayload>[]
          }
          upsert: {
            args: Prisma.TestCaseResultUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCaseResultPayload>
          }
          aggregate: {
            args: Prisma.TestCaseResultAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTestCaseResult>
          }
          groupBy: {
            args: Prisma.TestCaseResultGroupByArgs<ExtArgs>
            result: $Utils.Optional<TestCaseResultGroupByOutputType>[]
          }
          count: {
            args: Prisma.TestCaseResultCountArgs<ExtArgs>
            result: $Utils.Optional<TestCaseResultCountAggregateOutputType> | number
          }
        }
      }
      problemSolved: {
        payload: Prisma.$problemSolvedPayload<ExtArgs>
        fields: Prisma.problemSolvedFieldRefs
        operations: {
          findUnique: {
            args: Prisma.problemSolvedFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problemSolvedPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.problemSolvedFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problemSolvedPayload>
          }
          findFirst: {
            args: Prisma.problemSolvedFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problemSolvedPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.problemSolvedFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problemSolvedPayload>
          }
          findMany: {
            args: Prisma.problemSolvedFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problemSolvedPayload>[]
          }
          create: {
            args: Prisma.problemSolvedCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problemSolvedPayload>
          }
          createMany: {
            args: Prisma.problemSolvedCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.problemSolvedCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problemSolvedPayload>[]
          }
          delete: {
            args: Prisma.problemSolvedDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problemSolvedPayload>
          }
          update: {
            args: Prisma.problemSolvedUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problemSolvedPayload>
          }
          deleteMany: {
            args: Prisma.problemSolvedDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.problemSolvedUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.problemSolvedUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problemSolvedPayload>[]
          }
          upsert: {
            args: Prisma.problemSolvedUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problemSolvedPayload>
          }
          aggregate: {
            args: Prisma.ProblemSolvedAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProblemSolved>
          }
          groupBy: {
            args: Prisma.problemSolvedGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProblemSolvedGroupByOutputType>[]
          }
          count: {
            args: Prisma.problemSolvedCountArgs<ExtArgs>
            result: $Utils.Optional<ProblemSolvedCountAggregateOutputType> | number
          }
        }
      }
      PlayList: {
        payload: Prisma.$PlayListPayload<ExtArgs>
        fields: Prisma.PlayListFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlayListFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayListPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlayListFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayListPayload>
          }
          findFirst: {
            args: Prisma.PlayListFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayListPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlayListFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayListPayload>
          }
          findMany: {
            args: Prisma.PlayListFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayListPayload>[]
          }
          create: {
            args: Prisma.PlayListCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayListPayload>
          }
          createMany: {
            args: Prisma.PlayListCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlayListCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayListPayload>[]
          }
          delete: {
            args: Prisma.PlayListDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayListPayload>
          }
          update: {
            args: Prisma.PlayListUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayListPayload>
          }
          deleteMany: {
            args: Prisma.PlayListDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlayListUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlayListUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayListPayload>[]
          }
          upsert: {
            args: Prisma.PlayListUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayListPayload>
          }
          aggregate: {
            args: Prisma.PlayListAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlayList>
          }
          groupBy: {
            args: Prisma.PlayListGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlayListGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlayListCountArgs<ExtArgs>
            result: $Utils.Optional<PlayListCountAggregateOutputType> | number
          }
        }
      }
      ProblemInPlayList: {
        payload: Prisma.$ProblemInPlayListPayload<ExtArgs>
        fields: Prisma.ProblemInPlayListFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProblemInPlayListFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemInPlayListPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProblemInPlayListFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemInPlayListPayload>
          }
          findFirst: {
            args: Prisma.ProblemInPlayListFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemInPlayListPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProblemInPlayListFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemInPlayListPayload>
          }
          findMany: {
            args: Prisma.ProblemInPlayListFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemInPlayListPayload>[]
          }
          create: {
            args: Prisma.ProblemInPlayListCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemInPlayListPayload>
          }
          createMany: {
            args: Prisma.ProblemInPlayListCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProblemInPlayListCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemInPlayListPayload>[]
          }
          delete: {
            args: Prisma.ProblemInPlayListDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemInPlayListPayload>
          }
          update: {
            args: Prisma.ProblemInPlayListUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemInPlayListPayload>
          }
          deleteMany: {
            args: Prisma.ProblemInPlayListDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProblemInPlayListUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProblemInPlayListUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemInPlayListPayload>[]
          }
          upsert: {
            args: Prisma.ProblemInPlayListUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemInPlayListPayload>
          }
          aggregate: {
            args: Prisma.ProblemInPlayListAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProblemInPlayList>
          }
          groupBy: {
            args: Prisma.ProblemInPlayListGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProblemInPlayListGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProblemInPlayListCountArgs<ExtArgs>
            result: $Utils.Optional<ProblemInPlayListCountAggregateOutputType> | number
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
    user?: UserOmit
    problem?: ProblemOmit
    submission?: SubmissionOmit
    testCaseResult?: TestCaseResultOmit
    problemSolved?: problemSolvedOmit
    playList?: PlayListOmit
    problemInPlayList?: ProblemInPlayListOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    problems: number
    submission: number
    problemSolved: number
    playlists: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    problems?: boolean | UserCountOutputTypeCountProblemsArgs
    submission?: boolean | UserCountOutputTypeCountSubmissionArgs
    problemSolved?: boolean | UserCountOutputTypeCountProblemSolvedArgs
    playlists?: boolean | UserCountOutputTypeCountPlaylistsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProblemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProblemWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSubmissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProblemSolvedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: problemSolvedWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPlaylistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayListWhereInput
  }


  /**
   * Count Type ProblemCountOutputType
   */

  export type ProblemCountOutputType = {
    submission: number
    problemSolved: number
    problemInPlayList: number
  }

  export type ProblemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submission?: boolean | ProblemCountOutputTypeCountSubmissionArgs
    problemSolved?: boolean | ProblemCountOutputTypeCountProblemSolvedArgs
    problemInPlayList?: boolean | ProblemCountOutputTypeCountProblemInPlayListArgs
  }

  // Custom InputTypes
  /**
   * ProblemCountOutputType without action
   */
  export type ProblemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemCountOutputType
     */
    select?: ProblemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProblemCountOutputType without action
   */
  export type ProblemCountOutputTypeCountSubmissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
  }

  /**
   * ProblemCountOutputType without action
   */
  export type ProblemCountOutputTypeCountProblemSolvedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: problemSolvedWhereInput
  }

  /**
   * ProblemCountOutputType without action
   */
  export type ProblemCountOutputTypeCountProblemInPlayListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProblemInPlayListWhereInput
  }


  /**
   * Count Type SubmissionCountOutputType
   */

  export type SubmissionCountOutputType = {
    testcaseresult: number
  }

  export type SubmissionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    testcaseresult?: boolean | SubmissionCountOutputTypeCountTestcaseresultArgs
  }

  // Custom InputTypes
  /**
   * SubmissionCountOutputType without action
   */
  export type SubmissionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubmissionCountOutputType
     */
    select?: SubmissionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubmissionCountOutputType without action
   */
  export type SubmissionCountOutputTypeCountTestcaseresultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestCaseResultWhereInput
  }


  /**
   * Count Type PlayListCountOutputType
   */

  export type PlayListCountOutputType = {
    problems: number
  }

  export type PlayListCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    problems?: boolean | PlayListCountOutputTypeCountProblemsArgs
  }

  // Custom InputTypes
  /**
   * PlayListCountOutputType without action
   */
  export type PlayListCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayListCountOutputType
     */
    select?: PlayListCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlayListCountOutputType without action
   */
  export type PlayListCountOutputTypeCountProblemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProblemInPlayListWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    userRole: $Enums.UserRoles | null
    isVerified: boolean | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    userRole: $Enums.UserRoles | null
    isVerified: boolean | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    userRole: number
    isVerified: number
    image: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    userRole?: true
    isVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    userRole?: true
    isVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    userRole?: true
    isVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string
    password: string
    userRole: $Enums.UserRoles
    isVerified: boolean
    image: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    userRole?: boolean
    isVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    problems?: boolean | User$problemsArgs<ExtArgs>
    submission?: boolean | User$submissionArgs<ExtArgs>
    problemSolved?: boolean | User$problemSolvedArgs<ExtArgs>
    playlists?: boolean | User$playlistsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    userRole?: boolean
    isVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    userRole?: boolean
    isVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    userRole?: boolean
    isVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "userRole" | "isVerified" | "image" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    problems?: boolean | User$problemsArgs<ExtArgs>
    submission?: boolean | User$submissionArgs<ExtArgs>
    problemSolved?: boolean | User$problemSolvedArgs<ExtArgs>
    playlists?: boolean | User$playlistsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      problems: Prisma.$ProblemPayload<ExtArgs>[]
      submission: Prisma.$SubmissionPayload<ExtArgs>[]
      problemSolved: Prisma.$problemSolvedPayload<ExtArgs>[]
      playlists: Prisma.$PlayListPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string
      password: string
      userRole: $Enums.UserRoles
      isVerified: boolean
      image: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    problems<T extends User$problemsArgs<ExtArgs> = {}>(args?: Subset<T, User$problemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    submission<T extends User$submissionArgs<ExtArgs> = {}>(args?: Subset<T, User$submissionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    problemSolved<T extends User$problemSolvedArgs<ExtArgs> = {}>(args?: Subset<T, User$problemSolvedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$problemSolvedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    playlists<T extends User$playlistsArgs<ExtArgs> = {}>(args?: Subset<T, User$playlistsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly userRole: FieldRef<"User", 'UserRoles'>
    readonly isVerified: FieldRef<"User", 'Boolean'>
    readonly image: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.problems
   */
  export type User$problemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    where?: ProblemWhereInput
    orderBy?: ProblemOrderByWithRelationInput | ProblemOrderByWithRelationInput[]
    cursor?: ProblemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProblemScalarFieldEnum | ProblemScalarFieldEnum[]
  }

  /**
   * User.submission
   */
  export type User$submissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    cursor?: SubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * User.problemSolved
   */
  export type User$problemSolvedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problemSolved
     */
    select?: problemSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problemSolved
     */
    omit?: problemSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemSolvedInclude<ExtArgs> | null
    where?: problemSolvedWhereInput
    orderBy?: problemSolvedOrderByWithRelationInput | problemSolvedOrderByWithRelationInput[]
    cursor?: problemSolvedWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProblemSolvedScalarFieldEnum | ProblemSolvedScalarFieldEnum[]
  }

  /**
   * User.playlists
   */
  export type User$playlistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayList
     */
    select?: PlayListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayList
     */
    omit?: PlayListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayListInclude<ExtArgs> | null
    where?: PlayListWhereInput
    orderBy?: PlayListOrderByWithRelationInput | PlayListOrderByWithRelationInput[]
    cursor?: PlayListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlayListScalarFieldEnum | PlayListScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Problem
   */

  export type AggregateProblem = {
    _count: ProblemCountAggregateOutputType | null
    _min: ProblemMinAggregateOutputType | null
    _max: ProblemMaxAggregateOutputType | null
  }

  export type ProblemMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    difficulty: $Enums.Difficulty | null
    userId: string | null
    constraints: string | null
    hints: string | null
    editorial: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProblemMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    difficulty: $Enums.Difficulty | null
    userId: string | null
    constraints: string | null
    hints: string | null
    editorial: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProblemCountAggregateOutputType = {
    id: number
    title: number
    description: number
    difficulty: number
    tags: number
    userId: number
    examples: number
    constraints: number
    hints: number
    editorial: number
    testcases: number
    codeSnippet: number
    referenceSolution: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProblemMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    difficulty?: true
    userId?: true
    constraints?: true
    hints?: true
    editorial?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProblemMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    difficulty?: true
    userId?: true
    constraints?: true
    hints?: true
    editorial?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProblemCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    difficulty?: true
    tags?: true
    userId?: true
    examples?: true
    constraints?: true
    hints?: true
    editorial?: true
    testcases?: true
    codeSnippet?: true
    referenceSolution?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProblemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Problem to aggregate.
     */
    where?: ProblemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Problems to fetch.
     */
    orderBy?: ProblemOrderByWithRelationInput | ProblemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProblemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Problems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Problems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Problems
    **/
    _count?: true | ProblemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProblemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProblemMaxAggregateInputType
  }

  export type GetProblemAggregateType<T extends ProblemAggregateArgs> = {
        [P in keyof T & keyof AggregateProblem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProblem[P]>
      : GetScalarType<T[P], AggregateProblem[P]>
  }




  export type ProblemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProblemWhereInput
    orderBy?: ProblemOrderByWithAggregationInput | ProblemOrderByWithAggregationInput[]
    by: ProblemScalarFieldEnum[] | ProblemScalarFieldEnum
    having?: ProblemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProblemCountAggregateInputType | true
    _min?: ProblemMinAggregateInputType
    _max?: ProblemMaxAggregateInputType
  }

  export type ProblemGroupByOutputType = {
    id: string
    title: string
    description: string
    difficulty: $Enums.Difficulty
    tags: string[]
    userId: string
    examples: JsonValue
    constraints: string
    hints: string | null
    editorial: string | null
    testcases: JsonValue
    codeSnippet: JsonValue
    referenceSolution: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: ProblemCountAggregateOutputType | null
    _min: ProblemMinAggregateOutputType | null
    _max: ProblemMaxAggregateOutputType | null
  }

  type GetProblemGroupByPayload<T extends ProblemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProblemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProblemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProblemGroupByOutputType[P]>
            : GetScalarType<T[P], ProblemGroupByOutputType[P]>
        }
      >
    >


  export type ProblemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    difficulty?: boolean
    tags?: boolean
    userId?: boolean
    examples?: boolean
    constraints?: boolean
    hints?: boolean
    editorial?: boolean
    testcases?: boolean
    codeSnippet?: boolean
    referenceSolution?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    submission?: boolean | Problem$submissionArgs<ExtArgs>
    problemSolved?: boolean | Problem$problemSolvedArgs<ExtArgs>
    problemInPlayList?: boolean | Problem$problemInPlayListArgs<ExtArgs>
    _count?: boolean | ProblemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problem"]>

  export type ProblemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    difficulty?: boolean
    tags?: boolean
    userId?: boolean
    examples?: boolean
    constraints?: boolean
    hints?: boolean
    editorial?: boolean
    testcases?: boolean
    codeSnippet?: boolean
    referenceSolution?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problem"]>

  export type ProblemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    difficulty?: boolean
    tags?: boolean
    userId?: boolean
    examples?: boolean
    constraints?: boolean
    hints?: boolean
    editorial?: boolean
    testcases?: boolean
    codeSnippet?: boolean
    referenceSolution?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problem"]>

  export type ProblemSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    difficulty?: boolean
    tags?: boolean
    userId?: boolean
    examples?: boolean
    constraints?: boolean
    hints?: boolean
    editorial?: boolean
    testcases?: boolean
    codeSnippet?: boolean
    referenceSolution?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProblemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "difficulty" | "tags" | "userId" | "examples" | "constraints" | "hints" | "editorial" | "testcases" | "codeSnippet" | "referenceSolution" | "createdAt" | "updatedAt", ExtArgs["result"]["problem"]>
  export type ProblemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    submission?: boolean | Problem$submissionArgs<ExtArgs>
    problemSolved?: boolean | Problem$problemSolvedArgs<ExtArgs>
    problemInPlayList?: boolean | Problem$problemInPlayListArgs<ExtArgs>
    _count?: boolean | ProblemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProblemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProblemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProblemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Problem"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      submission: Prisma.$SubmissionPayload<ExtArgs>[]
      problemSolved: Prisma.$problemSolvedPayload<ExtArgs>[]
      problemInPlayList: Prisma.$ProblemInPlayListPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      difficulty: $Enums.Difficulty
      tags: string[]
      userId: string
      examples: Prisma.JsonValue
      constraints: string
      hints: string | null
      editorial: string | null
      testcases: Prisma.JsonValue
      codeSnippet: Prisma.JsonValue
      referenceSolution: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["problem"]>
    composites: {}
  }

  type ProblemGetPayload<S extends boolean | null | undefined | ProblemDefaultArgs> = $Result.GetResult<Prisma.$ProblemPayload, S>

  type ProblemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProblemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProblemCountAggregateInputType | true
    }

  export interface ProblemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Problem'], meta: { name: 'Problem' } }
    /**
     * Find zero or one Problem that matches the filter.
     * @param {ProblemFindUniqueArgs} args - Arguments to find a Problem
     * @example
     * // Get one Problem
     * const problem = await prisma.problem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProblemFindUniqueArgs>(args: SelectSubset<T, ProblemFindUniqueArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Problem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProblemFindUniqueOrThrowArgs} args - Arguments to find a Problem
     * @example
     * // Get one Problem
     * const problem = await prisma.problem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProblemFindUniqueOrThrowArgs>(args: SelectSubset<T, ProblemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Problem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemFindFirstArgs} args - Arguments to find a Problem
     * @example
     * // Get one Problem
     * const problem = await prisma.problem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProblemFindFirstArgs>(args?: SelectSubset<T, ProblemFindFirstArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Problem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemFindFirstOrThrowArgs} args - Arguments to find a Problem
     * @example
     * // Get one Problem
     * const problem = await prisma.problem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProblemFindFirstOrThrowArgs>(args?: SelectSubset<T, ProblemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Problems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Problems
     * const problems = await prisma.problem.findMany()
     * 
     * // Get first 10 Problems
     * const problems = await prisma.problem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const problemWithIdOnly = await prisma.problem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProblemFindManyArgs>(args?: SelectSubset<T, ProblemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Problem.
     * @param {ProblemCreateArgs} args - Arguments to create a Problem.
     * @example
     * // Create one Problem
     * const Problem = await prisma.problem.create({
     *   data: {
     *     // ... data to create a Problem
     *   }
     * })
     * 
     */
    create<T extends ProblemCreateArgs>(args: SelectSubset<T, ProblemCreateArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Problems.
     * @param {ProblemCreateManyArgs} args - Arguments to create many Problems.
     * @example
     * // Create many Problems
     * const problem = await prisma.problem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProblemCreateManyArgs>(args?: SelectSubset<T, ProblemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Problems and returns the data saved in the database.
     * @param {ProblemCreateManyAndReturnArgs} args - Arguments to create many Problems.
     * @example
     * // Create many Problems
     * const problem = await prisma.problem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Problems and only return the `id`
     * const problemWithIdOnly = await prisma.problem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProblemCreateManyAndReturnArgs>(args?: SelectSubset<T, ProblemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Problem.
     * @param {ProblemDeleteArgs} args - Arguments to delete one Problem.
     * @example
     * // Delete one Problem
     * const Problem = await prisma.problem.delete({
     *   where: {
     *     // ... filter to delete one Problem
     *   }
     * })
     * 
     */
    delete<T extends ProblemDeleteArgs>(args: SelectSubset<T, ProblemDeleteArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Problem.
     * @param {ProblemUpdateArgs} args - Arguments to update one Problem.
     * @example
     * // Update one Problem
     * const problem = await prisma.problem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProblemUpdateArgs>(args: SelectSubset<T, ProblemUpdateArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Problems.
     * @param {ProblemDeleteManyArgs} args - Arguments to filter Problems to delete.
     * @example
     * // Delete a few Problems
     * const { count } = await prisma.problem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProblemDeleteManyArgs>(args?: SelectSubset<T, ProblemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Problems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Problems
     * const problem = await prisma.problem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProblemUpdateManyArgs>(args: SelectSubset<T, ProblemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Problems and returns the data updated in the database.
     * @param {ProblemUpdateManyAndReturnArgs} args - Arguments to update many Problems.
     * @example
     * // Update many Problems
     * const problem = await prisma.problem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Problems and only return the `id`
     * const problemWithIdOnly = await prisma.problem.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProblemUpdateManyAndReturnArgs>(args: SelectSubset<T, ProblemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Problem.
     * @param {ProblemUpsertArgs} args - Arguments to update or create a Problem.
     * @example
     * // Update or create a Problem
     * const problem = await prisma.problem.upsert({
     *   create: {
     *     // ... data to create a Problem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Problem we want to update
     *   }
     * })
     */
    upsert<T extends ProblemUpsertArgs>(args: SelectSubset<T, ProblemUpsertArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Problems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemCountArgs} args - Arguments to filter Problems to count.
     * @example
     * // Count the number of Problems
     * const count = await prisma.problem.count({
     *   where: {
     *     // ... the filter for the Problems we want to count
     *   }
     * })
    **/
    count<T extends ProblemCountArgs>(
      args?: Subset<T, ProblemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProblemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Problem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProblemAggregateArgs>(args: Subset<T, ProblemAggregateArgs>): Prisma.PrismaPromise<GetProblemAggregateType<T>>

    /**
     * Group by Problem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemGroupByArgs} args - Group by arguments.
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
      T extends ProblemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProblemGroupByArgs['orderBy'] }
        : { orderBy?: ProblemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProblemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProblemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Problem model
   */
  readonly fields: ProblemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Problem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProblemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    submission<T extends Problem$submissionArgs<ExtArgs> = {}>(args?: Subset<T, Problem$submissionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    problemSolved<T extends Problem$problemSolvedArgs<ExtArgs> = {}>(args?: Subset<T, Problem$problemSolvedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$problemSolvedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    problemInPlayList<T extends Problem$problemInPlayListArgs<ExtArgs> = {}>(args?: Subset<T, Problem$problemInPlayListArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemInPlayListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Problem model
   */
  interface ProblemFieldRefs {
    readonly id: FieldRef<"Problem", 'String'>
    readonly title: FieldRef<"Problem", 'String'>
    readonly description: FieldRef<"Problem", 'String'>
    readonly difficulty: FieldRef<"Problem", 'Difficulty'>
    readonly tags: FieldRef<"Problem", 'String[]'>
    readonly userId: FieldRef<"Problem", 'String'>
    readonly examples: FieldRef<"Problem", 'Json'>
    readonly constraints: FieldRef<"Problem", 'String'>
    readonly hints: FieldRef<"Problem", 'String'>
    readonly editorial: FieldRef<"Problem", 'String'>
    readonly testcases: FieldRef<"Problem", 'Json'>
    readonly codeSnippet: FieldRef<"Problem", 'Json'>
    readonly referenceSolution: FieldRef<"Problem", 'Json'>
    readonly createdAt: FieldRef<"Problem", 'DateTime'>
    readonly updatedAt: FieldRef<"Problem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Problem findUnique
   */
  export type ProblemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter, which Problem to fetch.
     */
    where: ProblemWhereUniqueInput
  }

  /**
   * Problem findUniqueOrThrow
   */
  export type ProblemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter, which Problem to fetch.
     */
    where: ProblemWhereUniqueInput
  }

  /**
   * Problem findFirst
   */
  export type ProblemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter, which Problem to fetch.
     */
    where?: ProblemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Problems to fetch.
     */
    orderBy?: ProblemOrderByWithRelationInput | ProblemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Problems.
     */
    cursor?: ProblemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Problems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Problems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Problems.
     */
    distinct?: ProblemScalarFieldEnum | ProblemScalarFieldEnum[]
  }

  /**
   * Problem findFirstOrThrow
   */
  export type ProblemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter, which Problem to fetch.
     */
    where?: ProblemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Problems to fetch.
     */
    orderBy?: ProblemOrderByWithRelationInput | ProblemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Problems.
     */
    cursor?: ProblemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Problems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Problems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Problems.
     */
    distinct?: ProblemScalarFieldEnum | ProblemScalarFieldEnum[]
  }

  /**
   * Problem findMany
   */
  export type ProblemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter, which Problems to fetch.
     */
    where?: ProblemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Problems to fetch.
     */
    orderBy?: ProblemOrderByWithRelationInput | ProblemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Problems.
     */
    cursor?: ProblemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Problems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Problems.
     */
    skip?: number
    distinct?: ProblemScalarFieldEnum | ProblemScalarFieldEnum[]
  }

  /**
   * Problem create
   */
  export type ProblemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * The data needed to create a Problem.
     */
    data: XOR<ProblemCreateInput, ProblemUncheckedCreateInput>
  }

  /**
   * Problem createMany
   */
  export type ProblemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Problems.
     */
    data: ProblemCreateManyInput | ProblemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Problem createManyAndReturn
   */
  export type ProblemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * The data used to create many Problems.
     */
    data: ProblemCreateManyInput | ProblemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Problem update
   */
  export type ProblemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * The data needed to update a Problem.
     */
    data: XOR<ProblemUpdateInput, ProblemUncheckedUpdateInput>
    /**
     * Choose, which Problem to update.
     */
    where: ProblemWhereUniqueInput
  }

  /**
   * Problem updateMany
   */
  export type ProblemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Problems.
     */
    data: XOR<ProblemUpdateManyMutationInput, ProblemUncheckedUpdateManyInput>
    /**
     * Filter which Problems to update
     */
    where?: ProblemWhereInput
    /**
     * Limit how many Problems to update.
     */
    limit?: number
  }

  /**
   * Problem updateManyAndReturn
   */
  export type ProblemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * The data used to update Problems.
     */
    data: XOR<ProblemUpdateManyMutationInput, ProblemUncheckedUpdateManyInput>
    /**
     * Filter which Problems to update
     */
    where?: ProblemWhereInput
    /**
     * Limit how many Problems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Problem upsert
   */
  export type ProblemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * The filter to search for the Problem to update in case it exists.
     */
    where: ProblemWhereUniqueInput
    /**
     * In case the Problem found by the `where` argument doesn't exist, create a new Problem with this data.
     */
    create: XOR<ProblemCreateInput, ProblemUncheckedCreateInput>
    /**
     * In case the Problem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProblemUpdateInput, ProblemUncheckedUpdateInput>
  }

  /**
   * Problem delete
   */
  export type ProblemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter which Problem to delete.
     */
    where: ProblemWhereUniqueInput
  }

  /**
   * Problem deleteMany
   */
  export type ProblemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Problems to delete
     */
    where?: ProblemWhereInput
    /**
     * Limit how many Problems to delete.
     */
    limit?: number
  }

  /**
   * Problem.submission
   */
  export type Problem$submissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    cursor?: SubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Problem.problemSolved
   */
  export type Problem$problemSolvedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problemSolved
     */
    select?: problemSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problemSolved
     */
    omit?: problemSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemSolvedInclude<ExtArgs> | null
    where?: problemSolvedWhereInput
    orderBy?: problemSolvedOrderByWithRelationInput | problemSolvedOrderByWithRelationInput[]
    cursor?: problemSolvedWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProblemSolvedScalarFieldEnum | ProblemSolvedScalarFieldEnum[]
  }

  /**
   * Problem.problemInPlayList
   */
  export type Problem$problemInPlayListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemInPlayList
     */
    select?: ProblemInPlayListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemInPlayList
     */
    omit?: ProblemInPlayListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInPlayListInclude<ExtArgs> | null
    where?: ProblemInPlayListWhereInput
    orderBy?: ProblemInPlayListOrderByWithRelationInput | ProblemInPlayListOrderByWithRelationInput[]
    cursor?: ProblemInPlayListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProblemInPlayListScalarFieldEnum | ProblemInPlayListScalarFieldEnum[]
  }

  /**
   * Problem without action
   */
  export type ProblemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
  }


  /**
   * Model Submission
   */

  export type AggregateSubmission = {
    _count: SubmissionCountAggregateOutputType | null
    _min: SubmissionMinAggregateOutputType | null
    _max: SubmissionMaxAggregateOutputType | null
  }

  export type SubmissionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    problemId: string | null
    stdin: string | null
    stdout: string | null
    stderr: string | null
    compileOutput: string | null
    status: string | null
    memory: string | null
    time: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubmissionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    problemId: string | null
    stdin: string | null
    stdout: string | null
    stderr: string | null
    compileOutput: string | null
    status: string | null
    memory: string | null
    time: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubmissionCountAggregateOutputType = {
    id: number
    userId: number
    problemId: number
    sourceCode: number
    stdin: number
    stdout: number
    stderr: number
    compileOutput: number
    status: number
    memory: number
    time: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubmissionMinAggregateInputType = {
    id?: true
    userId?: true
    problemId?: true
    stdin?: true
    stdout?: true
    stderr?: true
    compileOutput?: true
    status?: true
    memory?: true
    time?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubmissionMaxAggregateInputType = {
    id?: true
    userId?: true
    problemId?: true
    stdin?: true
    stdout?: true
    stderr?: true
    compileOutput?: true
    status?: true
    memory?: true
    time?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubmissionCountAggregateInputType = {
    id?: true
    userId?: true
    problemId?: true
    sourceCode?: true
    stdin?: true
    stdout?: true
    stderr?: true
    compileOutput?: true
    status?: true
    memory?: true
    time?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubmissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Submission to aggregate.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Submissions
    **/
    _count?: true | SubmissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubmissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubmissionMaxAggregateInputType
  }

  export type GetSubmissionAggregateType<T extends SubmissionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubmission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubmission[P]>
      : GetScalarType<T[P], AggregateSubmission[P]>
  }




  export type SubmissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithAggregationInput | SubmissionOrderByWithAggregationInput[]
    by: SubmissionScalarFieldEnum[] | SubmissionScalarFieldEnum
    having?: SubmissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubmissionCountAggregateInputType | true
    _min?: SubmissionMinAggregateInputType
    _max?: SubmissionMaxAggregateInputType
  }

  export type SubmissionGroupByOutputType = {
    id: string
    userId: string
    problemId: string
    sourceCode: JsonValue
    stdin: string | null
    stdout: string | null
    stderr: string | null
    compileOutput: string | null
    status: string
    memory: string | null
    time: string | null
    createdAt: Date
    updatedAt: Date
    _count: SubmissionCountAggregateOutputType | null
    _min: SubmissionMinAggregateOutputType | null
    _max: SubmissionMaxAggregateOutputType | null
  }

  type GetSubmissionGroupByPayload<T extends SubmissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubmissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubmissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubmissionGroupByOutputType[P]>
            : GetScalarType<T[P], SubmissionGroupByOutputType[P]>
        }
      >
    >


  export type SubmissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    problemId?: boolean
    sourceCode?: boolean
    stdin?: boolean
    stdout?: boolean
    stderr?: boolean
    compileOutput?: boolean
    status?: boolean
    memory?: boolean
    time?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
    testcaseresult?: boolean | Submission$testcaseresultArgs<ExtArgs>
    _count?: boolean | SubmissionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["submission"]>

  export type SubmissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    problemId?: boolean
    sourceCode?: boolean
    stdin?: boolean
    stdout?: boolean
    stderr?: boolean
    compileOutput?: boolean
    status?: boolean
    memory?: boolean
    time?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["submission"]>

  export type SubmissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    problemId?: boolean
    sourceCode?: boolean
    stdin?: boolean
    stdout?: boolean
    stderr?: boolean
    compileOutput?: boolean
    status?: boolean
    memory?: boolean
    time?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["submission"]>

  export type SubmissionSelectScalar = {
    id?: boolean
    userId?: boolean
    problemId?: boolean
    sourceCode?: boolean
    stdin?: boolean
    stdout?: boolean
    stderr?: boolean
    compileOutput?: boolean
    status?: boolean
    memory?: boolean
    time?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SubmissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "problemId" | "sourceCode" | "stdin" | "stdout" | "stderr" | "compileOutput" | "status" | "memory" | "time" | "createdAt" | "updatedAt", ExtArgs["result"]["submission"]>
  export type SubmissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
    testcaseresult?: boolean | Submission$testcaseresultArgs<ExtArgs>
    _count?: boolean | SubmissionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubmissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }
  export type SubmissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }

  export type $SubmissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Submission"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      problem: Prisma.$ProblemPayload<ExtArgs>
      testcaseresult: Prisma.$TestCaseResultPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      problemId: string
      sourceCode: Prisma.JsonValue
      stdin: string | null
      stdout: string | null
      stderr: string | null
      compileOutput: string | null
      status: string
      memory: string | null
      time: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["submission"]>
    composites: {}
  }

  type SubmissionGetPayload<S extends boolean | null | undefined | SubmissionDefaultArgs> = $Result.GetResult<Prisma.$SubmissionPayload, S>

  type SubmissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubmissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubmissionCountAggregateInputType | true
    }

  export interface SubmissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Submission'], meta: { name: 'Submission' } }
    /**
     * Find zero or one Submission that matches the filter.
     * @param {SubmissionFindUniqueArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubmissionFindUniqueArgs>(args: SelectSubset<T, SubmissionFindUniqueArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Submission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubmissionFindUniqueOrThrowArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubmissionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Submission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindFirstArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubmissionFindFirstArgs>(args?: SelectSubset<T, SubmissionFindFirstArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Submission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindFirstOrThrowArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubmissionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Submissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Submissions
     * const submissions = await prisma.submission.findMany()
     * 
     * // Get first 10 Submissions
     * const submissions = await prisma.submission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const submissionWithIdOnly = await prisma.submission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubmissionFindManyArgs>(args?: SelectSubset<T, SubmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Submission.
     * @param {SubmissionCreateArgs} args - Arguments to create a Submission.
     * @example
     * // Create one Submission
     * const Submission = await prisma.submission.create({
     *   data: {
     *     // ... data to create a Submission
     *   }
     * })
     * 
     */
    create<T extends SubmissionCreateArgs>(args: SelectSubset<T, SubmissionCreateArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Submissions.
     * @param {SubmissionCreateManyArgs} args - Arguments to create many Submissions.
     * @example
     * // Create many Submissions
     * const submission = await prisma.submission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubmissionCreateManyArgs>(args?: SelectSubset<T, SubmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Submissions and returns the data saved in the database.
     * @param {SubmissionCreateManyAndReturnArgs} args - Arguments to create many Submissions.
     * @example
     * // Create many Submissions
     * const submission = await prisma.submission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Submissions and only return the `id`
     * const submissionWithIdOnly = await prisma.submission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubmissionCreateManyAndReturnArgs>(args?: SelectSubset<T, SubmissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Submission.
     * @param {SubmissionDeleteArgs} args - Arguments to delete one Submission.
     * @example
     * // Delete one Submission
     * const Submission = await prisma.submission.delete({
     *   where: {
     *     // ... filter to delete one Submission
     *   }
     * })
     * 
     */
    delete<T extends SubmissionDeleteArgs>(args: SelectSubset<T, SubmissionDeleteArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Submission.
     * @param {SubmissionUpdateArgs} args - Arguments to update one Submission.
     * @example
     * // Update one Submission
     * const submission = await prisma.submission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubmissionUpdateArgs>(args: SelectSubset<T, SubmissionUpdateArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Submissions.
     * @param {SubmissionDeleteManyArgs} args - Arguments to filter Submissions to delete.
     * @example
     * // Delete a few Submissions
     * const { count } = await prisma.submission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubmissionDeleteManyArgs>(args?: SelectSubset<T, SubmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Submissions
     * const submission = await prisma.submission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubmissionUpdateManyArgs>(args: SelectSubset<T, SubmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Submissions and returns the data updated in the database.
     * @param {SubmissionUpdateManyAndReturnArgs} args - Arguments to update many Submissions.
     * @example
     * // Update many Submissions
     * const submission = await prisma.submission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Submissions and only return the `id`
     * const submissionWithIdOnly = await prisma.submission.updateManyAndReturn({
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
    updateManyAndReturn<T extends SubmissionUpdateManyAndReturnArgs>(args: SelectSubset<T, SubmissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Submission.
     * @param {SubmissionUpsertArgs} args - Arguments to update or create a Submission.
     * @example
     * // Update or create a Submission
     * const submission = await prisma.submission.upsert({
     *   create: {
     *     // ... data to create a Submission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Submission we want to update
     *   }
     * })
     */
    upsert<T extends SubmissionUpsertArgs>(args: SelectSubset<T, SubmissionUpsertArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionCountArgs} args - Arguments to filter Submissions to count.
     * @example
     * // Count the number of Submissions
     * const count = await prisma.submission.count({
     *   where: {
     *     // ... the filter for the Submissions we want to count
     *   }
     * })
    **/
    count<T extends SubmissionCountArgs>(
      args?: Subset<T, SubmissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubmissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Submission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubmissionAggregateArgs>(args: Subset<T, SubmissionAggregateArgs>): Prisma.PrismaPromise<GetSubmissionAggregateType<T>>

    /**
     * Group by Submission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionGroupByArgs} args - Group by arguments.
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
      T extends SubmissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubmissionGroupByArgs['orderBy'] }
        : { orderBy?: SubmissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Submission model
   */
  readonly fields: SubmissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Submission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubmissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    problem<T extends ProblemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProblemDefaultArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    testcaseresult<T extends Submission$testcaseresultArgs<ExtArgs> = {}>(args?: Subset<T, Submission$testcaseresultArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestCaseResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Submission model
   */
  interface SubmissionFieldRefs {
    readonly id: FieldRef<"Submission", 'String'>
    readonly userId: FieldRef<"Submission", 'String'>
    readonly problemId: FieldRef<"Submission", 'String'>
    readonly sourceCode: FieldRef<"Submission", 'Json'>
    readonly stdin: FieldRef<"Submission", 'String'>
    readonly stdout: FieldRef<"Submission", 'String'>
    readonly stderr: FieldRef<"Submission", 'String'>
    readonly compileOutput: FieldRef<"Submission", 'String'>
    readonly status: FieldRef<"Submission", 'String'>
    readonly memory: FieldRef<"Submission", 'String'>
    readonly time: FieldRef<"Submission", 'String'>
    readonly createdAt: FieldRef<"Submission", 'DateTime'>
    readonly updatedAt: FieldRef<"Submission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Submission findUnique
   */
  export type SubmissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission findUniqueOrThrow
   */
  export type SubmissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission findFirst
   */
  export type SubmissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Submissions.
     */
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission findFirstOrThrow
   */
  export type SubmissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Submissions.
     */
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission findMany
   */
  export type SubmissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submissions to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission create
   */
  export type SubmissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The data needed to create a Submission.
     */
    data: XOR<SubmissionCreateInput, SubmissionUncheckedCreateInput>
  }

  /**
   * Submission createMany
   */
  export type SubmissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Submissions.
     */
    data: SubmissionCreateManyInput | SubmissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Submission createManyAndReturn
   */
  export type SubmissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * The data used to create many Submissions.
     */
    data: SubmissionCreateManyInput | SubmissionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Submission update
   */
  export type SubmissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The data needed to update a Submission.
     */
    data: XOR<SubmissionUpdateInput, SubmissionUncheckedUpdateInput>
    /**
     * Choose, which Submission to update.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission updateMany
   */
  export type SubmissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Submissions.
     */
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyInput>
    /**
     * Filter which Submissions to update
     */
    where?: SubmissionWhereInput
    /**
     * Limit how many Submissions to update.
     */
    limit?: number
  }

  /**
   * Submission updateManyAndReturn
   */
  export type SubmissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * The data used to update Submissions.
     */
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyInput>
    /**
     * Filter which Submissions to update
     */
    where?: SubmissionWhereInput
    /**
     * Limit how many Submissions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Submission upsert
   */
  export type SubmissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The filter to search for the Submission to update in case it exists.
     */
    where: SubmissionWhereUniqueInput
    /**
     * In case the Submission found by the `where` argument doesn't exist, create a new Submission with this data.
     */
    create: XOR<SubmissionCreateInput, SubmissionUncheckedCreateInput>
    /**
     * In case the Submission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubmissionUpdateInput, SubmissionUncheckedUpdateInput>
  }

  /**
   * Submission delete
   */
  export type SubmissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter which Submission to delete.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission deleteMany
   */
  export type SubmissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Submissions to delete
     */
    where?: SubmissionWhereInput
    /**
     * Limit how many Submissions to delete.
     */
    limit?: number
  }

  /**
   * Submission.testcaseresult
   */
  export type Submission$testcaseresultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCaseResult
     */
    select?: TestCaseResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCaseResult
     */
    omit?: TestCaseResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseResultInclude<ExtArgs> | null
    where?: TestCaseResultWhereInput
    orderBy?: TestCaseResultOrderByWithRelationInput | TestCaseResultOrderByWithRelationInput[]
    cursor?: TestCaseResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TestCaseResultScalarFieldEnum | TestCaseResultScalarFieldEnum[]
  }

  /**
   * Submission without action
   */
  export type SubmissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
  }


  /**
   * Model TestCaseResult
   */

  export type AggregateTestCaseResult = {
    _count: TestCaseResultCountAggregateOutputType | null
    _avg: TestCaseResultAvgAggregateOutputType | null
    _sum: TestCaseResultSumAggregateOutputType | null
    _min: TestCaseResultMinAggregateOutputType | null
    _max: TestCaseResultMaxAggregateOutputType | null
  }

  export type TestCaseResultAvgAggregateOutputType = {
    testcase: number | null
  }

  export type TestCaseResultSumAggregateOutputType = {
    testcase: number | null
  }

  export type TestCaseResultMinAggregateOutputType = {
    id: string | null
    submissionId: string | null
    testcase: number | null
    passed: boolean | null
    stdout: string | null
    expectedOutput: string | null
    stderr: string | null
    compiledOutput: string | null
    status: string | null
    memory: string | null
    time: string | null
  }

  export type TestCaseResultMaxAggregateOutputType = {
    id: string | null
    submissionId: string | null
    testcase: number | null
    passed: boolean | null
    stdout: string | null
    expectedOutput: string | null
    stderr: string | null
    compiledOutput: string | null
    status: string | null
    memory: string | null
    time: string | null
  }

  export type TestCaseResultCountAggregateOutputType = {
    id: number
    submissionId: number
    testcase: number
    passed: number
    stdout: number
    expectedOutput: number
    stderr: number
    compiledOutput: number
    status: number
    memory: number
    time: number
    _all: number
  }


  export type TestCaseResultAvgAggregateInputType = {
    testcase?: true
  }

  export type TestCaseResultSumAggregateInputType = {
    testcase?: true
  }

  export type TestCaseResultMinAggregateInputType = {
    id?: true
    submissionId?: true
    testcase?: true
    passed?: true
    stdout?: true
    expectedOutput?: true
    stderr?: true
    compiledOutput?: true
    status?: true
    memory?: true
    time?: true
  }

  export type TestCaseResultMaxAggregateInputType = {
    id?: true
    submissionId?: true
    testcase?: true
    passed?: true
    stdout?: true
    expectedOutput?: true
    stderr?: true
    compiledOutput?: true
    status?: true
    memory?: true
    time?: true
  }

  export type TestCaseResultCountAggregateInputType = {
    id?: true
    submissionId?: true
    testcase?: true
    passed?: true
    stdout?: true
    expectedOutput?: true
    stderr?: true
    compiledOutput?: true
    status?: true
    memory?: true
    time?: true
    _all?: true
  }

  export type TestCaseResultAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestCaseResult to aggregate.
     */
    where?: TestCaseResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestCaseResults to fetch.
     */
    orderBy?: TestCaseResultOrderByWithRelationInput | TestCaseResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TestCaseResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestCaseResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestCaseResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TestCaseResults
    **/
    _count?: true | TestCaseResultCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TestCaseResultAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TestCaseResultSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestCaseResultMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestCaseResultMaxAggregateInputType
  }

  export type GetTestCaseResultAggregateType<T extends TestCaseResultAggregateArgs> = {
        [P in keyof T & keyof AggregateTestCaseResult]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTestCaseResult[P]>
      : GetScalarType<T[P], AggregateTestCaseResult[P]>
  }




  export type TestCaseResultGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestCaseResultWhereInput
    orderBy?: TestCaseResultOrderByWithAggregationInput | TestCaseResultOrderByWithAggregationInput[]
    by: TestCaseResultScalarFieldEnum[] | TestCaseResultScalarFieldEnum
    having?: TestCaseResultScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestCaseResultCountAggregateInputType | true
    _avg?: TestCaseResultAvgAggregateInputType
    _sum?: TestCaseResultSumAggregateInputType
    _min?: TestCaseResultMinAggregateInputType
    _max?: TestCaseResultMaxAggregateInputType
  }

  export type TestCaseResultGroupByOutputType = {
    id: string
    submissionId: string
    testcase: number
    passed: boolean
    stdout: string | null
    expectedOutput: string
    stderr: string | null
    compiledOutput: string | null
    status: string
    memory: string | null
    time: string | null
    _count: TestCaseResultCountAggregateOutputType | null
    _avg: TestCaseResultAvgAggregateOutputType | null
    _sum: TestCaseResultSumAggregateOutputType | null
    _min: TestCaseResultMinAggregateOutputType | null
    _max: TestCaseResultMaxAggregateOutputType | null
  }

  type GetTestCaseResultGroupByPayload<T extends TestCaseResultGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestCaseResultGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestCaseResultGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestCaseResultGroupByOutputType[P]>
            : GetScalarType<T[P], TestCaseResultGroupByOutputType[P]>
        }
      >
    >


  export type TestCaseResultSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    submissionId?: boolean
    testcase?: boolean
    passed?: boolean
    stdout?: boolean
    expectedOutput?: boolean
    stderr?: boolean
    compiledOutput?: boolean
    status?: boolean
    memory?: boolean
    time?: boolean
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testCaseResult"]>

  export type TestCaseResultSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    submissionId?: boolean
    testcase?: boolean
    passed?: boolean
    stdout?: boolean
    expectedOutput?: boolean
    stderr?: boolean
    compiledOutput?: boolean
    status?: boolean
    memory?: boolean
    time?: boolean
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testCaseResult"]>

  export type TestCaseResultSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    submissionId?: boolean
    testcase?: boolean
    passed?: boolean
    stdout?: boolean
    expectedOutput?: boolean
    stderr?: boolean
    compiledOutput?: boolean
    status?: boolean
    memory?: boolean
    time?: boolean
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testCaseResult"]>

  export type TestCaseResultSelectScalar = {
    id?: boolean
    submissionId?: boolean
    testcase?: boolean
    passed?: boolean
    stdout?: boolean
    expectedOutput?: boolean
    stderr?: boolean
    compiledOutput?: boolean
    status?: boolean
    memory?: boolean
    time?: boolean
  }

  export type TestCaseResultOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "submissionId" | "testcase" | "passed" | "stdout" | "expectedOutput" | "stderr" | "compiledOutput" | "status" | "memory" | "time", ExtArgs["result"]["testCaseResult"]>
  export type TestCaseResultInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
  }
  export type TestCaseResultIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
  }
  export type TestCaseResultIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
  }

  export type $TestCaseResultPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TestCaseResult"
    objects: {
      submission: Prisma.$SubmissionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      submissionId: string
      testcase: number
      passed: boolean
      stdout: string | null
      expectedOutput: string
      stderr: string | null
      compiledOutput: string | null
      status: string
      memory: string | null
      time: string | null
    }, ExtArgs["result"]["testCaseResult"]>
    composites: {}
  }

  type TestCaseResultGetPayload<S extends boolean | null | undefined | TestCaseResultDefaultArgs> = $Result.GetResult<Prisma.$TestCaseResultPayload, S>

  type TestCaseResultCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TestCaseResultFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TestCaseResultCountAggregateInputType | true
    }

  export interface TestCaseResultDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TestCaseResult'], meta: { name: 'TestCaseResult' } }
    /**
     * Find zero or one TestCaseResult that matches the filter.
     * @param {TestCaseResultFindUniqueArgs} args - Arguments to find a TestCaseResult
     * @example
     * // Get one TestCaseResult
     * const testCaseResult = await prisma.testCaseResult.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TestCaseResultFindUniqueArgs>(args: SelectSubset<T, TestCaseResultFindUniqueArgs<ExtArgs>>): Prisma__TestCaseResultClient<$Result.GetResult<Prisma.$TestCaseResultPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TestCaseResult that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TestCaseResultFindUniqueOrThrowArgs} args - Arguments to find a TestCaseResult
     * @example
     * // Get one TestCaseResult
     * const testCaseResult = await prisma.testCaseResult.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TestCaseResultFindUniqueOrThrowArgs>(args: SelectSubset<T, TestCaseResultFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TestCaseResultClient<$Result.GetResult<Prisma.$TestCaseResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TestCaseResult that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCaseResultFindFirstArgs} args - Arguments to find a TestCaseResult
     * @example
     * // Get one TestCaseResult
     * const testCaseResult = await prisma.testCaseResult.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TestCaseResultFindFirstArgs>(args?: SelectSubset<T, TestCaseResultFindFirstArgs<ExtArgs>>): Prisma__TestCaseResultClient<$Result.GetResult<Prisma.$TestCaseResultPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TestCaseResult that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCaseResultFindFirstOrThrowArgs} args - Arguments to find a TestCaseResult
     * @example
     * // Get one TestCaseResult
     * const testCaseResult = await prisma.testCaseResult.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TestCaseResultFindFirstOrThrowArgs>(args?: SelectSubset<T, TestCaseResultFindFirstOrThrowArgs<ExtArgs>>): Prisma__TestCaseResultClient<$Result.GetResult<Prisma.$TestCaseResultPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TestCaseResults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCaseResultFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TestCaseResults
     * const testCaseResults = await prisma.testCaseResult.findMany()
     * 
     * // Get first 10 TestCaseResults
     * const testCaseResults = await prisma.testCaseResult.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testCaseResultWithIdOnly = await prisma.testCaseResult.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TestCaseResultFindManyArgs>(args?: SelectSubset<T, TestCaseResultFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestCaseResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TestCaseResult.
     * @param {TestCaseResultCreateArgs} args - Arguments to create a TestCaseResult.
     * @example
     * // Create one TestCaseResult
     * const TestCaseResult = await prisma.testCaseResult.create({
     *   data: {
     *     // ... data to create a TestCaseResult
     *   }
     * })
     * 
     */
    create<T extends TestCaseResultCreateArgs>(args: SelectSubset<T, TestCaseResultCreateArgs<ExtArgs>>): Prisma__TestCaseResultClient<$Result.GetResult<Prisma.$TestCaseResultPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TestCaseResults.
     * @param {TestCaseResultCreateManyArgs} args - Arguments to create many TestCaseResults.
     * @example
     * // Create many TestCaseResults
     * const testCaseResult = await prisma.testCaseResult.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TestCaseResultCreateManyArgs>(args?: SelectSubset<T, TestCaseResultCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TestCaseResults and returns the data saved in the database.
     * @param {TestCaseResultCreateManyAndReturnArgs} args - Arguments to create many TestCaseResults.
     * @example
     * // Create many TestCaseResults
     * const testCaseResult = await prisma.testCaseResult.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TestCaseResults and only return the `id`
     * const testCaseResultWithIdOnly = await prisma.testCaseResult.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TestCaseResultCreateManyAndReturnArgs>(args?: SelectSubset<T, TestCaseResultCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestCaseResultPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TestCaseResult.
     * @param {TestCaseResultDeleteArgs} args - Arguments to delete one TestCaseResult.
     * @example
     * // Delete one TestCaseResult
     * const TestCaseResult = await prisma.testCaseResult.delete({
     *   where: {
     *     // ... filter to delete one TestCaseResult
     *   }
     * })
     * 
     */
    delete<T extends TestCaseResultDeleteArgs>(args: SelectSubset<T, TestCaseResultDeleteArgs<ExtArgs>>): Prisma__TestCaseResultClient<$Result.GetResult<Prisma.$TestCaseResultPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TestCaseResult.
     * @param {TestCaseResultUpdateArgs} args - Arguments to update one TestCaseResult.
     * @example
     * // Update one TestCaseResult
     * const testCaseResult = await prisma.testCaseResult.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TestCaseResultUpdateArgs>(args: SelectSubset<T, TestCaseResultUpdateArgs<ExtArgs>>): Prisma__TestCaseResultClient<$Result.GetResult<Prisma.$TestCaseResultPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TestCaseResults.
     * @param {TestCaseResultDeleteManyArgs} args - Arguments to filter TestCaseResults to delete.
     * @example
     * // Delete a few TestCaseResults
     * const { count } = await prisma.testCaseResult.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TestCaseResultDeleteManyArgs>(args?: SelectSubset<T, TestCaseResultDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TestCaseResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCaseResultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TestCaseResults
     * const testCaseResult = await prisma.testCaseResult.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TestCaseResultUpdateManyArgs>(args: SelectSubset<T, TestCaseResultUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TestCaseResults and returns the data updated in the database.
     * @param {TestCaseResultUpdateManyAndReturnArgs} args - Arguments to update many TestCaseResults.
     * @example
     * // Update many TestCaseResults
     * const testCaseResult = await prisma.testCaseResult.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TestCaseResults and only return the `id`
     * const testCaseResultWithIdOnly = await prisma.testCaseResult.updateManyAndReturn({
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
    updateManyAndReturn<T extends TestCaseResultUpdateManyAndReturnArgs>(args: SelectSubset<T, TestCaseResultUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestCaseResultPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TestCaseResult.
     * @param {TestCaseResultUpsertArgs} args - Arguments to update or create a TestCaseResult.
     * @example
     * // Update or create a TestCaseResult
     * const testCaseResult = await prisma.testCaseResult.upsert({
     *   create: {
     *     // ... data to create a TestCaseResult
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TestCaseResult we want to update
     *   }
     * })
     */
    upsert<T extends TestCaseResultUpsertArgs>(args: SelectSubset<T, TestCaseResultUpsertArgs<ExtArgs>>): Prisma__TestCaseResultClient<$Result.GetResult<Prisma.$TestCaseResultPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TestCaseResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCaseResultCountArgs} args - Arguments to filter TestCaseResults to count.
     * @example
     * // Count the number of TestCaseResults
     * const count = await prisma.testCaseResult.count({
     *   where: {
     *     // ... the filter for the TestCaseResults we want to count
     *   }
     * })
    **/
    count<T extends TestCaseResultCountArgs>(
      args?: Subset<T, TestCaseResultCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestCaseResultCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TestCaseResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCaseResultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TestCaseResultAggregateArgs>(args: Subset<T, TestCaseResultAggregateArgs>): Prisma.PrismaPromise<GetTestCaseResultAggregateType<T>>

    /**
     * Group by TestCaseResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCaseResultGroupByArgs} args - Group by arguments.
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
      T extends TestCaseResultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestCaseResultGroupByArgs['orderBy'] }
        : { orderBy?: TestCaseResultGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TestCaseResultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestCaseResultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TestCaseResult model
   */
  readonly fields: TestCaseResultFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TestCaseResult.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TestCaseResultClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    submission<T extends SubmissionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubmissionDefaultArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TestCaseResult model
   */
  interface TestCaseResultFieldRefs {
    readonly id: FieldRef<"TestCaseResult", 'String'>
    readonly submissionId: FieldRef<"TestCaseResult", 'String'>
    readonly testcase: FieldRef<"TestCaseResult", 'Int'>
    readonly passed: FieldRef<"TestCaseResult", 'Boolean'>
    readonly stdout: FieldRef<"TestCaseResult", 'String'>
    readonly expectedOutput: FieldRef<"TestCaseResult", 'String'>
    readonly stderr: FieldRef<"TestCaseResult", 'String'>
    readonly compiledOutput: FieldRef<"TestCaseResult", 'String'>
    readonly status: FieldRef<"TestCaseResult", 'String'>
    readonly memory: FieldRef<"TestCaseResult", 'String'>
    readonly time: FieldRef<"TestCaseResult", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TestCaseResult findUnique
   */
  export type TestCaseResultFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCaseResult
     */
    select?: TestCaseResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCaseResult
     */
    omit?: TestCaseResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseResultInclude<ExtArgs> | null
    /**
     * Filter, which TestCaseResult to fetch.
     */
    where: TestCaseResultWhereUniqueInput
  }

  /**
   * TestCaseResult findUniqueOrThrow
   */
  export type TestCaseResultFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCaseResult
     */
    select?: TestCaseResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCaseResult
     */
    omit?: TestCaseResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseResultInclude<ExtArgs> | null
    /**
     * Filter, which TestCaseResult to fetch.
     */
    where: TestCaseResultWhereUniqueInput
  }

  /**
   * TestCaseResult findFirst
   */
  export type TestCaseResultFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCaseResult
     */
    select?: TestCaseResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCaseResult
     */
    omit?: TestCaseResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseResultInclude<ExtArgs> | null
    /**
     * Filter, which TestCaseResult to fetch.
     */
    where?: TestCaseResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestCaseResults to fetch.
     */
    orderBy?: TestCaseResultOrderByWithRelationInput | TestCaseResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestCaseResults.
     */
    cursor?: TestCaseResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestCaseResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestCaseResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestCaseResults.
     */
    distinct?: TestCaseResultScalarFieldEnum | TestCaseResultScalarFieldEnum[]
  }

  /**
   * TestCaseResult findFirstOrThrow
   */
  export type TestCaseResultFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCaseResult
     */
    select?: TestCaseResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCaseResult
     */
    omit?: TestCaseResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseResultInclude<ExtArgs> | null
    /**
     * Filter, which TestCaseResult to fetch.
     */
    where?: TestCaseResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestCaseResults to fetch.
     */
    orderBy?: TestCaseResultOrderByWithRelationInput | TestCaseResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestCaseResults.
     */
    cursor?: TestCaseResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestCaseResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestCaseResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestCaseResults.
     */
    distinct?: TestCaseResultScalarFieldEnum | TestCaseResultScalarFieldEnum[]
  }

  /**
   * TestCaseResult findMany
   */
  export type TestCaseResultFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCaseResult
     */
    select?: TestCaseResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCaseResult
     */
    omit?: TestCaseResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseResultInclude<ExtArgs> | null
    /**
     * Filter, which TestCaseResults to fetch.
     */
    where?: TestCaseResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestCaseResults to fetch.
     */
    orderBy?: TestCaseResultOrderByWithRelationInput | TestCaseResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TestCaseResults.
     */
    cursor?: TestCaseResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestCaseResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestCaseResults.
     */
    skip?: number
    distinct?: TestCaseResultScalarFieldEnum | TestCaseResultScalarFieldEnum[]
  }

  /**
   * TestCaseResult create
   */
  export type TestCaseResultCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCaseResult
     */
    select?: TestCaseResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCaseResult
     */
    omit?: TestCaseResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseResultInclude<ExtArgs> | null
    /**
     * The data needed to create a TestCaseResult.
     */
    data: XOR<TestCaseResultCreateInput, TestCaseResultUncheckedCreateInput>
  }

  /**
   * TestCaseResult createMany
   */
  export type TestCaseResultCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TestCaseResults.
     */
    data: TestCaseResultCreateManyInput | TestCaseResultCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TestCaseResult createManyAndReturn
   */
  export type TestCaseResultCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCaseResult
     */
    select?: TestCaseResultSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TestCaseResult
     */
    omit?: TestCaseResultOmit<ExtArgs> | null
    /**
     * The data used to create many TestCaseResults.
     */
    data: TestCaseResultCreateManyInput | TestCaseResultCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseResultIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TestCaseResult update
   */
  export type TestCaseResultUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCaseResult
     */
    select?: TestCaseResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCaseResult
     */
    omit?: TestCaseResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseResultInclude<ExtArgs> | null
    /**
     * The data needed to update a TestCaseResult.
     */
    data: XOR<TestCaseResultUpdateInput, TestCaseResultUncheckedUpdateInput>
    /**
     * Choose, which TestCaseResult to update.
     */
    where: TestCaseResultWhereUniqueInput
  }

  /**
   * TestCaseResult updateMany
   */
  export type TestCaseResultUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TestCaseResults.
     */
    data: XOR<TestCaseResultUpdateManyMutationInput, TestCaseResultUncheckedUpdateManyInput>
    /**
     * Filter which TestCaseResults to update
     */
    where?: TestCaseResultWhereInput
    /**
     * Limit how many TestCaseResults to update.
     */
    limit?: number
  }

  /**
   * TestCaseResult updateManyAndReturn
   */
  export type TestCaseResultUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCaseResult
     */
    select?: TestCaseResultSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TestCaseResult
     */
    omit?: TestCaseResultOmit<ExtArgs> | null
    /**
     * The data used to update TestCaseResults.
     */
    data: XOR<TestCaseResultUpdateManyMutationInput, TestCaseResultUncheckedUpdateManyInput>
    /**
     * Filter which TestCaseResults to update
     */
    where?: TestCaseResultWhereInput
    /**
     * Limit how many TestCaseResults to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseResultIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TestCaseResult upsert
   */
  export type TestCaseResultUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCaseResult
     */
    select?: TestCaseResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCaseResult
     */
    omit?: TestCaseResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseResultInclude<ExtArgs> | null
    /**
     * The filter to search for the TestCaseResult to update in case it exists.
     */
    where: TestCaseResultWhereUniqueInput
    /**
     * In case the TestCaseResult found by the `where` argument doesn't exist, create a new TestCaseResult with this data.
     */
    create: XOR<TestCaseResultCreateInput, TestCaseResultUncheckedCreateInput>
    /**
     * In case the TestCaseResult was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TestCaseResultUpdateInput, TestCaseResultUncheckedUpdateInput>
  }

  /**
   * TestCaseResult delete
   */
  export type TestCaseResultDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCaseResult
     */
    select?: TestCaseResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCaseResult
     */
    omit?: TestCaseResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseResultInclude<ExtArgs> | null
    /**
     * Filter which TestCaseResult to delete.
     */
    where: TestCaseResultWhereUniqueInput
  }

  /**
   * TestCaseResult deleteMany
   */
  export type TestCaseResultDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestCaseResults to delete
     */
    where?: TestCaseResultWhereInput
    /**
     * Limit how many TestCaseResults to delete.
     */
    limit?: number
  }

  /**
   * TestCaseResult without action
   */
  export type TestCaseResultDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCaseResult
     */
    select?: TestCaseResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCaseResult
     */
    omit?: TestCaseResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseResultInclude<ExtArgs> | null
  }


  /**
   * Model problemSolved
   */

  export type AggregateProblemSolved = {
    _count: ProblemSolvedCountAggregateOutputType | null
    _min: ProblemSolvedMinAggregateOutputType | null
    _max: ProblemSolvedMaxAggregateOutputType | null
  }

  export type ProblemSolvedMinAggregateOutputType = {
    id: string | null
    userId: string | null
    problemId: string | null
    createAt: Date | null
    updatedAt: Date | null
  }

  export type ProblemSolvedMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    problemId: string | null
    createAt: Date | null
    updatedAt: Date | null
  }

  export type ProblemSolvedCountAggregateOutputType = {
    id: number
    userId: number
    problemId: number
    createAt: number
    updatedAt: number
    _all: number
  }


  export type ProblemSolvedMinAggregateInputType = {
    id?: true
    userId?: true
    problemId?: true
    createAt?: true
    updatedAt?: true
  }

  export type ProblemSolvedMaxAggregateInputType = {
    id?: true
    userId?: true
    problemId?: true
    createAt?: true
    updatedAt?: true
  }

  export type ProblemSolvedCountAggregateInputType = {
    id?: true
    userId?: true
    problemId?: true
    createAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProblemSolvedAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which problemSolved to aggregate.
     */
    where?: problemSolvedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of problemSolveds to fetch.
     */
    orderBy?: problemSolvedOrderByWithRelationInput | problemSolvedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: problemSolvedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` problemSolveds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` problemSolveds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned problemSolveds
    **/
    _count?: true | ProblemSolvedCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProblemSolvedMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProblemSolvedMaxAggregateInputType
  }

  export type GetProblemSolvedAggregateType<T extends ProblemSolvedAggregateArgs> = {
        [P in keyof T & keyof AggregateProblemSolved]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProblemSolved[P]>
      : GetScalarType<T[P], AggregateProblemSolved[P]>
  }




  export type problemSolvedGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: problemSolvedWhereInput
    orderBy?: problemSolvedOrderByWithAggregationInput | problemSolvedOrderByWithAggregationInput[]
    by: ProblemSolvedScalarFieldEnum[] | ProblemSolvedScalarFieldEnum
    having?: problemSolvedScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProblemSolvedCountAggregateInputType | true
    _min?: ProblemSolvedMinAggregateInputType
    _max?: ProblemSolvedMaxAggregateInputType
  }

  export type ProblemSolvedGroupByOutputType = {
    id: string
    userId: string
    problemId: string
    createAt: Date
    updatedAt: Date
    _count: ProblemSolvedCountAggregateOutputType | null
    _min: ProblemSolvedMinAggregateOutputType | null
    _max: ProblemSolvedMaxAggregateOutputType | null
  }

  type GetProblemSolvedGroupByPayload<T extends problemSolvedGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProblemSolvedGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProblemSolvedGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProblemSolvedGroupByOutputType[P]>
            : GetScalarType<T[P], ProblemSolvedGroupByOutputType[P]>
        }
      >
    >


  export type problemSolvedSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    problemId?: boolean
    createAt?: boolean
    updatedAt?: boolean
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problemSolved"]>

  export type problemSolvedSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    problemId?: boolean
    createAt?: boolean
    updatedAt?: boolean
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problemSolved"]>

  export type problemSolvedSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    problemId?: boolean
    createAt?: boolean
    updatedAt?: boolean
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problemSolved"]>

  export type problemSolvedSelectScalar = {
    id?: boolean
    userId?: boolean
    problemId?: boolean
    createAt?: boolean
    updatedAt?: boolean
  }

  export type problemSolvedOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "problemId" | "createAt" | "updatedAt", ExtArgs["result"]["problemSolved"]>
  export type problemSolvedInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type problemSolvedIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type problemSolvedIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $problemSolvedPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "problemSolved"
    objects: {
      problem: Prisma.$ProblemPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      problemId: string
      createAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["problemSolved"]>
    composites: {}
  }

  type problemSolvedGetPayload<S extends boolean | null | undefined | problemSolvedDefaultArgs> = $Result.GetResult<Prisma.$problemSolvedPayload, S>

  type problemSolvedCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<problemSolvedFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProblemSolvedCountAggregateInputType | true
    }

  export interface problemSolvedDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['problemSolved'], meta: { name: 'problemSolved' } }
    /**
     * Find zero or one ProblemSolved that matches the filter.
     * @param {problemSolvedFindUniqueArgs} args - Arguments to find a ProblemSolved
     * @example
     * // Get one ProblemSolved
     * const problemSolved = await prisma.problemSolved.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends problemSolvedFindUniqueArgs>(args: SelectSubset<T, problemSolvedFindUniqueArgs<ExtArgs>>): Prisma__problemSolvedClient<$Result.GetResult<Prisma.$problemSolvedPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProblemSolved that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {problemSolvedFindUniqueOrThrowArgs} args - Arguments to find a ProblemSolved
     * @example
     * // Get one ProblemSolved
     * const problemSolved = await prisma.problemSolved.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends problemSolvedFindUniqueOrThrowArgs>(args: SelectSubset<T, problemSolvedFindUniqueOrThrowArgs<ExtArgs>>): Prisma__problemSolvedClient<$Result.GetResult<Prisma.$problemSolvedPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProblemSolved that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {problemSolvedFindFirstArgs} args - Arguments to find a ProblemSolved
     * @example
     * // Get one ProblemSolved
     * const problemSolved = await prisma.problemSolved.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends problemSolvedFindFirstArgs>(args?: SelectSubset<T, problemSolvedFindFirstArgs<ExtArgs>>): Prisma__problemSolvedClient<$Result.GetResult<Prisma.$problemSolvedPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProblemSolved that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {problemSolvedFindFirstOrThrowArgs} args - Arguments to find a ProblemSolved
     * @example
     * // Get one ProblemSolved
     * const problemSolved = await prisma.problemSolved.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends problemSolvedFindFirstOrThrowArgs>(args?: SelectSubset<T, problemSolvedFindFirstOrThrowArgs<ExtArgs>>): Prisma__problemSolvedClient<$Result.GetResult<Prisma.$problemSolvedPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProblemSolveds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {problemSolvedFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProblemSolveds
     * const problemSolveds = await prisma.problemSolved.findMany()
     * 
     * // Get first 10 ProblemSolveds
     * const problemSolveds = await prisma.problemSolved.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const problemSolvedWithIdOnly = await prisma.problemSolved.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends problemSolvedFindManyArgs>(args?: SelectSubset<T, problemSolvedFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$problemSolvedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProblemSolved.
     * @param {problemSolvedCreateArgs} args - Arguments to create a ProblemSolved.
     * @example
     * // Create one ProblemSolved
     * const ProblemSolved = await prisma.problemSolved.create({
     *   data: {
     *     // ... data to create a ProblemSolved
     *   }
     * })
     * 
     */
    create<T extends problemSolvedCreateArgs>(args: SelectSubset<T, problemSolvedCreateArgs<ExtArgs>>): Prisma__problemSolvedClient<$Result.GetResult<Prisma.$problemSolvedPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProblemSolveds.
     * @param {problemSolvedCreateManyArgs} args - Arguments to create many ProblemSolveds.
     * @example
     * // Create many ProblemSolveds
     * const problemSolved = await prisma.problemSolved.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends problemSolvedCreateManyArgs>(args?: SelectSubset<T, problemSolvedCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProblemSolveds and returns the data saved in the database.
     * @param {problemSolvedCreateManyAndReturnArgs} args - Arguments to create many ProblemSolveds.
     * @example
     * // Create many ProblemSolveds
     * const problemSolved = await prisma.problemSolved.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProblemSolveds and only return the `id`
     * const problemSolvedWithIdOnly = await prisma.problemSolved.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends problemSolvedCreateManyAndReturnArgs>(args?: SelectSubset<T, problemSolvedCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$problemSolvedPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProblemSolved.
     * @param {problemSolvedDeleteArgs} args - Arguments to delete one ProblemSolved.
     * @example
     * // Delete one ProblemSolved
     * const ProblemSolved = await prisma.problemSolved.delete({
     *   where: {
     *     // ... filter to delete one ProblemSolved
     *   }
     * })
     * 
     */
    delete<T extends problemSolvedDeleteArgs>(args: SelectSubset<T, problemSolvedDeleteArgs<ExtArgs>>): Prisma__problemSolvedClient<$Result.GetResult<Prisma.$problemSolvedPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProblemSolved.
     * @param {problemSolvedUpdateArgs} args - Arguments to update one ProblemSolved.
     * @example
     * // Update one ProblemSolved
     * const problemSolved = await prisma.problemSolved.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends problemSolvedUpdateArgs>(args: SelectSubset<T, problemSolvedUpdateArgs<ExtArgs>>): Prisma__problemSolvedClient<$Result.GetResult<Prisma.$problemSolvedPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProblemSolveds.
     * @param {problemSolvedDeleteManyArgs} args - Arguments to filter ProblemSolveds to delete.
     * @example
     * // Delete a few ProblemSolveds
     * const { count } = await prisma.problemSolved.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends problemSolvedDeleteManyArgs>(args?: SelectSubset<T, problemSolvedDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProblemSolveds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {problemSolvedUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProblemSolveds
     * const problemSolved = await prisma.problemSolved.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends problemSolvedUpdateManyArgs>(args: SelectSubset<T, problemSolvedUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProblemSolveds and returns the data updated in the database.
     * @param {problemSolvedUpdateManyAndReturnArgs} args - Arguments to update many ProblemSolveds.
     * @example
     * // Update many ProblemSolveds
     * const problemSolved = await prisma.problemSolved.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProblemSolveds and only return the `id`
     * const problemSolvedWithIdOnly = await prisma.problemSolved.updateManyAndReturn({
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
    updateManyAndReturn<T extends problemSolvedUpdateManyAndReturnArgs>(args: SelectSubset<T, problemSolvedUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$problemSolvedPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProblemSolved.
     * @param {problemSolvedUpsertArgs} args - Arguments to update or create a ProblemSolved.
     * @example
     * // Update or create a ProblemSolved
     * const problemSolved = await prisma.problemSolved.upsert({
     *   create: {
     *     // ... data to create a ProblemSolved
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProblemSolved we want to update
     *   }
     * })
     */
    upsert<T extends problemSolvedUpsertArgs>(args: SelectSubset<T, problemSolvedUpsertArgs<ExtArgs>>): Prisma__problemSolvedClient<$Result.GetResult<Prisma.$problemSolvedPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProblemSolveds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {problemSolvedCountArgs} args - Arguments to filter ProblemSolveds to count.
     * @example
     * // Count the number of ProblemSolveds
     * const count = await prisma.problemSolved.count({
     *   where: {
     *     // ... the filter for the ProblemSolveds we want to count
     *   }
     * })
    **/
    count<T extends problemSolvedCountArgs>(
      args?: Subset<T, problemSolvedCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProblemSolvedCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProblemSolved.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemSolvedAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProblemSolvedAggregateArgs>(args: Subset<T, ProblemSolvedAggregateArgs>): Prisma.PrismaPromise<GetProblemSolvedAggregateType<T>>

    /**
     * Group by ProblemSolved.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {problemSolvedGroupByArgs} args - Group by arguments.
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
      T extends problemSolvedGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: problemSolvedGroupByArgs['orderBy'] }
        : { orderBy?: problemSolvedGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, problemSolvedGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProblemSolvedGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the problemSolved model
   */
  readonly fields: problemSolvedFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for problemSolved.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__problemSolvedClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    problem<T extends ProblemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProblemDefaultArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the problemSolved model
   */
  interface problemSolvedFieldRefs {
    readonly id: FieldRef<"problemSolved", 'String'>
    readonly userId: FieldRef<"problemSolved", 'String'>
    readonly problemId: FieldRef<"problemSolved", 'String'>
    readonly createAt: FieldRef<"problemSolved", 'DateTime'>
    readonly updatedAt: FieldRef<"problemSolved", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * problemSolved findUnique
   */
  export type problemSolvedFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problemSolved
     */
    select?: problemSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problemSolved
     */
    omit?: problemSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemSolvedInclude<ExtArgs> | null
    /**
     * Filter, which problemSolved to fetch.
     */
    where: problemSolvedWhereUniqueInput
  }

  /**
   * problemSolved findUniqueOrThrow
   */
  export type problemSolvedFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problemSolved
     */
    select?: problemSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problemSolved
     */
    omit?: problemSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemSolvedInclude<ExtArgs> | null
    /**
     * Filter, which problemSolved to fetch.
     */
    where: problemSolvedWhereUniqueInput
  }

  /**
   * problemSolved findFirst
   */
  export type problemSolvedFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problemSolved
     */
    select?: problemSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problemSolved
     */
    omit?: problemSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemSolvedInclude<ExtArgs> | null
    /**
     * Filter, which problemSolved to fetch.
     */
    where?: problemSolvedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of problemSolveds to fetch.
     */
    orderBy?: problemSolvedOrderByWithRelationInput | problemSolvedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for problemSolveds.
     */
    cursor?: problemSolvedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` problemSolveds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` problemSolveds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of problemSolveds.
     */
    distinct?: ProblemSolvedScalarFieldEnum | ProblemSolvedScalarFieldEnum[]
  }

  /**
   * problemSolved findFirstOrThrow
   */
  export type problemSolvedFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problemSolved
     */
    select?: problemSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problemSolved
     */
    omit?: problemSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemSolvedInclude<ExtArgs> | null
    /**
     * Filter, which problemSolved to fetch.
     */
    where?: problemSolvedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of problemSolveds to fetch.
     */
    orderBy?: problemSolvedOrderByWithRelationInput | problemSolvedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for problemSolveds.
     */
    cursor?: problemSolvedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` problemSolveds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` problemSolveds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of problemSolveds.
     */
    distinct?: ProblemSolvedScalarFieldEnum | ProblemSolvedScalarFieldEnum[]
  }

  /**
   * problemSolved findMany
   */
  export type problemSolvedFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problemSolved
     */
    select?: problemSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problemSolved
     */
    omit?: problemSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemSolvedInclude<ExtArgs> | null
    /**
     * Filter, which problemSolveds to fetch.
     */
    where?: problemSolvedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of problemSolveds to fetch.
     */
    orderBy?: problemSolvedOrderByWithRelationInput | problemSolvedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing problemSolveds.
     */
    cursor?: problemSolvedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` problemSolveds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` problemSolveds.
     */
    skip?: number
    distinct?: ProblemSolvedScalarFieldEnum | ProblemSolvedScalarFieldEnum[]
  }

  /**
   * problemSolved create
   */
  export type problemSolvedCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problemSolved
     */
    select?: problemSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problemSolved
     */
    omit?: problemSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemSolvedInclude<ExtArgs> | null
    /**
     * The data needed to create a problemSolved.
     */
    data: XOR<problemSolvedCreateInput, problemSolvedUncheckedCreateInput>
  }

  /**
   * problemSolved createMany
   */
  export type problemSolvedCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many problemSolveds.
     */
    data: problemSolvedCreateManyInput | problemSolvedCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * problemSolved createManyAndReturn
   */
  export type problemSolvedCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problemSolved
     */
    select?: problemSolvedSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the problemSolved
     */
    omit?: problemSolvedOmit<ExtArgs> | null
    /**
     * The data used to create many problemSolveds.
     */
    data: problemSolvedCreateManyInput | problemSolvedCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemSolvedIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * problemSolved update
   */
  export type problemSolvedUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problemSolved
     */
    select?: problemSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problemSolved
     */
    omit?: problemSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemSolvedInclude<ExtArgs> | null
    /**
     * The data needed to update a problemSolved.
     */
    data: XOR<problemSolvedUpdateInput, problemSolvedUncheckedUpdateInput>
    /**
     * Choose, which problemSolved to update.
     */
    where: problemSolvedWhereUniqueInput
  }

  /**
   * problemSolved updateMany
   */
  export type problemSolvedUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update problemSolveds.
     */
    data: XOR<problemSolvedUpdateManyMutationInput, problemSolvedUncheckedUpdateManyInput>
    /**
     * Filter which problemSolveds to update
     */
    where?: problemSolvedWhereInput
    /**
     * Limit how many problemSolveds to update.
     */
    limit?: number
  }

  /**
   * problemSolved updateManyAndReturn
   */
  export type problemSolvedUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problemSolved
     */
    select?: problemSolvedSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the problemSolved
     */
    omit?: problemSolvedOmit<ExtArgs> | null
    /**
     * The data used to update problemSolveds.
     */
    data: XOR<problemSolvedUpdateManyMutationInput, problemSolvedUncheckedUpdateManyInput>
    /**
     * Filter which problemSolveds to update
     */
    where?: problemSolvedWhereInput
    /**
     * Limit how many problemSolveds to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemSolvedIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * problemSolved upsert
   */
  export type problemSolvedUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problemSolved
     */
    select?: problemSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problemSolved
     */
    omit?: problemSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemSolvedInclude<ExtArgs> | null
    /**
     * The filter to search for the problemSolved to update in case it exists.
     */
    where: problemSolvedWhereUniqueInput
    /**
     * In case the problemSolved found by the `where` argument doesn't exist, create a new problemSolved with this data.
     */
    create: XOR<problemSolvedCreateInput, problemSolvedUncheckedCreateInput>
    /**
     * In case the problemSolved was found with the provided `where` argument, update it with this data.
     */
    update: XOR<problemSolvedUpdateInput, problemSolvedUncheckedUpdateInput>
  }

  /**
   * problemSolved delete
   */
  export type problemSolvedDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problemSolved
     */
    select?: problemSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problemSolved
     */
    omit?: problemSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemSolvedInclude<ExtArgs> | null
    /**
     * Filter which problemSolved to delete.
     */
    where: problemSolvedWhereUniqueInput
  }

  /**
   * problemSolved deleteMany
   */
  export type problemSolvedDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which problemSolveds to delete
     */
    where?: problemSolvedWhereInput
    /**
     * Limit how many problemSolveds to delete.
     */
    limit?: number
  }

  /**
   * problemSolved without action
   */
  export type problemSolvedDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problemSolved
     */
    select?: problemSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problemSolved
     */
    omit?: problemSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemSolvedInclude<ExtArgs> | null
  }


  /**
   * Model PlayList
   */

  export type AggregatePlayList = {
    _count: PlayListCountAggregateOutputType | null
    _min: PlayListMinAggregateOutputType | null
    _max: PlayListMaxAggregateOutputType | null
  }

  export type PlayListMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    userId: string | null
    createAt: Date | null
    updatedAt: Date | null
  }

  export type PlayListMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    userId: string | null
    createAt: Date | null
    updatedAt: Date | null
  }

  export type PlayListCountAggregateOutputType = {
    id: number
    name: number
    description: number
    userId: number
    createAt: number
    updatedAt: number
    _all: number
  }


  export type PlayListMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    userId?: true
    createAt?: true
    updatedAt?: true
  }

  export type PlayListMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    userId?: true
    createAt?: true
    updatedAt?: true
  }

  export type PlayListCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    userId?: true
    createAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PlayListAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlayList to aggregate.
     */
    where?: PlayListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayLists to fetch.
     */
    orderBy?: PlayListOrderByWithRelationInput | PlayListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlayListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlayLists
    **/
    _count?: true | PlayListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlayListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlayListMaxAggregateInputType
  }

  export type GetPlayListAggregateType<T extends PlayListAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayList[P]>
      : GetScalarType<T[P], AggregatePlayList[P]>
  }




  export type PlayListGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayListWhereInput
    orderBy?: PlayListOrderByWithAggregationInput | PlayListOrderByWithAggregationInput[]
    by: PlayListScalarFieldEnum[] | PlayListScalarFieldEnum
    having?: PlayListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlayListCountAggregateInputType | true
    _min?: PlayListMinAggregateInputType
    _max?: PlayListMaxAggregateInputType
  }

  export type PlayListGroupByOutputType = {
    id: string
    name: string
    description: string | null
    userId: string
    createAt: Date
    updatedAt: Date
    _count: PlayListCountAggregateOutputType | null
    _min: PlayListMinAggregateOutputType | null
    _max: PlayListMaxAggregateOutputType | null
  }

  type GetPlayListGroupByPayload<T extends PlayListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlayListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlayListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlayListGroupByOutputType[P]>
            : GetScalarType<T[P], PlayListGroupByOutputType[P]>
        }
      >
    >


  export type PlayListSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    userId?: boolean
    createAt?: boolean
    updatedAt?: boolean
    problems?: boolean | PlayList$problemsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | PlayListCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playList"]>

  export type PlayListSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    userId?: boolean
    createAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playList"]>

  export type PlayListSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    userId?: boolean
    createAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playList"]>

  export type PlayListSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    userId?: boolean
    createAt?: boolean
    updatedAt?: boolean
  }

  export type PlayListOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "userId" | "createAt" | "updatedAt", ExtArgs["result"]["playList"]>
  export type PlayListInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    problems?: boolean | PlayList$problemsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | PlayListCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlayListIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PlayListIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PlayListPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlayList"
    objects: {
      problems: Prisma.$ProblemInPlayListPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      userId: string
      createAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["playList"]>
    composites: {}
  }

  type PlayListGetPayload<S extends boolean | null | undefined | PlayListDefaultArgs> = $Result.GetResult<Prisma.$PlayListPayload, S>

  type PlayListCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlayListFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlayListCountAggregateInputType | true
    }

  export interface PlayListDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlayList'], meta: { name: 'PlayList' } }
    /**
     * Find zero or one PlayList that matches the filter.
     * @param {PlayListFindUniqueArgs} args - Arguments to find a PlayList
     * @example
     * // Get one PlayList
     * const playList = await prisma.playList.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlayListFindUniqueArgs>(args: SelectSubset<T, PlayListFindUniqueArgs<ExtArgs>>): Prisma__PlayListClient<$Result.GetResult<Prisma.$PlayListPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PlayList that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlayListFindUniqueOrThrowArgs} args - Arguments to find a PlayList
     * @example
     * // Get one PlayList
     * const playList = await prisma.playList.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlayListFindUniqueOrThrowArgs>(args: SelectSubset<T, PlayListFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlayListClient<$Result.GetResult<Prisma.$PlayListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlayList that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayListFindFirstArgs} args - Arguments to find a PlayList
     * @example
     * // Get one PlayList
     * const playList = await prisma.playList.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlayListFindFirstArgs>(args?: SelectSubset<T, PlayListFindFirstArgs<ExtArgs>>): Prisma__PlayListClient<$Result.GetResult<Prisma.$PlayListPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlayList that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayListFindFirstOrThrowArgs} args - Arguments to find a PlayList
     * @example
     * // Get one PlayList
     * const playList = await prisma.playList.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlayListFindFirstOrThrowArgs>(args?: SelectSubset<T, PlayListFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlayListClient<$Result.GetResult<Prisma.$PlayListPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PlayLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayListFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlayLists
     * const playLists = await prisma.playList.findMany()
     * 
     * // Get first 10 PlayLists
     * const playLists = await prisma.playList.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playListWithIdOnly = await prisma.playList.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlayListFindManyArgs>(args?: SelectSubset<T, PlayListFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PlayList.
     * @param {PlayListCreateArgs} args - Arguments to create a PlayList.
     * @example
     * // Create one PlayList
     * const PlayList = await prisma.playList.create({
     *   data: {
     *     // ... data to create a PlayList
     *   }
     * })
     * 
     */
    create<T extends PlayListCreateArgs>(args: SelectSubset<T, PlayListCreateArgs<ExtArgs>>): Prisma__PlayListClient<$Result.GetResult<Prisma.$PlayListPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PlayLists.
     * @param {PlayListCreateManyArgs} args - Arguments to create many PlayLists.
     * @example
     * // Create many PlayLists
     * const playList = await prisma.playList.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlayListCreateManyArgs>(args?: SelectSubset<T, PlayListCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PlayLists and returns the data saved in the database.
     * @param {PlayListCreateManyAndReturnArgs} args - Arguments to create many PlayLists.
     * @example
     * // Create many PlayLists
     * const playList = await prisma.playList.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PlayLists and only return the `id`
     * const playListWithIdOnly = await prisma.playList.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlayListCreateManyAndReturnArgs>(args?: SelectSubset<T, PlayListCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayListPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PlayList.
     * @param {PlayListDeleteArgs} args - Arguments to delete one PlayList.
     * @example
     * // Delete one PlayList
     * const PlayList = await prisma.playList.delete({
     *   where: {
     *     // ... filter to delete one PlayList
     *   }
     * })
     * 
     */
    delete<T extends PlayListDeleteArgs>(args: SelectSubset<T, PlayListDeleteArgs<ExtArgs>>): Prisma__PlayListClient<$Result.GetResult<Prisma.$PlayListPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PlayList.
     * @param {PlayListUpdateArgs} args - Arguments to update one PlayList.
     * @example
     * // Update one PlayList
     * const playList = await prisma.playList.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlayListUpdateArgs>(args: SelectSubset<T, PlayListUpdateArgs<ExtArgs>>): Prisma__PlayListClient<$Result.GetResult<Prisma.$PlayListPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PlayLists.
     * @param {PlayListDeleteManyArgs} args - Arguments to filter PlayLists to delete.
     * @example
     * // Delete a few PlayLists
     * const { count } = await prisma.playList.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlayListDeleteManyArgs>(args?: SelectSubset<T, PlayListDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlayLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlayLists
     * const playList = await prisma.playList.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlayListUpdateManyArgs>(args: SelectSubset<T, PlayListUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlayLists and returns the data updated in the database.
     * @param {PlayListUpdateManyAndReturnArgs} args - Arguments to update many PlayLists.
     * @example
     * // Update many PlayLists
     * const playList = await prisma.playList.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PlayLists and only return the `id`
     * const playListWithIdOnly = await prisma.playList.updateManyAndReturn({
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
    updateManyAndReturn<T extends PlayListUpdateManyAndReturnArgs>(args: SelectSubset<T, PlayListUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayListPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PlayList.
     * @param {PlayListUpsertArgs} args - Arguments to update or create a PlayList.
     * @example
     * // Update or create a PlayList
     * const playList = await prisma.playList.upsert({
     *   create: {
     *     // ... data to create a PlayList
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlayList we want to update
     *   }
     * })
     */
    upsert<T extends PlayListUpsertArgs>(args: SelectSubset<T, PlayListUpsertArgs<ExtArgs>>): Prisma__PlayListClient<$Result.GetResult<Prisma.$PlayListPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PlayLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayListCountArgs} args - Arguments to filter PlayLists to count.
     * @example
     * // Count the number of PlayLists
     * const count = await prisma.playList.count({
     *   where: {
     *     // ... the filter for the PlayLists we want to count
     *   }
     * })
    **/
    count<T extends PlayListCountArgs>(
      args?: Subset<T, PlayListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlayListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlayList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlayListAggregateArgs>(args: Subset<T, PlayListAggregateArgs>): Prisma.PrismaPromise<GetPlayListAggregateType<T>>

    /**
     * Group by PlayList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayListGroupByArgs} args - Group by arguments.
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
      T extends PlayListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlayListGroupByArgs['orderBy'] }
        : { orderBy?: PlayListGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlayListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlayList model
   */
  readonly fields: PlayListFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlayList.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlayListClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    problems<T extends PlayList$problemsArgs<ExtArgs> = {}>(args?: Subset<T, PlayList$problemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemInPlayListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PlayList model
   */
  interface PlayListFieldRefs {
    readonly id: FieldRef<"PlayList", 'String'>
    readonly name: FieldRef<"PlayList", 'String'>
    readonly description: FieldRef<"PlayList", 'String'>
    readonly userId: FieldRef<"PlayList", 'String'>
    readonly createAt: FieldRef<"PlayList", 'DateTime'>
    readonly updatedAt: FieldRef<"PlayList", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PlayList findUnique
   */
  export type PlayListFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayList
     */
    select?: PlayListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayList
     */
    omit?: PlayListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayListInclude<ExtArgs> | null
    /**
     * Filter, which PlayList to fetch.
     */
    where: PlayListWhereUniqueInput
  }

  /**
   * PlayList findUniqueOrThrow
   */
  export type PlayListFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayList
     */
    select?: PlayListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayList
     */
    omit?: PlayListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayListInclude<ExtArgs> | null
    /**
     * Filter, which PlayList to fetch.
     */
    where: PlayListWhereUniqueInput
  }

  /**
   * PlayList findFirst
   */
  export type PlayListFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayList
     */
    select?: PlayListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayList
     */
    omit?: PlayListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayListInclude<ExtArgs> | null
    /**
     * Filter, which PlayList to fetch.
     */
    where?: PlayListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayLists to fetch.
     */
    orderBy?: PlayListOrderByWithRelationInput | PlayListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlayLists.
     */
    cursor?: PlayListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayLists.
     */
    distinct?: PlayListScalarFieldEnum | PlayListScalarFieldEnum[]
  }

  /**
   * PlayList findFirstOrThrow
   */
  export type PlayListFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayList
     */
    select?: PlayListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayList
     */
    omit?: PlayListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayListInclude<ExtArgs> | null
    /**
     * Filter, which PlayList to fetch.
     */
    where?: PlayListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayLists to fetch.
     */
    orderBy?: PlayListOrderByWithRelationInput | PlayListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlayLists.
     */
    cursor?: PlayListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayLists.
     */
    distinct?: PlayListScalarFieldEnum | PlayListScalarFieldEnum[]
  }

  /**
   * PlayList findMany
   */
  export type PlayListFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayList
     */
    select?: PlayListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayList
     */
    omit?: PlayListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayListInclude<ExtArgs> | null
    /**
     * Filter, which PlayLists to fetch.
     */
    where?: PlayListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayLists to fetch.
     */
    orderBy?: PlayListOrderByWithRelationInput | PlayListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlayLists.
     */
    cursor?: PlayListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayLists.
     */
    skip?: number
    distinct?: PlayListScalarFieldEnum | PlayListScalarFieldEnum[]
  }

  /**
   * PlayList create
   */
  export type PlayListCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayList
     */
    select?: PlayListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayList
     */
    omit?: PlayListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayListInclude<ExtArgs> | null
    /**
     * The data needed to create a PlayList.
     */
    data: XOR<PlayListCreateInput, PlayListUncheckedCreateInput>
  }

  /**
   * PlayList createMany
   */
  export type PlayListCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlayLists.
     */
    data: PlayListCreateManyInput | PlayListCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlayList createManyAndReturn
   */
  export type PlayListCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayList
     */
    select?: PlayListSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlayList
     */
    omit?: PlayListOmit<ExtArgs> | null
    /**
     * The data used to create many PlayLists.
     */
    data: PlayListCreateManyInput | PlayListCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayListIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlayList update
   */
  export type PlayListUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayList
     */
    select?: PlayListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayList
     */
    omit?: PlayListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayListInclude<ExtArgs> | null
    /**
     * The data needed to update a PlayList.
     */
    data: XOR<PlayListUpdateInput, PlayListUncheckedUpdateInput>
    /**
     * Choose, which PlayList to update.
     */
    where: PlayListWhereUniqueInput
  }

  /**
   * PlayList updateMany
   */
  export type PlayListUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlayLists.
     */
    data: XOR<PlayListUpdateManyMutationInput, PlayListUncheckedUpdateManyInput>
    /**
     * Filter which PlayLists to update
     */
    where?: PlayListWhereInput
    /**
     * Limit how many PlayLists to update.
     */
    limit?: number
  }

  /**
   * PlayList updateManyAndReturn
   */
  export type PlayListUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayList
     */
    select?: PlayListSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlayList
     */
    omit?: PlayListOmit<ExtArgs> | null
    /**
     * The data used to update PlayLists.
     */
    data: XOR<PlayListUpdateManyMutationInput, PlayListUncheckedUpdateManyInput>
    /**
     * Filter which PlayLists to update
     */
    where?: PlayListWhereInput
    /**
     * Limit how many PlayLists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayListIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlayList upsert
   */
  export type PlayListUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayList
     */
    select?: PlayListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayList
     */
    omit?: PlayListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayListInclude<ExtArgs> | null
    /**
     * The filter to search for the PlayList to update in case it exists.
     */
    where: PlayListWhereUniqueInput
    /**
     * In case the PlayList found by the `where` argument doesn't exist, create a new PlayList with this data.
     */
    create: XOR<PlayListCreateInput, PlayListUncheckedCreateInput>
    /**
     * In case the PlayList was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlayListUpdateInput, PlayListUncheckedUpdateInput>
  }

  /**
   * PlayList delete
   */
  export type PlayListDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayList
     */
    select?: PlayListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayList
     */
    omit?: PlayListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayListInclude<ExtArgs> | null
    /**
     * Filter which PlayList to delete.
     */
    where: PlayListWhereUniqueInput
  }

  /**
   * PlayList deleteMany
   */
  export type PlayListDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlayLists to delete
     */
    where?: PlayListWhereInput
    /**
     * Limit how many PlayLists to delete.
     */
    limit?: number
  }

  /**
   * PlayList.problems
   */
  export type PlayList$problemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemInPlayList
     */
    select?: ProblemInPlayListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemInPlayList
     */
    omit?: ProblemInPlayListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInPlayListInclude<ExtArgs> | null
    where?: ProblemInPlayListWhereInput
    orderBy?: ProblemInPlayListOrderByWithRelationInput | ProblemInPlayListOrderByWithRelationInput[]
    cursor?: ProblemInPlayListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProblemInPlayListScalarFieldEnum | ProblemInPlayListScalarFieldEnum[]
  }

  /**
   * PlayList without action
   */
  export type PlayListDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayList
     */
    select?: PlayListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayList
     */
    omit?: PlayListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayListInclude<ExtArgs> | null
  }


  /**
   * Model ProblemInPlayList
   */

  export type AggregateProblemInPlayList = {
    _count: ProblemInPlayListCountAggregateOutputType | null
    _min: ProblemInPlayListMinAggregateOutputType | null
    _max: ProblemInPlayListMaxAggregateOutputType | null
  }

  export type ProblemInPlayListMinAggregateOutputType = {
    id: string | null
    playListId: string | null
    problemId: string | null
    createAt: Date | null
    updatedAt: Date | null
  }

  export type ProblemInPlayListMaxAggregateOutputType = {
    id: string | null
    playListId: string | null
    problemId: string | null
    createAt: Date | null
    updatedAt: Date | null
  }

  export type ProblemInPlayListCountAggregateOutputType = {
    id: number
    playListId: number
    problemId: number
    createAt: number
    updatedAt: number
    _all: number
  }


  export type ProblemInPlayListMinAggregateInputType = {
    id?: true
    playListId?: true
    problemId?: true
    createAt?: true
    updatedAt?: true
  }

  export type ProblemInPlayListMaxAggregateInputType = {
    id?: true
    playListId?: true
    problemId?: true
    createAt?: true
    updatedAt?: true
  }

  export type ProblemInPlayListCountAggregateInputType = {
    id?: true
    playListId?: true
    problemId?: true
    createAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProblemInPlayListAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProblemInPlayList to aggregate.
     */
    where?: ProblemInPlayListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProblemInPlayLists to fetch.
     */
    orderBy?: ProblemInPlayListOrderByWithRelationInput | ProblemInPlayListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProblemInPlayListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProblemInPlayLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProblemInPlayLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProblemInPlayLists
    **/
    _count?: true | ProblemInPlayListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProblemInPlayListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProblemInPlayListMaxAggregateInputType
  }

  export type GetProblemInPlayListAggregateType<T extends ProblemInPlayListAggregateArgs> = {
        [P in keyof T & keyof AggregateProblemInPlayList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProblemInPlayList[P]>
      : GetScalarType<T[P], AggregateProblemInPlayList[P]>
  }




  export type ProblemInPlayListGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProblemInPlayListWhereInput
    orderBy?: ProblemInPlayListOrderByWithAggregationInput | ProblemInPlayListOrderByWithAggregationInput[]
    by: ProblemInPlayListScalarFieldEnum[] | ProblemInPlayListScalarFieldEnum
    having?: ProblemInPlayListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProblemInPlayListCountAggregateInputType | true
    _min?: ProblemInPlayListMinAggregateInputType
    _max?: ProblemInPlayListMaxAggregateInputType
  }

  export type ProblemInPlayListGroupByOutputType = {
    id: string
    playListId: string
    problemId: string
    createAt: Date
    updatedAt: Date
    _count: ProblemInPlayListCountAggregateOutputType | null
    _min: ProblemInPlayListMinAggregateOutputType | null
    _max: ProblemInPlayListMaxAggregateOutputType | null
  }

  type GetProblemInPlayListGroupByPayload<T extends ProblemInPlayListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProblemInPlayListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProblemInPlayListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProblemInPlayListGroupByOutputType[P]>
            : GetScalarType<T[P], ProblemInPlayListGroupByOutputType[P]>
        }
      >
    >


  export type ProblemInPlayListSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playListId?: boolean
    problemId?: boolean
    createAt?: boolean
    updatedAt?: boolean
    playlist?: boolean | PlayListDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problemInPlayList"]>

  export type ProblemInPlayListSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playListId?: boolean
    problemId?: boolean
    createAt?: boolean
    updatedAt?: boolean
    playlist?: boolean | PlayListDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problemInPlayList"]>

  export type ProblemInPlayListSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playListId?: boolean
    problemId?: boolean
    createAt?: boolean
    updatedAt?: boolean
    playlist?: boolean | PlayListDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problemInPlayList"]>

  export type ProblemInPlayListSelectScalar = {
    id?: boolean
    playListId?: boolean
    problemId?: boolean
    createAt?: boolean
    updatedAt?: boolean
  }

  export type ProblemInPlayListOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "playListId" | "problemId" | "createAt" | "updatedAt", ExtArgs["result"]["problemInPlayList"]>
  export type ProblemInPlayListInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    playlist?: boolean | PlayListDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }
  export type ProblemInPlayListIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    playlist?: boolean | PlayListDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }
  export type ProblemInPlayListIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    playlist?: boolean | PlayListDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }

  export type $ProblemInPlayListPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProblemInPlayList"
    objects: {
      playlist: Prisma.$PlayListPayload<ExtArgs>
      problem: Prisma.$ProblemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      playListId: string
      problemId: string
      createAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["problemInPlayList"]>
    composites: {}
  }

  type ProblemInPlayListGetPayload<S extends boolean | null | undefined | ProblemInPlayListDefaultArgs> = $Result.GetResult<Prisma.$ProblemInPlayListPayload, S>

  type ProblemInPlayListCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProblemInPlayListFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProblemInPlayListCountAggregateInputType | true
    }

  export interface ProblemInPlayListDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProblemInPlayList'], meta: { name: 'ProblemInPlayList' } }
    /**
     * Find zero or one ProblemInPlayList that matches the filter.
     * @param {ProblemInPlayListFindUniqueArgs} args - Arguments to find a ProblemInPlayList
     * @example
     * // Get one ProblemInPlayList
     * const problemInPlayList = await prisma.problemInPlayList.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProblemInPlayListFindUniqueArgs>(args: SelectSubset<T, ProblemInPlayListFindUniqueArgs<ExtArgs>>): Prisma__ProblemInPlayListClient<$Result.GetResult<Prisma.$ProblemInPlayListPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProblemInPlayList that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProblemInPlayListFindUniqueOrThrowArgs} args - Arguments to find a ProblemInPlayList
     * @example
     * // Get one ProblemInPlayList
     * const problemInPlayList = await prisma.problemInPlayList.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProblemInPlayListFindUniqueOrThrowArgs>(args: SelectSubset<T, ProblemInPlayListFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProblemInPlayListClient<$Result.GetResult<Prisma.$ProblemInPlayListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProblemInPlayList that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemInPlayListFindFirstArgs} args - Arguments to find a ProblemInPlayList
     * @example
     * // Get one ProblemInPlayList
     * const problemInPlayList = await prisma.problemInPlayList.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProblemInPlayListFindFirstArgs>(args?: SelectSubset<T, ProblemInPlayListFindFirstArgs<ExtArgs>>): Prisma__ProblemInPlayListClient<$Result.GetResult<Prisma.$ProblemInPlayListPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProblemInPlayList that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemInPlayListFindFirstOrThrowArgs} args - Arguments to find a ProblemInPlayList
     * @example
     * // Get one ProblemInPlayList
     * const problemInPlayList = await prisma.problemInPlayList.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProblemInPlayListFindFirstOrThrowArgs>(args?: SelectSubset<T, ProblemInPlayListFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProblemInPlayListClient<$Result.GetResult<Prisma.$ProblemInPlayListPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProblemInPlayLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemInPlayListFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProblemInPlayLists
     * const problemInPlayLists = await prisma.problemInPlayList.findMany()
     * 
     * // Get first 10 ProblemInPlayLists
     * const problemInPlayLists = await prisma.problemInPlayList.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const problemInPlayListWithIdOnly = await prisma.problemInPlayList.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProblemInPlayListFindManyArgs>(args?: SelectSubset<T, ProblemInPlayListFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemInPlayListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProblemInPlayList.
     * @param {ProblemInPlayListCreateArgs} args - Arguments to create a ProblemInPlayList.
     * @example
     * // Create one ProblemInPlayList
     * const ProblemInPlayList = await prisma.problemInPlayList.create({
     *   data: {
     *     // ... data to create a ProblemInPlayList
     *   }
     * })
     * 
     */
    create<T extends ProblemInPlayListCreateArgs>(args: SelectSubset<T, ProblemInPlayListCreateArgs<ExtArgs>>): Prisma__ProblemInPlayListClient<$Result.GetResult<Prisma.$ProblemInPlayListPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProblemInPlayLists.
     * @param {ProblemInPlayListCreateManyArgs} args - Arguments to create many ProblemInPlayLists.
     * @example
     * // Create many ProblemInPlayLists
     * const problemInPlayList = await prisma.problemInPlayList.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProblemInPlayListCreateManyArgs>(args?: SelectSubset<T, ProblemInPlayListCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProblemInPlayLists and returns the data saved in the database.
     * @param {ProblemInPlayListCreateManyAndReturnArgs} args - Arguments to create many ProblemInPlayLists.
     * @example
     * // Create many ProblemInPlayLists
     * const problemInPlayList = await prisma.problemInPlayList.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProblemInPlayLists and only return the `id`
     * const problemInPlayListWithIdOnly = await prisma.problemInPlayList.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProblemInPlayListCreateManyAndReturnArgs>(args?: SelectSubset<T, ProblemInPlayListCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemInPlayListPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProblemInPlayList.
     * @param {ProblemInPlayListDeleteArgs} args - Arguments to delete one ProblemInPlayList.
     * @example
     * // Delete one ProblemInPlayList
     * const ProblemInPlayList = await prisma.problemInPlayList.delete({
     *   where: {
     *     // ... filter to delete one ProblemInPlayList
     *   }
     * })
     * 
     */
    delete<T extends ProblemInPlayListDeleteArgs>(args: SelectSubset<T, ProblemInPlayListDeleteArgs<ExtArgs>>): Prisma__ProblemInPlayListClient<$Result.GetResult<Prisma.$ProblemInPlayListPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProblemInPlayList.
     * @param {ProblemInPlayListUpdateArgs} args - Arguments to update one ProblemInPlayList.
     * @example
     * // Update one ProblemInPlayList
     * const problemInPlayList = await prisma.problemInPlayList.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProblemInPlayListUpdateArgs>(args: SelectSubset<T, ProblemInPlayListUpdateArgs<ExtArgs>>): Prisma__ProblemInPlayListClient<$Result.GetResult<Prisma.$ProblemInPlayListPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProblemInPlayLists.
     * @param {ProblemInPlayListDeleteManyArgs} args - Arguments to filter ProblemInPlayLists to delete.
     * @example
     * // Delete a few ProblemInPlayLists
     * const { count } = await prisma.problemInPlayList.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProblemInPlayListDeleteManyArgs>(args?: SelectSubset<T, ProblemInPlayListDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProblemInPlayLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemInPlayListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProblemInPlayLists
     * const problemInPlayList = await prisma.problemInPlayList.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProblemInPlayListUpdateManyArgs>(args: SelectSubset<T, ProblemInPlayListUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProblemInPlayLists and returns the data updated in the database.
     * @param {ProblemInPlayListUpdateManyAndReturnArgs} args - Arguments to update many ProblemInPlayLists.
     * @example
     * // Update many ProblemInPlayLists
     * const problemInPlayList = await prisma.problemInPlayList.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProblemInPlayLists and only return the `id`
     * const problemInPlayListWithIdOnly = await prisma.problemInPlayList.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProblemInPlayListUpdateManyAndReturnArgs>(args: SelectSubset<T, ProblemInPlayListUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemInPlayListPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProblemInPlayList.
     * @param {ProblemInPlayListUpsertArgs} args - Arguments to update or create a ProblemInPlayList.
     * @example
     * // Update or create a ProblemInPlayList
     * const problemInPlayList = await prisma.problemInPlayList.upsert({
     *   create: {
     *     // ... data to create a ProblemInPlayList
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProblemInPlayList we want to update
     *   }
     * })
     */
    upsert<T extends ProblemInPlayListUpsertArgs>(args: SelectSubset<T, ProblemInPlayListUpsertArgs<ExtArgs>>): Prisma__ProblemInPlayListClient<$Result.GetResult<Prisma.$ProblemInPlayListPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProblemInPlayLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemInPlayListCountArgs} args - Arguments to filter ProblemInPlayLists to count.
     * @example
     * // Count the number of ProblemInPlayLists
     * const count = await prisma.problemInPlayList.count({
     *   where: {
     *     // ... the filter for the ProblemInPlayLists we want to count
     *   }
     * })
    **/
    count<T extends ProblemInPlayListCountArgs>(
      args?: Subset<T, ProblemInPlayListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProblemInPlayListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProblemInPlayList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemInPlayListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProblemInPlayListAggregateArgs>(args: Subset<T, ProblemInPlayListAggregateArgs>): Prisma.PrismaPromise<GetProblemInPlayListAggregateType<T>>

    /**
     * Group by ProblemInPlayList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemInPlayListGroupByArgs} args - Group by arguments.
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
      T extends ProblemInPlayListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProblemInPlayListGroupByArgs['orderBy'] }
        : { orderBy?: ProblemInPlayListGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProblemInPlayListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProblemInPlayListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProblemInPlayList model
   */
  readonly fields: ProblemInPlayListFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProblemInPlayList.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProblemInPlayListClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    playlist<T extends PlayListDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlayListDefaultArgs<ExtArgs>>): Prisma__PlayListClient<$Result.GetResult<Prisma.$PlayListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    problem<T extends ProblemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProblemDefaultArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProblemInPlayList model
   */
  interface ProblemInPlayListFieldRefs {
    readonly id: FieldRef<"ProblemInPlayList", 'String'>
    readonly playListId: FieldRef<"ProblemInPlayList", 'String'>
    readonly problemId: FieldRef<"ProblemInPlayList", 'String'>
    readonly createAt: FieldRef<"ProblemInPlayList", 'DateTime'>
    readonly updatedAt: FieldRef<"ProblemInPlayList", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProblemInPlayList findUnique
   */
  export type ProblemInPlayListFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemInPlayList
     */
    select?: ProblemInPlayListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemInPlayList
     */
    omit?: ProblemInPlayListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInPlayListInclude<ExtArgs> | null
    /**
     * Filter, which ProblemInPlayList to fetch.
     */
    where: ProblemInPlayListWhereUniqueInput
  }

  /**
   * ProblemInPlayList findUniqueOrThrow
   */
  export type ProblemInPlayListFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemInPlayList
     */
    select?: ProblemInPlayListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemInPlayList
     */
    omit?: ProblemInPlayListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInPlayListInclude<ExtArgs> | null
    /**
     * Filter, which ProblemInPlayList to fetch.
     */
    where: ProblemInPlayListWhereUniqueInput
  }

  /**
   * ProblemInPlayList findFirst
   */
  export type ProblemInPlayListFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemInPlayList
     */
    select?: ProblemInPlayListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemInPlayList
     */
    omit?: ProblemInPlayListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInPlayListInclude<ExtArgs> | null
    /**
     * Filter, which ProblemInPlayList to fetch.
     */
    where?: ProblemInPlayListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProblemInPlayLists to fetch.
     */
    orderBy?: ProblemInPlayListOrderByWithRelationInput | ProblemInPlayListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProblemInPlayLists.
     */
    cursor?: ProblemInPlayListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProblemInPlayLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProblemInPlayLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProblemInPlayLists.
     */
    distinct?: ProblemInPlayListScalarFieldEnum | ProblemInPlayListScalarFieldEnum[]
  }

  /**
   * ProblemInPlayList findFirstOrThrow
   */
  export type ProblemInPlayListFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemInPlayList
     */
    select?: ProblemInPlayListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemInPlayList
     */
    omit?: ProblemInPlayListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInPlayListInclude<ExtArgs> | null
    /**
     * Filter, which ProblemInPlayList to fetch.
     */
    where?: ProblemInPlayListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProblemInPlayLists to fetch.
     */
    orderBy?: ProblemInPlayListOrderByWithRelationInput | ProblemInPlayListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProblemInPlayLists.
     */
    cursor?: ProblemInPlayListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProblemInPlayLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProblemInPlayLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProblemInPlayLists.
     */
    distinct?: ProblemInPlayListScalarFieldEnum | ProblemInPlayListScalarFieldEnum[]
  }

  /**
   * ProblemInPlayList findMany
   */
  export type ProblemInPlayListFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemInPlayList
     */
    select?: ProblemInPlayListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemInPlayList
     */
    omit?: ProblemInPlayListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInPlayListInclude<ExtArgs> | null
    /**
     * Filter, which ProblemInPlayLists to fetch.
     */
    where?: ProblemInPlayListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProblemInPlayLists to fetch.
     */
    orderBy?: ProblemInPlayListOrderByWithRelationInput | ProblemInPlayListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProblemInPlayLists.
     */
    cursor?: ProblemInPlayListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProblemInPlayLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProblemInPlayLists.
     */
    skip?: number
    distinct?: ProblemInPlayListScalarFieldEnum | ProblemInPlayListScalarFieldEnum[]
  }

  /**
   * ProblemInPlayList create
   */
  export type ProblemInPlayListCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemInPlayList
     */
    select?: ProblemInPlayListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemInPlayList
     */
    omit?: ProblemInPlayListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInPlayListInclude<ExtArgs> | null
    /**
     * The data needed to create a ProblemInPlayList.
     */
    data: XOR<ProblemInPlayListCreateInput, ProblemInPlayListUncheckedCreateInput>
  }

  /**
   * ProblemInPlayList createMany
   */
  export type ProblemInPlayListCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProblemInPlayLists.
     */
    data: ProblemInPlayListCreateManyInput | ProblemInPlayListCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProblemInPlayList createManyAndReturn
   */
  export type ProblemInPlayListCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemInPlayList
     */
    select?: ProblemInPlayListSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemInPlayList
     */
    omit?: ProblemInPlayListOmit<ExtArgs> | null
    /**
     * The data used to create many ProblemInPlayLists.
     */
    data: ProblemInPlayListCreateManyInput | ProblemInPlayListCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInPlayListIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProblemInPlayList update
   */
  export type ProblemInPlayListUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemInPlayList
     */
    select?: ProblemInPlayListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemInPlayList
     */
    omit?: ProblemInPlayListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInPlayListInclude<ExtArgs> | null
    /**
     * The data needed to update a ProblemInPlayList.
     */
    data: XOR<ProblemInPlayListUpdateInput, ProblemInPlayListUncheckedUpdateInput>
    /**
     * Choose, which ProblemInPlayList to update.
     */
    where: ProblemInPlayListWhereUniqueInput
  }

  /**
   * ProblemInPlayList updateMany
   */
  export type ProblemInPlayListUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProblemInPlayLists.
     */
    data: XOR<ProblemInPlayListUpdateManyMutationInput, ProblemInPlayListUncheckedUpdateManyInput>
    /**
     * Filter which ProblemInPlayLists to update
     */
    where?: ProblemInPlayListWhereInput
    /**
     * Limit how many ProblemInPlayLists to update.
     */
    limit?: number
  }

  /**
   * ProblemInPlayList updateManyAndReturn
   */
  export type ProblemInPlayListUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemInPlayList
     */
    select?: ProblemInPlayListSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemInPlayList
     */
    omit?: ProblemInPlayListOmit<ExtArgs> | null
    /**
     * The data used to update ProblemInPlayLists.
     */
    data: XOR<ProblemInPlayListUpdateManyMutationInput, ProblemInPlayListUncheckedUpdateManyInput>
    /**
     * Filter which ProblemInPlayLists to update
     */
    where?: ProblemInPlayListWhereInput
    /**
     * Limit how many ProblemInPlayLists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInPlayListIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProblemInPlayList upsert
   */
  export type ProblemInPlayListUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemInPlayList
     */
    select?: ProblemInPlayListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemInPlayList
     */
    omit?: ProblemInPlayListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInPlayListInclude<ExtArgs> | null
    /**
     * The filter to search for the ProblemInPlayList to update in case it exists.
     */
    where: ProblemInPlayListWhereUniqueInput
    /**
     * In case the ProblemInPlayList found by the `where` argument doesn't exist, create a new ProblemInPlayList with this data.
     */
    create: XOR<ProblemInPlayListCreateInput, ProblemInPlayListUncheckedCreateInput>
    /**
     * In case the ProblemInPlayList was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProblemInPlayListUpdateInput, ProblemInPlayListUncheckedUpdateInput>
  }

  /**
   * ProblemInPlayList delete
   */
  export type ProblemInPlayListDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemInPlayList
     */
    select?: ProblemInPlayListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemInPlayList
     */
    omit?: ProblemInPlayListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInPlayListInclude<ExtArgs> | null
    /**
     * Filter which ProblemInPlayList to delete.
     */
    where: ProblemInPlayListWhereUniqueInput
  }

  /**
   * ProblemInPlayList deleteMany
   */
  export type ProblemInPlayListDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProblemInPlayLists to delete
     */
    where?: ProblemInPlayListWhereInput
    /**
     * Limit how many ProblemInPlayLists to delete.
     */
    limit?: number
  }

  /**
   * ProblemInPlayList without action
   */
  export type ProblemInPlayListDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemInPlayList
     */
    select?: ProblemInPlayListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemInPlayList
     */
    omit?: ProblemInPlayListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInPlayListInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    userRole: 'userRole',
    isVerified: 'isVerified',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProblemScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    difficulty: 'difficulty',
    tags: 'tags',
    userId: 'userId',
    examples: 'examples',
    constraints: 'constraints',
    hints: 'hints',
    editorial: 'editorial',
    testcases: 'testcases',
    codeSnippet: 'codeSnippet',
    referenceSolution: 'referenceSolution',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProblemScalarFieldEnum = (typeof ProblemScalarFieldEnum)[keyof typeof ProblemScalarFieldEnum]


  export const SubmissionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    problemId: 'problemId',
    sourceCode: 'sourceCode',
    stdin: 'stdin',
    stdout: 'stdout',
    stderr: 'stderr',
    compileOutput: 'compileOutput',
    status: 'status',
    memory: 'memory',
    time: 'time',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubmissionScalarFieldEnum = (typeof SubmissionScalarFieldEnum)[keyof typeof SubmissionScalarFieldEnum]


  export const TestCaseResultScalarFieldEnum: {
    id: 'id',
    submissionId: 'submissionId',
    testcase: 'testcase',
    passed: 'passed',
    stdout: 'stdout',
    expectedOutput: 'expectedOutput',
    stderr: 'stderr',
    compiledOutput: 'compiledOutput',
    status: 'status',
    memory: 'memory',
    time: 'time'
  };

  export type TestCaseResultScalarFieldEnum = (typeof TestCaseResultScalarFieldEnum)[keyof typeof TestCaseResultScalarFieldEnum]


  export const ProblemSolvedScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    problemId: 'problemId',
    createAt: 'createAt',
    updatedAt: 'updatedAt'
  };

  export type ProblemSolvedScalarFieldEnum = (typeof ProblemSolvedScalarFieldEnum)[keyof typeof ProblemSolvedScalarFieldEnum]


  export const PlayListScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    userId: 'userId',
    createAt: 'createAt',
    updatedAt: 'updatedAt'
  };

  export type PlayListScalarFieldEnum = (typeof PlayListScalarFieldEnum)[keyof typeof PlayListScalarFieldEnum]


  export const ProblemInPlayListScalarFieldEnum: {
    id: 'id',
    playListId: 'playListId',
    problemId: 'problemId',
    createAt: 'createAt',
    updatedAt: 'updatedAt'
  };

  export type ProblemInPlayListScalarFieldEnum = (typeof ProblemInPlayListScalarFieldEnum)[keyof typeof ProblemInPlayListScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRoles'
   */
  export type EnumUserRolesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRoles'>
    


  /**
   * Reference to a field of type 'UserRoles[]'
   */
  export type ListEnumUserRolesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRoles[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Difficulty'
   */
  export type EnumDifficultyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Difficulty'>
    


  /**
   * Reference to a field of type 'Difficulty[]'
   */
  export type ListEnumDifficultyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Difficulty[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    userRole?: EnumUserRolesFilter<"User"> | $Enums.UserRoles
    isVerified?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    problems?: ProblemListRelationFilter
    submission?: SubmissionListRelationFilter
    problemSolved?: ProblemSolvedListRelationFilter
    playlists?: PlayListListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    userRole?: SortOrder
    isVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    problems?: ProblemOrderByRelationAggregateInput
    submission?: SubmissionOrderByRelationAggregateInput
    problemSolved?: problemSolvedOrderByRelationAggregateInput
    playlists?: PlayListOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    userRole?: EnumUserRolesFilter<"User"> | $Enums.UserRoles
    isVerified?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    problems?: ProblemListRelationFilter
    submission?: SubmissionListRelationFilter
    problemSolved?: ProblemSolvedListRelationFilter
    playlists?: PlayListListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    userRole?: SortOrder
    isVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    userRole?: EnumUserRolesWithAggregatesFilter<"User"> | $Enums.UserRoles
    isVerified?: BoolWithAggregatesFilter<"User"> | boolean
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ProblemWhereInput = {
    AND?: ProblemWhereInput | ProblemWhereInput[]
    OR?: ProblemWhereInput[]
    NOT?: ProblemWhereInput | ProblemWhereInput[]
    id?: StringFilter<"Problem"> | string
    title?: StringFilter<"Problem"> | string
    description?: StringFilter<"Problem"> | string
    difficulty?: EnumDifficultyFilter<"Problem"> | $Enums.Difficulty
    tags?: StringNullableListFilter<"Problem">
    userId?: StringFilter<"Problem"> | string
    examples?: JsonFilter<"Problem">
    constraints?: StringFilter<"Problem"> | string
    hints?: StringNullableFilter<"Problem"> | string | null
    editorial?: StringNullableFilter<"Problem"> | string | null
    testcases?: JsonFilter<"Problem">
    codeSnippet?: JsonFilter<"Problem">
    referenceSolution?: JsonFilter<"Problem">
    createdAt?: DateTimeFilter<"Problem"> | Date | string
    updatedAt?: DateTimeFilter<"Problem"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    submission?: SubmissionListRelationFilter
    problemSolved?: ProblemSolvedListRelationFilter
    problemInPlayList?: ProblemInPlayListListRelationFilter
  }

  export type ProblemOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    difficulty?: SortOrder
    tags?: SortOrder
    userId?: SortOrder
    examples?: SortOrder
    constraints?: SortOrder
    hints?: SortOrderInput | SortOrder
    editorial?: SortOrderInput | SortOrder
    testcases?: SortOrder
    codeSnippet?: SortOrder
    referenceSolution?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    submission?: SubmissionOrderByRelationAggregateInput
    problemSolved?: problemSolvedOrderByRelationAggregateInput
    problemInPlayList?: ProblemInPlayListOrderByRelationAggregateInput
  }

  export type ProblemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProblemWhereInput | ProblemWhereInput[]
    OR?: ProblemWhereInput[]
    NOT?: ProblemWhereInput | ProblemWhereInput[]
    title?: StringFilter<"Problem"> | string
    description?: StringFilter<"Problem"> | string
    difficulty?: EnumDifficultyFilter<"Problem"> | $Enums.Difficulty
    tags?: StringNullableListFilter<"Problem">
    userId?: StringFilter<"Problem"> | string
    examples?: JsonFilter<"Problem">
    constraints?: StringFilter<"Problem"> | string
    hints?: StringNullableFilter<"Problem"> | string | null
    editorial?: StringNullableFilter<"Problem"> | string | null
    testcases?: JsonFilter<"Problem">
    codeSnippet?: JsonFilter<"Problem">
    referenceSolution?: JsonFilter<"Problem">
    createdAt?: DateTimeFilter<"Problem"> | Date | string
    updatedAt?: DateTimeFilter<"Problem"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    submission?: SubmissionListRelationFilter
    problemSolved?: ProblemSolvedListRelationFilter
    problemInPlayList?: ProblemInPlayListListRelationFilter
  }, "id">

  export type ProblemOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    difficulty?: SortOrder
    tags?: SortOrder
    userId?: SortOrder
    examples?: SortOrder
    constraints?: SortOrder
    hints?: SortOrderInput | SortOrder
    editorial?: SortOrderInput | SortOrder
    testcases?: SortOrder
    codeSnippet?: SortOrder
    referenceSolution?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProblemCountOrderByAggregateInput
    _max?: ProblemMaxOrderByAggregateInput
    _min?: ProblemMinOrderByAggregateInput
  }

  export type ProblemScalarWhereWithAggregatesInput = {
    AND?: ProblemScalarWhereWithAggregatesInput | ProblemScalarWhereWithAggregatesInput[]
    OR?: ProblemScalarWhereWithAggregatesInput[]
    NOT?: ProblemScalarWhereWithAggregatesInput | ProblemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Problem"> | string
    title?: StringWithAggregatesFilter<"Problem"> | string
    description?: StringWithAggregatesFilter<"Problem"> | string
    difficulty?: EnumDifficultyWithAggregatesFilter<"Problem"> | $Enums.Difficulty
    tags?: StringNullableListFilter<"Problem">
    userId?: StringWithAggregatesFilter<"Problem"> | string
    examples?: JsonWithAggregatesFilter<"Problem">
    constraints?: StringWithAggregatesFilter<"Problem"> | string
    hints?: StringNullableWithAggregatesFilter<"Problem"> | string | null
    editorial?: StringNullableWithAggregatesFilter<"Problem"> | string | null
    testcases?: JsonWithAggregatesFilter<"Problem">
    codeSnippet?: JsonWithAggregatesFilter<"Problem">
    referenceSolution?: JsonWithAggregatesFilter<"Problem">
    createdAt?: DateTimeWithAggregatesFilter<"Problem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Problem"> | Date | string
  }

  export type SubmissionWhereInput = {
    AND?: SubmissionWhereInput | SubmissionWhereInput[]
    OR?: SubmissionWhereInput[]
    NOT?: SubmissionWhereInput | SubmissionWhereInput[]
    id?: StringFilter<"Submission"> | string
    userId?: StringFilter<"Submission"> | string
    problemId?: StringFilter<"Submission"> | string
    sourceCode?: JsonFilter<"Submission">
    stdin?: StringNullableFilter<"Submission"> | string | null
    stdout?: StringNullableFilter<"Submission"> | string | null
    stderr?: StringNullableFilter<"Submission"> | string | null
    compileOutput?: StringNullableFilter<"Submission"> | string | null
    status?: StringFilter<"Submission"> | string
    memory?: StringNullableFilter<"Submission"> | string | null
    time?: StringNullableFilter<"Submission"> | string | null
    createdAt?: DateTimeFilter<"Submission"> | Date | string
    updatedAt?: DateTimeFilter<"Submission"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    problem?: XOR<ProblemScalarRelationFilter, ProblemWhereInput>
    testcaseresult?: TestCaseResultListRelationFilter
  }

  export type SubmissionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
    sourceCode?: SortOrder
    stdin?: SortOrderInput | SortOrder
    stdout?: SortOrderInput | SortOrder
    stderr?: SortOrderInput | SortOrder
    compileOutput?: SortOrderInput | SortOrder
    status?: SortOrder
    memory?: SortOrderInput | SortOrder
    time?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    problem?: ProblemOrderByWithRelationInput
    testcaseresult?: TestCaseResultOrderByRelationAggregateInput
  }

  export type SubmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SubmissionWhereInput | SubmissionWhereInput[]
    OR?: SubmissionWhereInput[]
    NOT?: SubmissionWhereInput | SubmissionWhereInput[]
    userId?: StringFilter<"Submission"> | string
    problemId?: StringFilter<"Submission"> | string
    sourceCode?: JsonFilter<"Submission">
    stdin?: StringNullableFilter<"Submission"> | string | null
    stdout?: StringNullableFilter<"Submission"> | string | null
    stderr?: StringNullableFilter<"Submission"> | string | null
    compileOutput?: StringNullableFilter<"Submission"> | string | null
    status?: StringFilter<"Submission"> | string
    memory?: StringNullableFilter<"Submission"> | string | null
    time?: StringNullableFilter<"Submission"> | string | null
    createdAt?: DateTimeFilter<"Submission"> | Date | string
    updatedAt?: DateTimeFilter<"Submission"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    problem?: XOR<ProblemScalarRelationFilter, ProblemWhereInput>
    testcaseresult?: TestCaseResultListRelationFilter
  }, "id">

  export type SubmissionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
    sourceCode?: SortOrder
    stdin?: SortOrderInput | SortOrder
    stdout?: SortOrderInput | SortOrder
    stderr?: SortOrderInput | SortOrder
    compileOutput?: SortOrderInput | SortOrder
    status?: SortOrder
    memory?: SortOrderInput | SortOrder
    time?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SubmissionCountOrderByAggregateInput
    _max?: SubmissionMaxOrderByAggregateInput
    _min?: SubmissionMinOrderByAggregateInput
  }

  export type SubmissionScalarWhereWithAggregatesInput = {
    AND?: SubmissionScalarWhereWithAggregatesInput | SubmissionScalarWhereWithAggregatesInput[]
    OR?: SubmissionScalarWhereWithAggregatesInput[]
    NOT?: SubmissionScalarWhereWithAggregatesInput | SubmissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Submission"> | string
    userId?: StringWithAggregatesFilter<"Submission"> | string
    problemId?: StringWithAggregatesFilter<"Submission"> | string
    sourceCode?: JsonWithAggregatesFilter<"Submission">
    stdin?: StringNullableWithAggregatesFilter<"Submission"> | string | null
    stdout?: StringNullableWithAggregatesFilter<"Submission"> | string | null
    stderr?: StringNullableWithAggregatesFilter<"Submission"> | string | null
    compileOutput?: StringNullableWithAggregatesFilter<"Submission"> | string | null
    status?: StringWithAggregatesFilter<"Submission"> | string
    memory?: StringNullableWithAggregatesFilter<"Submission"> | string | null
    time?: StringNullableWithAggregatesFilter<"Submission"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Submission"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Submission"> | Date | string
  }

  export type TestCaseResultWhereInput = {
    AND?: TestCaseResultWhereInput | TestCaseResultWhereInput[]
    OR?: TestCaseResultWhereInput[]
    NOT?: TestCaseResultWhereInput | TestCaseResultWhereInput[]
    id?: StringFilter<"TestCaseResult"> | string
    submissionId?: StringFilter<"TestCaseResult"> | string
    testcase?: IntFilter<"TestCaseResult"> | number
    passed?: BoolFilter<"TestCaseResult"> | boolean
    stdout?: StringNullableFilter<"TestCaseResult"> | string | null
    expectedOutput?: StringFilter<"TestCaseResult"> | string
    stderr?: StringNullableFilter<"TestCaseResult"> | string | null
    compiledOutput?: StringNullableFilter<"TestCaseResult"> | string | null
    status?: StringFilter<"TestCaseResult"> | string
    memory?: StringNullableFilter<"TestCaseResult"> | string | null
    time?: StringNullableFilter<"TestCaseResult"> | string | null
    submission?: XOR<SubmissionScalarRelationFilter, SubmissionWhereInput>
  }

  export type TestCaseResultOrderByWithRelationInput = {
    id?: SortOrder
    submissionId?: SortOrder
    testcase?: SortOrder
    passed?: SortOrder
    stdout?: SortOrderInput | SortOrder
    expectedOutput?: SortOrder
    stderr?: SortOrderInput | SortOrder
    compiledOutput?: SortOrderInput | SortOrder
    status?: SortOrder
    memory?: SortOrderInput | SortOrder
    time?: SortOrderInput | SortOrder
    submission?: SubmissionOrderByWithRelationInput
  }

  export type TestCaseResultWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TestCaseResultWhereInput | TestCaseResultWhereInput[]
    OR?: TestCaseResultWhereInput[]
    NOT?: TestCaseResultWhereInput | TestCaseResultWhereInput[]
    submissionId?: StringFilter<"TestCaseResult"> | string
    testcase?: IntFilter<"TestCaseResult"> | number
    passed?: BoolFilter<"TestCaseResult"> | boolean
    stdout?: StringNullableFilter<"TestCaseResult"> | string | null
    expectedOutput?: StringFilter<"TestCaseResult"> | string
    stderr?: StringNullableFilter<"TestCaseResult"> | string | null
    compiledOutput?: StringNullableFilter<"TestCaseResult"> | string | null
    status?: StringFilter<"TestCaseResult"> | string
    memory?: StringNullableFilter<"TestCaseResult"> | string | null
    time?: StringNullableFilter<"TestCaseResult"> | string | null
    submission?: XOR<SubmissionScalarRelationFilter, SubmissionWhereInput>
  }, "id">

  export type TestCaseResultOrderByWithAggregationInput = {
    id?: SortOrder
    submissionId?: SortOrder
    testcase?: SortOrder
    passed?: SortOrder
    stdout?: SortOrderInput | SortOrder
    expectedOutput?: SortOrder
    stderr?: SortOrderInput | SortOrder
    compiledOutput?: SortOrderInput | SortOrder
    status?: SortOrder
    memory?: SortOrderInput | SortOrder
    time?: SortOrderInput | SortOrder
    _count?: TestCaseResultCountOrderByAggregateInput
    _avg?: TestCaseResultAvgOrderByAggregateInput
    _max?: TestCaseResultMaxOrderByAggregateInput
    _min?: TestCaseResultMinOrderByAggregateInput
    _sum?: TestCaseResultSumOrderByAggregateInput
  }

  export type TestCaseResultScalarWhereWithAggregatesInput = {
    AND?: TestCaseResultScalarWhereWithAggregatesInput | TestCaseResultScalarWhereWithAggregatesInput[]
    OR?: TestCaseResultScalarWhereWithAggregatesInput[]
    NOT?: TestCaseResultScalarWhereWithAggregatesInput | TestCaseResultScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TestCaseResult"> | string
    submissionId?: StringWithAggregatesFilter<"TestCaseResult"> | string
    testcase?: IntWithAggregatesFilter<"TestCaseResult"> | number
    passed?: BoolWithAggregatesFilter<"TestCaseResult"> | boolean
    stdout?: StringNullableWithAggregatesFilter<"TestCaseResult"> | string | null
    expectedOutput?: StringWithAggregatesFilter<"TestCaseResult"> | string
    stderr?: StringNullableWithAggregatesFilter<"TestCaseResult"> | string | null
    compiledOutput?: StringNullableWithAggregatesFilter<"TestCaseResult"> | string | null
    status?: StringWithAggregatesFilter<"TestCaseResult"> | string
    memory?: StringNullableWithAggregatesFilter<"TestCaseResult"> | string | null
    time?: StringNullableWithAggregatesFilter<"TestCaseResult"> | string | null
  }

  export type problemSolvedWhereInput = {
    AND?: problemSolvedWhereInput | problemSolvedWhereInput[]
    OR?: problemSolvedWhereInput[]
    NOT?: problemSolvedWhereInput | problemSolvedWhereInput[]
    id?: StringFilter<"problemSolved"> | string
    userId?: StringFilter<"problemSolved"> | string
    problemId?: StringFilter<"problemSolved"> | string
    createAt?: DateTimeFilter<"problemSolved"> | Date | string
    updatedAt?: DateTimeFilter<"problemSolved"> | Date | string
    problem?: XOR<ProblemScalarRelationFilter, ProblemWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type problemSolvedOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
    problem?: ProblemOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type problemSolvedWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_problemId?: problemSolvedUserIdProblemIdCompoundUniqueInput
    AND?: problemSolvedWhereInput | problemSolvedWhereInput[]
    OR?: problemSolvedWhereInput[]
    NOT?: problemSolvedWhereInput | problemSolvedWhereInput[]
    userId?: StringFilter<"problemSolved"> | string
    problemId?: StringFilter<"problemSolved"> | string
    createAt?: DateTimeFilter<"problemSolved"> | Date | string
    updatedAt?: DateTimeFilter<"problemSolved"> | Date | string
    problem?: XOR<ProblemScalarRelationFilter, ProblemWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_problemId">

  export type problemSolvedOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
    _count?: problemSolvedCountOrderByAggregateInput
    _max?: problemSolvedMaxOrderByAggregateInput
    _min?: problemSolvedMinOrderByAggregateInput
  }

  export type problemSolvedScalarWhereWithAggregatesInput = {
    AND?: problemSolvedScalarWhereWithAggregatesInput | problemSolvedScalarWhereWithAggregatesInput[]
    OR?: problemSolvedScalarWhereWithAggregatesInput[]
    NOT?: problemSolvedScalarWhereWithAggregatesInput | problemSolvedScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"problemSolved"> | string
    userId?: StringWithAggregatesFilter<"problemSolved"> | string
    problemId?: StringWithAggregatesFilter<"problemSolved"> | string
    createAt?: DateTimeWithAggregatesFilter<"problemSolved"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"problemSolved"> | Date | string
  }

  export type PlayListWhereInput = {
    AND?: PlayListWhereInput | PlayListWhereInput[]
    OR?: PlayListWhereInput[]
    NOT?: PlayListWhereInput | PlayListWhereInput[]
    id?: StringFilter<"PlayList"> | string
    name?: StringFilter<"PlayList"> | string
    description?: StringNullableFilter<"PlayList"> | string | null
    userId?: StringFilter<"PlayList"> | string
    createAt?: DateTimeFilter<"PlayList"> | Date | string
    updatedAt?: DateTimeFilter<"PlayList"> | Date | string
    problems?: ProblemInPlayListListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PlayListOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    userId?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
    problems?: ProblemInPlayListOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type PlayListWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name_userId?: PlayListNameUserIdCompoundUniqueInput
    AND?: PlayListWhereInput | PlayListWhereInput[]
    OR?: PlayListWhereInput[]
    NOT?: PlayListWhereInput | PlayListWhereInput[]
    name?: StringFilter<"PlayList"> | string
    description?: StringNullableFilter<"PlayList"> | string | null
    userId?: StringFilter<"PlayList"> | string
    createAt?: DateTimeFilter<"PlayList"> | Date | string
    updatedAt?: DateTimeFilter<"PlayList"> | Date | string
    problems?: ProblemInPlayListListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "name_userId">

  export type PlayListOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    userId?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PlayListCountOrderByAggregateInput
    _max?: PlayListMaxOrderByAggregateInput
    _min?: PlayListMinOrderByAggregateInput
  }

  export type PlayListScalarWhereWithAggregatesInput = {
    AND?: PlayListScalarWhereWithAggregatesInput | PlayListScalarWhereWithAggregatesInput[]
    OR?: PlayListScalarWhereWithAggregatesInput[]
    NOT?: PlayListScalarWhereWithAggregatesInput | PlayListScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PlayList"> | string
    name?: StringWithAggregatesFilter<"PlayList"> | string
    description?: StringNullableWithAggregatesFilter<"PlayList"> | string | null
    userId?: StringWithAggregatesFilter<"PlayList"> | string
    createAt?: DateTimeWithAggregatesFilter<"PlayList"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PlayList"> | Date | string
  }

  export type ProblemInPlayListWhereInput = {
    AND?: ProblemInPlayListWhereInput | ProblemInPlayListWhereInput[]
    OR?: ProblemInPlayListWhereInput[]
    NOT?: ProblemInPlayListWhereInput | ProblemInPlayListWhereInput[]
    id?: StringFilter<"ProblemInPlayList"> | string
    playListId?: StringFilter<"ProblemInPlayList"> | string
    problemId?: StringFilter<"ProblemInPlayList"> | string
    createAt?: DateTimeFilter<"ProblemInPlayList"> | Date | string
    updatedAt?: DateTimeFilter<"ProblemInPlayList"> | Date | string
    playlist?: XOR<PlayListScalarRelationFilter, PlayListWhereInput>
    problem?: XOR<ProblemScalarRelationFilter, ProblemWhereInput>
  }

  export type ProblemInPlayListOrderByWithRelationInput = {
    id?: SortOrder
    playListId?: SortOrder
    problemId?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
    playlist?: PlayListOrderByWithRelationInput
    problem?: ProblemOrderByWithRelationInput
  }

  export type ProblemInPlayListWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    playListId_problemId?: ProblemInPlayListPlayListIdProblemIdCompoundUniqueInput
    AND?: ProblemInPlayListWhereInput | ProblemInPlayListWhereInput[]
    OR?: ProblemInPlayListWhereInput[]
    NOT?: ProblemInPlayListWhereInput | ProblemInPlayListWhereInput[]
    playListId?: StringFilter<"ProblemInPlayList"> | string
    problemId?: StringFilter<"ProblemInPlayList"> | string
    createAt?: DateTimeFilter<"ProblemInPlayList"> | Date | string
    updatedAt?: DateTimeFilter<"ProblemInPlayList"> | Date | string
    playlist?: XOR<PlayListScalarRelationFilter, PlayListWhereInput>
    problem?: XOR<ProblemScalarRelationFilter, ProblemWhereInput>
  }, "id" | "playListId_problemId">

  export type ProblemInPlayListOrderByWithAggregationInput = {
    id?: SortOrder
    playListId?: SortOrder
    problemId?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProblemInPlayListCountOrderByAggregateInput
    _max?: ProblemInPlayListMaxOrderByAggregateInput
    _min?: ProblemInPlayListMinOrderByAggregateInput
  }

  export type ProblemInPlayListScalarWhereWithAggregatesInput = {
    AND?: ProblemInPlayListScalarWhereWithAggregatesInput | ProblemInPlayListScalarWhereWithAggregatesInput[]
    OR?: ProblemInPlayListScalarWhereWithAggregatesInput[]
    NOT?: ProblemInPlayListScalarWhereWithAggregatesInput | ProblemInPlayListScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProblemInPlayList"> | string
    playListId?: StringWithAggregatesFilter<"ProblemInPlayList"> | string
    problemId?: StringWithAggregatesFilter<"ProblemInPlayList"> | string
    createAt?: DateTimeWithAggregatesFilter<"ProblemInPlayList"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProblemInPlayList"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    userRole: $Enums.UserRoles
    isVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemCreateNestedManyWithoutUserInput
    submission?: SubmissionCreateNestedManyWithoutUserInput
    problemSolved?: problemSolvedCreateNestedManyWithoutUserInput
    playlists?: PlayListCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    userRole: $Enums.UserRoles
    isVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemUncheckedCreateNestedManyWithoutUserInput
    submission?: SubmissionUncheckedCreateNestedManyWithoutUserInput
    problemSolved?: problemSolvedUncheckedCreateNestedManyWithoutUserInput
    playlists?: PlayListUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userRole?: EnumUserRolesFieldUpdateOperationsInput | $Enums.UserRoles
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemUpdateManyWithoutUserNestedInput
    submission?: SubmissionUpdateManyWithoutUserNestedInput
    problemSolved?: problemSolvedUpdateManyWithoutUserNestedInput
    playlists?: PlayListUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userRole?: EnumUserRolesFieldUpdateOperationsInput | $Enums.UserRoles
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemUncheckedUpdateManyWithoutUserNestedInput
    submission?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
    problemSolved?: problemSolvedUncheckedUpdateManyWithoutUserNestedInput
    playlists?: PlayListUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    userRole: $Enums.UserRoles
    isVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userRole?: EnumUserRolesFieldUpdateOperationsInput | $Enums.UserRoles
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userRole?: EnumUserRolesFieldUpdateOperationsInput | $Enums.UserRoles
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemCreateInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.Difficulty
    tags?: ProblemCreatetagsInput | string[]
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorial?: string | null
    testcases: JsonNullValueInput | InputJsonValue
    codeSnippet: JsonNullValueInput | InputJsonValue
    referenceSolution: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProblemsInput
    submission?: SubmissionCreateNestedManyWithoutProblemInput
    problemSolved?: problemSolvedCreateNestedManyWithoutProblemInput
    problemInPlayList?: ProblemInPlayListCreateNestedManyWithoutProblemInput
  }

  export type ProblemUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.Difficulty
    tags?: ProblemCreatetagsInput | string[]
    userId: string
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorial?: string | null
    testcases: JsonNullValueInput | InputJsonValue
    codeSnippet: JsonNullValueInput | InputJsonValue
    referenceSolution: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    submission?: SubmissionUncheckedCreateNestedManyWithoutProblemInput
    problemSolved?: problemSolvedUncheckedCreateNestedManyWithoutProblemInput
    problemInPlayList?: ProblemInPlayListUncheckedCreateNestedManyWithoutProblemInput
  }

  export type ProblemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: ProblemUpdatetagsInput | string[]
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testcases?: JsonNullValueInput | InputJsonValue
    codeSnippet?: JsonNullValueInput | InputJsonValue
    referenceSolution?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProblemsNestedInput
    submission?: SubmissionUpdateManyWithoutProblemNestedInput
    problemSolved?: problemSolvedUpdateManyWithoutProblemNestedInput
    problemInPlayList?: ProblemInPlayListUpdateManyWithoutProblemNestedInput
  }

  export type ProblemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: ProblemUpdatetagsInput | string[]
    userId?: StringFieldUpdateOperationsInput | string
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testcases?: JsonNullValueInput | InputJsonValue
    codeSnippet?: JsonNullValueInput | InputJsonValue
    referenceSolution?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submission?: SubmissionUncheckedUpdateManyWithoutProblemNestedInput
    problemSolved?: problemSolvedUncheckedUpdateManyWithoutProblemNestedInput
    problemInPlayList?: ProblemInPlayListUncheckedUpdateManyWithoutProblemNestedInput
  }

  export type ProblemCreateManyInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.Difficulty
    tags?: ProblemCreatetagsInput | string[]
    userId: string
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorial?: string | null
    testcases: JsonNullValueInput | InputJsonValue
    codeSnippet: JsonNullValueInput | InputJsonValue
    referenceSolution: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProblemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: ProblemUpdatetagsInput | string[]
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testcases?: JsonNullValueInput | InputJsonValue
    codeSnippet?: JsonNullValueInput | InputJsonValue
    referenceSolution?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: ProblemUpdatetagsInput | string[]
    userId?: StringFieldUpdateOperationsInput | string
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testcases?: JsonNullValueInput | InputJsonValue
    codeSnippet?: JsonNullValueInput | InputJsonValue
    referenceSolution?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionCreateInput = {
    id?: string
    sourceCode: JsonNullValueInput | InputJsonValue
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSubmissionInput
    problem: ProblemCreateNestedOneWithoutSubmissionInput
    testcaseresult?: TestCaseResultCreateNestedManyWithoutSubmissionInput
  }

  export type SubmissionUncheckedCreateInput = {
    id?: string
    userId: string
    problemId: string
    sourceCode: JsonNullValueInput | InputJsonValue
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    testcaseresult?: TestCaseResultUncheckedCreateNestedManyWithoutSubmissionInput
  }

  export type SubmissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceCode?: JsonNullValueInput | InputJsonValue
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubmissionNestedInput
    problem?: ProblemUpdateOneRequiredWithoutSubmissionNestedInput
    testcaseresult?: TestCaseResultUpdateManyWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    sourceCode?: JsonNullValueInput | InputJsonValue
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testcaseresult?: TestCaseResultUncheckedUpdateManyWithoutSubmissionNestedInput
  }

  export type SubmissionCreateManyInput = {
    id?: string
    userId: string
    problemId: string
    sourceCode: JsonNullValueInput | InputJsonValue
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubmissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceCode?: JsonNullValueInput | InputJsonValue
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    sourceCode?: JsonNullValueInput | InputJsonValue
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestCaseResultCreateInput = {
    id?: string
    testcase: number
    passed: boolean
    stdout?: string | null
    expectedOutput: string
    stderr?: string | null
    compiledOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    submission: SubmissionCreateNestedOneWithoutTestcaseresultInput
  }

  export type TestCaseResultUncheckedCreateInput = {
    id?: string
    submissionId: string
    testcase: number
    passed: boolean
    stdout?: string | null
    expectedOutput: string
    stderr?: string | null
    compiledOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
  }

  export type TestCaseResultUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    testcase?: IntFieldUpdateOperationsInput | number
    passed?: BoolFieldUpdateOperationsInput | boolean
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    expectedOutput?: StringFieldUpdateOperationsInput | string
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compiledOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    submission?: SubmissionUpdateOneRequiredWithoutTestcaseresultNestedInput
  }

  export type TestCaseResultUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    submissionId?: StringFieldUpdateOperationsInput | string
    testcase?: IntFieldUpdateOperationsInput | number
    passed?: BoolFieldUpdateOperationsInput | boolean
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    expectedOutput?: StringFieldUpdateOperationsInput | string
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compiledOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TestCaseResultCreateManyInput = {
    id?: string
    submissionId: string
    testcase: number
    passed: boolean
    stdout?: string | null
    expectedOutput: string
    stderr?: string | null
    compiledOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
  }

  export type TestCaseResultUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    testcase?: IntFieldUpdateOperationsInput | number
    passed?: BoolFieldUpdateOperationsInput | boolean
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    expectedOutput?: StringFieldUpdateOperationsInput | string
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compiledOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TestCaseResultUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    submissionId?: StringFieldUpdateOperationsInput | string
    testcase?: IntFieldUpdateOperationsInput | number
    passed?: BoolFieldUpdateOperationsInput | boolean
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    expectedOutput?: StringFieldUpdateOperationsInput | string
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compiledOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type problemSolvedCreateInput = {
    id?: string
    createAt?: Date | string
    updatedAt?: Date | string
    problem: ProblemCreateNestedOneWithoutProblemSolvedInput
    user: UserCreateNestedOneWithoutProblemSolvedInput
  }

  export type problemSolvedUncheckedCreateInput = {
    id?: string
    userId: string
    problemId: string
    createAt?: Date | string
    updatedAt?: Date | string
  }

  export type problemSolvedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problem?: ProblemUpdateOneRequiredWithoutProblemSolvedNestedInput
    user?: UserUpdateOneRequiredWithoutProblemSolvedNestedInput
  }

  export type problemSolvedUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type problemSolvedCreateManyInput = {
    id?: string
    userId: string
    problemId: string
    createAt?: Date | string
    updatedAt?: Date | string
  }

  export type problemSolvedUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type problemSolvedUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayListCreateInput = {
    id?: string
    name: string
    description?: string | null
    createAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemInPlayListCreateNestedManyWithoutPlaylistInput
    user: UserCreateNestedOneWithoutPlaylistsInput
  }

  export type PlayListUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    userId: string
    createAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemInPlayListUncheckedCreateNestedManyWithoutPlaylistInput
  }

  export type PlayListUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemInPlayListUpdateManyWithoutPlaylistNestedInput
    user?: UserUpdateOneRequiredWithoutPlaylistsNestedInput
  }

  export type PlayListUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemInPlayListUncheckedUpdateManyWithoutPlaylistNestedInput
  }

  export type PlayListCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    userId: string
    createAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlayListUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayListUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemInPlayListCreateInput = {
    id?: string
    createAt?: Date | string
    updatedAt?: Date | string
    playlist: PlayListCreateNestedOneWithoutProblemsInput
    problem: ProblemCreateNestedOneWithoutProblemInPlayListInput
  }

  export type ProblemInPlayListUncheckedCreateInput = {
    id?: string
    playListId: string
    problemId: string
    createAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProblemInPlayListUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlist?: PlayListUpdateOneRequiredWithoutProblemsNestedInput
    problem?: ProblemUpdateOneRequiredWithoutProblemInPlayListNestedInput
  }

  export type ProblemInPlayListUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    playListId?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemInPlayListCreateManyInput = {
    id?: string
    playListId: string
    problemId: string
    createAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProblemInPlayListUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemInPlayListUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    playListId?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumUserRolesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRoles | EnumUserRolesFieldRefInput<$PrismaModel>
    in?: $Enums.UserRoles[] | ListEnumUserRolesFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRoles[] | ListEnumUserRolesFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRolesFilter<$PrismaModel> | $Enums.UserRoles
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ProblemListRelationFilter = {
    every?: ProblemWhereInput
    some?: ProblemWhereInput
    none?: ProblemWhereInput
  }

  export type SubmissionListRelationFilter = {
    every?: SubmissionWhereInput
    some?: SubmissionWhereInput
    none?: SubmissionWhereInput
  }

  export type ProblemSolvedListRelationFilter = {
    every?: problemSolvedWhereInput
    some?: problemSolvedWhereInput
    none?: problemSolvedWhereInput
  }

  export type PlayListListRelationFilter = {
    every?: PlayListWhereInput
    some?: PlayListWhereInput
    none?: PlayListWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProblemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubmissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type problemSolvedOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlayListOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    userRole?: SortOrder
    isVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    userRole?: SortOrder
    isVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    userRole?: SortOrder
    isVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EnumUserRolesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRoles | EnumUserRolesFieldRefInput<$PrismaModel>
    in?: $Enums.UserRoles[] | ListEnumUserRolesFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRoles[] | ListEnumUserRolesFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRolesWithAggregatesFilter<$PrismaModel> | $Enums.UserRoles
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRolesFilter<$PrismaModel>
    _max?: NestedEnumUserRolesFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumDifficultyFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyFilter<$PrismaModel> | $Enums.Difficulty
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ProblemInPlayListListRelationFilter = {
    every?: ProblemInPlayListWhereInput
    some?: ProblemInPlayListWhereInput
    none?: ProblemInPlayListWhereInput
  }

  export type ProblemInPlayListOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProblemCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    difficulty?: SortOrder
    tags?: SortOrder
    userId?: SortOrder
    examples?: SortOrder
    constraints?: SortOrder
    hints?: SortOrder
    editorial?: SortOrder
    testcases?: SortOrder
    codeSnippet?: SortOrder
    referenceSolution?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProblemMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    difficulty?: SortOrder
    userId?: SortOrder
    constraints?: SortOrder
    hints?: SortOrder
    editorial?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProblemMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    difficulty?: SortOrder
    userId?: SortOrder
    constraints?: SortOrder
    hints?: SortOrder
    editorial?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumDifficultyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyWithAggregatesFilter<$PrismaModel> | $Enums.Difficulty
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDifficultyFilter<$PrismaModel>
    _max?: NestedEnumDifficultyFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type ProblemScalarRelationFilter = {
    is?: ProblemWhereInput
    isNot?: ProblemWhereInput
  }

  export type TestCaseResultListRelationFilter = {
    every?: TestCaseResultWhereInput
    some?: TestCaseResultWhereInput
    none?: TestCaseResultWhereInput
  }

  export type TestCaseResultOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubmissionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
    sourceCode?: SortOrder
    stdin?: SortOrder
    stdout?: SortOrder
    stderr?: SortOrder
    compileOutput?: SortOrder
    status?: SortOrder
    memory?: SortOrder
    time?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubmissionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
    stdin?: SortOrder
    stdout?: SortOrder
    stderr?: SortOrder
    compileOutput?: SortOrder
    status?: SortOrder
    memory?: SortOrder
    time?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubmissionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
    stdin?: SortOrder
    stdout?: SortOrder
    stderr?: SortOrder
    compileOutput?: SortOrder
    status?: SortOrder
    memory?: SortOrder
    time?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type SubmissionScalarRelationFilter = {
    is?: SubmissionWhereInput
    isNot?: SubmissionWhereInput
  }

  export type TestCaseResultCountOrderByAggregateInput = {
    id?: SortOrder
    submissionId?: SortOrder
    testcase?: SortOrder
    passed?: SortOrder
    stdout?: SortOrder
    expectedOutput?: SortOrder
    stderr?: SortOrder
    compiledOutput?: SortOrder
    status?: SortOrder
    memory?: SortOrder
    time?: SortOrder
  }

  export type TestCaseResultAvgOrderByAggregateInput = {
    testcase?: SortOrder
  }

  export type TestCaseResultMaxOrderByAggregateInput = {
    id?: SortOrder
    submissionId?: SortOrder
    testcase?: SortOrder
    passed?: SortOrder
    stdout?: SortOrder
    expectedOutput?: SortOrder
    stderr?: SortOrder
    compiledOutput?: SortOrder
    status?: SortOrder
    memory?: SortOrder
    time?: SortOrder
  }

  export type TestCaseResultMinOrderByAggregateInput = {
    id?: SortOrder
    submissionId?: SortOrder
    testcase?: SortOrder
    passed?: SortOrder
    stdout?: SortOrder
    expectedOutput?: SortOrder
    stderr?: SortOrder
    compiledOutput?: SortOrder
    status?: SortOrder
    memory?: SortOrder
    time?: SortOrder
  }

  export type TestCaseResultSumOrderByAggregateInput = {
    testcase?: SortOrder
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

  export type problemSolvedUserIdProblemIdCompoundUniqueInput = {
    userId: string
    problemId: string
  }

  export type problemSolvedCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type problemSolvedMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type problemSolvedMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlayListNameUserIdCompoundUniqueInput = {
    name: string
    userId: string
  }

  export type PlayListCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlayListMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlayListMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlayListScalarRelationFilter = {
    is?: PlayListWhereInput
    isNot?: PlayListWhereInput
  }

  export type ProblemInPlayListPlayListIdProblemIdCompoundUniqueInput = {
    playListId: string
    problemId: string
  }

  export type ProblemInPlayListCountOrderByAggregateInput = {
    id?: SortOrder
    playListId?: SortOrder
    problemId?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProblemInPlayListMaxOrderByAggregateInput = {
    id?: SortOrder
    playListId?: SortOrder
    problemId?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProblemInPlayListMinOrderByAggregateInput = {
    id?: SortOrder
    playListId?: SortOrder
    problemId?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProblemCreateNestedManyWithoutUserInput = {
    create?: XOR<ProblemCreateWithoutUserInput, ProblemUncheckedCreateWithoutUserInput> | ProblemCreateWithoutUserInput[] | ProblemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProblemCreateOrConnectWithoutUserInput | ProblemCreateOrConnectWithoutUserInput[]
    createMany?: ProblemCreateManyUserInputEnvelope
    connect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
  }

  export type SubmissionCreateNestedManyWithoutUserInput = {
    create?: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput> | SubmissionCreateWithoutUserInput[] | SubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutUserInput | SubmissionCreateOrConnectWithoutUserInput[]
    createMany?: SubmissionCreateManyUserInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type problemSolvedCreateNestedManyWithoutUserInput = {
    create?: XOR<problemSolvedCreateWithoutUserInput, problemSolvedUncheckedCreateWithoutUserInput> | problemSolvedCreateWithoutUserInput[] | problemSolvedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: problemSolvedCreateOrConnectWithoutUserInput | problemSolvedCreateOrConnectWithoutUserInput[]
    createMany?: problemSolvedCreateManyUserInputEnvelope
    connect?: problemSolvedWhereUniqueInput | problemSolvedWhereUniqueInput[]
  }

  export type PlayListCreateNestedManyWithoutUserInput = {
    create?: XOR<PlayListCreateWithoutUserInput, PlayListUncheckedCreateWithoutUserInput> | PlayListCreateWithoutUserInput[] | PlayListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlayListCreateOrConnectWithoutUserInput | PlayListCreateOrConnectWithoutUserInput[]
    createMany?: PlayListCreateManyUserInputEnvelope
    connect?: PlayListWhereUniqueInput | PlayListWhereUniqueInput[]
  }

  export type ProblemUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProblemCreateWithoutUserInput, ProblemUncheckedCreateWithoutUserInput> | ProblemCreateWithoutUserInput[] | ProblemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProblemCreateOrConnectWithoutUserInput | ProblemCreateOrConnectWithoutUserInput[]
    createMany?: ProblemCreateManyUserInputEnvelope
    connect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
  }

  export type SubmissionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput> | SubmissionCreateWithoutUserInput[] | SubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutUserInput | SubmissionCreateOrConnectWithoutUserInput[]
    createMany?: SubmissionCreateManyUserInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type problemSolvedUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<problemSolvedCreateWithoutUserInput, problemSolvedUncheckedCreateWithoutUserInput> | problemSolvedCreateWithoutUserInput[] | problemSolvedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: problemSolvedCreateOrConnectWithoutUserInput | problemSolvedCreateOrConnectWithoutUserInput[]
    createMany?: problemSolvedCreateManyUserInputEnvelope
    connect?: problemSolvedWhereUniqueInput | problemSolvedWhereUniqueInput[]
  }

  export type PlayListUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PlayListCreateWithoutUserInput, PlayListUncheckedCreateWithoutUserInput> | PlayListCreateWithoutUserInput[] | PlayListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlayListCreateOrConnectWithoutUserInput | PlayListCreateOrConnectWithoutUserInput[]
    createMany?: PlayListCreateManyUserInputEnvelope
    connect?: PlayListWhereUniqueInput | PlayListWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRolesFieldUpdateOperationsInput = {
    set?: $Enums.UserRoles
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProblemUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProblemCreateWithoutUserInput, ProblemUncheckedCreateWithoutUserInput> | ProblemCreateWithoutUserInput[] | ProblemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProblemCreateOrConnectWithoutUserInput | ProblemCreateOrConnectWithoutUserInput[]
    upsert?: ProblemUpsertWithWhereUniqueWithoutUserInput | ProblemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProblemCreateManyUserInputEnvelope
    set?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    disconnect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    delete?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    connect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    update?: ProblemUpdateWithWhereUniqueWithoutUserInput | ProblemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProblemUpdateManyWithWhereWithoutUserInput | ProblemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProblemScalarWhereInput | ProblemScalarWhereInput[]
  }

  export type SubmissionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput> | SubmissionCreateWithoutUserInput[] | SubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutUserInput | SubmissionCreateOrConnectWithoutUserInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutUserInput | SubmissionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubmissionCreateManyUserInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutUserInput | SubmissionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutUserInput | SubmissionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type problemSolvedUpdateManyWithoutUserNestedInput = {
    create?: XOR<problemSolvedCreateWithoutUserInput, problemSolvedUncheckedCreateWithoutUserInput> | problemSolvedCreateWithoutUserInput[] | problemSolvedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: problemSolvedCreateOrConnectWithoutUserInput | problemSolvedCreateOrConnectWithoutUserInput[]
    upsert?: problemSolvedUpsertWithWhereUniqueWithoutUserInput | problemSolvedUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: problemSolvedCreateManyUserInputEnvelope
    set?: problemSolvedWhereUniqueInput | problemSolvedWhereUniqueInput[]
    disconnect?: problemSolvedWhereUniqueInput | problemSolvedWhereUniqueInput[]
    delete?: problemSolvedWhereUniqueInput | problemSolvedWhereUniqueInput[]
    connect?: problemSolvedWhereUniqueInput | problemSolvedWhereUniqueInput[]
    update?: problemSolvedUpdateWithWhereUniqueWithoutUserInput | problemSolvedUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: problemSolvedUpdateManyWithWhereWithoutUserInput | problemSolvedUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: problemSolvedScalarWhereInput | problemSolvedScalarWhereInput[]
  }

  export type PlayListUpdateManyWithoutUserNestedInput = {
    create?: XOR<PlayListCreateWithoutUserInput, PlayListUncheckedCreateWithoutUserInput> | PlayListCreateWithoutUserInput[] | PlayListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlayListCreateOrConnectWithoutUserInput | PlayListCreateOrConnectWithoutUserInput[]
    upsert?: PlayListUpsertWithWhereUniqueWithoutUserInput | PlayListUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PlayListCreateManyUserInputEnvelope
    set?: PlayListWhereUniqueInput | PlayListWhereUniqueInput[]
    disconnect?: PlayListWhereUniqueInput | PlayListWhereUniqueInput[]
    delete?: PlayListWhereUniqueInput | PlayListWhereUniqueInput[]
    connect?: PlayListWhereUniqueInput | PlayListWhereUniqueInput[]
    update?: PlayListUpdateWithWhereUniqueWithoutUserInput | PlayListUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PlayListUpdateManyWithWhereWithoutUserInput | PlayListUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PlayListScalarWhereInput | PlayListScalarWhereInput[]
  }

  export type ProblemUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProblemCreateWithoutUserInput, ProblemUncheckedCreateWithoutUserInput> | ProblemCreateWithoutUserInput[] | ProblemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProblemCreateOrConnectWithoutUserInput | ProblemCreateOrConnectWithoutUserInput[]
    upsert?: ProblemUpsertWithWhereUniqueWithoutUserInput | ProblemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProblemCreateManyUserInputEnvelope
    set?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    disconnect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    delete?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    connect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    update?: ProblemUpdateWithWhereUniqueWithoutUserInput | ProblemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProblemUpdateManyWithWhereWithoutUserInput | ProblemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProblemScalarWhereInput | ProblemScalarWhereInput[]
  }

  export type SubmissionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput> | SubmissionCreateWithoutUserInput[] | SubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutUserInput | SubmissionCreateOrConnectWithoutUserInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutUserInput | SubmissionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubmissionCreateManyUserInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutUserInput | SubmissionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutUserInput | SubmissionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type problemSolvedUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<problemSolvedCreateWithoutUserInput, problemSolvedUncheckedCreateWithoutUserInput> | problemSolvedCreateWithoutUserInput[] | problemSolvedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: problemSolvedCreateOrConnectWithoutUserInput | problemSolvedCreateOrConnectWithoutUserInput[]
    upsert?: problemSolvedUpsertWithWhereUniqueWithoutUserInput | problemSolvedUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: problemSolvedCreateManyUserInputEnvelope
    set?: problemSolvedWhereUniqueInput | problemSolvedWhereUniqueInput[]
    disconnect?: problemSolvedWhereUniqueInput | problemSolvedWhereUniqueInput[]
    delete?: problemSolvedWhereUniqueInput | problemSolvedWhereUniqueInput[]
    connect?: problemSolvedWhereUniqueInput | problemSolvedWhereUniqueInput[]
    update?: problemSolvedUpdateWithWhereUniqueWithoutUserInput | problemSolvedUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: problemSolvedUpdateManyWithWhereWithoutUserInput | problemSolvedUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: problemSolvedScalarWhereInput | problemSolvedScalarWhereInput[]
  }

  export type PlayListUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PlayListCreateWithoutUserInput, PlayListUncheckedCreateWithoutUserInput> | PlayListCreateWithoutUserInput[] | PlayListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlayListCreateOrConnectWithoutUserInput | PlayListCreateOrConnectWithoutUserInput[]
    upsert?: PlayListUpsertWithWhereUniqueWithoutUserInput | PlayListUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PlayListCreateManyUserInputEnvelope
    set?: PlayListWhereUniqueInput | PlayListWhereUniqueInput[]
    disconnect?: PlayListWhereUniqueInput | PlayListWhereUniqueInput[]
    delete?: PlayListWhereUniqueInput | PlayListWhereUniqueInput[]
    connect?: PlayListWhereUniqueInput | PlayListWhereUniqueInput[]
    update?: PlayListUpdateWithWhereUniqueWithoutUserInput | PlayListUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PlayListUpdateManyWithWhereWithoutUserInput | PlayListUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PlayListScalarWhereInput | PlayListScalarWhereInput[]
  }

  export type ProblemCreatetagsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutProblemsInput = {
    create?: XOR<UserCreateWithoutProblemsInput, UserUncheckedCreateWithoutProblemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProblemsInput
    connect?: UserWhereUniqueInput
  }

  export type SubmissionCreateNestedManyWithoutProblemInput = {
    create?: XOR<SubmissionCreateWithoutProblemInput, SubmissionUncheckedCreateWithoutProblemInput> | SubmissionCreateWithoutProblemInput[] | SubmissionUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutProblemInput | SubmissionCreateOrConnectWithoutProblemInput[]
    createMany?: SubmissionCreateManyProblemInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type problemSolvedCreateNestedManyWithoutProblemInput = {
    create?: XOR<problemSolvedCreateWithoutProblemInput, problemSolvedUncheckedCreateWithoutProblemInput> | problemSolvedCreateWithoutProblemInput[] | problemSolvedUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: problemSolvedCreateOrConnectWithoutProblemInput | problemSolvedCreateOrConnectWithoutProblemInput[]
    createMany?: problemSolvedCreateManyProblemInputEnvelope
    connect?: problemSolvedWhereUniqueInput | problemSolvedWhereUniqueInput[]
  }

  export type ProblemInPlayListCreateNestedManyWithoutProblemInput = {
    create?: XOR<ProblemInPlayListCreateWithoutProblemInput, ProblemInPlayListUncheckedCreateWithoutProblemInput> | ProblemInPlayListCreateWithoutProblemInput[] | ProblemInPlayListUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: ProblemInPlayListCreateOrConnectWithoutProblemInput | ProblemInPlayListCreateOrConnectWithoutProblemInput[]
    createMany?: ProblemInPlayListCreateManyProblemInputEnvelope
    connect?: ProblemInPlayListWhereUniqueInput | ProblemInPlayListWhereUniqueInput[]
  }

  export type SubmissionUncheckedCreateNestedManyWithoutProblemInput = {
    create?: XOR<SubmissionCreateWithoutProblemInput, SubmissionUncheckedCreateWithoutProblemInput> | SubmissionCreateWithoutProblemInput[] | SubmissionUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutProblemInput | SubmissionCreateOrConnectWithoutProblemInput[]
    createMany?: SubmissionCreateManyProblemInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type problemSolvedUncheckedCreateNestedManyWithoutProblemInput = {
    create?: XOR<problemSolvedCreateWithoutProblemInput, problemSolvedUncheckedCreateWithoutProblemInput> | problemSolvedCreateWithoutProblemInput[] | problemSolvedUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: problemSolvedCreateOrConnectWithoutProblemInput | problemSolvedCreateOrConnectWithoutProblemInput[]
    createMany?: problemSolvedCreateManyProblemInputEnvelope
    connect?: problemSolvedWhereUniqueInput | problemSolvedWhereUniqueInput[]
  }

  export type ProblemInPlayListUncheckedCreateNestedManyWithoutProblemInput = {
    create?: XOR<ProblemInPlayListCreateWithoutProblemInput, ProblemInPlayListUncheckedCreateWithoutProblemInput> | ProblemInPlayListCreateWithoutProblemInput[] | ProblemInPlayListUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: ProblemInPlayListCreateOrConnectWithoutProblemInput | ProblemInPlayListCreateOrConnectWithoutProblemInput[]
    createMany?: ProblemInPlayListCreateManyProblemInputEnvelope
    connect?: ProblemInPlayListWhereUniqueInput | ProblemInPlayListWhereUniqueInput[]
  }

  export type EnumDifficultyFieldUpdateOperationsInput = {
    set?: $Enums.Difficulty
  }

  export type ProblemUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutProblemsNestedInput = {
    create?: XOR<UserCreateWithoutProblemsInput, UserUncheckedCreateWithoutProblemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProblemsInput
    upsert?: UserUpsertWithoutProblemsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProblemsInput, UserUpdateWithoutProblemsInput>, UserUncheckedUpdateWithoutProblemsInput>
  }

  export type SubmissionUpdateManyWithoutProblemNestedInput = {
    create?: XOR<SubmissionCreateWithoutProblemInput, SubmissionUncheckedCreateWithoutProblemInput> | SubmissionCreateWithoutProblemInput[] | SubmissionUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutProblemInput | SubmissionCreateOrConnectWithoutProblemInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutProblemInput | SubmissionUpsertWithWhereUniqueWithoutProblemInput[]
    createMany?: SubmissionCreateManyProblemInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutProblemInput | SubmissionUpdateWithWhereUniqueWithoutProblemInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutProblemInput | SubmissionUpdateManyWithWhereWithoutProblemInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type problemSolvedUpdateManyWithoutProblemNestedInput = {
    create?: XOR<problemSolvedCreateWithoutProblemInput, problemSolvedUncheckedCreateWithoutProblemInput> | problemSolvedCreateWithoutProblemInput[] | problemSolvedUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: problemSolvedCreateOrConnectWithoutProblemInput | problemSolvedCreateOrConnectWithoutProblemInput[]
    upsert?: problemSolvedUpsertWithWhereUniqueWithoutProblemInput | problemSolvedUpsertWithWhereUniqueWithoutProblemInput[]
    createMany?: problemSolvedCreateManyProblemInputEnvelope
    set?: problemSolvedWhereUniqueInput | problemSolvedWhereUniqueInput[]
    disconnect?: problemSolvedWhereUniqueInput | problemSolvedWhereUniqueInput[]
    delete?: problemSolvedWhereUniqueInput | problemSolvedWhereUniqueInput[]
    connect?: problemSolvedWhereUniqueInput | problemSolvedWhereUniqueInput[]
    update?: problemSolvedUpdateWithWhereUniqueWithoutProblemInput | problemSolvedUpdateWithWhereUniqueWithoutProblemInput[]
    updateMany?: problemSolvedUpdateManyWithWhereWithoutProblemInput | problemSolvedUpdateManyWithWhereWithoutProblemInput[]
    deleteMany?: problemSolvedScalarWhereInput | problemSolvedScalarWhereInput[]
  }

  export type ProblemInPlayListUpdateManyWithoutProblemNestedInput = {
    create?: XOR<ProblemInPlayListCreateWithoutProblemInput, ProblemInPlayListUncheckedCreateWithoutProblemInput> | ProblemInPlayListCreateWithoutProblemInput[] | ProblemInPlayListUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: ProblemInPlayListCreateOrConnectWithoutProblemInput | ProblemInPlayListCreateOrConnectWithoutProblemInput[]
    upsert?: ProblemInPlayListUpsertWithWhereUniqueWithoutProblemInput | ProblemInPlayListUpsertWithWhereUniqueWithoutProblemInput[]
    createMany?: ProblemInPlayListCreateManyProblemInputEnvelope
    set?: ProblemInPlayListWhereUniqueInput | ProblemInPlayListWhereUniqueInput[]
    disconnect?: ProblemInPlayListWhereUniqueInput | ProblemInPlayListWhereUniqueInput[]
    delete?: ProblemInPlayListWhereUniqueInput | ProblemInPlayListWhereUniqueInput[]
    connect?: ProblemInPlayListWhereUniqueInput | ProblemInPlayListWhereUniqueInput[]
    update?: ProblemInPlayListUpdateWithWhereUniqueWithoutProblemInput | ProblemInPlayListUpdateWithWhereUniqueWithoutProblemInput[]
    updateMany?: ProblemInPlayListUpdateManyWithWhereWithoutProblemInput | ProblemInPlayListUpdateManyWithWhereWithoutProblemInput[]
    deleteMany?: ProblemInPlayListScalarWhereInput | ProblemInPlayListScalarWhereInput[]
  }

  export type SubmissionUncheckedUpdateManyWithoutProblemNestedInput = {
    create?: XOR<SubmissionCreateWithoutProblemInput, SubmissionUncheckedCreateWithoutProblemInput> | SubmissionCreateWithoutProblemInput[] | SubmissionUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutProblemInput | SubmissionCreateOrConnectWithoutProblemInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutProblemInput | SubmissionUpsertWithWhereUniqueWithoutProblemInput[]
    createMany?: SubmissionCreateManyProblemInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutProblemInput | SubmissionUpdateWithWhereUniqueWithoutProblemInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutProblemInput | SubmissionUpdateManyWithWhereWithoutProblemInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type problemSolvedUncheckedUpdateManyWithoutProblemNestedInput = {
    create?: XOR<problemSolvedCreateWithoutProblemInput, problemSolvedUncheckedCreateWithoutProblemInput> | problemSolvedCreateWithoutProblemInput[] | problemSolvedUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: problemSolvedCreateOrConnectWithoutProblemInput | problemSolvedCreateOrConnectWithoutProblemInput[]
    upsert?: problemSolvedUpsertWithWhereUniqueWithoutProblemInput | problemSolvedUpsertWithWhereUniqueWithoutProblemInput[]
    createMany?: problemSolvedCreateManyProblemInputEnvelope
    set?: problemSolvedWhereUniqueInput | problemSolvedWhereUniqueInput[]
    disconnect?: problemSolvedWhereUniqueInput | problemSolvedWhereUniqueInput[]
    delete?: problemSolvedWhereUniqueInput | problemSolvedWhereUniqueInput[]
    connect?: problemSolvedWhereUniqueInput | problemSolvedWhereUniqueInput[]
    update?: problemSolvedUpdateWithWhereUniqueWithoutProblemInput | problemSolvedUpdateWithWhereUniqueWithoutProblemInput[]
    updateMany?: problemSolvedUpdateManyWithWhereWithoutProblemInput | problemSolvedUpdateManyWithWhereWithoutProblemInput[]
    deleteMany?: problemSolvedScalarWhereInput | problemSolvedScalarWhereInput[]
  }

  export type ProblemInPlayListUncheckedUpdateManyWithoutProblemNestedInput = {
    create?: XOR<ProblemInPlayListCreateWithoutProblemInput, ProblemInPlayListUncheckedCreateWithoutProblemInput> | ProblemInPlayListCreateWithoutProblemInput[] | ProblemInPlayListUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: ProblemInPlayListCreateOrConnectWithoutProblemInput | ProblemInPlayListCreateOrConnectWithoutProblemInput[]
    upsert?: ProblemInPlayListUpsertWithWhereUniqueWithoutProblemInput | ProblemInPlayListUpsertWithWhereUniqueWithoutProblemInput[]
    createMany?: ProblemInPlayListCreateManyProblemInputEnvelope
    set?: ProblemInPlayListWhereUniqueInput | ProblemInPlayListWhereUniqueInput[]
    disconnect?: ProblemInPlayListWhereUniqueInput | ProblemInPlayListWhereUniqueInput[]
    delete?: ProblemInPlayListWhereUniqueInput | ProblemInPlayListWhereUniqueInput[]
    connect?: ProblemInPlayListWhereUniqueInput | ProblemInPlayListWhereUniqueInput[]
    update?: ProblemInPlayListUpdateWithWhereUniqueWithoutProblemInput | ProblemInPlayListUpdateWithWhereUniqueWithoutProblemInput[]
    updateMany?: ProblemInPlayListUpdateManyWithWhereWithoutProblemInput | ProblemInPlayListUpdateManyWithWhereWithoutProblemInput[]
    deleteMany?: ProblemInPlayListScalarWhereInput | ProblemInPlayListScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSubmissionInput = {
    create?: XOR<UserCreateWithoutSubmissionInput, UserUncheckedCreateWithoutSubmissionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubmissionInput
    connect?: UserWhereUniqueInput
  }

  export type ProblemCreateNestedOneWithoutSubmissionInput = {
    create?: XOR<ProblemCreateWithoutSubmissionInput, ProblemUncheckedCreateWithoutSubmissionInput>
    connectOrCreate?: ProblemCreateOrConnectWithoutSubmissionInput
    connect?: ProblemWhereUniqueInput
  }

  export type TestCaseResultCreateNestedManyWithoutSubmissionInput = {
    create?: XOR<TestCaseResultCreateWithoutSubmissionInput, TestCaseResultUncheckedCreateWithoutSubmissionInput> | TestCaseResultCreateWithoutSubmissionInput[] | TestCaseResultUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: TestCaseResultCreateOrConnectWithoutSubmissionInput | TestCaseResultCreateOrConnectWithoutSubmissionInput[]
    createMany?: TestCaseResultCreateManySubmissionInputEnvelope
    connect?: TestCaseResultWhereUniqueInput | TestCaseResultWhereUniqueInput[]
  }

  export type TestCaseResultUncheckedCreateNestedManyWithoutSubmissionInput = {
    create?: XOR<TestCaseResultCreateWithoutSubmissionInput, TestCaseResultUncheckedCreateWithoutSubmissionInput> | TestCaseResultCreateWithoutSubmissionInput[] | TestCaseResultUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: TestCaseResultCreateOrConnectWithoutSubmissionInput | TestCaseResultCreateOrConnectWithoutSubmissionInput[]
    createMany?: TestCaseResultCreateManySubmissionInputEnvelope
    connect?: TestCaseResultWhereUniqueInput | TestCaseResultWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutSubmissionNestedInput = {
    create?: XOR<UserCreateWithoutSubmissionInput, UserUncheckedCreateWithoutSubmissionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubmissionInput
    upsert?: UserUpsertWithoutSubmissionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubmissionInput, UserUpdateWithoutSubmissionInput>, UserUncheckedUpdateWithoutSubmissionInput>
  }

  export type ProblemUpdateOneRequiredWithoutSubmissionNestedInput = {
    create?: XOR<ProblemCreateWithoutSubmissionInput, ProblemUncheckedCreateWithoutSubmissionInput>
    connectOrCreate?: ProblemCreateOrConnectWithoutSubmissionInput
    upsert?: ProblemUpsertWithoutSubmissionInput
    connect?: ProblemWhereUniqueInput
    update?: XOR<XOR<ProblemUpdateToOneWithWhereWithoutSubmissionInput, ProblemUpdateWithoutSubmissionInput>, ProblemUncheckedUpdateWithoutSubmissionInput>
  }

  export type TestCaseResultUpdateManyWithoutSubmissionNestedInput = {
    create?: XOR<TestCaseResultCreateWithoutSubmissionInput, TestCaseResultUncheckedCreateWithoutSubmissionInput> | TestCaseResultCreateWithoutSubmissionInput[] | TestCaseResultUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: TestCaseResultCreateOrConnectWithoutSubmissionInput | TestCaseResultCreateOrConnectWithoutSubmissionInput[]
    upsert?: TestCaseResultUpsertWithWhereUniqueWithoutSubmissionInput | TestCaseResultUpsertWithWhereUniqueWithoutSubmissionInput[]
    createMany?: TestCaseResultCreateManySubmissionInputEnvelope
    set?: TestCaseResultWhereUniqueInput | TestCaseResultWhereUniqueInput[]
    disconnect?: TestCaseResultWhereUniqueInput | TestCaseResultWhereUniqueInput[]
    delete?: TestCaseResultWhereUniqueInput | TestCaseResultWhereUniqueInput[]
    connect?: TestCaseResultWhereUniqueInput | TestCaseResultWhereUniqueInput[]
    update?: TestCaseResultUpdateWithWhereUniqueWithoutSubmissionInput | TestCaseResultUpdateWithWhereUniqueWithoutSubmissionInput[]
    updateMany?: TestCaseResultUpdateManyWithWhereWithoutSubmissionInput | TestCaseResultUpdateManyWithWhereWithoutSubmissionInput[]
    deleteMany?: TestCaseResultScalarWhereInput | TestCaseResultScalarWhereInput[]
  }

  export type TestCaseResultUncheckedUpdateManyWithoutSubmissionNestedInput = {
    create?: XOR<TestCaseResultCreateWithoutSubmissionInput, TestCaseResultUncheckedCreateWithoutSubmissionInput> | TestCaseResultCreateWithoutSubmissionInput[] | TestCaseResultUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: TestCaseResultCreateOrConnectWithoutSubmissionInput | TestCaseResultCreateOrConnectWithoutSubmissionInput[]
    upsert?: TestCaseResultUpsertWithWhereUniqueWithoutSubmissionInput | TestCaseResultUpsertWithWhereUniqueWithoutSubmissionInput[]
    createMany?: TestCaseResultCreateManySubmissionInputEnvelope
    set?: TestCaseResultWhereUniqueInput | TestCaseResultWhereUniqueInput[]
    disconnect?: TestCaseResultWhereUniqueInput | TestCaseResultWhereUniqueInput[]
    delete?: TestCaseResultWhereUniqueInput | TestCaseResultWhereUniqueInput[]
    connect?: TestCaseResultWhereUniqueInput | TestCaseResultWhereUniqueInput[]
    update?: TestCaseResultUpdateWithWhereUniqueWithoutSubmissionInput | TestCaseResultUpdateWithWhereUniqueWithoutSubmissionInput[]
    updateMany?: TestCaseResultUpdateManyWithWhereWithoutSubmissionInput | TestCaseResultUpdateManyWithWhereWithoutSubmissionInput[]
    deleteMany?: TestCaseResultScalarWhereInput | TestCaseResultScalarWhereInput[]
  }

  export type SubmissionCreateNestedOneWithoutTestcaseresultInput = {
    create?: XOR<SubmissionCreateWithoutTestcaseresultInput, SubmissionUncheckedCreateWithoutTestcaseresultInput>
    connectOrCreate?: SubmissionCreateOrConnectWithoutTestcaseresultInput
    connect?: SubmissionWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SubmissionUpdateOneRequiredWithoutTestcaseresultNestedInput = {
    create?: XOR<SubmissionCreateWithoutTestcaseresultInput, SubmissionUncheckedCreateWithoutTestcaseresultInput>
    connectOrCreate?: SubmissionCreateOrConnectWithoutTestcaseresultInput
    upsert?: SubmissionUpsertWithoutTestcaseresultInput
    connect?: SubmissionWhereUniqueInput
    update?: XOR<XOR<SubmissionUpdateToOneWithWhereWithoutTestcaseresultInput, SubmissionUpdateWithoutTestcaseresultInput>, SubmissionUncheckedUpdateWithoutTestcaseresultInput>
  }

  export type ProblemCreateNestedOneWithoutProblemSolvedInput = {
    create?: XOR<ProblemCreateWithoutProblemSolvedInput, ProblemUncheckedCreateWithoutProblemSolvedInput>
    connectOrCreate?: ProblemCreateOrConnectWithoutProblemSolvedInput
    connect?: ProblemWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutProblemSolvedInput = {
    create?: XOR<UserCreateWithoutProblemSolvedInput, UserUncheckedCreateWithoutProblemSolvedInput>
    connectOrCreate?: UserCreateOrConnectWithoutProblemSolvedInput
    connect?: UserWhereUniqueInput
  }

  export type ProblemUpdateOneRequiredWithoutProblemSolvedNestedInput = {
    create?: XOR<ProblemCreateWithoutProblemSolvedInput, ProblemUncheckedCreateWithoutProblemSolvedInput>
    connectOrCreate?: ProblemCreateOrConnectWithoutProblemSolvedInput
    upsert?: ProblemUpsertWithoutProblemSolvedInput
    connect?: ProblemWhereUniqueInput
    update?: XOR<XOR<ProblemUpdateToOneWithWhereWithoutProblemSolvedInput, ProblemUpdateWithoutProblemSolvedInput>, ProblemUncheckedUpdateWithoutProblemSolvedInput>
  }

  export type UserUpdateOneRequiredWithoutProblemSolvedNestedInput = {
    create?: XOR<UserCreateWithoutProblemSolvedInput, UserUncheckedCreateWithoutProblemSolvedInput>
    connectOrCreate?: UserCreateOrConnectWithoutProblemSolvedInput
    upsert?: UserUpsertWithoutProblemSolvedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProblemSolvedInput, UserUpdateWithoutProblemSolvedInput>, UserUncheckedUpdateWithoutProblemSolvedInput>
  }

  export type ProblemInPlayListCreateNestedManyWithoutPlaylistInput = {
    create?: XOR<ProblemInPlayListCreateWithoutPlaylistInput, ProblemInPlayListUncheckedCreateWithoutPlaylistInput> | ProblemInPlayListCreateWithoutPlaylistInput[] | ProblemInPlayListUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: ProblemInPlayListCreateOrConnectWithoutPlaylistInput | ProblemInPlayListCreateOrConnectWithoutPlaylistInput[]
    createMany?: ProblemInPlayListCreateManyPlaylistInputEnvelope
    connect?: ProblemInPlayListWhereUniqueInput | ProblemInPlayListWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutPlaylistsInput = {
    create?: XOR<UserCreateWithoutPlaylistsInput, UserUncheckedCreateWithoutPlaylistsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlaylistsInput
    connect?: UserWhereUniqueInput
  }

  export type ProblemInPlayListUncheckedCreateNestedManyWithoutPlaylistInput = {
    create?: XOR<ProblemInPlayListCreateWithoutPlaylistInput, ProblemInPlayListUncheckedCreateWithoutPlaylistInput> | ProblemInPlayListCreateWithoutPlaylistInput[] | ProblemInPlayListUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: ProblemInPlayListCreateOrConnectWithoutPlaylistInput | ProblemInPlayListCreateOrConnectWithoutPlaylistInput[]
    createMany?: ProblemInPlayListCreateManyPlaylistInputEnvelope
    connect?: ProblemInPlayListWhereUniqueInput | ProblemInPlayListWhereUniqueInput[]
  }

  export type ProblemInPlayListUpdateManyWithoutPlaylistNestedInput = {
    create?: XOR<ProblemInPlayListCreateWithoutPlaylistInput, ProblemInPlayListUncheckedCreateWithoutPlaylistInput> | ProblemInPlayListCreateWithoutPlaylistInput[] | ProblemInPlayListUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: ProblemInPlayListCreateOrConnectWithoutPlaylistInput | ProblemInPlayListCreateOrConnectWithoutPlaylistInput[]
    upsert?: ProblemInPlayListUpsertWithWhereUniqueWithoutPlaylistInput | ProblemInPlayListUpsertWithWhereUniqueWithoutPlaylistInput[]
    createMany?: ProblemInPlayListCreateManyPlaylistInputEnvelope
    set?: ProblemInPlayListWhereUniqueInput | ProblemInPlayListWhereUniqueInput[]
    disconnect?: ProblemInPlayListWhereUniqueInput | ProblemInPlayListWhereUniqueInput[]
    delete?: ProblemInPlayListWhereUniqueInput | ProblemInPlayListWhereUniqueInput[]
    connect?: ProblemInPlayListWhereUniqueInput | ProblemInPlayListWhereUniqueInput[]
    update?: ProblemInPlayListUpdateWithWhereUniqueWithoutPlaylistInput | ProblemInPlayListUpdateWithWhereUniqueWithoutPlaylistInput[]
    updateMany?: ProblemInPlayListUpdateManyWithWhereWithoutPlaylistInput | ProblemInPlayListUpdateManyWithWhereWithoutPlaylistInput[]
    deleteMany?: ProblemInPlayListScalarWhereInput | ProblemInPlayListScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutPlaylistsNestedInput = {
    create?: XOR<UserCreateWithoutPlaylistsInput, UserUncheckedCreateWithoutPlaylistsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlaylistsInput
    upsert?: UserUpsertWithoutPlaylistsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPlaylistsInput, UserUpdateWithoutPlaylistsInput>, UserUncheckedUpdateWithoutPlaylistsInput>
  }

  export type ProblemInPlayListUncheckedUpdateManyWithoutPlaylistNestedInput = {
    create?: XOR<ProblemInPlayListCreateWithoutPlaylistInput, ProblemInPlayListUncheckedCreateWithoutPlaylistInput> | ProblemInPlayListCreateWithoutPlaylistInput[] | ProblemInPlayListUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: ProblemInPlayListCreateOrConnectWithoutPlaylistInput | ProblemInPlayListCreateOrConnectWithoutPlaylistInput[]
    upsert?: ProblemInPlayListUpsertWithWhereUniqueWithoutPlaylistInput | ProblemInPlayListUpsertWithWhereUniqueWithoutPlaylistInput[]
    createMany?: ProblemInPlayListCreateManyPlaylistInputEnvelope
    set?: ProblemInPlayListWhereUniqueInput | ProblemInPlayListWhereUniqueInput[]
    disconnect?: ProblemInPlayListWhereUniqueInput | ProblemInPlayListWhereUniqueInput[]
    delete?: ProblemInPlayListWhereUniqueInput | ProblemInPlayListWhereUniqueInput[]
    connect?: ProblemInPlayListWhereUniqueInput | ProblemInPlayListWhereUniqueInput[]
    update?: ProblemInPlayListUpdateWithWhereUniqueWithoutPlaylistInput | ProblemInPlayListUpdateWithWhereUniqueWithoutPlaylistInput[]
    updateMany?: ProblemInPlayListUpdateManyWithWhereWithoutPlaylistInput | ProblemInPlayListUpdateManyWithWhereWithoutPlaylistInput[]
    deleteMany?: ProblemInPlayListScalarWhereInput | ProblemInPlayListScalarWhereInput[]
  }

  export type PlayListCreateNestedOneWithoutProblemsInput = {
    create?: XOR<PlayListCreateWithoutProblemsInput, PlayListUncheckedCreateWithoutProblemsInput>
    connectOrCreate?: PlayListCreateOrConnectWithoutProblemsInput
    connect?: PlayListWhereUniqueInput
  }

  export type ProblemCreateNestedOneWithoutProblemInPlayListInput = {
    create?: XOR<ProblemCreateWithoutProblemInPlayListInput, ProblemUncheckedCreateWithoutProblemInPlayListInput>
    connectOrCreate?: ProblemCreateOrConnectWithoutProblemInPlayListInput
    connect?: ProblemWhereUniqueInput
  }

  export type PlayListUpdateOneRequiredWithoutProblemsNestedInput = {
    create?: XOR<PlayListCreateWithoutProblemsInput, PlayListUncheckedCreateWithoutProblemsInput>
    connectOrCreate?: PlayListCreateOrConnectWithoutProblemsInput
    upsert?: PlayListUpsertWithoutProblemsInput
    connect?: PlayListWhereUniqueInput
    update?: XOR<XOR<PlayListUpdateToOneWithWhereWithoutProblemsInput, PlayListUpdateWithoutProblemsInput>, PlayListUncheckedUpdateWithoutProblemsInput>
  }

  export type ProblemUpdateOneRequiredWithoutProblemInPlayListNestedInput = {
    create?: XOR<ProblemCreateWithoutProblemInPlayListInput, ProblemUncheckedCreateWithoutProblemInPlayListInput>
    connectOrCreate?: ProblemCreateOrConnectWithoutProblemInPlayListInput
    upsert?: ProblemUpsertWithoutProblemInPlayListInput
    connect?: ProblemWhereUniqueInput
    update?: XOR<XOR<ProblemUpdateToOneWithWhereWithoutProblemInPlayListInput, ProblemUpdateWithoutProblemInPlayListInput>, ProblemUncheckedUpdateWithoutProblemInPlayListInput>
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

  export type NestedEnumUserRolesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRoles | EnumUserRolesFieldRefInput<$PrismaModel>
    in?: $Enums.UserRoles[] | ListEnumUserRolesFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRoles[] | ListEnumUserRolesFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRolesFilter<$PrismaModel> | $Enums.UserRoles
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type NestedEnumUserRolesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRoles | EnumUserRolesFieldRefInput<$PrismaModel>
    in?: $Enums.UserRoles[] | ListEnumUserRolesFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRoles[] | ListEnumUserRolesFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRolesWithAggregatesFilter<$PrismaModel> | $Enums.UserRoles
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRolesFilter<$PrismaModel>
    _max?: NestedEnumUserRolesFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumDifficultyFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyFilter<$PrismaModel> | $Enums.Difficulty
  }

  export type NestedEnumDifficultyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyWithAggregatesFilter<$PrismaModel> | $Enums.Difficulty
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDifficultyFilter<$PrismaModel>
    _max?: NestedEnumDifficultyFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type ProblemCreateWithoutUserInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.Difficulty
    tags?: ProblemCreatetagsInput | string[]
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorial?: string | null
    testcases: JsonNullValueInput | InputJsonValue
    codeSnippet: JsonNullValueInput | InputJsonValue
    referenceSolution: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    submission?: SubmissionCreateNestedManyWithoutProblemInput
    problemSolved?: problemSolvedCreateNestedManyWithoutProblemInput
    problemInPlayList?: ProblemInPlayListCreateNestedManyWithoutProblemInput
  }

  export type ProblemUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.Difficulty
    tags?: ProblemCreatetagsInput | string[]
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorial?: string | null
    testcases: JsonNullValueInput | InputJsonValue
    codeSnippet: JsonNullValueInput | InputJsonValue
    referenceSolution: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    submission?: SubmissionUncheckedCreateNestedManyWithoutProblemInput
    problemSolved?: problemSolvedUncheckedCreateNestedManyWithoutProblemInput
    problemInPlayList?: ProblemInPlayListUncheckedCreateNestedManyWithoutProblemInput
  }

  export type ProblemCreateOrConnectWithoutUserInput = {
    where: ProblemWhereUniqueInput
    create: XOR<ProblemCreateWithoutUserInput, ProblemUncheckedCreateWithoutUserInput>
  }

  export type ProblemCreateManyUserInputEnvelope = {
    data: ProblemCreateManyUserInput | ProblemCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SubmissionCreateWithoutUserInput = {
    id?: string
    sourceCode: JsonNullValueInput | InputJsonValue
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    problem: ProblemCreateNestedOneWithoutSubmissionInput
    testcaseresult?: TestCaseResultCreateNestedManyWithoutSubmissionInput
  }

  export type SubmissionUncheckedCreateWithoutUserInput = {
    id?: string
    problemId: string
    sourceCode: JsonNullValueInput | InputJsonValue
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    testcaseresult?: TestCaseResultUncheckedCreateNestedManyWithoutSubmissionInput
  }

  export type SubmissionCreateOrConnectWithoutUserInput = {
    where: SubmissionWhereUniqueInput
    create: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput>
  }

  export type SubmissionCreateManyUserInputEnvelope = {
    data: SubmissionCreateManyUserInput | SubmissionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type problemSolvedCreateWithoutUserInput = {
    id?: string
    createAt?: Date | string
    updatedAt?: Date | string
    problem: ProblemCreateNestedOneWithoutProblemSolvedInput
  }

  export type problemSolvedUncheckedCreateWithoutUserInput = {
    id?: string
    problemId: string
    createAt?: Date | string
    updatedAt?: Date | string
  }

  export type problemSolvedCreateOrConnectWithoutUserInput = {
    where: problemSolvedWhereUniqueInput
    create: XOR<problemSolvedCreateWithoutUserInput, problemSolvedUncheckedCreateWithoutUserInput>
  }

  export type problemSolvedCreateManyUserInputEnvelope = {
    data: problemSolvedCreateManyUserInput | problemSolvedCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PlayListCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    createAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemInPlayListCreateNestedManyWithoutPlaylistInput
  }

  export type PlayListUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    createAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemInPlayListUncheckedCreateNestedManyWithoutPlaylistInput
  }

  export type PlayListCreateOrConnectWithoutUserInput = {
    where: PlayListWhereUniqueInput
    create: XOR<PlayListCreateWithoutUserInput, PlayListUncheckedCreateWithoutUserInput>
  }

  export type PlayListCreateManyUserInputEnvelope = {
    data: PlayListCreateManyUserInput | PlayListCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProblemUpsertWithWhereUniqueWithoutUserInput = {
    where: ProblemWhereUniqueInput
    update: XOR<ProblemUpdateWithoutUserInput, ProblemUncheckedUpdateWithoutUserInput>
    create: XOR<ProblemCreateWithoutUserInput, ProblemUncheckedCreateWithoutUserInput>
  }

  export type ProblemUpdateWithWhereUniqueWithoutUserInput = {
    where: ProblemWhereUniqueInput
    data: XOR<ProblemUpdateWithoutUserInput, ProblemUncheckedUpdateWithoutUserInput>
  }

  export type ProblemUpdateManyWithWhereWithoutUserInput = {
    where: ProblemScalarWhereInput
    data: XOR<ProblemUpdateManyMutationInput, ProblemUncheckedUpdateManyWithoutUserInput>
  }

  export type ProblemScalarWhereInput = {
    AND?: ProblemScalarWhereInput | ProblemScalarWhereInput[]
    OR?: ProblemScalarWhereInput[]
    NOT?: ProblemScalarWhereInput | ProblemScalarWhereInput[]
    id?: StringFilter<"Problem"> | string
    title?: StringFilter<"Problem"> | string
    description?: StringFilter<"Problem"> | string
    difficulty?: EnumDifficultyFilter<"Problem"> | $Enums.Difficulty
    tags?: StringNullableListFilter<"Problem">
    userId?: StringFilter<"Problem"> | string
    examples?: JsonFilter<"Problem">
    constraints?: StringFilter<"Problem"> | string
    hints?: StringNullableFilter<"Problem"> | string | null
    editorial?: StringNullableFilter<"Problem"> | string | null
    testcases?: JsonFilter<"Problem">
    codeSnippet?: JsonFilter<"Problem">
    referenceSolution?: JsonFilter<"Problem">
    createdAt?: DateTimeFilter<"Problem"> | Date | string
    updatedAt?: DateTimeFilter<"Problem"> | Date | string
  }

  export type SubmissionUpsertWithWhereUniqueWithoutUserInput = {
    where: SubmissionWhereUniqueInput
    update: XOR<SubmissionUpdateWithoutUserInput, SubmissionUncheckedUpdateWithoutUserInput>
    create: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput>
  }

  export type SubmissionUpdateWithWhereUniqueWithoutUserInput = {
    where: SubmissionWhereUniqueInput
    data: XOR<SubmissionUpdateWithoutUserInput, SubmissionUncheckedUpdateWithoutUserInput>
  }

  export type SubmissionUpdateManyWithWhereWithoutUserInput = {
    where: SubmissionScalarWhereInput
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyWithoutUserInput>
  }

  export type SubmissionScalarWhereInput = {
    AND?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
    OR?: SubmissionScalarWhereInput[]
    NOT?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
    id?: StringFilter<"Submission"> | string
    userId?: StringFilter<"Submission"> | string
    problemId?: StringFilter<"Submission"> | string
    sourceCode?: JsonFilter<"Submission">
    stdin?: StringNullableFilter<"Submission"> | string | null
    stdout?: StringNullableFilter<"Submission"> | string | null
    stderr?: StringNullableFilter<"Submission"> | string | null
    compileOutput?: StringNullableFilter<"Submission"> | string | null
    status?: StringFilter<"Submission"> | string
    memory?: StringNullableFilter<"Submission"> | string | null
    time?: StringNullableFilter<"Submission"> | string | null
    createdAt?: DateTimeFilter<"Submission"> | Date | string
    updatedAt?: DateTimeFilter<"Submission"> | Date | string
  }

  export type problemSolvedUpsertWithWhereUniqueWithoutUserInput = {
    where: problemSolvedWhereUniqueInput
    update: XOR<problemSolvedUpdateWithoutUserInput, problemSolvedUncheckedUpdateWithoutUserInput>
    create: XOR<problemSolvedCreateWithoutUserInput, problemSolvedUncheckedCreateWithoutUserInput>
  }

  export type problemSolvedUpdateWithWhereUniqueWithoutUserInput = {
    where: problemSolvedWhereUniqueInput
    data: XOR<problemSolvedUpdateWithoutUserInput, problemSolvedUncheckedUpdateWithoutUserInput>
  }

  export type problemSolvedUpdateManyWithWhereWithoutUserInput = {
    where: problemSolvedScalarWhereInput
    data: XOR<problemSolvedUpdateManyMutationInput, problemSolvedUncheckedUpdateManyWithoutUserInput>
  }

  export type problemSolvedScalarWhereInput = {
    AND?: problemSolvedScalarWhereInput | problemSolvedScalarWhereInput[]
    OR?: problemSolvedScalarWhereInput[]
    NOT?: problemSolvedScalarWhereInput | problemSolvedScalarWhereInput[]
    id?: StringFilter<"problemSolved"> | string
    userId?: StringFilter<"problemSolved"> | string
    problemId?: StringFilter<"problemSolved"> | string
    createAt?: DateTimeFilter<"problemSolved"> | Date | string
    updatedAt?: DateTimeFilter<"problemSolved"> | Date | string
  }

  export type PlayListUpsertWithWhereUniqueWithoutUserInput = {
    where: PlayListWhereUniqueInput
    update: XOR<PlayListUpdateWithoutUserInput, PlayListUncheckedUpdateWithoutUserInput>
    create: XOR<PlayListCreateWithoutUserInput, PlayListUncheckedCreateWithoutUserInput>
  }

  export type PlayListUpdateWithWhereUniqueWithoutUserInput = {
    where: PlayListWhereUniqueInput
    data: XOR<PlayListUpdateWithoutUserInput, PlayListUncheckedUpdateWithoutUserInput>
  }

  export type PlayListUpdateManyWithWhereWithoutUserInput = {
    where: PlayListScalarWhereInput
    data: XOR<PlayListUpdateManyMutationInput, PlayListUncheckedUpdateManyWithoutUserInput>
  }

  export type PlayListScalarWhereInput = {
    AND?: PlayListScalarWhereInput | PlayListScalarWhereInput[]
    OR?: PlayListScalarWhereInput[]
    NOT?: PlayListScalarWhereInput | PlayListScalarWhereInput[]
    id?: StringFilter<"PlayList"> | string
    name?: StringFilter<"PlayList"> | string
    description?: StringNullableFilter<"PlayList"> | string | null
    userId?: StringFilter<"PlayList"> | string
    createAt?: DateTimeFilter<"PlayList"> | Date | string
    updatedAt?: DateTimeFilter<"PlayList"> | Date | string
  }

  export type UserCreateWithoutProblemsInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    userRole: $Enums.UserRoles
    isVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    submission?: SubmissionCreateNestedManyWithoutUserInput
    problemSolved?: problemSolvedCreateNestedManyWithoutUserInput
    playlists?: PlayListCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProblemsInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    userRole: $Enums.UserRoles
    isVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    submission?: SubmissionUncheckedCreateNestedManyWithoutUserInput
    problemSolved?: problemSolvedUncheckedCreateNestedManyWithoutUserInput
    playlists?: PlayListUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProblemsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProblemsInput, UserUncheckedCreateWithoutProblemsInput>
  }

  export type SubmissionCreateWithoutProblemInput = {
    id?: string
    sourceCode: JsonNullValueInput | InputJsonValue
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSubmissionInput
    testcaseresult?: TestCaseResultCreateNestedManyWithoutSubmissionInput
  }

  export type SubmissionUncheckedCreateWithoutProblemInput = {
    id?: string
    userId: string
    sourceCode: JsonNullValueInput | InputJsonValue
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    testcaseresult?: TestCaseResultUncheckedCreateNestedManyWithoutSubmissionInput
  }

  export type SubmissionCreateOrConnectWithoutProblemInput = {
    where: SubmissionWhereUniqueInput
    create: XOR<SubmissionCreateWithoutProblemInput, SubmissionUncheckedCreateWithoutProblemInput>
  }

  export type SubmissionCreateManyProblemInputEnvelope = {
    data: SubmissionCreateManyProblemInput | SubmissionCreateManyProblemInput[]
    skipDuplicates?: boolean
  }

  export type problemSolvedCreateWithoutProblemInput = {
    id?: string
    createAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProblemSolvedInput
  }

  export type problemSolvedUncheckedCreateWithoutProblemInput = {
    id?: string
    userId: string
    createAt?: Date | string
    updatedAt?: Date | string
  }

  export type problemSolvedCreateOrConnectWithoutProblemInput = {
    where: problemSolvedWhereUniqueInput
    create: XOR<problemSolvedCreateWithoutProblemInput, problemSolvedUncheckedCreateWithoutProblemInput>
  }

  export type problemSolvedCreateManyProblemInputEnvelope = {
    data: problemSolvedCreateManyProblemInput | problemSolvedCreateManyProblemInput[]
    skipDuplicates?: boolean
  }

  export type ProblemInPlayListCreateWithoutProblemInput = {
    id?: string
    createAt?: Date | string
    updatedAt?: Date | string
    playlist: PlayListCreateNestedOneWithoutProblemsInput
  }

  export type ProblemInPlayListUncheckedCreateWithoutProblemInput = {
    id?: string
    playListId: string
    createAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProblemInPlayListCreateOrConnectWithoutProblemInput = {
    where: ProblemInPlayListWhereUniqueInput
    create: XOR<ProblemInPlayListCreateWithoutProblemInput, ProblemInPlayListUncheckedCreateWithoutProblemInput>
  }

  export type ProblemInPlayListCreateManyProblemInputEnvelope = {
    data: ProblemInPlayListCreateManyProblemInput | ProblemInPlayListCreateManyProblemInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutProblemsInput = {
    update: XOR<UserUpdateWithoutProblemsInput, UserUncheckedUpdateWithoutProblemsInput>
    create: XOR<UserCreateWithoutProblemsInput, UserUncheckedCreateWithoutProblemsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProblemsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProblemsInput, UserUncheckedUpdateWithoutProblemsInput>
  }

  export type UserUpdateWithoutProblemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userRole?: EnumUserRolesFieldUpdateOperationsInput | $Enums.UserRoles
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submission?: SubmissionUpdateManyWithoutUserNestedInput
    problemSolved?: problemSolvedUpdateManyWithoutUserNestedInput
    playlists?: PlayListUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProblemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userRole?: EnumUserRolesFieldUpdateOperationsInput | $Enums.UserRoles
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submission?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
    problemSolved?: problemSolvedUncheckedUpdateManyWithoutUserNestedInput
    playlists?: PlayListUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SubmissionUpsertWithWhereUniqueWithoutProblemInput = {
    where: SubmissionWhereUniqueInput
    update: XOR<SubmissionUpdateWithoutProblemInput, SubmissionUncheckedUpdateWithoutProblemInput>
    create: XOR<SubmissionCreateWithoutProblemInput, SubmissionUncheckedCreateWithoutProblemInput>
  }

  export type SubmissionUpdateWithWhereUniqueWithoutProblemInput = {
    where: SubmissionWhereUniqueInput
    data: XOR<SubmissionUpdateWithoutProblemInput, SubmissionUncheckedUpdateWithoutProblemInput>
  }

  export type SubmissionUpdateManyWithWhereWithoutProblemInput = {
    where: SubmissionScalarWhereInput
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyWithoutProblemInput>
  }

  export type problemSolvedUpsertWithWhereUniqueWithoutProblemInput = {
    where: problemSolvedWhereUniqueInput
    update: XOR<problemSolvedUpdateWithoutProblemInput, problemSolvedUncheckedUpdateWithoutProblemInput>
    create: XOR<problemSolvedCreateWithoutProblemInput, problemSolvedUncheckedCreateWithoutProblemInput>
  }

  export type problemSolvedUpdateWithWhereUniqueWithoutProblemInput = {
    where: problemSolvedWhereUniqueInput
    data: XOR<problemSolvedUpdateWithoutProblemInput, problemSolvedUncheckedUpdateWithoutProblemInput>
  }

  export type problemSolvedUpdateManyWithWhereWithoutProblemInput = {
    where: problemSolvedScalarWhereInput
    data: XOR<problemSolvedUpdateManyMutationInput, problemSolvedUncheckedUpdateManyWithoutProblemInput>
  }

  export type ProblemInPlayListUpsertWithWhereUniqueWithoutProblemInput = {
    where: ProblemInPlayListWhereUniqueInput
    update: XOR<ProblemInPlayListUpdateWithoutProblemInput, ProblemInPlayListUncheckedUpdateWithoutProblemInput>
    create: XOR<ProblemInPlayListCreateWithoutProblemInput, ProblemInPlayListUncheckedCreateWithoutProblemInput>
  }

  export type ProblemInPlayListUpdateWithWhereUniqueWithoutProblemInput = {
    where: ProblemInPlayListWhereUniqueInput
    data: XOR<ProblemInPlayListUpdateWithoutProblemInput, ProblemInPlayListUncheckedUpdateWithoutProblemInput>
  }

  export type ProblemInPlayListUpdateManyWithWhereWithoutProblemInput = {
    where: ProblemInPlayListScalarWhereInput
    data: XOR<ProblemInPlayListUpdateManyMutationInput, ProblemInPlayListUncheckedUpdateManyWithoutProblemInput>
  }

  export type ProblemInPlayListScalarWhereInput = {
    AND?: ProblemInPlayListScalarWhereInput | ProblemInPlayListScalarWhereInput[]
    OR?: ProblemInPlayListScalarWhereInput[]
    NOT?: ProblemInPlayListScalarWhereInput | ProblemInPlayListScalarWhereInput[]
    id?: StringFilter<"ProblemInPlayList"> | string
    playListId?: StringFilter<"ProblemInPlayList"> | string
    problemId?: StringFilter<"ProblemInPlayList"> | string
    createAt?: DateTimeFilter<"ProblemInPlayList"> | Date | string
    updatedAt?: DateTimeFilter<"ProblemInPlayList"> | Date | string
  }

  export type UserCreateWithoutSubmissionInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    userRole: $Enums.UserRoles
    isVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemCreateNestedManyWithoutUserInput
    problemSolved?: problemSolvedCreateNestedManyWithoutUserInput
    playlists?: PlayListCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSubmissionInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    userRole: $Enums.UserRoles
    isVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemUncheckedCreateNestedManyWithoutUserInput
    problemSolved?: problemSolvedUncheckedCreateNestedManyWithoutUserInput
    playlists?: PlayListUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSubmissionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubmissionInput, UserUncheckedCreateWithoutSubmissionInput>
  }

  export type ProblemCreateWithoutSubmissionInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.Difficulty
    tags?: ProblemCreatetagsInput | string[]
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorial?: string | null
    testcases: JsonNullValueInput | InputJsonValue
    codeSnippet: JsonNullValueInput | InputJsonValue
    referenceSolution: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProblemsInput
    problemSolved?: problemSolvedCreateNestedManyWithoutProblemInput
    problemInPlayList?: ProblemInPlayListCreateNestedManyWithoutProblemInput
  }

  export type ProblemUncheckedCreateWithoutSubmissionInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.Difficulty
    tags?: ProblemCreatetagsInput | string[]
    userId: string
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorial?: string | null
    testcases: JsonNullValueInput | InputJsonValue
    codeSnippet: JsonNullValueInput | InputJsonValue
    referenceSolution: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    problemSolved?: problemSolvedUncheckedCreateNestedManyWithoutProblemInput
    problemInPlayList?: ProblemInPlayListUncheckedCreateNestedManyWithoutProblemInput
  }

  export type ProblemCreateOrConnectWithoutSubmissionInput = {
    where: ProblemWhereUniqueInput
    create: XOR<ProblemCreateWithoutSubmissionInput, ProblemUncheckedCreateWithoutSubmissionInput>
  }

  export type TestCaseResultCreateWithoutSubmissionInput = {
    id?: string
    testcase: number
    passed: boolean
    stdout?: string | null
    expectedOutput: string
    stderr?: string | null
    compiledOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
  }

  export type TestCaseResultUncheckedCreateWithoutSubmissionInput = {
    id?: string
    testcase: number
    passed: boolean
    stdout?: string | null
    expectedOutput: string
    stderr?: string | null
    compiledOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
  }

  export type TestCaseResultCreateOrConnectWithoutSubmissionInput = {
    where: TestCaseResultWhereUniqueInput
    create: XOR<TestCaseResultCreateWithoutSubmissionInput, TestCaseResultUncheckedCreateWithoutSubmissionInput>
  }

  export type TestCaseResultCreateManySubmissionInputEnvelope = {
    data: TestCaseResultCreateManySubmissionInput | TestCaseResultCreateManySubmissionInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutSubmissionInput = {
    update: XOR<UserUpdateWithoutSubmissionInput, UserUncheckedUpdateWithoutSubmissionInput>
    create: XOR<UserCreateWithoutSubmissionInput, UserUncheckedCreateWithoutSubmissionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubmissionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubmissionInput, UserUncheckedUpdateWithoutSubmissionInput>
  }

  export type UserUpdateWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userRole?: EnumUserRolesFieldUpdateOperationsInput | $Enums.UserRoles
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemUpdateManyWithoutUserNestedInput
    problemSolved?: problemSolvedUpdateManyWithoutUserNestedInput
    playlists?: PlayListUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userRole?: EnumUserRolesFieldUpdateOperationsInput | $Enums.UserRoles
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemUncheckedUpdateManyWithoutUserNestedInput
    problemSolved?: problemSolvedUncheckedUpdateManyWithoutUserNestedInput
    playlists?: PlayListUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProblemUpsertWithoutSubmissionInput = {
    update: XOR<ProblemUpdateWithoutSubmissionInput, ProblemUncheckedUpdateWithoutSubmissionInput>
    create: XOR<ProblemCreateWithoutSubmissionInput, ProblemUncheckedCreateWithoutSubmissionInput>
    where?: ProblemWhereInput
  }

  export type ProblemUpdateToOneWithWhereWithoutSubmissionInput = {
    where?: ProblemWhereInput
    data: XOR<ProblemUpdateWithoutSubmissionInput, ProblemUncheckedUpdateWithoutSubmissionInput>
  }

  export type ProblemUpdateWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: ProblemUpdatetagsInput | string[]
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testcases?: JsonNullValueInput | InputJsonValue
    codeSnippet?: JsonNullValueInput | InputJsonValue
    referenceSolution?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProblemsNestedInput
    problemSolved?: problemSolvedUpdateManyWithoutProblemNestedInput
    problemInPlayList?: ProblemInPlayListUpdateManyWithoutProblemNestedInput
  }

  export type ProblemUncheckedUpdateWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: ProblemUpdatetagsInput | string[]
    userId?: StringFieldUpdateOperationsInput | string
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testcases?: JsonNullValueInput | InputJsonValue
    codeSnippet?: JsonNullValueInput | InputJsonValue
    referenceSolution?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problemSolved?: problemSolvedUncheckedUpdateManyWithoutProblemNestedInput
    problemInPlayList?: ProblemInPlayListUncheckedUpdateManyWithoutProblemNestedInput
  }

  export type TestCaseResultUpsertWithWhereUniqueWithoutSubmissionInput = {
    where: TestCaseResultWhereUniqueInput
    update: XOR<TestCaseResultUpdateWithoutSubmissionInput, TestCaseResultUncheckedUpdateWithoutSubmissionInput>
    create: XOR<TestCaseResultCreateWithoutSubmissionInput, TestCaseResultUncheckedCreateWithoutSubmissionInput>
  }

  export type TestCaseResultUpdateWithWhereUniqueWithoutSubmissionInput = {
    where: TestCaseResultWhereUniqueInput
    data: XOR<TestCaseResultUpdateWithoutSubmissionInput, TestCaseResultUncheckedUpdateWithoutSubmissionInput>
  }

  export type TestCaseResultUpdateManyWithWhereWithoutSubmissionInput = {
    where: TestCaseResultScalarWhereInput
    data: XOR<TestCaseResultUpdateManyMutationInput, TestCaseResultUncheckedUpdateManyWithoutSubmissionInput>
  }

  export type TestCaseResultScalarWhereInput = {
    AND?: TestCaseResultScalarWhereInput | TestCaseResultScalarWhereInput[]
    OR?: TestCaseResultScalarWhereInput[]
    NOT?: TestCaseResultScalarWhereInput | TestCaseResultScalarWhereInput[]
    id?: StringFilter<"TestCaseResult"> | string
    submissionId?: StringFilter<"TestCaseResult"> | string
    testcase?: IntFilter<"TestCaseResult"> | number
    passed?: BoolFilter<"TestCaseResult"> | boolean
    stdout?: StringNullableFilter<"TestCaseResult"> | string | null
    expectedOutput?: StringFilter<"TestCaseResult"> | string
    stderr?: StringNullableFilter<"TestCaseResult"> | string | null
    compiledOutput?: StringNullableFilter<"TestCaseResult"> | string | null
    status?: StringFilter<"TestCaseResult"> | string
    memory?: StringNullableFilter<"TestCaseResult"> | string | null
    time?: StringNullableFilter<"TestCaseResult"> | string | null
  }

  export type SubmissionCreateWithoutTestcaseresultInput = {
    id?: string
    sourceCode: JsonNullValueInput | InputJsonValue
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSubmissionInput
    problem: ProblemCreateNestedOneWithoutSubmissionInput
  }

  export type SubmissionUncheckedCreateWithoutTestcaseresultInput = {
    id?: string
    userId: string
    problemId: string
    sourceCode: JsonNullValueInput | InputJsonValue
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubmissionCreateOrConnectWithoutTestcaseresultInput = {
    where: SubmissionWhereUniqueInput
    create: XOR<SubmissionCreateWithoutTestcaseresultInput, SubmissionUncheckedCreateWithoutTestcaseresultInput>
  }

  export type SubmissionUpsertWithoutTestcaseresultInput = {
    update: XOR<SubmissionUpdateWithoutTestcaseresultInput, SubmissionUncheckedUpdateWithoutTestcaseresultInput>
    create: XOR<SubmissionCreateWithoutTestcaseresultInput, SubmissionUncheckedCreateWithoutTestcaseresultInput>
    where?: SubmissionWhereInput
  }

  export type SubmissionUpdateToOneWithWhereWithoutTestcaseresultInput = {
    where?: SubmissionWhereInput
    data: XOR<SubmissionUpdateWithoutTestcaseresultInput, SubmissionUncheckedUpdateWithoutTestcaseresultInput>
  }

  export type SubmissionUpdateWithoutTestcaseresultInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceCode?: JsonNullValueInput | InputJsonValue
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubmissionNestedInput
    problem?: ProblemUpdateOneRequiredWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateWithoutTestcaseresultInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    sourceCode?: JsonNullValueInput | InputJsonValue
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemCreateWithoutProblemSolvedInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.Difficulty
    tags?: ProblemCreatetagsInput | string[]
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorial?: string | null
    testcases: JsonNullValueInput | InputJsonValue
    codeSnippet: JsonNullValueInput | InputJsonValue
    referenceSolution: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProblemsInput
    submission?: SubmissionCreateNestedManyWithoutProblemInput
    problemInPlayList?: ProblemInPlayListCreateNestedManyWithoutProblemInput
  }

  export type ProblemUncheckedCreateWithoutProblemSolvedInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.Difficulty
    tags?: ProblemCreatetagsInput | string[]
    userId: string
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorial?: string | null
    testcases: JsonNullValueInput | InputJsonValue
    codeSnippet: JsonNullValueInput | InputJsonValue
    referenceSolution: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    submission?: SubmissionUncheckedCreateNestedManyWithoutProblemInput
    problemInPlayList?: ProblemInPlayListUncheckedCreateNestedManyWithoutProblemInput
  }

  export type ProblemCreateOrConnectWithoutProblemSolvedInput = {
    where: ProblemWhereUniqueInput
    create: XOR<ProblemCreateWithoutProblemSolvedInput, ProblemUncheckedCreateWithoutProblemSolvedInput>
  }

  export type UserCreateWithoutProblemSolvedInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    userRole: $Enums.UserRoles
    isVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemCreateNestedManyWithoutUserInput
    submission?: SubmissionCreateNestedManyWithoutUserInput
    playlists?: PlayListCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProblemSolvedInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    userRole: $Enums.UserRoles
    isVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemUncheckedCreateNestedManyWithoutUserInput
    submission?: SubmissionUncheckedCreateNestedManyWithoutUserInput
    playlists?: PlayListUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProblemSolvedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProblemSolvedInput, UserUncheckedCreateWithoutProblemSolvedInput>
  }

  export type ProblemUpsertWithoutProblemSolvedInput = {
    update: XOR<ProblemUpdateWithoutProblemSolvedInput, ProblemUncheckedUpdateWithoutProblemSolvedInput>
    create: XOR<ProblemCreateWithoutProblemSolvedInput, ProblemUncheckedCreateWithoutProblemSolvedInput>
    where?: ProblemWhereInput
  }

  export type ProblemUpdateToOneWithWhereWithoutProblemSolvedInput = {
    where?: ProblemWhereInput
    data: XOR<ProblemUpdateWithoutProblemSolvedInput, ProblemUncheckedUpdateWithoutProblemSolvedInput>
  }

  export type ProblemUpdateWithoutProblemSolvedInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: ProblemUpdatetagsInput | string[]
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testcases?: JsonNullValueInput | InputJsonValue
    codeSnippet?: JsonNullValueInput | InputJsonValue
    referenceSolution?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProblemsNestedInput
    submission?: SubmissionUpdateManyWithoutProblemNestedInput
    problemInPlayList?: ProblemInPlayListUpdateManyWithoutProblemNestedInput
  }

  export type ProblemUncheckedUpdateWithoutProblemSolvedInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: ProblemUpdatetagsInput | string[]
    userId?: StringFieldUpdateOperationsInput | string
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testcases?: JsonNullValueInput | InputJsonValue
    codeSnippet?: JsonNullValueInput | InputJsonValue
    referenceSolution?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submission?: SubmissionUncheckedUpdateManyWithoutProblemNestedInput
    problemInPlayList?: ProblemInPlayListUncheckedUpdateManyWithoutProblemNestedInput
  }

  export type UserUpsertWithoutProblemSolvedInput = {
    update: XOR<UserUpdateWithoutProblemSolvedInput, UserUncheckedUpdateWithoutProblemSolvedInput>
    create: XOR<UserCreateWithoutProblemSolvedInput, UserUncheckedCreateWithoutProblemSolvedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProblemSolvedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProblemSolvedInput, UserUncheckedUpdateWithoutProblemSolvedInput>
  }

  export type UserUpdateWithoutProblemSolvedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userRole?: EnumUserRolesFieldUpdateOperationsInput | $Enums.UserRoles
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemUpdateManyWithoutUserNestedInput
    submission?: SubmissionUpdateManyWithoutUserNestedInput
    playlists?: PlayListUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProblemSolvedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userRole?: EnumUserRolesFieldUpdateOperationsInput | $Enums.UserRoles
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemUncheckedUpdateManyWithoutUserNestedInput
    submission?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
    playlists?: PlayListUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProblemInPlayListCreateWithoutPlaylistInput = {
    id?: string
    createAt?: Date | string
    updatedAt?: Date | string
    problem: ProblemCreateNestedOneWithoutProblemInPlayListInput
  }

  export type ProblemInPlayListUncheckedCreateWithoutPlaylistInput = {
    id?: string
    problemId: string
    createAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProblemInPlayListCreateOrConnectWithoutPlaylistInput = {
    where: ProblemInPlayListWhereUniqueInput
    create: XOR<ProblemInPlayListCreateWithoutPlaylistInput, ProblemInPlayListUncheckedCreateWithoutPlaylistInput>
  }

  export type ProblemInPlayListCreateManyPlaylistInputEnvelope = {
    data: ProblemInPlayListCreateManyPlaylistInput | ProblemInPlayListCreateManyPlaylistInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutPlaylistsInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    userRole: $Enums.UserRoles
    isVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemCreateNestedManyWithoutUserInput
    submission?: SubmissionCreateNestedManyWithoutUserInput
    problemSolved?: problemSolvedCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPlaylistsInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    userRole: $Enums.UserRoles
    isVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemUncheckedCreateNestedManyWithoutUserInput
    submission?: SubmissionUncheckedCreateNestedManyWithoutUserInput
    problemSolved?: problemSolvedUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPlaylistsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPlaylistsInput, UserUncheckedCreateWithoutPlaylistsInput>
  }

  export type ProblemInPlayListUpsertWithWhereUniqueWithoutPlaylistInput = {
    where: ProblemInPlayListWhereUniqueInput
    update: XOR<ProblemInPlayListUpdateWithoutPlaylistInput, ProblemInPlayListUncheckedUpdateWithoutPlaylistInput>
    create: XOR<ProblemInPlayListCreateWithoutPlaylistInput, ProblemInPlayListUncheckedCreateWithoutPlaylistInput>
  }

  export type ProblemInPlayListUpdateWithWhereUniqueWithoutPlaylistInput = {
    where: ProblemInPlayListWhereUniqueInput
    data: XOR<ProblemInPlayListUpdateWithoutPlaylistInput, ProblemInPlayListUncheckedUpdateWithoutPlaylistInput>
  }

  export type ProblemInPlayListUpdateManyWithWhereWithoutPlaylistInput = {
    where: ProblemInPlayListScalarWhereInput
    data: XOR<ProblemInPlayListUpdateManyMutationInput, ProblemInPlayListUncheckedUpdateManyWithoutPlaylistInput>
  }

  export type UserUpsertWithoutPlaylistsInput = {
    update: XOR<UserUpdateWithoutPlaylistsInput, UserUncheckedUpdateWithoutPlaylistsInput>
    create: XOR<UserCreateWithoutPlaylistsInput, UserUncheckedCreateWithoutPlaylistsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPlaylistsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPlaylistsInput, UserUncheckedUpdateWithoutPlaylistsInput>
  }

  export type UserUpdateWithoutPlaylistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userRole?: EnumUserRolesFieldUpdateOperationsInput | $Enums.UserRoles
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemUpdateManyWithoutUserNestedInput
    submission?: SubmissionUpdateManyWithoutUserNestedInput
    problemSolved?: problemSolvedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPlaylistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userRole?: EnumUserRolesFieldUpdateOperationsInput | $Enums.UserRoles
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemUncheckedUpdateManyWithoutUserNestedInput
    submission?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
    problemSolved?: problemSolvedUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PlayListCreateWithoutProblemsInput = {
    id?: string
    name: string
    description?: string | null
    createAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPlaylistsInput
  }

  export type PlayListUncheckedCreateWithoutProblemsInput = {
    id?: string
    name: string
    description?: string | null
    userId: string
    createAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlayListCreateOrConnectWithoutProblemsInput = {
    where: PlayListWhereUniqueInput
    create: XOR<PlayListCreateWithoutProblemsInput, PlayListUncheckedCreateWithoutProblemsInput>
  }

  export type ProblemCreateWithoutProblemInPlayListInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.Difficulty
    tags?: ProblemCreatetagsInput | string[]
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorial?: string | null
    testcases: JsonNullValueInput | InputJsonValue
    codeSnippet: JsonNullValueInput | InputJsonValue
    referenceSolution: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProblemsInput
    submission?: SubmissionCreateNestedManyWithoutProblemInput
    problemSolved?: problemSolvedCreateNestedManyWithoutProblemInput
  }

  export type ProblemUncheckedCreateWithoutProblemInPlayListInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.Difficulty
    tags?: ProblemCreatetagsInput | string[]
    userId: string
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorial?: string | null
    testcases: JsonNullValueInput | InputJsonValue
    codeSnippet: JsonNullValueInput | InputJsonValue
    referenceSolution: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    submission?: SubmissionUncheckedCreateNestedManyWithoutProblemInput
    problemSolved?: problemSolvedUncheckedCreateNestedManyWithoutProblemInput
  }

  export type ProblemCreateOrConnectWithoutProblemInPlayListInput = {
    where: ProblemWhereUniqueInput
    create: XOR<ProblemCreateWithoutProblemInPlayListInput, ProblemUncheckedCreateWithoutProblemInPlayListInput>
  }

  export type PlayListUpsertWithoutProblemsInput = {
    update: XOR<PlayListUpdateWithoutProblemsInput, PlayListUncheckedUpdateWithoutProblemsInput>
    create: XOR<PlayListCreateWithoutProblemsInput, PlayListUncheckedCreateWithoutProblemsInput>
    where?: PlayListWhereInput
  }

  export type PlayListUpdateToOneWithWhereWithoutProblemsInput = {
    where?: PlayListWhereInput
    data: XOR<PlayListUpdateWithoutProblemsInput, PlayListUncheckedUpdateWithoutProblemsInput>
  }

  export type PlayListUpdateWithoutProblemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPlaylistsNestedInput
  }

  export type PlayListUncheckedUpdateWithoutProblemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemUpsertWithoutProblemInPlayListInput = {
    update: XOR<ProblemUpdateWithoutProblemInPlayListInput, ProblemUncheckedUpdateWithoutProblemInPlayListInput>
    create: XOR<ProblemCreateWithoutProblemInPlayListInput, ProblemUncheckedCreateWithoutProblemInPlayListInput>
    where?: ProblemWhereInput
  }

  export type ProblemUpdateToOneWithWhereWithoutProblemInPlayListInput = {
    where?: ProblemWhereInput
    data: XOR<ProblemUpdateWithoutProblemInPlayListInput, ProblemUncheckedUpdateWithoutProblemInPlayListInput>
  }

  export type ProblemUpdateWithoutProblemInPlayListInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: ProblemUpdatetagsInput | string[]
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testcases?: JsonNullValueInput | InputJsonValue
    codeSnippet?: JsonNullValueInput | InputJsonValue
    referenceSolution?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProblemsNestedInput
    submission?: SubmissionUpdateManyWithoutProblemNestedInput
    problemSolved?: problemSolvedUpdateManyWithoutProblemNestedInput
  }

  export type ProblemUncheckedUpdateWithoutProblemInPlayListInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: ProblemUpdatetagsInput | string[]
    userId?: StringFieldUpdateOperationsInput | string
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testcases?: JsonNullValueInput | InputJsonValue
    codeSnippet?: JsonNullValueInput | InputJsonValue
    referenceSolution?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submission?: SubmissionUncheckedUpdateManyWithoutProblemNestedInput
    problemSolved?: problemSolvedUncheckedUpdateManyWithoutProblemNestedInput
  }

  export type ProblemCreateManyUserInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.Difficulty
    tags?: ProblemCreatetagsInput | string[]
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorial?: string | null
    testcases: JsonNullValueInput | InputJsonValue
    codeSnippet: JsonNullValueInput | InputJsonValue
    referenceSolution: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubmissionCreateManyUserInput = {
    id?: string
    problemId: string
    sourceCode: JsonNullValueInput | InputJsonValue
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type problemSolvedCreateManyUserInput = {
    id?: string
    problemId: string
    createAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlayListCreateManyUserInput = {
    id?: string
    name: string
    description?: string | null
    createAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProblemUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: ProblemUpdatetagsInput | string[]
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testcases?: JsonNullValueInput | InputJsonValue
    codeSnippet?: JsonNullValueInput | InputJsonValue
    referenceSolution?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submission?: SubmissionUpdateManyWithoutProblemNestedInput
    problemSolved?: problemSolvedUpdateManyWithoutProblemNestedInput
    problemInPlayList?: ProblemInPlayListUpdateManyWithoutProblemNestedInput
  }

  export type ProblemUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: ProblemUpdatetagsInput | string[]
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testcases?: JsonNullValueInput | InputJsonValue
    codeSnippet?: JsonNullValueInput | InputJsonValue
    referenceSolution?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submission?: SubmissionUncheckedUpdateManyWithoutProblemNestedInput
    problemSolved?: problemSolvedUncheckedUpdateManyWithoutProblemNestedInput
    problemInPlayList?: ProblemInPlayListUncheckedUpdateManyWithoutProblemNestedInput
  }

  export type ProblemUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: ProblemUpdatetagsInput | string[]
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testcases?: JsonNullValueInput | InputJsonValue
    codeSnippet?: JsonNullValueInput | InputJsonValue
    referenceSolution?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceCode?: JsonNullValueInput | InputJsonValue
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problem?: ProblemUpdateOneRequiredWithoutSubmissionNestedInput
    testcaseresult?: TestCaseResultUpdateManyWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    sourceCode?: JsonNullValueInput | InputJsonValue
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testcaseresult?: TestCaseResultUncheckedUpdateManyWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    sourceCode?: JsonNullValueInput | InputJsonValue
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type problemSolvedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problem?: ProblemUpdateOneRequiredWithoutProblemSolvedNestedInput
  }

  export type problemSolvedUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type problemSolvedUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayListUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemInPlayListUpdateManyWithoutPlaylistNestedInput
  }

  export type PlayListUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemInPlayListUncheckedUpdateManyWithoutPlaylistNestedInput
  }

  export type PlayListUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionCreateManyProblemInput = {
    id?: string
    userId: string
    sourceCode: JsonNullValueInput | InputJsonValue
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type problemSolvedCreateManyProblemInput = {
    id?: string
    userId: string
    createAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProblemInPlayListCreateManyProblemInput = {
    id?: string
    playListId: string
    createAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubmissionUpdateWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceCode?: JsonNullValueInput | InputJsonValue
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubmissionNestedInput
    testcaseresult?: TestCaseResultUpdateManyWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sourceCode?: JsonNullValueInput | InputJsonValue
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testcaseresult?: TestCaseResultUncheckedUpdateManyWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateManyWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sourceCode?: JsonNullValueInput | InputJsonValue
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type problemSolvedUpdateWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProblemSolvedNestedInput
  }

  export type problemSolvedUncheckedUpdateWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type problemSolvedUncheckedUpdateManyWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemInPlayListUpdateWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlist?: PlayListUpdateOneRequiredWithoutProblemsNestedInput
  }

  export type ProblemInPlayListUncheckedUpdateWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    playListId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemInPlayListUncheckedUpdateManyWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    playListId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestCaseResultCreateManySubmissionInput = {
    id?: string
    testcase: number
    passed: boolean
    stdout?: string | null
    expectedOutput: string
    stderr?: string | null
    compiledOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
  }

  export type TestCaseResultUpdateWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    testcase?: IntFieldUpdateOperationsInput | number
    passed?: BoolFieldUpdateOperationsInput | boolean
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    expectedOutput?: StringFieldUpdateOperationsInput | string
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compiledOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TestCaseResultUncheckedUpdateWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    testcase?: IntFieldUpdateOperationsInput | number
    passed?: BoolFieldUpdateOperationsInput | boolean
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    expectedOutput?: StringFieldUpdateOperationsInput | string
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compiledOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TestCaseResultUncheckedUpdateManyWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    testcase?: IntFieldUpdateOperationsInput | number
    passed?: BoolFieldUpdateOperationsInput | boolean
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    expectedOutput?: StringFieldUpdateOperationsInput | string
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compiledOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProblemInPlayListCreateManyPlaylistInput = {
    id?: string
    problemId: string
    createAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProblemInPlayListUpdateWithoutPlaylistInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problem?: ProblemUpdateOneRequiredWithoutProblemInPlayListNestedInput
  }

  export type ProblemInPlayListUncheckedUpdateWithoutPlaylistInput = {
    id?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemInPlayListUncheckedUpdateManyWithoutPlaylistInput = {
    id?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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