
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
 * Model Expert
 * 
 */
export type Expert = $Result.DefaultSelection<Prisma.$ExpertPayload>
/**
 * Model Offering
 * 
 */
export type Offering = $Result.DefaultSelection<Prisma.$OfferingPayload>
/**
 * Model Booking
 * 
 */
export type Booking = $Result.DefaultSelection<Prisma.$BookingPayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model BlogPost
 * 
 */
export type BlogPost = $Result.DefaultSelection<Prisma.$BlogPostPayload>
/**
 * Model FAQ
 * 
 */
export type FAQ = $Result.DefaultSelection<Prisma.$FAQPayload>
/**
 * Model Specialization
 * 
 */
export type Specialization = $Result.DefaultSelection<Prisma.$SpecializationPayload>
/**
 * Model Task
 * 
 */
export type Task = $Result.DefaultSelection<Prisma.$TaskPayload>
/**
 * Model Bid
 * 
 */
export type Bid = $Result.DefaultSelection<Prisma.$BidPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Experts
 * const experts = await prisma.expert.findMany()
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
   * // Fetch zero or more Experts
   * const experts = await prisma.expert.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.expert`: Exposes CRUD operations for the **Expert** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Experts
    * const experts = await prisma.expert.findMany()
    * ```
    */
  get expert(): Prisma.ExpertDelegate<ExtArgs>;

  /**
   * `prisma.offering`: Exposes CRUD operations for the **Offering** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Offerings
    * const offerings = await prisma.offering.findMany()
    * ```
    */
  get offering(): Prisma.OfferingDelegate<ExtArgs>;

  /**
   * `prisma.booking`: Exposes CRUD operations for the **Booking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.booking.findMany()
    * ```
    */
  get booking(): Prisma.BookingDelegate<ExtArgs>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs>;

  /**
   * `prisma.blogPost`: Exposes CRUD operations for the **BlogPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BlogPosts
    * const blogPosts = await prisma.blogPost.findMany()
    * ```
    */
  get blogPost(): Prisma.BlogPostDelegate<ExtArgs>;

  /**
   * `prisma.fAQ`: Exposes CRUD operations for the **FAQ** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FAQS
    * const fAQS = await prisma.fAQ.findMany()
    * ```
    */
  get fAQ(): Prisma.FAQDelegate<ExtArgs>;

  /**
   * `prisma.specialization`: Exposes CRUD operations for the **Specialization** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Specializations
    * const specializations = await prisma.specialization.findMany()
    * ```
    */
  get specialization(): Prisma.SpecializationDelegate<ExtArgs>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **Task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.TaskDelegate<ExtArgs>;

  /**
   * `prisma.bid`: Exposes CRUD operations for the **Bid** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bids
    * const bids = await prisma.bid.findMany()
    * ```
    */
  get bid(): Prisma.BidDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Expert: 'Expert',
    Offering: 'Offering',
    Booking: 'Booking',
    Review: 'Review',
    User: 'User',
    Account: 'Account',
    Session: 'Session',
    VerificationToken: 'VerificationToken',
    Category: 'Category',
    BlogPost: 'BlogPost',
    FAQ: 'FAQ',
    Specialization: 'Specialization',
    Task: 'Task',
    Bid: 'Bid'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "expert" | "offering" | "booking" | "review" | "user" | "account" | "session" | "verificationToken" | "category" | "blogPost" | "fAQ" | "specialization" | "task" | "bid"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Expert: {
        payload: Prisma.$ExpertPayload<ExtArgs>
        fields: Prisma.ExpertFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExpertFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExpertFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertPayload>
          }
          findFirst: {
            args: Prisma.ExpertFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExpertFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertPayload>
          }
          findMany: {
            args: Prisma.ExpertFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertPayload>[]
          }
          create: {
            args: Prisma.ExpertCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertPayload>
          }
          createMany: {
            args: Prisma.ExpertCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExpertCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertPayload>[]
          }
          delete: {
            args: Prisma.ExpertDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertPayload>
          }
          update: {
            args: Prisma.ExpertUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertPayload>
          }
          deleteMany: {
            args: Prisma.ExpertDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExpertUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ExpertUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertPayload>
          }
          aggregate: {
            args: Prisma.ExpertAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExpert>
          }
          groupBy: {
            args: Prisma.ExpertGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExpertGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExpertCountArgs<ExtArgs>
            result: $Utils.Optional<ExpertCountAggregateOutputType> | number
          }
        }
      }
      Offering: {
        payload: Prisma.$OfferingPayload<ExtArgs>
        fields: Prisma.OfferingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OfferingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OfferingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferingPayload>
          }
          findFirst: {
            args: Prisma.OfferingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OfferingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferingPayload>
          }
          findMany: {
            args: Prisma.OfferingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferingPayload>[]
          }
          create: {
            args: Prisma.OfferingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferingPayload>
          }
          createMany: {
            args: Prisma.OfferingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OfferingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferingPayload>[]
          }
          delete: {
            args: Prisma.OfferingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferingPayload>
          }
          update: {
            args: Prisma.OfferingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferingPayload>
          }
          deleteMany: {
            args: Prisma.OfferingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OfferingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OfferingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferingPayload>
          }
          aggregate: {
            args: Prisma.OfferingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOffering>
          }
          groupBy: {
            args: Prisma.OfferingGroupByArgs<ExtArgs>
            result: $Utils.Optional<OfferingGroupByOutputType>[]
          }
          count: {
            args: Prisma.OfferingCountArgs<ExtArgs>
            result: $Utils.Optional<OfferingCountAggregateOutputType> | number
          }
        }
      }
      Booking: {
        payload: Prisma.$BookingPayload<ExtArgs>
        fields: Prisma.BookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findFirst: {
            args: Prisma.BookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findMany: {
            args: Prisma.BookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          create: {
            args: Prisma.BookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          createMany: {
            args: Prisma.BookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          delete: {
            args: Prisma.BookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          update: {
            args: Prisma.BookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          deleteMany: {
            args: Prisma.BookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooking>
          }
          groupBy: {
            args: Prisma.BookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingCountArgs<ExtArgs>
            result: $Utils.Optional<BookingCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
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
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      BlogPost: {
        payload: Prisma.$BlogPostPayload<ExtArgs>
        fields: Prisma.BlogPostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlogPostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlogPostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          findFirst: {
            args: Prisma.BlogPostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlogPostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          findMany: {
            args: Prisma.BlogPostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>[]
          }
          create: {
            args: Prisma.BlogPostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          createMany: {
            args: Prisma.BlogPostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlogPostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>[]
          }
          delete: {
            args: Prisma.BlogPostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          update: {
            args: Prisma.BlogPostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          deleteMany: {
            args: Prisma.BlogPostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlogPostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BlogPostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          aggregate: {
            args: Prisma.BlogPostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlogPost>
          }
          groupBy: {
            args: Prisma.BlogPostGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlogPostGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlogPostCountArgs<ExtArgs>
            result: $Utils.Optional<BlogPostCountAggregateOutputType> | number
          }
        }
      }
      FAQ: {
        payload: Prisma.$FAQPayload<ExtArgs>
        fields: Prisma.FAQFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FAQFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FAQFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQPayload>
          }
          findFirst: {
            args: Prisma.FAQFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FAQFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQPayload>
          }
          findMany: {
            args: Prisma.FAQFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQPayload>[]
          }
          create: {
            args: Prisma.FAQCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQPayload>
          }
          createMany: {
            args: Prisma.FAQCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FAQCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQPayload>[]
          }
          delete: {
            args: Prisma.FAQDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQPayload>
          }
          update: {
            args: Prisma.FAQUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQPayload>
          }
          deleteMany: {
            args: Prisma.FAQDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FAQUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FAQUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQPayload>
          }
          aggregate: {
            args: Prisma.FAQAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFAQ>
          }
          groupBy: {
            args: Prisma.FAQGroupByArgs<ExtArgs>
            result: $Utils.Optional<FAQGroupByOutputType>[]
          }
          count: {
            args: Prisma.FAQCountArgs<ExtArgs>
            result: $Utils.Optional<FAQCountAggregateOutputType> | number
          }
        }
      }
      Specialization: {
        payload: Prisma.$SpecializationPayload<ExtArgs>
        fields: Prisma.SpecializationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SpecializationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecializationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SpecializationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecializationPayload>
          }
          findFirst: {
            args: Prisma.SpecializationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecializationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SpecializationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecializationPayload>
          }
          findMany: {
            args: Prisma.SpecializationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecializationPayload>[]
          }
          create: {
            args: Prisma.SpecializationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecializationPayload>
          }
          createMany: {
            args: Prisma.SpecializationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SpecializationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecializationPayload>[]
          }
          delete: {
            args: Prisma.SpecializationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecializationPayload>
          }
          update: {
            args: Prisma.SpecializationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecializationPayload>
          }
          deleteMany: {
            args: Prisma.SpecializationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SpecializationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SpecializationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecializationPayload>
          }
          aggregate: {
            args: Prisma.SpecializationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSpecialization>
          }
          groupBy: {
            args: Prisma.SpecializationGroupByArgs<ExtArgs>
            result: $Utils.Optional<SpecializationGroupByOutputType>[]
          }
          count: {
            args: Prisma.SpecializationCountArgs<ExtArgs>
            result: $Utils.Optional<SpecializationCountAggregateOutputType> | number
          }
        }
      }
      Task: {
        payload: Prisma.$TaskPayload<ExtArgs>
        fields: Prisma.TaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findFirst: {
            args: Prisma.TaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findMany: {
            args: Prisma.TaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          create: {
            args: Prisma.TaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          createMany: {
            args: Prisma.TaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          delete: {
            args: Prisma.TaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          update: {
            args: Prisma.TaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          deleteMany: {
            args: Prisma.TaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.TaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskCountArgs<ExtArgs>
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
          }
        }
      }
      Bid: {
        payload: Prisma.$BidPayload<ExtArgs>
        fields: Prisma.BidFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BidFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BidFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload>
          }
          findFirst: {
            args: Prisma.BidFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BidFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload>
          }
          findMany: {
            args: Prisma.BidFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload>[]
          }
          create: {
            args: Prisma.BidCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload>
          }
          createMany: {
            args: Prisma.BidCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BidCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload>[]
          }
          delete: {
            args: Prisma.BidDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload>
          }
          update: {
            args: Prisma.BidUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload>
          }
          deleteMany: {
            args: Prisma.BidDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BidUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BidUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload>
          }
          aggregate: {
            args: Prisma.BidAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBid>
          }
          groupBy: {
            args: Prisma.BidGroupByArgs<ExtArgs>
            result: $Utils.Optional<BidGroupByOutputType>[]
          }
          count: {
            args: Prisma.BidCountArgs<ExtArgs>
            result: $Utils.Optional<BidCountAggregateOutputType> | number
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
   * Count Type ExpertCountOutputType
   */

  export type ExpertCountOutputType = {
    bookings: number
    offerings: number
    reviews: number
    specializations_list: number
    bids: number
  }

  export type ExpertCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | ExpertCountOutputTypeCountBookingsArgs
    offerings?: boolean | ExpertCountOutputTypeCountOfferingsArgs
    reviews?: boolean | ExpertCountOutputTypeCountReviewsArgs
    specializations_list?: boolean | ExpertCountOutputTypeCountSpecializations_listArgs
    bids?: boolean | ExpertCountOutputTypeCountBidsArgs
  }

  // Custom InputTypes
  /**
   * ExpertCountOutputType without action
   */
  export type ExpertCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpertCountOutputType
     */
    select?: ExpertCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExpertCountOutputType without action
   */
  export type ExpertCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }

  /**
   * ExpertCountOutputType without action
   */
  export type ExpertCountOutputTypeCountOfferingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OfferingWhereInput
  }

  /**
   * ExpertCountOutputType without action
   */
  export type ExpertCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * ExpertCountOutputType without action
   */
  export type ExpertCountOutputTypeCountSpecializations_listArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpecializationWhereInput
  }

  /**
   * ExpertCountOutputType without action
   */
  export type ExpertCountOutputTypeCountBidsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BidWhereInput
  }


  /**
   * Count Type OfferingCountOutputType
   */

  export type OfferingCountOutputType = {
    bookings: number
  }

  export type OfferingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | OfferingCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * OfferingCountOutputType without action
   */
  export type OfferingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferingCountOutputType
     */
    select?: OfferingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OfferingCountOutputType without action
   */
  export type OfferingCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }


  /**
   * Count Type BookingCountOutputType
   */

  export type BookingCountOutputType = {
    reviews: number
  }

  export type BookingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | BookingCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingCountOutputType
     */
    select?: BookingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accounts: number
    sessions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
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
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    posts: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | CategoryCountOutputTypeCountPostsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogPostWhereInput
  }


  /**
   * Count Type BlogPostCountOutputType
   */

  export type BlogPostCountOutputType = {
    faqs: number
  }

  export type BlogPostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    faqs?: boolean | BlogPostCountOutputTypeCountFaqsArgs
  }

  // Custom InputTypes
  /**
   * BlogPostCountOutputType without action
   */
  export type BlogPostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostCountOutputType
     */
    select?: BlogPostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BlogPostCountOutputType without action
   */
  export type BlogPostCountOutputTypeCountFaqsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FAQWhereInput
  }


  /**
   * Count Type SpecializationCountOutputType
   */

  export type SpecializationCountOutputType = {
    experts: number
    tasks: number
  }

  export type SpecializationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    experts?: boolean | SpecializationCountOutputTypeCountExpertsArgs
    tasks?: boolean | SpecializationCountOutputTypeCountTasksArgs
  }

  // Custom InputTypes
  /**
   * SpecializationCountOutputType without action
   */
  export type SpecializationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecializationCountOutputType
     */
    select?: SpecializationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SpecializationCountOutputType without action
   */
  export type SpecializationCountOutputTypeCountExpertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpertWhereInput
  }

  /**
   * SpecializationCountOutputType without action
   */
  export type SpecializationCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }


  /**
   * Count Type TaskCountOutputType
   */

  export type TaskCountOutputType = {
    specializations: number
    bids: number
  }

  export type TaskCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    specializations?: boolean | TaskCountOutputTypeCountSpecializationsArgs
    bids?: boolean | TaskCountOutputTypeCountBidsArgs
  }

  // Custom InputTypes
  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskCountOutputType
     */
    select?: TaskCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountSpecializationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpecializationWhereInput
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountBidsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BidWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Expert
   */

  export type AggregateExpert = {
    _count: ExpertCountAggregateOutputType | null
    _avg: ExpertAvgAggregateOutputType | null
    _sum: ExpertSumAggregateOutputType | null
    _min: ExpertMinAggregateOutputType | null
    _max: ExpertMaxAggregateOutputType | null
  }

  export type ExpertAvgAggregateOutputType = {
    average_rating: number | null
    total_reviews: number | null
    hourly_rate_usd: number | null
    hourly_rate_nis: number | null
  }

  export type ExpertSumAggregateOutputType = {
    average_rating: number | null
    total_reviews: number | null
    hourly_rate_usd: number | null
    hourly_rate_nis: number | null
  }

  export type ExpertMinAggregateOutputType = {
    id: string | null
    slug: string | null
    name: string | null
    profile_image: string | null
    company: string | null
    average_rating: number | null
    total_reviews: number | null
    hourly_rate_usd: number | null
    hourly_rate_nis: number | null
    languages: string | null
    verified: boolean | null
    active: boolean | null
    status: string | null
    linkedin_profile: string | null
    cv_url: string | null
    created_at: Date | null
    updated_at: Date | null
    email: string | null
    bio_en: string | null
    bio_he: string | null
    name_he: string | null
    specializations_en: string | null
    specializations_he: string | null
    title_en: string | null
    title_he: string | null
    userId: string | null
  }

  export type ExpertMaxAggregateOutputType = {
    id: string | null
    slug: string | null
    name: string | null
    profile_image: string | null
    company: string | null
    average_rating: number | null
    total_reviews: number | null
    hourly_rate_usd: number | null
    hourly_rate_nis: number | null
    languages: string | null
    verified: boolean | null
    active: boolean | null
    status: string | null
    linkedin_profile: string | null
    cv_url: string | null
    created_at: Date | null
    updated_at: Date | null
    email: string | null
    bio_en: string | null
    bio_he: string | null
    name_he: string | null
    specializations_en: string | null
    specializations_he: string | null
    title_en: string | null
    title_he: string | null
    userId: string | null
  }

  export type ExpertCountAggregateOutputType = {
    id: number
    slug: number
    name: number
    profile_image: number
    company: number
    average_rating: number
    total_reviews: number
    hourly_rate_usd: number
    hourly_rate_nis: number
    languages: number
    verified: number
    active: number
    status: number
    linkedin_profile: number
    cv_url: number
    created_at: number
    updated_at: number
    email: number
    bio_en: number
    bio_he: number
    name_he: number
    specializations_en: number
    specializations_he: number
    title_en: number
    title_he: number
    userId: number
    _all: number
  }


  export type ExpertAvgAggregateInputType = {
    average_rating?: true
    total_reviews?: true
    hourly_rate_usd?: true
    hourly_rate_nis?: true
  }

  export type ExpertSumAggregateInputType = {
    average_rating?: true
    total_reviews?: true
    hourly_rate_usd?: true
    hourly_rate_nis?: true
  }

  export type ExpertMinAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    profile_image?: true
    company?: true
    average_rating?: true
    total_reviews?: true
    hourly_rate_usd?: true
    hourly_rate_nis?: true
    languages?: true
    verified?: true
    active?: true
    status?: true
    linkedin_profile?: true
    cv_url?: true
    created_at?: true
    updated_at?: true
    email?: true
    bio_en?: true
    bio_he?: true
    name_he?: true
    specializations_en?: true
    specializations_he?: true
    title_en?: true
    title_he?: true
    userId?: true
  }

  export type ExpertMaxAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    profile_image?: true
    company?: true
    average_rating?: true
    total_reviews?: true
    hourly_rate_usd?: true
    hourly_rate_nis?: true
    languages?: true
    verified?: true
    active?: true
    status?: true
    linkedin_profile?: true
    cv_url?: true
    created_at?: true
    updated_at?: true
    email?: true
    bio_en?: true
    bio_he?: true
    name_he?: true
    specializations_en?: true
    specializations_he?: true
    title_en?: true
    title_he?: true
    userId?: true
  }

  export type ExpertCountAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    profile_image?: true
    company?: true
    average_rating?: true
    total_reviews?: true
    hourly_rate_usd?: true
    hourly_rate_nis?: true
    languages?: true
    verified?: true
    active?: true
    status?: true
    linkedin_profile?: true
    cv_url?: true
    created_at?: true
    updated_at?: true
    email?: true
    bio_en?: true
    bio_he?: true
    name_he?: true
    specializations_en?: true
    specializations_he?: true
    title_en?: true
    title_he?: true
    userId?: true
    _all?: true
  }

  export type ExpertAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Expert to aggregate.
     */
    where?: ExpertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experts to fetch.
     */
    orderBy?: ExpertOrderByWithRelationInput | ExpertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExpertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Experts
    **/
    _count?: true | ExpertCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExpertAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExpertSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExpertMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExpertMaxAggregateInputType
  }

  export type GetExpertAggregateType<T extends ExpertAggregateArgs> = {
        [P in keyof T & keyof AggregateExpert]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpert[P]>
      : GetScalarType<T[P], AggregateExpert[P]>
  }




  export type ExpertGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpertWhereInput
    orderBy?: ExpertOrderByWithAggregationInput | ExpertOrderByWithAggregationInput[]
    by: ExpertScalarFieldEnum[] | ExpertScalarFieldEnum
    having?: ExpertScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExpertCountAggregateInputType | true
    _avg?: ExpertAvgAggregateInputType
    _sum?: ExpertSumAggregateInputType
    _min?: ExpertMinAggregateInputType
    _max?: ExpertMaxAggregateInputType
  }

  export type ExpertGroupByOutputType = {
    id: string
    slug: string
    name: string
    profile_image: string | null
    company: string | null
    average_rating: number
    total_reviews: number
    hourly_rate_usd: number | null
    hourly_rate_nis: number | null
    languages: string
    verified: boolean
    active: boolean
    status: string
    linkedin_profile: string | null
    cv_url: string | null
    created_at: Date
    updated_at: Date
    email: string | null
    bio_en: string | null
    bio_he: string | null
    name_he: string | null
    specializations_en: string | null
    specializations_he: string | null
    title_en: string | null
    title_he: string | null
    userId: string | null
    _count: ExpertCountAggregateOutputType | null
    _avg: ExpertAvgAggregateOutputType | null
    _sum: ExpertSumAggregateOutputType | null
    _min: ExpertMinAggregateOutputType | null
    _max: ExpertMaxAggregateOutputType | null
  }

  type GetExpertGroupByPayload<T extends ExpertGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExpertGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExpertGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExpertGroupByOutputType[P]>
            : GetScalarType<T[P], ExpertGroupByOutputType[P]>
        }
      >
    >


  export type ExpertSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    name?: boolean
    profile_image?: boolean
    company?: boolean
    average_rating?: boolean
    total_reviews?: boolean
    hourly_rate_usd?: boolean
    hourly_rate_nis?: boolean
    languages?: boolean
    verified?: boolean
    active?: boolean
    status?: boolean
    linkedin_profile?: boolean
    cv_url?: boolean
    created_at?: boolean
    updated_at?: boolean
    email?: boolean
    bio_en?: boolean
    bio_he?: boolean
    name_he?: boolean
    specializations_en?: boolean
    specializations_he?: boolean
    title_en?: boolean
    title_he?: boolean
    userId?: boolean
    bookings?: boolean | Expert$bookingsArgs<ExtArgs>
    offerings?: boolean | Expert$offeringsArgs<ExtArgs>
    reviews?: boolean | Expert$reviewsArgs<ExtArgs>
    specializations_list?: boolean | Expert$specializations_listArgs<ExtArgs>
    bids?: boolean | Expert$bidsArgs<ExtArgs>
    user?: boolean | Expert$userArgs<ExtArgs>
    _count?: boolean | ExpertCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expert"]>

  export type ExpertSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    name?: boolean
    profile_image?: boolean
    company?: boolean
    average_rating?: boolean
    total_reviews?: boolean
    hourly_rate_usd?: boolean
    hourly_rate_nis?: boolean
    languages?: boolean
    verified?: boolean
    active?: boolean
    status?: boolean
    linkedin_profile?: boolean
    cv_url?: boolean
    created_at?: boolean
    updated_at?: boolean
    email?: boolean
    bio_en?: boolean
    bio_he?: boolean
    name_he?: boolean
    specializations_en?: boolean
    specializations_he?: boolean
    title_en?: boolean
    title_he?: boolean
    userId?: boolean
    user?: boolean | Expert$userArgs<ExtArgs>
  }, ExtArgs["result"]["expert"]>

  export type ExpertSelectScalar = {
    id?: boolean
    slug?: boolean
    name?: boolean
    profile_image?: boolean
    company?: boolean
    average_rating?: boolean
    total_reviews?: boolean
    hourly_rate_usd?: boolean
    hourly_rate_nis?: boolean
    languages?: boolean
    verified?: boolean
    active?: boolean
    status?: boolean
    linkedin_profile?: boolean
    cv_url?: boolean
    created_at?: boolean
    updated_at?: boolean
    email?: boolean
    bio_en?: boolean
    bio_he?: boolean
    name_he?: boolean
    specializations_en?: boolean
    specializations_he?: boolean
    title_en?: boolean
    title_he?: boolean
    userId?: boolean
  }

  export type ExpertInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | Expert$bookingsArgs<ExtArgs>
    offerings?: boolean | Expert$offeringsArgs<ExtArgs>
    reviews?: boolean | Expert$reviewsArgs<ExtArgs>
    specializations_list?: boolean | Expert$specializations_listArgs<ExtArgs>
    bids?: boolean | Expert$bidsArgs<ExtArgs>
    user?: boolean | Expert$userArgs<ExtArgs>
    _count?: boolean | ExpertCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ExpertIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Expert$userArgs<ExtArgs>
  }

  export type $ExpertPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Expert"
    objects: {
      bookings: Prisma.$BookingPayload<ExtArgs>[]
      offerings: Prisma.$OfferingPayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
      specializations_list: Prisma.$SpecializationPayload<ExtArgs>[]
      bids: Prisma.$BidPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      slug: string
      name: string
      profile_image: string | null
      company: string | null
      average_rating: number
      total_reviews: number
      hourly_rate_usd: number | null
      hourly_rate_nis: number | null
      languages: string
      verified: boolean
      active: boolean
      status: string
      linkedin_profile: string | null
      cv_url: string | null
      created_at: Date
      updated_at: Date
      email: string | null
      bio_en: string | null
      bio_he: string | null
      name_he: string | null
      specializations_en: string | null
      specializations_he: string | null
      title_en: string | null
      title_he: string | null
      userId: string | null
    }, ExtArgs["result"]["expert"]>
    composites: {}
  }

  type ExpertGetPayload<S extends boolean | null | undefined | ExpertDefaultArgs> = $Result.GetResult<Prisma.$ExpertPayload, S>

  type ExpertCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ExpertFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ExpertCountAggregateInputType | true
    }

  export interface ExpertDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Expert'], meta: { name: 'Expert' } }
    /**
     * Find zero or one Expert that matches the filter.
     * @param {ExpertFindUniqueArgs} args - Arguments to find a Expert
     * @example
     * // Get one Expert
     * const expert = await prisma.expert.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExpertFindUniqueArgs>(args: SelectSubset<T, ExpertFindUniqueArgs<ExtArgs>>): Prisma__ExpertClient<$Result.GetResult<Prisma.$ExpertPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Expert that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ExpertFindUniqueOrThrowArgs} args - Arguments to find a Expert
     * @example
     * // Get one Expert
     * const expert = await prisma.expert.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExpertFindUniqueOrThrowArgs>(args: SelectSubset<T, ExpertFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExpertClient<$Result.GetResult<Prisma.$ExpertPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Expert that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertFindFirstArgs} args - Arguments to find a Expert
     * @example
     * // Get one Expert
     * const expert = await prisma.expert.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExpertFindFirstArgs>(args?: SelectSubset<T, ExpertFindFirstArgs<ExtArgs>>): Prisma__ExpertClient<$Result.GetResult<Prisma.$ExpertPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Expert that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertFindFirstOrThrowArgs} args - Arguments to find a Expert
     * @example
     * // Get one Expert
     * const expert = await prisma.expert.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExpertFindFirstOrThrowArgs>(args?: SelectSubset<T, ExpertFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExpertClient<$Result.GetResult<Prisma.$ExpertPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Experts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Experts
     * const experts = await prisma.expert.findMany()
     * 
     * // Get first 10 Experts
     * const experts = await prisma.expert.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const expertWithIdOnly = await prisma.expert.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExpertFindManyArgs>(args?: SelectSubset<T, ExpertFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpertPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Expert.
     * @param {ExpertCreateArgs} args - Arguments to create a Expert.
     * @example
     * // Create one Expert
     * const Expert = await prisma.expert.create({
     *   data: {
     *     // ... data to create a Expert
     *   }
     * })
     * 
     */
    create<T extends ExpertCreateArgs>(args: SelectSubset<T, ExpertCreateArgs<ExtArgs>>): Prisma__ExpertClient<$Result.GetResult<Prisma.$ExpertPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Experts.
     * @param {ExpertCreateManyArgs} args - Arguments to create many Experts.
     * @example
     * // Create many Experts
     * const expert = await prisma.expert.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExpertCreateManyArgs>(args?: SelectSubset<T, ExpertCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Experts and returns the data saved in the database.
     * @param {ExpertCreateManyAndReturnArgs} args - Arguments to create many Experts.
     * @example
     * // Create many Experts
     * const expert = await prisma.expert.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Experts and only return the `id`
     * const expertWithIdOnly = await prisma.expert.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExpertCreateManyAndReturnArgs>(args?: SelectSubset<T, ExpertCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpertPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Expert.
     * @param {ExpertDeleteArgs} args - Arguments to delete one Expert.
     * @example
     * // Delete one Expert
     * const Expert = await prisma.expert.delete({
     *   where: {
     *     // ... filter to delete one Expert
     *   }
     * })
     * 
     */
    delete<T extends ExpertDeleteArgs>(args: SelectSubset<T, ExpertDeleteArgs<ExtArgs>>): Prisma__ExpertClient<$Result.GetResult<Prisma.$ExpertPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Expert.
     * @param {ExpertUpdateArgs} args - Arguments to update one Expert.
     * @example
     * // Update one Expert
     * const expert = await prisma.expert.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExpertUpdateArgs>(args: SelectSubset<T, ExpertUpdateArgs<ExtArgs>>): Prisma__ExpertClient<$Result.GetResult<Prisma.$ExpertPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Experts.
     * @param {ExpertDeleteManyArgs} args - Arguments to filter Experts to delete.
     * @example
     * // Delete a few Experts
     * const { count } = await prisma.expert.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExpertDeleteManyArgs>(args?: SelectSubset<T, ExpertDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Experts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Experts
     * const expert = await prisma.expert.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExpertUpdateManyArgs>(args: SelectSubset<T, ExpertUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Expert.
     * @param {ExpertUpsertArgs} args - Arguments to update or create a Expert.
     * @example
     * // Update or create a Expert
     * const expert = await prisma.expert.upsert({
     *   create: {
     *     // ... data to create a Expert
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Expert we want to update
     *   }
     * })
     */
    upsert<T extends ExpertUpsertArgs>(args: SelectSubset<T, ExpertUpsertArgs<ExtArgs>>): Prisma__ExpertClient<$Result.GetResult<Prisma.$ExpertPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Experts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertCountArgs} args - Arguments to filter Experts to count.
     * @example
     * // Count the number of Experts
     * const count = await prisma.expert.count({
     *   where: {
     *     // ... the filter for the Experts we want to count
     *   }
     * })
    **/
    count<T extends ExpertCountArgs>(
      args?: Subset<T, ExpertCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExpertCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Expert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExpertAggregateArgs>(args: Subset<T, ExpertAggregateArgs>): Prisma.PrismaPromise<GetExpertAggregateType<T>>

    /**
     * Group by Expert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertGroupByArgs} args - Group by arguments.
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
      T extends ExpertGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExpertGroupByArgs['orderBy'] }
        : { orderBy?: ExpertGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExpertGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpertGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Expert model
   */
  readonly fields: ExpertFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Expert.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExpertClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bookings<T extends Expert$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Expert$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany"> | Null>
    offerings<T extends Expert$offeringsArgs<ExtArgs> = {}>(args?: Subset<T, Expert$offeringsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfferingPayload<ExtArgs>, T, "findMany"> | Null>
    reviews<T extends Expert$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Expert$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany"> | Null>
    specializations_list<T extends Expert$specializations_listArgs<ExtArgs> = {}>(args?: Subset<T, Expert$specializations_listArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecializationPayload<ExtArgs>, T, "findMany"> | Null>
    bids<T extends Expert$bidsArgs<ExtArgs> = {}>(args?: Subset<T, Expert$bidsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "findMany"> | Null>
    user<T extends Expert$userArgs<ExtArgs> = {}>(args?: Subset<T, Expert$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the Expert model
   */ 
  interface ExpertFieldRefs {
    readonly id: FieldRef<"Expert", 'String'>
    readonly slug: FieldRef<"Expert", 'String'>
    readonly name: FieldRef<"Expert", 'String'>
    readonly profile_image: FieldRef<"Expert", 'String'>
    readonly company: FieldRef<"Expert", 'String'>
    readonly average_rating: FieldRef<"Expert", 'Float'>
    readonly total_reviews: FieldRef<"Expert", 'Int'>
    readonly hourly_rate_usd: FieldRef<"Expert", 'Int'>
    readonly hourly_rate_nis: FieldRef<"Expert", 'Int'>
    readonly languages: FieldRef<"Expert", 'String'>
    readonly verified: FieldRef<"Expert", 'Boolean'>
    readonly active: FieldRef<"Expert", 'Boolean'>
    readonly status: FieldRef<"Expert", 'String'>
    readonly linkedin_profile: FieldRef<"Expert", 'String'>
    readonly cv_url: FieldRef<"Expert", 'String'>
    readonly created_at: FieldRef<"Expert", 'DateTime'>
    readonly updated_at: FieldRef<"Expert", 'DateTime'>
    readonly email: FieldRef<"Expert", 'String'>
    readonly bio_en: FieldRef<"Expert", 'String'>
    readonly bio_he: FieldRef<"Expert", 'String'>
    readonly name_he: FieldRef<"Expert", 'String'>
    readonly specializations_en: FieldRef<"Expert", 'String'>
    readonly specializations_he: FieldRef<"Expert", 'String'>
    readonly title_en: FieldRef<"Expert", 'String'>
    readonly title_he: FieldRef<"Expert", 'String'>
    readonly userId: FieldRef<"Expert", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Expert findUnique
   */
  export type ExpertFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expert
     */
    select?: ExpertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertInclude<ExtArgs> | null
    /**
     * Filter, which Expert to fetch.
     */
    where: ExpertWhereUniqueInput
  }

  /**
   * Expert findUniqueOrThrow
   */
  export type ExpertFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expert
     */
    select?: ExpertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertInclude<ExtArgs> | null
    /**
     * Filter, which Expert to fetch.
     */
    where: ExpertWhereUniqueInput
  }

  /**
   * Expert findFirst
   */
  export type ExpertFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expert
     */
    select?: ExpertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertInclude<ExtArgs> | null
    /**
     * Filter, which Expert to fetch.
     */
    where?: ExpertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experts to fetch.
     */
    orderBy?: ExpertOrderByWithRelationInput | ExpertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Experts.
     */
    cursor?: ExpertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Experts.
     */
    distinct?: ExpertScalarFieldEnum | ExpertScalarFieldEnum[]
  }

  /**
   * Expert findFirstOrThrow
   */
  export type ExpertFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expert
     */
    select?: ExpertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertInclude<ExtArgs> | null
    /**
     * Filter, which Expert to fetch.
     */
    where?: ExpertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experts to fetch.
     */
    orderBy?: ExpertOrderByWithRelationInput | ExpertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Experts.
     */
    cursor?: ExpertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Experts.
     */
    distinct?: ExpertScalarFieldEnum | ExpertScalarFieldEnum[]
  }

  /**
   * Expert findMany
   */
  export type ExpertFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expert
     */
    select?: ExpertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertInclude<ExtArgs> | null
    /**
     * Filter, which Experts to fetch.
     */
    where?: ExpertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experts to fetch.
     */
    orderBy?: ExpertOrderByWithRelationInput | ExpertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Experts.
     */
    cursor?: ExpertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experts.
     */
    skip?: number
    distinct?: ExpertScalarFieldEnum | ExpertScalarFieldEnum[]
  }

  /**
   * Expert create
   */
  export type ExpertCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expert
     */
    select?: ExpertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertInclude<ExtArgs> | null
    /**
     * The data needed to create a Expert.
     */
    data: XOR<ExpertCreateInput, ExpertUncheckedCreateInput>
  }

  /**
   * Expert createMany
   */
  export type ExpertCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Experts.
     */
    data: ExpertCreateManyInput | ExpertCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Expert createManyAndReturn
   */
  export type ExpertCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expert
     */
    select?: ExpertSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Experts.
     */
    data: ExpertCreateManyInput | ExpertCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Expert update
   */
  export type ExpertUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expert
     */
    select?: ExpertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertInclude<ExtArgs> | null
    /**
     * The data needed to update a Expert.
     */
    data: XOR<ExpertUpdateInput, ExpertUncheckedUpdateInput>
    /**
     * Choose, which Expert to update.
     */
    where: ExpertWhereUniqueInput
  }

  /**
   * Expert updateMany
   */
  export type ExpertUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Experts.
     */
    data: XOR<ExpertUpdateManyMutationInput, ExpertUncheckedUpdateManyInput>
    /**
     * Filter which Experts to update
     */
    where?: ExpertWhereInput
  }

  /**
   * Expert upsert
   */
  export type ExpertUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expert
     */
    select?: ExpertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertInclude<ExtArgs> | null
    /**
     * The filter to search for the Expert to update in case it exists.
     */
    where: ExpertWhereUniqueInput
    /**
     * In case the Expert found by the `where` argument doesn't exist, create a new Expert with this data.
     */
    create: XOR<ExpertCreateInput, ExpertUncheckedCreateInput>
    /**
     * In case the Expert was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExpertUpdateInput, ExpertUncheckedUpdateInput>
  }

  /**
   * Expert delete
   */
  export type ExpertDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expert
     */
    select?: ExpertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertInclude<ExtArgs> | null
    /**
     * Filter which Expert to delete.
     */
    where: ExpertWhereUniqueInput
  }

  /**
   * Expert deleteMany
   */
  export type ExpertDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Experts to delete
     */
    where?: ExpertWhereInput
  }

  /**
   * Expert.bookings
   */
  export type Expert$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Expert.offerings
   */
  export type Expert$offeringsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offering
     */
    select?: OfferingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferingInclude<ExtArgs> | null
    where?: OfferingWhereInput
    orderBy?: OfferingOrderByWithRelationInput | OfferingOrderByWithRelationInput[]
    cursor?: OfferingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OfferingScalarFieldEnum | OfferingScalarFieldEnum[]
  }

  /**
   * Expert.reviews
   */
  export type Expert$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Expert.specializations_list
   */
  export type Expert$specializations_listArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialization
     */
    select?: SpecializationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecializationInclude<ExtArgs> | null
    where?: SpecializationWhereInput
    orderBy?: SpecializationOrderByWithRelationInput | SpecializationOrderByWithRelationInput[]
    cursor?: SpecializationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SpecializationScalarFieldEnum | SpecializationScalarFieldEnum[]
  }

  /**
   * Expert.bids
   */
  export type Expert$bidsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    where?: BidWhereInput
    orderBy?: BidOrderByWithRelationInput | BidOrderByWithRelationInput[]
    cursor?: BidWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BidScalarFieldEnum | BidScalarFieldEnum[]
  }

  /**
   * Expert.user
   */
  export type Expert$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Expert without action
   */
  export type ExpertDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expert
     */
    select?: ExpertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertInclude<ExtArgs> | null
  }


  /**
   * Model Offering
   */

  export type AggregateOffering = {
    _count: OfferingCountAggregateOutputType | null
    _avg: OfferingAvgAggregateOutputType | null
    _sum: OfferingSumAggregateOutputType | null
    _min: OfferingMinAggregateOutputType | null
    _max: OfferingMaxAggregateOutputType | null
  }

  export type OfferingAvgAggregateOutputType = {
    duration_minutes: number | null
    max_attendees: number | null
    price_usd: number | null
    price_nis: number | null
  }

  export type OfferingSumAggregateOutputType = {
    duration_minutes: number | null
    max_attendees: number | null
    price_usd: number | null
    price_nis: number | null
  }

  export type OfferingMinAggregateOutputType = {
    id: string | null
    expert_id: string | null
    title: string | null
    type: string | null
    description: string | null
    format: string | null
    duration_minutes: number | null
    max_attendees: number | null
    price_usd: number | null
    price_nis: number | null
    audience_level: string | null
    includes: string | null
    target_industries: string | null
    customizable: boolean | null
    active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type OfferingMaxAggregateOutputType = {
    id: string | null
    expert_id: string | null
    title: string | null
    type: string | null
    description: string | null
    format: string | null
    duration_minutes: number | null
    max_attendees: number | null
    price_usd: number | null
    price_nis: number | null
    audience_level: string | null
    includes: string | null
    target_industries: string | null
    customizable: boolean | null
    active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type OfferingCountAggregateOutputType = {
    id: number
    expert_id: number
    title: number
    type: number
    description: number
    format: number
    duration_minutes: number
    max_attendees: number
    price_usd: number
    price_nis: number
    audience_level: number
    includes: number
    target_industries: number
    customizable: number
    active: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type OfferingAvgAggregateInputType = {
    duration_minutes?: true
    max_attendees?: true
    price_usd?: true
    price_nis?: true
  }

  export type OfferingSumAggregateInputType = {
    duration_minutes?: true
    max_attendees?: true
    price_usd?: true
    price_nis?: true
  }

  export type OfferingMinAggregateInputType = {
    id?: true
    expert_id?: true
    title?: true
    type?: true
    description?: true
    format?: true
    duration_minutes?: true
    max_attendees?: true
    price_usd?: true
    price_nis?: true
    audience_level?: true
    includes?: true
    target_industries?: true
    customizable?: true
    active?: true
    created_at?: true
    updated_at?: true
  }

  export type OfferingMaxAggregateInputType = {
    id?: true
    expert_id?: true
    title?: true
    type?: true
    description?: true
    format?: true
    duration_minutes?: true
    max_attendees?: true
    price_usd?: true
    price_nis?: true
    audience_level?: true
    includes?: true
    target_industries?: true
    customizable?: true
    active?: true
    created_at?: true
    updated_at?: true
  }

  export type OfferingCountAggregateInputType = {
    id?: true
    expert_id?: true
    title?: true
    type?: true
    description?: true
    format?: true
    duration_minutes?: true
    max_attendees?: true
    price_usd?: true
    price_nis?: true
    audience_level?: true
    includes?: true
    target_industries?: true
    customizable?: true
    active?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type OfferingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Offering to aggregate.
     */
    where?: OfferingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Offerings to fetch.
     */
    orderBy?: OfferingOrderByWithRelationInput | OfferingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OfferingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Offerings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Offerings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Offerings
    **/
    _count?: true | OfferingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OfferingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OfferingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OfferingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OfferingMaxAggregateInputType
  }

  export type GetOfferingAggregateType<T extends OfferingAggregateArgs> = {
        [P in keyof T & keyof AggregateOffering]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOffering[P]>
      : GetScalarType<T[P], AggregateOffering[P]>
  }




  export type OfferingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OfferingWhereInput
    orderBy?: OfferingOrderByWithAggregationInput | OfferingOrderByWithAggregationInput[]
    by: OfferingScalarFieldEnum[] | OfferingScalarFieldEnum
    having?: OfferingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OfferingCountAggregateInputType | true
    _avg?: OfferingAvgAggregateInputType
    _sum?: OfferingSumAggregateInputType
    _min?: OfferingMinAggregateInputType
    _max?: OfferingMaxAggregateInputType
  }

  export type OfferingGroupByOutputType = {
    id: string
    expert_id: string
    title: string
    type: string
    description: string
    format: string
    duration_minutes: number
    max_attendees: number | null
    price_usd: number
    price_nis: number | null
    audience_level: string
    includes: string | null
    target_industries: string | null
    customizable: boolean
    active: boolean
    created_at: Date
    updated_at: Date
    _count: OfferingCountAggregateOutputType | null
    _avg: OfferingAvgAggregateOutputType | null
    _sum: OfferingSumAggregateOutputType | null
    _min: OfferingMinAggregateOutputType | null
    _max: OfferingMaxAggregateOutputType | null
  }

  type GetOfferingGroupByPayload<T extends OfferingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OfferingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OfferingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OfferingGroupByOutputType[P]>
            : GetScalarType<T[P], OfferingGroupByOutputType[P]>
        }
      >
    >


  export type OfferingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expert_id?: boolean
    title?: boolean
    type?: boolean
    description?: boolean
    format?: boolean
    duration_minutes?: boolean
    max_attendees?: boolean
    price_usd?: boolean
    price_nis?: boolean
    audience_level?: boolean
    includes?: boolean
    target_industries?: boolean
    customizable?: boolean
    active?: boolean
    created_at?: boolean
    updated_at?: boolean
    bookings?: boolean | Offering$bookingsArgs<ExtArgs>
    expert?: boolean | ExpertDefaultArgs<ExtArgs>
    _count?: boolean | OfferingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["offering"]>

  export type OfferingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expert_id?: boolean
    title?: boolean
    type?: boolean
    description?: boolean
    format?: boolean
    duration_minutes?: boolean
    max_attendees?: boolean
    price_usd?: boolean
    price_nis?: boolean
    audience_level?: boolean
    includes?: boolean
    target_industries?: boolean
    customizable?: boolean
    active?: boolean
    created_at?: boolean
    updated_at?: boolean
    expert?: boolean | ExpertDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["offering"]>

  export type OfferingSelectScalar = {
    id?: boolean
    expert_id?: boolean
    title?: boolean
    type?: boolean
    description?: boolean
    format?: boolean
    duration_minutes?: boolean
    max_attendees?: boolean
    price_usd?: boolean
    price_nis?: boolean
    audience_level?: boolean
    includes?: boolean
    target_industries?: boolean
    customizable?: boolean
    active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type OfferingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | Offering$bookingsArgs<ExtArgs>
    expert?: boolean | ExpertDefaultArgs<ExtArgs>
    _count?: boolean | OfferingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OfferingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expert?: boolean | ExpertDefaultArgs<ExtArgs>
  }

  export type $OfferingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Offering"
    objects: {
      bookings: Prisma.$BookingPayload<ExtArgs>[]
      expert: Prisma.$ExpertPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      expert_id: string
      title: string
      type: string
      description: string
      format: string
      duration_minutes: number
      max_attendees: number | null
      price_usd: number
      price_nis: number | null
      audience_level: string
      includes: string | null
      target_industries: string | null
      customizable: boolean
      active: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["offering"]>
    composites: {}
  }

  type OfferingGetPayload<S extends boolean | null | undefined | OfferingDefaultArgs> = $Result.GetResult<Prisma.$OfferingPayload, S>

  type OfferingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OfferingFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OfferingCountAggregateInputType | true
    }

  export interface OfferingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Offering'], meta: { name: 'Offering' } }
    /**
     * Find zero or one Offering that matches the filter.
     * @param {OfferingFindUniqueArgs} args - Arguments to find a Offering
     * @example
     * // Get one Offering
     * const offering = await prisma.offering.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OfferingFindUniqueArgs>(args: SelectSubset<T, OfferingFindUniqueArgs<ExtArgs>>): Prisma__OfferingClient<$Result.GetResult<Prisma.$OfferingPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Offering that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OfferingFindUniqueOrThrowArgs} args - Arguments to find a Offering
     * @example
     * // Get one Offering
     * const offering = await prisma.offering.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OfferingFindUniqueOrThrowArgs>(args: SelectSubset<T, OfferingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OfferingClient<$Result.GetResult<Prisma.$OfferingPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Offering that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferingFindFirstArgs} args - Arguments to find a Offering
     * @example
     * // Get one Offering
     * const offering = await prisma.offering.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OfferingFindFirstArgs>(args?: SelectSubset<T, OfferingFindFirstArgs<ExtArgs>>): Prisma__OfferingClient<$Result.GetResult<Prisma.$OfferingPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Offering that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferingFindFirstOrThrowArgs} args - Arguments to find a Offering
     * @example
     * // Get one Offering
     * const offering = await prisma.offering.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OfferingFindFirstOrThrowArgs>(args?: SelectSubset<T, OfferingFindFirstOrThrowArgs<ExtArgs>>): Prisma__OfferingClient<$Result.GetResult<Prisma.$OfferingPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Offerings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Offerings
     * const offerings = await prisma.offering.findMany()
     * 
     * // Get first 10 Offerings
     * const offerings = await prisma.offering.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const offeringWithIdOnly = await prisma.offering.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OfferingFindManyArgs>(args?: SelectSubset<T, OfferingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfferingPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Offering.
     * @param {OfferingCreateArgs} args - Arguments to create a Offering.
     * @example
     * // Create one Offering
     * const Offering = await prisma.offering.create({
     *   data: {
     *     // ... data to create a Offering
     *   }
     * })
     * 
     */
    create<T extends OfferingCreateArgs>(args: SelectSubset<T, OfferingCreateArgs<ExtArgs>>): Prisma__OfferingClient<$Result.GetResult<Prisma.$OfferingPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Offerings.
     * @param {OfferingCreateManyArgs} args - Arguments to create many Offerings.
     * @example
     * // Create many Offerings
     * const offering = await prisma.offering.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OfferingCreateManyArgs>(args?: SelectSubset<T, OfferingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Offerings and returns the data saved in the database.
     * @param {OfferingCreateManyAndReturnArgs} args - Arguments to create many Offerings.
     * @example
     * // Create many Offerings
     * const offering = await prisma.offering.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Offerings and only return the `id`
     * const offeringWithIdOnly = await prisma.offering.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OfferingCreateManyAndReturnArgs>(args?: SelectSubset<T, OfferingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfferingPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Offering.
     * @param {OfferingDeleteArgs} args - Arguments to delete one Offering.
     * @example
     * // Delete one Offering
     * const Offering = await prisma.offering.delete({
     *   where: {
     *     // ... filter to delete one Offering
     *   }
     * })
     * 
     */
    delete<T extends OfferingDeleteArgs>(args: SelectSubset<T, OfferingDeleteArgs<ExtArgs>>): Prisma__OfferingClient<$Result.GetResult<Prisma.$OfferingPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Offering.
     * @param {OfferingUpdateArgs} args - Arguments to update one Offering.
     * @example
     * // Update one Offering
     * const offering = await prisma.offering.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OfferingUpdateArgs>(args: SelectSubset<T, OfferingUpdateArgs<ExtArgs>>): Prisma__OfferingClient<$Result.GetResult<Prisma.$OfferingPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Offerings.
     * @param {OfferingDeleteManyArgs} args - Arguments to filter Offerings to delete.
     * @example
     * // Delete a few Offerings
     * const { count } = await prisma.offering.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OfferingDeleteManyArgs>(args?: SelectSubset<T, OfferingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Offerings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Offerings
     * const offering = await prisma.offering.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OfferingUpdateManyArgs>(args: SelectSubset<T, OfferingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Offering.
     * @param {OfferingUpsertArgs} args - Arguments to update or create a Offering.
     * @example
     * // Update or create a Offering
     * const offering = await prisma.offering.upsert({
     *   create: {
     *     // ... data to create a Offering
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Offering we want to update
     *   }
     * })
     */
    upsert<T extends OfferingUpsertArgs>(args: SelectSubset<T, OfferingUpsertArgs<ExtArgs>>): Prisma__OfferingClient<$Result.GetResult<Prisma.$OfferingPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Offerings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferingCountArgs} args - Arguments to filter Offerings to count.
     * @example
     * // Count the number of Offerings
     * const count = await prisma.offering.count({
     *   where: {
     *     // ... the filter for the Offerings we want to count
     *   }
     * })
    **/
    count<T extends OfferingCountArgs>(
      args?: Subset<T, OfferingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OfferingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Offering.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OfferingAggregateArgs>(args: Subset<T, OfferingAggregateArgs>): Prisma.PrismaPromise<GetOfferingAggregateType<T>>

    /**
     * Group by Offering.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferingGroupByArgs} args - Group by arguments.
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
      T extends OfferingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OfferingGroupByArgs['orderBy'] }
        : { orderBy?: OfferingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OfferingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOfferingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Offering model
   */
  readonly fields: OfferingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Offering.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OfferingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bookings<T extends Offering$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Offering$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany"> | Null>
    expert<T extends ExpertDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExpertDefaultArgs<ExtArgs>>): Prisma__ExpertClient<$Result.GetResult<Prisma.$ExpertPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Offering model
   */ 
  interface OfferingFieldRefs {
    readonly id: FieldRef<"Offering", 'String'>
    readonly expert_id: FieldRef<"Offering", 'String'>
    readonly title: FieldRef<"Offering", 'String'>
    readonly type: FieldRef<"Offering", 'String'>
    readonly description: FieldRef<"Offering", 'String'>
    readonly format: FieldRef<"Offering", 'String'>
    readonly duration_minutes: FieldRef<"Offering", 'Int'>
    readonly max_attendees: FieldRef<"Offering", 'Int'>
    readonly price_usd: FieldRef<"Offering", 'Int'>
    readonly price_nis: FieldRef<"Offering", 'Int'>
    readonly audience_level: FieldRef<"Offering", 'String'>
    readonly includes: FieldRef<"Offering", 'String'>
    readonly target_industries: FieldRef<"Offering", 'String'>
    readonly customizable: FieldRef<"Offering", 'Boolean'>
    readonly active: FieldRef<"Offering", 'Boolean'>
    readonly created_at: FieldRef<"Offering", 'DateTime'>
    readonly updated_at: FieldRef<"Offering", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Offering findUnique
   */
  export type OfferingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offering
     */
    select?: OfferingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferingInclude<ExtArgs> | null
    /**
     * Filter, which Offering to fetch.
     */
    where: OfferingWhereUniqueInput
  }

  /**
   * Offering findUniqueOrThrow
   */
  export type OfferingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offering
     */
    select?: OfferingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferingInclude<ExtArgs> | null
    /**
     * Filter, which Offering to fetch.
     */
    where: OfferingWhereUniqueInput
  }

  /**
   * Offering findFirst
   */
  export type OfferingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offering
     */
    select?: OfferingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferingInclude<ExtArgs> | null
    /**
     * Filter, which Offering to fetch.
     */
    where?: OfferingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Offerings to fetch.
     */
    orderBy?: OfferingOrderByWithRelationInput | OfferingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Offerings.
     */
    cursor?: OfferingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Offerings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Offerings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Offerings.
     */
    distinct?: OfferingScalarFieldEnum | OfferingScalarFieldEnum[]
  }

  /**
   * Offering findFirstOrThrow
   */
  export type OfferingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offering
     */
    select?: OfferingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferingInclude<ExtArgs> | null
    /**
     * Filter, which Offering to fetch.
     */
    where?: OfferingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Offerings to fetch.
     */
    orderBy?: OfferingOrderByWithRelationInput | OfferingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Offerings.
     */
    cursor?: OfferingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Offerings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Offerings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Offerings.
     */
    distinct?: OfferingScalarFieldEnum | OfferingScalarFieldEnum[]
  }

  /**
   * Offering findMany
   */
  export type OfferingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offering
     */
    select?: OfferingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferingInclude<ExtArgs> | null
    /**
     * Filter, which Offerings to fetch.
     */
    where?: OfferingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Offerings to fetch.
     */
    orderBy?: OfferingOrderByWithRelationInput | OfferingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Offerings.
     */
    cursor?: OfferingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Offerings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Offerings.
     */
    skip?: number
    distinct?: OfferingScalarFieldEnum | OfferingScalarFieldEnum[]
  }

  /**
   * Offering create
   */
  export type OfferingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offering
     */
    select?: OfferingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferingInclude<ExtArgs> | null
    /**
     * The data needed to create a Offering.
     */
    data: XOR<OfferingCreateInput, OfferingUncheckedCreateInput>
  }

  /**
   * Offering createMany
   */
  export type OfferingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Offerings.
     */
    data: OfferingCreateManyInput | OfferingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Offering createManyAndReturn
   */
  export type OfferingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offering
     */
    select?: OfferingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Offerings.
     */
    data: OfferingCreateManyInput | OfferingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Offering update
   */
  export type OfferingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offering
     */
    select?: OfferingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferingInclude<ExtArgs> | null
    /**
     * The data needed to update a Offering.
     */
    data: XOR<OfferingUpdateInput, OfferingUncheckedUpdateInput>
    /**
     * Choose, which Offering to update.
     */
    where: OfferingWhereUniqueInput
  }

  /**
   * Offering updateMany
   */
  export type OfferingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Offerings.
     */
    data: XOR<OfferingUpdateManyMutationInput, OfferingUncheckedUpdateManyInput>
    /**
     * Filter which Offerings to update
     */
    where?: OfferingWhereInput
  }

  /**
   * Offering upsert
   */
  export type OfferingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offering
     */
    select?: OfferingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferingInclude<ExtArgs> | null
    /**
     * The filter to search for the Offering to update in case it exists.
     */
    where: OfferingWhereUniqueInput
    /**
     * In case the Offering found by the `where` argument doesn't exist, create a new Offering with this data.
     */
    create: XOR<OfferingCreateInput, OfferingUncheckedCreateInput>
    /**
     * In case the Offering was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OfferingUpdateInput, OfferingUncheckedUpdateInput>
  }

  /**
   * Offering delete
   */
  export type OfferingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offering
     */
    select?: OfferingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferingInclude<ExtArgs> | null
    /**
     * Filter which Offering to delete.
     */
    where: OfferingWhereUniqueInput
  }

  /**
   * Offering deleteMany
   */
  export type OfferingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Offerings to delete
     */
    where?: OfferingWhereInput
  }

  /**
   * Offering.bookings
   */
  export type Offering$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Offering without action
   */
  export type OfferingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offering
     */
    select?: OfferingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferingInclude<ExtArgs> | null
  }


  /**
   * Model Booking
   */

  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  export type BookingAvgAggregateOutputType = {
    attendees_count: number | null
    quote_amount_usd: number | null
    quote_amount_nis: number | null
    platform_fee_usd: number | null
    platform_fee_nis: number | null
    expert_payout_usd: number | null
    expert_payout_nis: number | null
  }

  export type BookingSumAggregateOutputType = {
    attendees_count: number | null
    quote_amount_usd: number | null
    quote_amount_nis: number | null
    platform_fee_usd: number | null
    platform_fee_nis: number | null
    expert_payout_usd: number | null
    expert_payout_nis: number | null
  }

  export type BookingMinAggregateOutputType = {
    id: string | null
    expert_id: string | null
    offering_id: string | null
    company_name: string | null
    company_contact_name: string | null
    company_email: string | null
    company_phone: string | null
    date_requested: Date | null
    attendees_count: number | null
    notes_from_client: string | null
    status: string | null
    quote_amount_usd: number | null
    quote_amount_nis: number | null
    payment_method: string | null
    payment_status: string | null
    stripe_payment_id: string | null
    platform_fee_usd: number | null
    platform_fee_nis: number | null
    expert_payout_usd: number | null
    expert_payout_nis: number | null
    notes_from_expert: string | null
    payment_link: string | null
    invoice_link: string | null
    transaction_id: string | null
    expert_response_date: Date | null
    event_date_confirmed: Date | null
    review_sent: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type BookingMaxAggregateOutputType = {
    id: string | null
    expert_id: string | null
    offering_id: string | null
    company_name: string | null
    company_contact_name: string | null
    company_email: string | null
    company_phone: string | null
    date_requested: Date | null
    attendees_count: number | null
    notes_from_client: string | null
    status: string | null
    quote_amount_usd: number | null
    quote_amount_nis: number | null
    payment_method: string | null
    payment_status: string | null
    stripe_payment_id: string | null
    platform_fee_usd: number | null
    platform_fee_nis: number | null
    expert_payout_usd: number | null
    expert_payout_nis: number | null
    notes_from_expert: string | null
    payment_link: string | null
    invoice_link: string | null
    transaction_id: string | null
    expert_response_date: Date | null
    event_date_confirmed: Date | null
    review_sent: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type BookingCountAggregateOutputType = {
    id: number
    expert_id: number
    offering_id: number
    company_name: number
    company_contact_name: number
    company_email: number
    company_phone: number
    date_requested: number
    attendees_count: number
    notes_from_client: number
    status: number
    quote_amount_usd: number
    quote_amount_nis: number
    payment_method: number
    payment_status: number
    stripe_payment_id: number
    platform_fee_usd: number
    platform_fee_nis: number
    expert_payout_usd: number
    expert_payout_nis: number
    notes_from_expert: number
    payment_link: number
    invoice_link: number
    transaction_id: number
    expert_response_date: number
    event_date_confirmed: number
    review_sent: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type BookingAvgAggregateInputType = {
    attendees_count?: true
    quote_amount_usd?: true
    quote_amount_nis?: true
    platform_fee_usd?: true
    platform_fee_nis?: true
    expert_payout_usd?: true
    expert_payout_nis?: true
  }

  export type BookingSumAggregateInputType = {
    attendees_count?: true
    quote_amount_usd?: true
    quote_amount_nis?: true
    platform_fee_usd?: true
    platform_fee_nis?: true
    expert_payout_usd?: true
    expert_payout_nis?: true
  }

  export type BookingMinAggregateInputType = {
    id?: true
    expert_id?: true
    offering_id?: true
    company_name?: true
    company_contact_name?: true
    company_email?: true
    company_phone?: true
    date_requested?: true
    attendees_count?: true
    notes_from_client?: true
    status?: true
    quote_amount_usd?: true
    quote_amount_nis?: true
    payment_method?: true
    payment_status?: true
    stripe_payment_id?: true
    platform_fee_usd?: true
    platform_fee_nis?: true
    expert_payout_usd?: true
    expert_payout_nis?: true
    notes_from_expert?: true
    payment_link?: true
    invoice_link?: true
    transaction_id?: true
    expert_response_date?: true
    event_date_confirmed?: true
    review_sent?: true
    created_at?: true
    updated_at?: true
  }

  export type BookingMaxAggregateInputType = {
    id?: true
    expert_id?: true
    offering_id?: true
    company_name?: true
    company_contact_name?: true
    company_email?: true
    company_phone?: true
    date_requested?: true
    attendees_count?: true
    notes_from_client?: true
    status?: true
    quote_amount_usd?: true
    quote_amount_nis?: true
    payment_method?: true
    payment_status?: true
    stripe_payment_id?: true
    platform_fee_usd?: true
    platform_fee_nis?: true
    expert_payout_usd?: true
    expert_payout_nis?: true
    notes_from_expert?: true
    payment_link?: true
    invoice_link?: true
    transaction_id?: true
    expert_response_date?: true
    event_date_confirmed?: true
    review_sent?: true
    created_at?: true
    updated_at?: true
  }

  export type BookingCountAggregateInputType = {
    id?: true
    expert_id?: true
    offering_id?: true
    company_name?: true
    company_contact_name?: true
    company_email?: true
    company_phone?: true
    date_requested?: true
    attendees_count?: true
    notes_from_client?: true
    status?: true
    quote_amount_usd?: true
    quote_amount_nis?: true
    payment_method?: true
    payment_status?: true
    stripe_payment_id?: true
    platform_fee_usd?: true
    platform_fee_nis?: true
    expert_payout_usd?: true
    expert_payout_nis?: true
    notes_from_expert?: true
    payment_link?: true
    invoice_link?: true
    transaction_id?: true
    expert_response_date?: true
    event_date_confirmed?: true
    review_sent?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type BookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Booking to aggregate.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookings
    **/
    _count?: true | BookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingMaxAggregateInputType
  }

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
        [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>
  }




  export type BookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithAggregationInput | BookingOrderByWithAggregationInput[]
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum
    having?: BookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingCountAggregateInputType | true
    _avg?: BookingAvgAggregateInputType
    _sum?: BookingSumAggregateInputType
    _min?: BookingMinAggregateInputType
    _max?: BookingMaxAggregateInputType
  }

  export type BookingGroupByOutputType = {
    id: string
    expert_id: string
    offering_id: string
    company_name: string
    company_contact_name: string
    company_email: string
    company_phone: string | null
    date_requested: Date
    attendees_count: number | null
    notes_from_client: string | null
    status: string
    quote_amount_usd: number
    quote_amount_nis: number | null
    payment_method: string
    payment_status: string
    stripe_payment_id: string | null
    platform_fee_usd: number | null
    platform_fee_nis: number | null
    expert_payout_usd: number | null
    expert_payout_nis: number | null
    notes_from_expert: string | null
    payment_link: string | null
    invoice_link: string | null
    transaction_id: string | null
    expert_response_date: Date | null
    event_date_confirmed: Date | null
    review_sent: boolean
    created_at: Date
    updated_at: Date
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  type GetBookingGroupByPayload<T extends BookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingGroupByOutputType[P]>
            : GetScalarType<T[P], BookingGroupByOutputType[P]>
        }
      >
    >


  export type BookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expert_id?: boolean
    offering_id?: boolean
    company_name?: boolean
    company_contact_name?: boolean
    company_email?: boolean
    company_phone?: boolean
    date_requested?: boolean
    attendees_count?: boolean
    notes_from_client?: boolean
    status?: boolean
    quote_amount_usd?: boolean
    quote_amount_nis?: boolean
    payment_method?: boolean
    payment_status?: boolean
    stripe_payment_id?: boolean
    platform_fee_usd?: boolean
    platform_fee_nis?: boolean
    expert_payout_usd?: boolean
    expert_payout_nis?: boolean
    notes_from_expert?: boolean
    payment_link?: boolean
    invoice_link?: boolean
    transaction_id?: boolean
    expert_response_date?: boolean
    event_date_confirmed?: boolean
    review_sent?: boolean
    created_at?: boolean
    updated_at?: boolean
    expert?: boolean | ExpertDefaultArgs<ExtArgs>
    offering?: boolean | OfferingDefaultArgs<ExtArgs>
    reviews?: boolean | Booking$reviewsArgs<ExtArgs>
    _count?: boolean | BookingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expert_id?: boolean
    offering_id?: boolean
    company_name?: boolean
    company_contact_name?: boolean
    company_email?: boolean
    company_phone?: boolean
    date_requested?: boolean
    attendees_count?: boolean
    notes_from_client?: boolean
    status?: boolean
    quote_amount_usd?: boolean
    quote_amount_nis?: boolean
    payment_method?: boolean
    payment_status?: boolean
    stripe_payment_id?: boolean
    platform_fee_usd?: boolean
    platform_fee_nis?: boolean
    expert_payout_usd?: boolean
    expert_payout_nis?: boolean
    notes_from_expert?: boolean
    payment_link?: boolean
    invoice_link?: boolean
    transaction_id?: boolean
    expert_response_date?: boolean
    event_date_confirmed?: boolean
    review_sent?: boolean
    created_at?: boolean
    updated_at?: boolean
    expert?: boolean | ExpertDefaultArgs<ExtArgs>
    offering?: boolean | OfferingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectScalar = {
    id?: boolean
    expert_id?: boolean
    offering_id?: boolean
    company_name?: boolean
    company_contact_name?: boolean
    company_email?: boolean
    company_phone?: boolean
    date_requested?: boolean
    attendees_count?: boolean
    notes_from_client?: boolean
    status?: boolean
    quote_amount_usd?: boolean
    quote_amount_nis?: boolean
    payment_method?: boolean
    payment_status?: boolean
    stripe_payment_id?: boolean
    platform_fee_usd?: boolean
    platform_fee_nis?: boolean
    expert_payout_usd?: boolean
    expert_payout_nis?: boolean
    notes_from_expert?: boolean
    payment_link?: boolean
    invoice_link?: boolean
    transaction_id?: boolean
    expert_response_date?: boolean
    event_date_confirmed?: boolean
    review_sent?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type BookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expert?: boolean | ExpertDefaultArgs<ExtArgs>
    offering?: boolean | OfferingDefaultArgs<ExtArgs>
    reviews?: boolean | Booking$reviewsArgs<ExtArgs>
    _count?: boolean | BookingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BookingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expert?: boolean | ExpertDefaultArgs<ExtArgs>
    offering?: boolean | OfferingDefaultArgs<ExtArgs>
  }

  export type $BookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Booking"
    objects: {
      expert: Prisma.$ExpertPayload<ExtArgs>
      offering: Prisma.$OfferingPayload<ExtArgs>
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      expert_id: string
      offering_id: string
      company_name: string
      company_contact_name: string
      company_email: string
      company_phone: string | null
      date_requested: Date
      attendees_count: number | null
      notes_from_client: string | null
      status: string
      quote_amount_usd: number
      quote_amount_nis: number | null
      payment_method: string
      payment_status: string
      stripe_payment_id: string | null
      platform_fee_usd: number | null
      platform_fee_nis: number | null
      expert_payout_usd: number | null
      expert_payout_nis: number | null
      notes_from_expert: string | null
      payment_link: string | null
      invoice_link: string | null
      transaction_id: string | null
      expert_response_date: Date | null
      event_date_confirmed: Date | null
      review_sent: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["booking"]>
    composites: {}
  }

  type BookingGetPayload<S extends boolean | null | undefined | BookingDefaultArgs> = $Result.GetResult<Prisma.$BookingPayload, S>

  type BookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BookingFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BookingCountAggregateInputType | true
    }

  export interface BookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Booking'], meta: { name: 'Booking' } }
    /**
     * Find zero or one Booking that matches the filter.
     * @param {BookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingFindUniqueArgs>(args: SelectSubset<T, BookingFindUniqueArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Booking that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingFindFirstArgs>(args?: SelectSubset<T, BookingFindFirstArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingWithIdOnly = await prisma.booking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingFindManyArgs>(args?: SelectSubset<T, BookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Booking.
     * @param {BookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     * 
     */
    create<T extends BookingCreateArgs>(args: SelectSubset<T, BookingCreateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Bookings.
     * @param {BookingCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingCreateManyArgs>(args?: SelectSubset<T, BookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bookings and returns the data saved in the database.
     * @param {BookingCreateManyAndReturnArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookingCreateManyAndReturnArgs>(args?: SelectSubset<T, BookingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Booking.
     * @param {BookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     * 
     */
    delete<T extends BookingDeleteArgs>(args: SelectSubset<T, BookingDeleteArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Booking.
     * @param {BookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingUpdateArgs>(args: SelectSubset<T, BookingUpdateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Bookings.
     * @param {BookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingDeleteManyArgs>(args?: SelectSubset<T, BookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingUpdateManyArgs>(args: SelectSubset<T, BookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Booking.
     * @param {BookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
     */
    upsert<T extends BookingUpsertArgs>(args: SelectSubset<T, BookingUpsertArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends BookingCountArgs>(
      args?: Subset<T, BookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookingAggregateArgs>(args: Subset<T, BookingAggregateArgs>): Prisma.PrismaPromise<GetBookingAggregateType<T>>

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingGroupByArgs} args - Group by arguments.
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
      T extends BookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingGroupByArgs['orderBy'] }
        : { orderBy?: BookingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Booking model
   */
  readonly fields: BookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    expert<T extends ExpertDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExpertDefaultArgs<ExtArgs>>): Prisma__ExpertClient<$Result.GetResult<Prisma.$ExpertPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    offering<T extends OfferingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OfferingDefaultArgs<ExtArgs>>): Prisma__OfferingClient<$Result.GetResult<Prisma.$OfferingPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    reviews<T extends Booking$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Booking$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Booking model
   */ 
  interface BookingFieldRefs {
    readonly id: FieldRef<"Booking", 'String'>
    readonly expert_id: FieldRef<"Booking", 'String'>
    readonly offering_id: FieldRef<"Booking", 'String'>
    readonly company_name: FieldRef<"Booking", 'String'>
    readonly company_contact_name: FieldRef<"Booking", 'String'>
    readonly company_email: FieldRef<"Booking", 'String'>
    readonly company_phone: FieldRef<"Booking", 'String'>
    readonly date_requested: FieldRef<"Booking", 'DateTime'>
    readonly attendees_count: FieldRef<"Booking", 'Int'>
    readonly notes_from_client: FieldRef<"Booking", 'String'>
    readonly status: FieldRef<"Booking", 'String'>
    readonly quote_amount_usd: FieldRef<"Booking", 'Int'>
    readonly quote_amount_nis: FieldRef<"Booking", 'Int'>
    readonly payment_method: FieldRef<"Booking", 'String'>
    readonly payment_status: FieldRef<"Booking", 'String'>
    readonly stripe_payment_id: FieldRef<"Booking", 'String'>
    readonly platform_fee_usd: FieldRef<"Booking", 'Int'>
    readonly platform_fee_nis: FieldRef<"Booking", 'Int'>
    readonly expert_payout_usd: FieldRef<"Booking", 'Int'>
    readonly expert_payout_nis: FieldRef<"Booking", 'Int'>
    readonly notes_from_expert: FieldRef<"Booking", 'String'>
    readonly payment_link: FieldRef<"Booking", 'String'>
    readonly invoice_link: FieldRef<"Booking", 'String'>
    readonly transaction_id: FieldRef<"Booking", 'String'>
    readonly expert_response_date: FieldRef<"Booking", 'DateTime'>
    readonly event_date_confirmed: FieldRef<"Booking", 'DateTime'>
    readonly review_sent: FieldRef<"Booking", 'Boolean'>
    readonly created_at: FieldRef<"Booking", 'DateTime'>
    readonly updated_at: FieldRef<"Booking", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Booking findUnique
   */
  export type BookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findUniqueOrThrow
   */
  export type BookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findFirst
   */
  export type BookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findFirstOrThrow
   */
  export type BookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findMany
   */
  export type BookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking create
   */
  export type BookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to create a Booking.
     */
    data: XOR<BookingCreateInput, BookingUncheckedCreateInput>
  }

  /**
   * Booking createMany
   */
  export type BookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Booking createManyAndReturn
   */
  export type BookingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking update
   */
  export type BookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to update a Booking.
     */
    data: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
    /**
     * Choose, which Booking to update.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking updateMany
   */
  export type BookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
  }

  /**
   * Booking upsert
   */
  export type BookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The filter to search for the Booking to update in case it exists.
     */
    where: BookingWhereUniqueInput
    /**
     * In case the Booking found by the `where` argument doesn't exist, create a new Booking with this data.
     */
    create: XOR<BookingCreateInput, BookingUncheckedCreateInput>
    /**
     * In case the Booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
  }

  /**
   * Booking delete
   */
  export type BookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter which Booking to delete.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking deleteMany
   */
  export type BookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to delete
     */
    where?: BookingWhereInput
  }

  /**
   * Booking.reviews
   */
  export type Booking$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Booking without action
   */
  export type BookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    rating: number | null
  }

  export type ReviewSumAggregateOutputType = {
    rating: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: string | null
    booking_id: string | null
    expert_id: string | null
    company_name: string | null
    rating: number | null
    title: string | null
    text: string | null
    verified: boolean | null
    created_at: Date | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: string | null
    booking_id: string | null
    expert_id: string | null
    company_name: string | null
    rating: number | null
    title: string | null
    text: string | null
    verified: boolean | null
    created_at: Date | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    booking_id: number
    expert_id: number
    company_name: number
    rating: number
    title: number
    text: number
    verified: number
    created_at: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    rating?: true
  }

  export type ReviewSumAggregateInputType = {
    rating?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    booking_id?: true
    expert_id?: true
    company_name?: true
    rating?: true
    title?: true
    text?: true
    verified?: true
    created_at?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    booking_id?: true
    expert_id?: true
    company_name?: true
    rating?: true
    title?: true
    text?: true
    verified?: true
    created_at?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    booking_id?: true
    expert_id?: true
    company_name?: true
    rating?: true
    title?: true
    text?: true
    verified?: true
    created_at?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: string
    booking_id: string | null
    expert_id: string
    company_name: string
    rating: number
    title: string | null
    text: string
    verified: boolean
    created_at: Date
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    booking_id?: boolean
    expert_id?: boolean
    company_name?: boolean
    rating?: boolean
    title?: boolean
    text?: boolean
    verified?: boolean
    created_at?: boolean
    booking?: boolean | Review$bookingArgs<ExtArgs>
    expert?: boolean | ExpertDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    booking_id?: boolean
    expert_id?: boolean
    company_name?: boolean
    rating?: boolean
    title?: boolean
    text?: boolean
    verified?: boolean
    created_at?: boolean
    booking?: boolean | Review$bookingArgs<ExtArgs>
    expert?: boolean | ExpertDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectScalar = {
    id?: boolean
    booking_id?: boolean
    expert_id?: boolean
    company_name?: boolean
    rating?: boolean
    title?: boolean
    text?: boolean
    verified?: boolean
    created_at?: boolean
  }

  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | Review$bookingArgs<ExtArgs>
    expert?: boolean | ExpertDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | Review$bookingArgs<ExtArgs>
    expert?: boolean | ExpertDefaultArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      booking: Prisma.$BookingPayload<ExtArgs> | null
      expert: Prisma.$ExpertPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      booking_id: string | null
      expert_id: string
      company_name: string
      rating: number
      title: string | null
      text: string
      verified: boolean
      created_at: Date
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
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
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    booking<T extends Review$bookingArgs<ExtArgs> = {}>(args?: Subset<T, Review$bookingArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    expert<T extends ExpertDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExpertDefaultArgs<ExtArgs>>): Prisma__ExpertClient<$Result.GetResult<Prisma.$ExpertPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Review model
   */ 
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'String'>
    readonly booking_id: FieldRef<"Review", 'String'>
    readonly expert_id: FieldRef<"Review", 'String'>
    readonly company_name: FieldRef<"Review", 'String'>
    readonly rating: FieldRef<"Review", 'Int'>
    readonly title: FieldRef<"Review", 'String'>
    readonly text: FieldRef<"Review", 'String'>
    readonly verified: FieldRef<"Review", 'Boolean'>
    readonly created_at: FieldRef<"Review", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review createManyAndReturn
   */
  export type ReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
  }

  /**
   * Review.booking
   */
  export type Review$bookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


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
    emailVerified: Date | null
    image: string | null
    role: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    role: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    role: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    role?: true
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
    email: string | null
    emailVerified: Date | null
    image: string | null
    role: string
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
    emailVerified?: boolean
    image?: boolean
    role?: boolean
    expert?: boolean | User$expertArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    role?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expert?: boolean | User$expertArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      expert: Prisma.$ExpertPayload<ExtArgs> | null
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string | null
      emailVerified: Date | null
      image: string | null
      role: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    expert<T extends User$expertArgs<ExtArgs> = {}>(args?: Subset<T, User$expertArgs<ExtArgs>>): Prisma__ExpertClient<$Result.GetResult<Prisma.$ExpertPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany"> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany"> | Null>
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
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly image: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data?: XOR<UserCreateInput, UserUncheckedCreateInput>
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
  }

  /**
   * User.expert
   */
  export type User$expertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expert
     */
    select?: ExpertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertInclude<ExtArgs> | null
    where?: ExpertWhereInput
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
  }

  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Account model
   */ 
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Session model
   */ 
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }


  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationTokens and returns the data saved in the database.
     * @param {VerificationTokenCreateManyAndReturnArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.createManyAndReturn({ 
     *   select: { identifier: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
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
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the VerificationToken model
   */ 
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken createManyAndReturn
   */
  export type VerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    slug: string | null
    name_he: string | null
    name_en: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    slug: string | null
    name_he: string | null
    name_en: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    slug: number
    name_he: number
    name_en: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    slug?: true
    name_he?: true
    name_en?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    slug?: true
    name_he?: true
    name_en?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    slug?: true
    name_he?: true
    name_en?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    slug: string
    name_he: string
    name_en: string
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    name_he?: boolean
    name_en?: boolean
    posts?: boolean | Category$postsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    name_he?: boolean
    name_en?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    slug?: boolean
    name_he?: boolean
    name_en?: boolean
  }

  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | Category$postsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      posts: Prisma.$BlogPostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      slug: string
      name_he: string
      name_en: string
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    posts<T extends Category$postsArgs<ExtArgs> = {}>(args?: Subset<T, Category$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Category model
   */ 
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly slug: FieldRef<"Category", 'String'>
    readonly name_he: FieldRef<"Category", 'String'>
    readonly name_en: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
  }

  /**
   * Category.posts
   */
  export type Category$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    where?: BlogPostWhereInput
    orderBy?: BlogPostOrderByWithRelationInput | BlogPostOrderByWithRelationInput[]
    cursor?: BlogPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlogPostScalarFieldEnum | BlogPostScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model BlogPost
   */

  export type AggregateBlogPost = {
    _count: BlogPostCountAggregateOutputType | null
    _min: BlogPostMinAggregateOutputType | null
    _max: BlogPostMaxAggregateOutputType | null
  }

  export type BlogPostMinAggregateOutputType = {
    id: string | null
    slug: string | null
    title_he: string | null
    title_en: string | null
    excerpt_he: string | null
    excerpt_en: string | null
    content_he: string | null
    content_en: string | null
    cover_image: string | null
    published: boolean | null
    publishedAt: Date | null
    category_id: string | null
    author_name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type BlogPostMaxAggregateOutputType = {
    id: string | null
    slug: string | null
    title_he: string | null
    title_en: string | null
    excerpt_he: string | null
    excerpt_en: string | null
    content_he: string | null
    content_en: string | null
    cover_image: string | null
    published: boolean | null
    publishedAt: Date | null
    category_id: string | null
    author_name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type BlogPostCountAggregateOutputType = {
    id: number
    slug: number
    title_he: number
    title_en: number
    excerpt_he: number
    excerpt_en: number
    content_he: number
    content_en: number
    cover_image: number
    published: number
    publishedAt: number
    category_id: number
    author_name: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type BlogPostMinAggregateInputType = {
    id?: true
    slug?: true
    title_he?: true
    title_en?: true
    excerpt_he?: true
    excerpt_en?: true
    content_he?: true
    content_en?: true
    cover_image?: true
    published?: true
    publishedAt?: true
    category_id?: true
    author_name?: true
    created_at?: true
    updated_at?: true
  }

  export type BlogPostMaxAggregateInputType = {
    id?: true
    slug?: true
    title_he?: true
    title_en?: true
    excerpt_he?: true
    excerpt_en?: true
    content_he?: true
    content_en?: true
    cover_image?: true
    published?: true
    publishedAt?: true
    category_id?: true
    author_name?: true
    created_at?: true
    updated_at?: true
  }

  export type BlogPostCountAggregateInputType = {
    id?: true
    slug?: true
    title_he?: true
    title_en?: true
    excerpt_he?: true
    excerpt_en?: true
    content_he?: true
    content_en?: true
    cover_image?: true
    published?: true
    publishedAt?: true
    category_id?: true
    author_name?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type BlogPostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogPost to aggregate.
     */
    where?: BlogPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPosts to fetch.
     */
    orderBy?: BlogPostOrderByWithRelationInput | BlogPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlogPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BlogPosts
    **/
    _count?: true | BlogPostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogPostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogPostMaxAggregateInputType
  }

  export type GetBlogPostAggregateType<T extends BlogPostAggregateArgs> = {
        [P in keyof T & keyof AggregateBlogPost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlogPost[P]>
      : GetScalarType<T[P], AggregateBlogPost[P]>
  }




  export type BlogPostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogPostWhereInput
    orderBy?: BlogPostOrderByWithAggregationInput | BlogPostOrderByWithAggregationInput[]
    by: BlogPostScalarFieldEnum[] | BlogPostScalarFieldEnum
    having?: BlogPostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogPostCountAggregateInputType | true
    _min?: BlogPostMinAggregateInputType
    _max?: BlogPostMaxAggregateInputType
  }

  export type BlogPostGroupByOutputType = {
    id: string
    slug: string
    title_he: string
    title_en: string
    excerpt_he: string
    excerpt_en: string
    content_he: string
    content_en: string
    cover_image: string | null
    published: boolean
    publishedAt: Date
    category_id: string
    author_name: string
    created_at: Date
    updated_at: Date
    _count: BlogPostCountAggregateOutputType | null
    _min: BlogPostMinAggregateOutputType | null
    _max: BlogPostMaxAggregateOutputType | null
  }

  type GetBlogPostGroupByPayload<T extends BlogPostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogPostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogPostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogPostGroupByOutputType[P]>
            : GetScalarType<T[P], BlogPostGroupByOutputType[P]>
        }
      >
    >


  export type BlogPostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title_he?: boolean
    title_en?: boolean
    excerpt_he?: boolean
    excerpt_en?: boolean
    content_he?: boolean
    content_en?: boolean
    cover_image?: boolean
    published?: boolean
    publishedAt?: boolean
    category_id?: boolean
    author_name?: boolean
    created_at?: boolean
    updated_at?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    faqs?: boolean | BlogPost$faqsArgs<ExtArgs>
    _count?: boolean | BlogPostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogPost"]>

  export type BlogPostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title_he?: boolean
    title_en?: boolean
    excerpt_he?: boolean
    excerpt_en?: boolean
    content_he?: boolean
    content_en?: boolean
    cover_image?: boolean
    published?: boolean
    publishedAt?: boolean
    category_id?: boolean
    author_name?: boolean
    created_at?: boolean
    updated_at?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogPost"]>

  export type BlogPostSelectScalar = {
    id?: boolean
    slug?: boolean
    title_he?: boolean
    title_en?: boolean
    excerpt_he?: boolean
    excerpt_en?: boolean
    content_he?: boolean
    content_en?: boolean
    cover_image?: boolean
    published?: boolean
    publishedAt?: boolean
    category_id?: boolean
    author_name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type BlogPostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    faqs?: boolean | BlogPost$faqsArgs<ExtArgs>
    _count?: boolean | BlogPostCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BlogPostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $BlogPostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BlogPost"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs>
      faqs: Prisma.$FAQPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      slug: string
      title_he: string
      title_en: string
      excerpt_he: string
      excerpt_en: string
      content_he: string
      content_en: string
      cover_image: string | null
      published: boolean
      publishedAt: Date
      category_id: string
      author_name: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["blogPost"]>
    composites: {}
  }

  type BlogPostGetPayload<S extends boolean | null | undefined | BlogPostDefaultArgs> = $Result.GetResult<Prisma.$BlogPostPayload, S>

  type BlogPostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BlogPostFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BlogPostCountAggregateInputType | true
    }

  export interface BlogPostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BlogPost'], meta: { name: 'BlogPost' } }
    /**
     * Find zero or one BlogPost that matches the filter.
     * @param {BlogPostFindUniqueArgs} args - Arguments to find a BlogPost
     * @example
     * // Get one BlogPost
     * const blogPost = await prisma.blogPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlogPostFindUniqueArgs>(args: SelectSubset<T, BlogPostFindUniqueArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one BlogPost that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BlogPostFindUniqueOrThrowArgs} args - Arguments to find a BlogPost
     * @example
     * // Get one BlogPost
     * const blogPost = await prisma.blogPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlogPostFindUniqueOrThrowArgs>(args: SelectSubset<T, BlogPostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first BlogPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostFindFirstArgs} args - Arguments to find a BlogPost
     * @example
     * // Get one BlogPost
     * const blogPost = await prisma.blogPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlogPostFindFirstArgs>(args?: SelectSubset<T, BlogPostFindFirstArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first BlogPost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostFindFirstOrThrowArgs} args - Arguments to find a BlogPost
     * @example
     * // Get one BlogPost
     * const blogPost = await prisma.blogPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlogPostFindFirstOrThrowArgs>(args?: SelectSubset<T, BlogPostFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more BlogPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BlogPosts
     * const blogPosts = await prisma.blogPost.findMany()
     * 
     * // Get first 10 BlogPosts
     * const blogPosts = await prisma.blogPost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blogPostWithIdOnly = await prisma.blogPost.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlogPostFindManyArgs>(args?: SelectSubset<T, BlogPostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a BlogPost.
     * @param {BlogPostCreateArgs} args - Arguments to create a BlogPost.
     * @example
     * // Create one BlogPost
     * const BlogPost = await prisma.blogPost.create({
     *   data: {
     *     // ... data to create a BlogPost
     *   }
     * })
     * 
     */
    create<T extends BlogPostCreateArgs>(args: SelectSubset<T, BlogPostCreateArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many BlogPosts.
     * @param {BlogPostCreateManyArgs} args - Arguments to create many BlogPosts.
     * @example
     * // Create many BlogPosts
     * const blogPost = await prisma.blogPost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlogPostCreateManyArgs>(args?: SelectSubset<T, BlogPostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BlogPosts and returns the data saved in the database.
     * @param {BlogPostCreateManyAndReturnArgs} args - Arguments to create many BlogPosts.
     * @example
     * // Create many BlogPosts
     * const blogPost = await prisma.blogPost.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BlogPosts and only return the `id`
     * const blogPostWithIdOnly = await prisma.blogPost.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlogPostCreateManyAndReturnArgs>(args?: SelectSubset<T, BlogPostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a BlogPost.
     * @param {BlogPostDeleteArgs} args - Arguments to delete one BlogPost.
     * @example
     * // Delete one BlogPost
     * const BlogPost = await prisma.blogPost.delete({
     *   where: {
     *     // ... filter to delete one BlogPost
     *   }
     * })
     * 
     */
    delete<T extends BlogPostDeleteArgs>(args: SelectSubset<T, BlogPostDeleteArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one BlogPost.
     * @param {BlogPostUpdateArgs} args - Arguments to update one BlogPost.
     * @example
     * // Update one BlogPost
     * const blogPost = await prisma.blogPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlogPostUpdateArgs>(args: SelectSubset<T, BlogPostUpdateArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more BlogPosts.
     * @param {BlogPostDeleteManyArgs} args - Arguments to filter BlogPosts to delete.
     * @example
     * // Delete a few BlogPosts
     * const { count } = await prisma.blogPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlogPostDeleteManyArgs>(args?: SelectSubset<T, BlogPostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BlogPosts
     * const blogPost = await prisma.blogPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlogPostUpdateManyArgs>(args: SelectSubset<T, BlogPostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BlogPost.
     * @param {BlogPostUpsertArgs} args - Arguments to update or create a BlogPost.
     * @example
     * // Update or create a BlogPost
     * const blogPost = await prisma.blogPost.upsert({
     *   create: {
     *     // ... data to create a BlogPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BlogPost we want to update
     *   }
     * })
     */
    upsert<T extends BlogPostUpsertArgs>(args: SelectSubset<T, BlogPostUpsertArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of BlogPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostCountArgs} args - Arguments to filter BlogPosts to count.
     * @example
     * // Count the number of BlogPosts
     * const count = await prisma.blogPost.count({
     *   where: {
     *     // ... the filter for the BlogPosts we want to count
     *   }
     * })
    **/
    count<T extends BlogPostCountArgs>(
      args?: Subset<T, BlogPostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogPostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BlogPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BlogPostAggregateArgs>(args: Subset<T, BlogPostAggregateArgs>): Prisma.PrismaPromise<GetBlogPostAggregateType<T>>

    /**
     * Group by BlogPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostGroupByArgs} args - Group by arguments.
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
      T extends BlogPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlogPostGroupByArgs['orderBy'] }
        : { orderBy?: BlogPostGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BlogPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BlogPost model
   */
  readonly fields: BlogPostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BlogPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlogPostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    faqs<T extends BlogPost$faqsArgs<ExtArgs> = {}>(args?: Subset<T, BlogPost$faqsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the BlogPost model
   */ 
  interface BlogPostFieldRefs {
    readonly id: FieldRef<"BlogPost", 'String'>
    readonly slug: FieldRef<"BlogPost", 'String'>
    readonly title_he: FieldRef<"BlogPost", 'String'>
    readonly title_en: FieldRef<"BlogPost", 'String'>
    readonly excerpt_he: FieldRef<"BlogPost", 'String'>
    readonly excerpt_en: FieldRef<"BlogPost", 'String'>
    readonly content_he: FieldRef<"BlogPost", 'String'>
    readonly content_en: FieldRef<"BlogPost", 'String'>
    readonly cover_image: FieldRef<"BlogPost", 'String'>
    readonly published: FieldRef<"BlogPost", 'Boolean'>
    readonly publishedAt: FieldRef<"BlogPost", 'DateTime'>
    readonly category_id: FieldRef<"BlogPost", 'String'>
    readonly author_name: FieldRef<"BlogPost", 'String'>
    readonly created_at: FieldRef<"BlogPost", 'DateTime'>
    readonly updated_at: FieldRef<"BlogPost", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BlogPost findUnique
   */
  export type BlogPostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * Filter, which BlogPost to fetch.
     */
    where: BlogPostWhereUniqueInput
  }

  /**
   * BlogPost findUniqueOrThrow
   */
  export type BlogPostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * Filter, which BlogPost to fetch.
     */
    where: BlogPostWhereUniqueInput
  }

  /**
   * BlogPost findFirst
   */
  export type BlogPostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * Filter, which BlogPost to fetch.
     */
    where?: BlogPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPosts to fetch.
     */
    orderBy?: BlogPostOrderByWithRelationInput | BlogPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogPosts.
     */
    cursor?: BlogPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogPosts.
     */
    distinct?: BlogPostScalarFieldEnum | BlogPostScalarFieldEnum[]
  }

  /**
   * BlogPost findFirstOrThrow
   */
  export type BlogPostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * Filter, which BlogPost to fetch.
     */
    where?: BlogPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPosts to fetch.
     */
    orderBy?: BlogPostOrderByWithRelationInput | BlogPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogPosts.
     */
    cursor?: BlogPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogPosts.
     */
    distinct?: BlogPostScalarFieldEnum | BlogPostScalarFieldEnum[]
  }

  /**
   * BlogPost findMany
   */
  export type BlogPostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * Filter, which BlogPosts to fetch.
     */
    where?: BlogPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPosts to fetch.
     */
    orderBy?: BlogPostOrderByWithRelationInput | BlogPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BlogPosts.
     */
    cursor?: BlogPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPosts.
     */
    skip?: number
    distinct?: BlogPostScalarFieldEnum | BlogPostScalarFieldEnum[]
  }

  /**
   * BlogPost create
   */
  export type BlogPostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * The data needed to create a BlogPost.
     */
    data: XOR<BlogPostCreateInput, BlogPostUncheckedCreateInput>
  }

  /**
   * BlogPost createMany
   */
  export type BlogPostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BlogPosts.
     */
    data: BlogPostCreateManyInput | BlogPostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BlogPost createManyAndReturn
   */
  export type BlogPostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many BlogPosts.
     */
    data: BlogPostCreateManyInput | BlogPostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BlogPost update
   */
  export type BlogPostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * The data needed to update a BlogPost.
     */
    data: XOR<BlogPostUpdateInput, BlogPostUncheckedUpdateInput>
    /**
     * Choose, which BlogPost to update.
     */
    where: BlogPostWhereUniqueInput
  }

  /**
   * BlogPost updateMany
   */
  export type BlogPostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BlogPosts.
     */
    data: XOR<BlogPostUpdateManyMutationInput, BlogPostUncheckedUpdateManyInput>
    /**
     * Filter which BlogPosts to update
     */
    where?: BlogPostWhereInput
  }

  /**
   * BlogPost upsert
   */
  export type BlogPostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * The filter to search for the BlogPost to update in case it exists.
     */
    where: BlogPostWhereUniqueInput
    /**
     * In case the BlogPost found by the `where` argument doesn't exist, create a new BlogPost with this data.
     */
    create: XOR<BlogPostCreateInput, BlogPostUncheckedCreateInput>
    /**
     * In case the BlogPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlogPostUpdateInput, BlogPostUncheckedUpdateInput>
  }

  /**
   * BlogPost delete
   */
  export type BlogPostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * Filter which BlogPost to delete.
     */
    where: BlogPostWhereUniqueInput
  }

  /**
   * BlogPost deleteMany
   */
  export type BlogPostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogPosts to delete
     */
    where?: BlogPostWhereInput
  }

  /**
   * BlogPost.faqs
   */
  export type BlogPost$faqsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FAQInclude<ExtArgs> | null
    where?: FAQWhereInput
    orderBy?: FAQOrderByWithRelationInput | FAQOrderByWithRelationInput[]
    cursor?: FAQWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FAQScalarFieldEnum | FAQScalarFieldEnum[]
  }

  /**
   * BlogPost without action
   */
  export type BlogPostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
  }


  /**
   * Model FAQ
   */

  export type AggregateFAQ = {
    _count: FAQCountAggregateOutputType | null
    _min: FAQMinAggregateOutputType | null
    _max: FAQMaxAggregateOutputType | null
  }

  export type FAQMinAggregateOutputType = {
    id: string | null
    question_he: string | null
    answer_he: string | null
    question_en: string | null
    answer_en: string | null
    post_id: string | null
  }

  export type FAQMaxAggregateOutputType = {
    id: string | null
    question_he: string | null
    answer_he: string | null
    question_en: string | null
    answer_en: string | null
    post_id: string | null
  }

  export type FAQCountAggregateOutputType = {
    id: number
    question_he: number
    answer_he: number
    question_en: number
    answer_en: number
    post_id: number
    _all: number
  }


  export type FAQMinAggregateInputType = {
    id?: true
    question_he?: true
    answer_he?: true
    question_en?: true
    answer_en?: true
    post_id?: true
  }

  export type FAQMaxAggregateInputType = {
    id?: true
    question_he?: true
    answer_he?: true
    question_en?: true
    answer_en?: true
    post_id?: true
  }

  export type FAQCountAggregateInputType = {
    id?: true
    question_he?: true
    answer_he?: true
    question_en?: true
    answer_en?: true
    post_id?: true
    _all?: true
  }

  export type FAQAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FAQ to aggregate.
     */
    where?: FAQWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FAQS to fetch.
     */
    orderBy?: FAQOrderByWithRelationInput | FAQOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FAQWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FAQS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FAQS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FAQS
    **/
    _count?: true | FAQCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FAQMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FAQMaxAggregateInputType
  }

  export type GetFAQAggregateType<T extends FAQAggregateArgs> = {
        [P in keyof T & keyof AggregateFAQ]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFAQ[P]>
      : GetScalarType<T[P], AggregateFAQ[P]>
  }




  export type FAQGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FAQWhereInput
    orderBy?: FAQOrderByWithAggregationInput | FAQOrderByWithAggregationInput[]
    by: FAQScalarFieldEnum[] | FAQScalarFieldEnum
    having?: FAQScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FAQCountAggregateInputType | true
    _min?: FAQMinAggregateInputType
    _max?: FAQMaxAggregateInputType
  }

  export type FAQGroupByOutputType = {
    id: string
    question_he: string
    answer_he: string
    question_en: string
    answer_en: string
    post_id: string
    _count: FAQCountAggregateOutputType | null
    _min: FAQMinAggregateOutputType | null
    _max: FAQMaxAggregateOutputType | null
  }

  type GetFAQGroupByPayload<T extends FAQGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FAQGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FAQGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FAQGroupByOutputType[P]>
            : GetScalarType<T[P], FAQGroupByOutputType[P]>
        }
      >
    >


  export type FAQSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question_he?: boolean
    answer_he?: boolean
    question_en?: boolean
    answer_en?: boolean
    post_id?: boolean
    post?: boolean | BlogPostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fAQ"]>

  export type FAQSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question_he?: boolean
    answer_he?: boolean
    question_en?: boolean
    answer_en?: boolean
    post_id?: boolean
    post?: boolean | BlogPostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fAQ"]>

  export type FAQSelectScalar = {
    id?: boolean
    question_he?: boolean
    answer_he?: boolean
    question_en?: boolean
    answer_en?: boolean
    post_id?: boolean
  }

  export type FAQInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | BlogPostDefaultArgs<ExtArgs>
  }
  export type FAQIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | BlogPostDefaultArgs<ExtArgs>
  }

  export type $FAQPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FAQ"
    objects: {
      post: Prisma.$BlogPostPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      question_he: string
      answer_he: string
      question_en: string
      answer_en: string
      post_id: string
    }, ExtArgs["result"]["fAQ"]>
    composites: {}
  }

  type FAQGetPayload<S extends boolean | null | undefined | FAQDefaultArgs> = $Result.GetResult<Prisma.$FAQPayload, S>

  type FAQCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FAQFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FAQCountAggregateInputType | true
    }

  export interface FAQDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FAQ'], meta: { name: 'FAQ' } }
    /**
     * Find zero or one FAQ that matches the filter.
     * @param {FAQFindUniqueArgs} args - Arguments to find a FAQ
     * @example
     * // Get one FAQ
     * const fAQ = await prisma.fAQ.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FAQFindUniqueArgs>(args: SelectSubset<T, FAQFindUniqueArgs<ExtArgs>>): Prisma__FAQClient<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one FAQ that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FAQFindUniqueOrThrowArgs} args - Arguments to find a FAQ
     * @example
     * // Get one FAQ
     * const fAQ = await prisma.fAQ.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FAQFindUniqueOrThrowArgs>(args: SelectSubset<T, FAQFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FAQClient<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first FAQ that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FAQFindFirstArgs} args - Arguments to find a FAQ
     * @example
     * // Get one FAQ
     * const fAQ = await prisma.fAQ.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FAQFindFirstArgs>(args?: SelectSubset<T, FAQFindFirstArgs<ExtArgs>>): Prisma__FAQClient<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first FAQ that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FAQFindFirstOrThrowArgs} args - Arguments to find a FAQ
     * @example
     * // Get one FAQ
     * const fAQ = await prisma.fAQ.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FAQFindFirstOrThrowArgs>(args?: SelectSubset<T, FAQFindFirstOrThrowArgs<ExtArgs>>): Prisma__FAQClient<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more FAQS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FAQFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FAQS
     * const fAQS = await prisma.fAQ.findMany()
     * 
     * // Get first 10 FAQS
     * const fAQS = await prisma.fAQ.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fAQWithIdOnly = await prisma.fAQ.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FAQFindManyArgs>(args?: SelectSubset<T, FAQFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a FAQ.
     * @param {FAQCreateArgs} args - Arguments to create a FAQ.
     * @example
     * // Create one FAQ
     * const FAQ = await prisma.fAQ.create({
     *   data: {
     *     // ... data to create a FAQ
     *   }
     * })
     * 
     */
    create<T extends FAQCreateArgs>(args: SelectSubset<T, FAQCreateArgs<ExtArgs>>): Prisma__FAQClient<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many FAQS.
     * @param {FAQCreateManyArgs} args - Arguments to create many FAQS.
     * @example
     * // Create many FAQS
     * const fAQ = await prisma.fAQ.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FAQCreateManyArgs>(args?: SelectSubset<T, FAQCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FAQS and returns the data saved in the database.
     * @param {FAQCreateManyAndReturnArgs} args - Arguments to create many FAQS.
     * @example
     * // Create many FAQS
     * const fAQ = await prisma.fAQ.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FAQS and only return the `id`
     * const fAQWithIdOnly = await prisma.fAQ.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FAQCreateManyAndReturnArgs>(args?: SelectSubset<T, FAQCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a FAQ.
     * @param {FAQDeleteArgs} args - Arguments to delete one FAQ.
     * @example
     * // Delete one FAQ
     * const FAQ = await prisma.fAQ.delete({
     *   where: {
     *     // ... filter to delete one FAQ
     *   }
     * })
     * 
     */
    delete<T extends FAQDeleteArgs>(args: SelectSubset<T, FAQDeleteArgs<ExtArgs>>): Prisma__FAQClient<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one FAQ.
     * @param {FAQUpdateArgs} args - Arguments to update one FAQ.
     * @example
     * // Update one FAQ
     * const fAQ = await prisma.fAQ.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FAQUpdateArgs>(args: SelectSubset<T, FAQUpdateArgs<ExtArgs>>): Prisma__FAQClient<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more FAQS.
     * @param {FAQDeleteManyArgs} args - Arguments to filter FAQS to delete.
     * @example
     * // Delete a few FAQS
     * const { count } = await prisma.fAQ.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FAQDeleteManyArgs>(args?: SelectSubset<T, FAQDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FAQS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FAQUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FAQS
     * const fAQ = await prisma.fAQ.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FAQUpdateManyArgs>(args: SelectSubset<T, FAQUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FAQ.
     * @param {FAQUpsertArgs} args - Arguments to update or create a FAQ.
     * @example
     * // Update or create a FAQ
     * const fAQ = await prisma.fAQ.upsert({
     *   create: {
     *     // ... data to create a FAQ
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FAQ we want to update
     *   }
     * })
     */
    upsert<T extends FAQUpsertArgs>(args: SelectSubset<T, FAQUpsertArgs<ExtArgs>>): Prisma__FAQClient<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of FAQS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FAQCountArgs} args - Arguments to filter FAQS to count.
     * @example
     * // Count the number of FAQS
     * const count = await prisma.fAQ.count({
     *   where: {
     *     // ... the filter for the FAQS we want to count
     *   }
     * })
    **/
    count<T extends FAQCountArgs>(
      args?: Subset<T, FAQCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FAQCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FAQ.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FAQAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FAQAggregateArgs>(args: Subset<T, FAQAggregateArgs>): Prisma.PrismaPromise<GetFAQAggregateType<T>>

    /**
     * Group by FAQ.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FAQGroupByArgs} args - Group by arguments.
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
      T extends FAQGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FAQGroupByArgs['orderBy'] }
        : { orderBy?: FAQGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FAQGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFAQGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FAQ model
   */
  readonly fields: FAQFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FAQ.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FAQClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends BlogPostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BlogPostDefaultArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the FAQ model
   */ 
  interface FAQFieldRefs {
    readonly id: FieldRef<"FAQ", 'String'>
    readonly question_he: FieldRef<"FAQ", 'String'>
    readonly answer_he: FieldRef<"FAQ", 'String'>
    readonly question_en: FieldRef<"FAQ", 'String'>
    readonly answer_en: FieldRef<"FAQ", 'String'>
    readonly post_id: FieldRef<"FAQ", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FAQ findUnique
   */
  export type FAQFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FAQInclude<ExtArgs> | null
    /**
     * Filter, which FAQ to fetch.
     */
    where: FAQWhereUniqueInput
  }

  /**
   * FAQ findUniqueOrThrow
   */
  export type FAQFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FAQInclude<ExtArgs> | null
    /**
     * Filter, which FAQ to fetch.
     */
    where: FAQWhereUniqueInput
  }

  /**
   * FAQ findFirst
   */
  export type FAQFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FAQInclude<ExtArgs> | null
    /**
     * Filter, which FAQ to fetch.
     */
    where?: FAQWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FAQS to fetch.
     */
    orderBy?: FAQOrderByWithRelationInput | FAQOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FAQS.
     */
    cursor?: FAQWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FAQS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FAQS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FAQS.
     */
    distinct?: FAQScalarFieldEnum | FAQScalarFieldEnum[]
  }

  /**
   * FAQ findFirstOrThrow
   */
  export type FAQFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FAQInclude<ExtArgs> | null
    /**
     * Filter, which FAQ to fetch.
     */
    where?: FAQWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FAQS to fetch.
     */
    orderBy?: FAQOrderByWithRelationInput | FAQOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FAQS.
     */
    cursor?: FAQWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FAQS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FAQS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FAQS.
     */
    distinct?: FAQScalarFieldEnum | FAQScalarFieldEnum[]
  }

  /**
   * FAQ findMany
   */
  export type FAQFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FAQInclude<ExtArgs> | null
    /**
     * Filter, which FAQS to fetch.
     */
    where?: FAQWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FAQS to fetch.
     */
    orderBy?: FAQOrderByWithRelationInput | FAQOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FAQS.
     */
    cursor?: FAQWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FAQS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FAQS.
     */
    skip?: number
    distinct?: FAQScalarFieldEnum | FAQScalarFieldEnum[]
  }

  /**
   * FAQ create
   */
  export type FAQCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FAQInclude<ExtArgs> | null
    /**
     * The data needed to create a FAQ.
     */
    data: XOR<FAQCreateInput, FAQUncheckedCreateInput>
  }

  /**
   * FAQ createMany
   */
  export type FAQCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FAQS.
     */
    data: FAQCreateManyInput | FAQCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FAQ createManyAndReturn
   */
  export type FAQCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many FAQS.
     */
    data: FAQCreateManyInput | FAQCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FAQIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FAQ update
   */
  export type FAQUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FAQInclude<ExtArgs> | null
    /**
     * The data needed to update a FAQ.
     */
    data: XOR<FAQUpdateInput, FAQUncheckedUpdateInput>
    /**
     * Choose, which FAQ to update.
     */
    where: FAQWhereUniqueInput
  }

  /**
   * FAQ updateMany
   */
  export type FAQUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FAQS.
     */
    data: XOR<FAQUpdateManyMutationInput, FAQUncheckedUpdateManyInput>
    /**
     * Filter which FAQS to update
     */
    where?: FAQWhereInput
  }

  /**
   * FAQ upsert
   */
  export type FAQUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FAQInclude<ExtArgs> | null
    /**
     * The filter to search for the FAQ to update in case it exists.
     */
    where: FAQWhereUniqueInput
    /**
     * In case the FAQ found by the `where` argument doesn't exist, create a new FAQ with this data.
     */
    create: XOR<FAQCreateInput, FAQUncheckedCreateInput>
    /**
     * In case the FAQ was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FAQUpdateInput, FAQUncheckedUpdateInput>
  }

  /**
   * FAQ delete
   */
  export type FAQDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FAQInclude<ExtArgs> | null
    /**
     * Filter which FAQ to delete.
     */
    where: FAQWhereUniqueInput
  }

  /**
   * FAQ deleteMany
   */
  export type FAQDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FAQS to delete
     */
    where?: FAQWhereInput
  }

  /**
   * FAQ without action
   */
  export type FAQDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FAQInclude<ExtArgs> | null
  }


  /**
   * Model Specialization
   */

  export type AggregateSpecialization = {
    _count: SpecializationCountAggregateOutputType | null
    _min: SpecializationMinAggregateOutputType | null
    _max: SpecializationMaxAggregateOutputType | null
  }

  export type SpecializationMinAggregateOutputType = {
    id: string | null
    slug: string | null
    name_he: string | null
    name_en: string | null
    description_he: string | null
    description_en: string | null
    metaTitle_he: string | null
    metaTitle_en: string | null
    metaDescription_he: string | null
    metaDescription_en: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SpecializationMaxAggregateOutputType = {
    id: string | null
    slug: string | null
    name_he: string | null
    name_en: string | null
    description_he: string | null
    description_en: string | null
    metaTitle_he: string | null
    metaTitle_en: string | null
    metaDescription_he: string | null
    metaDescription_en: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SpecializationCountAggregateOutputType = {
    id: number
    slug: number
    name_he: number
    name_en: number
    description_he: number
    description_en: number
    metaTitle_he: number
    metaTitle_en: number
    metaDescription_he: number
    metaDescription_en: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type SpecializationMinAggregateInputType = {
    id?: true
    slug?: true
    name_he?: true
    name_en?: true
    description_he?: true
    description_en?: true
    metaTitle_he?: true
    metaTitle_en?: true
    metaDescription_he?: true
    metaDescription_en?: true
    created_at?: true
    updated_at?: true
  }

  export type SpecializationMaxAggregateInputType = {
    id?: true
    slug?: true
    name_he?: true
    name_en?: true
    description_he?: true
    description_en?: true
    metaTitle_he?: true
    metaTitle_en?: true
    metaDescription_he?: true
    metaDescription_en?: true
    created_at?: true
    updated_at?: true
  }

  export type SpecializationCountAggregateInputType = {
    id?: true
    slug?: true
    name_he?: true
    name_en?: true
    description_he?: true
    description_en?: true
    metaTitle_he?: true
    metaTitle_en?: true
    metaDescription_he?: true
    metaDescription_en?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type SpecializationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Specialization to aggregate.
     */
    where?: SpecializationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Specializations to fetch.
     */
    orderBy?: SpecializationOrderByWithRelationInput | SpecializationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SpecializationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Specializations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Specializations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Specializations
    **/
    _count?: true | SpecializationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SpecializationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SpecializationMaxAggregateInputType
  }

  export type GetSpecializationAggregateType<T extends SpecializationAggregateArgs> = {
        [P in keyof T & keyof AggregateSpecialization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpecialization[P]>
      : GetScalarType<T[P], AggregateSpecialization[P]>
  }




  export type SpecializationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpecializationWhereInput
    orderBy?: SpecializationOrderByWithAggregationInput | SpecializationOrderByWithAggregationInput[]
    by: SpecializationScalarFieldEnum[] | SpecializationScalarFieldEnum
    having?: SpecializationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SpecializationCountAggregateInputType | true
    _min?: SpecializationMinAggregateInputType
    _max?: SpecializationMaxAggregateInputType
  }

  export type SpecializationGroupByOutputType = {
    id: string
    slug: string
    name_he: string
    name_en: string
    description_he: string | null
    description_en: string | null
    metaTitle_he: string | null
    metaTitle_en: string | null
    metaDescription_he: string | null
    metaDescription_en: string | null
    created_at: Date
    updated_at: Date
    _count: SpecializationCountAggregateOutputType | null
    _min: SpecializationMinAggregateOutputType | null
    _max: SpecializationMaxAggregateOutputType | null
  }

  type GetSpecializationGroupByPayload<T extends SpecializationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SpecializationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SpecializationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SpecializationGroupByOutputType[P]>
            : GetScalarType<T[P], SpecializationGroupByOutputType[P]>
        }
      >
    >


  export type SpecializationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    name_he?: boolean
    name_en?: boolean
    description_he?: boolean
    description_en?: boolean
    metaTitle_he?: boolean
    metaTitle_en?: boolean
    metaDescription_he?: boolean
    metaDescription_en?: boolean
    created_at?: boolean
    updated_at?: boolean
    experts?: boolean | Specialization$expertsArgs<ExtArgs>
    tasks?: boolean | Specialization$tasksArgs<ExtArgs>
    _count?: boolean | SpecializationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["specialization"]>

  export type SpecializationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    name_he?: boolean
    name_en?: boolean
    description_he?: boolean
    description_en?: boolean
    metaTitle_he?: boolean
    metaTitle_en?: boolean
    metaDescription_he?: boolean
    metaDescription_en?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["specialization"]>

  export type SpecializationSelectScalar = {
    id?: boolean
    slug?: boolean
    name_he?: boolean
    name_en?: boolean
    description_he?: boolean
    description_en?: boolean
    metaTitle_he?: boolean
    metaTitle_en?: boolean
    metaDescription_he?: boolean
    metaDescription_en?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type SpecializationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    experts?: boolean | Specialization$expertsArgs<ExtArgs>
    tasks?: boolean | Specialization$tasksArgs<ExtArgs>
    _count?: boolean | SpecializationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SpecializationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SpecializationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Specialization"
    objects: {
      experts: Prisma.$ExpertPayload<ExtArgs>[]
      tasks: Prisma.$TaskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      slug: string
      name_he: string
      name_en: string
      description_he: string | null
      description_en: string | null
      metaTitle_he: string | null
      metaTitle_en: string | null
      metaDescription_he: string | null
      metaDescription_en: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["specialization"]>
    composites: {}
  }

  type SpecializationGetPayload<S extends boolean | null | undefined | SpecializationDefaultArgs> = $Result.GetResult<Prisma.$SpecializationPayload, S>

  type SpecializationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SpecializationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SpecializationCountAggregateInputType | true
    }

  export interface SpecializationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Specialization'], meta: { name: 'Specialization' } }
    /**
     * Find zero or one Specialization that matches the filter.
     * @param {SpecializationFindUniqueArgs} args - Arguments to find a Specialization
     * @example
     * // Get one Specialization
     * const specialization = await prisma.specialization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SpecializationFindUniqueArgs>(args: SelectSubset<T, SpecializationFindUniqueArgs<ExtArgs>>): Prisma__SpecializationClient<$Result.GetResult<Prisma.$SpecializationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Specialization that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SpecializationFindUniqueOrThrowArgs} args - Arguments to find a Specialization
     * @example
     * // Get one Specialization
     * const specialization = await prisma.specialization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SpecializationFindUniqueOrThrowArgs>(args: SelectSubset<T, SpecializationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SpecializationClient<$Result.GetResult<Prisma.$SpecializationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Specialization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecializationFindFirstArgs} args - Arguments to find a Specialization
     * @example
     * // Get one Specialization
     * const specialization = await prisma.specialization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SpecializationFindFirstArgs>(args?: SelectSubset<T, SpecializationFindFirstArgs<ExtArgs>>): Prisma__SpecializationClient<$Result.GetResult<Prisma.$SpecializationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Specialization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecializationFindFirstOrThrowArgs} args - Arguments to find a Specialization
     * @example
     * // Get one Specialization
     * const specialization = await prisma.specialization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SpecializationFindFirstOrThrowArgs>(args?: SelectSubset<T, SpecializationFindFirstOrThrowArgs<ExtArgs>>): Prisma__SpecializationClient<$Result.GetResult<Prisma.$SpecializationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Specializations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecializationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Specializations
     * const specializations = await prisma.specialization.findMany()
     * 
     * // Get first 10 Specializations
     * const specializations = await prisma.specialization.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const specializationWithIdOnly = await prisma.specialization.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SpecializationFindManyArgs>(args?: SelectSubset<T, SpecializationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecializationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Specialization.
     * @param {SpecializationCreateArgs} args - Arguments to create a Specialization.
     * @example
     * // Create one Specialization
     * const Specialization = await prisma.specialization.create({
     *   data: {
     *     // ... data to create a Specialization
     *   }
     * })
     * 
     */
    create<T extends SpecializationCreateArgs>(args: SelectSubset<T, SpecializationCreateArgs<ExtArgs>>): Prisma__SpecializationClient<$Result.GetResult<Prisma.$SpecializationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Specializations.
     * @param {SpecializationCreateManyArgs} args - Arguments to create many Specializations.
     * @example
     * // Create many Specializations
     * const specialization = await prisma.specialization.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SpecializationCreateManyArgs>(args?: SelectSubset<T, SpecializationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Specializations and returns the data saved in the database.
     * @param {SpecializationCreateManyAndReturnArgs} args - Arguments to create many Specializations.
     * @example
     * // Create many Specializations
     * const specialization = await prisma.specialization.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Specializations and only return the `id`
     * const specializationWithIdOnly = await prisma.specialization.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SpecializationCreateManyAndReturnArgs>(args?: SelectSubset<T, SpecializationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecializationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Specialization.
     * @param {SpecializationDeleteArgs} args - Arguments to delete one Specialization.
     * @example
     * // Delete one Specialization
     * const Specialization = await prisma.specialization.delete({
     *   where: {
     *     // ... filter to delete one Specialization
     *   }
     * })
     * 
     */
    delete<T extends SpecializationDeleteArgs>(args: SelectSubset<T, SpecializationDeleteArgs<ExtArgs>>): Prisma__SpecializationClient<$Result.GetResult<Prisma.$SpecializationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Specialization.
     * @param {SpecializationUpdateArgs} args - Arguments to update one Specialization.
     * @example
     * // Update one Specialization
     * const specialization = await prisma.specialization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SpecializationUpdateArgs>(args: SelectSubset<T, SpecializationUpdateArgs<ExtArgs>>): Prisma__SpecializationClient<$Result.GetResult<Prisma.$SpecializationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Specializations.
     * @param {SpecializationDeleteManyArgs} args - Arguments to filter Specializations to delete.
     * @example
     * // Delete a few Specializations
     * const { count } = await prisma.specialization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SpecializationDeleteManyArgs>(args?: SelectSubset<T, SpecializationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Specializations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecializationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Specializations
     * const specialization = await prisma.specialization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SpecializationUpdateManyArgs>(args: SelectSubset<T, SpecializationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Specialization.
     * @param {SpecializationUpsertArgs} args - Arguments to update or create a Specialization.
     * @example
     * // Update or create a Specialization
     * const specialization = await prisma.specialization.upsert({
     *   create: {
     *     // ... data to create a Specialization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Specialization we want to update
     *   }
     * })
     */
    upsert<T extends SpecializationUpsertArgs>(args: SelectSubset<T, SpecializationUpsertArgs<ExtArgs>>): Prisma__SpecializationClient<$Result.GetResult<Prisma.$SpecializationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Specializations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecializationCountArgs} args - Arguments to filter Specializations to count.
     * @example
     * // Count the number of Specializations
     * const count = await prisma.specialization.count({
     *   where: {
     *     // ... the filter for the Specializations we want to count
     *   }
     * })
    **/
    count<T extends SpecializationCountArgs>(
      args?: Subset<T, SpecializationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SpecializationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Specialization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecializationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SpecializationAggregateArgs>(args: Subset<T, SpecializationAggregateArgs>): Prisma.PrismaPromise<GetSpecializationAggregateType<T>>

    /**
     * Group by Specialization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecializationGroupByArgs} args - Group by arguments.
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
      T extends SpecializationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SpecializationGroupByArgs['orderBy'] }
        : { orderBy?: SpecializationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SpecializationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpecializationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Specialization model
   */
  readonly fields: SpecializationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Specialization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SpecializationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    experts<T extends Specialization$expertsArgs<ExtArgs> = {}>(args?: Subset<T, Specialization$expertsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpertPayload<ExtArgs>, T, "findMany"> | Null>
    tasks<T extends Specialization$tasksArgs<ExtArgs> = {}>(args?: Subset<T, Specialization$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Specialization model
   */ 
  interface SpecializationFieldRefs {
    readonly id: FieldRef<"Specialization", 'String'>
    readonly slug: FieldRef<"Specialization", 'String'>
    readonly name_he: FieldRef<"Specialization", 'String'>
    readonly name_en: FieldRef<"Specialization", 'String'>
    readonly description_he: FieldRef<"Specialization", 'String'>
    readonly description_en: FieldRef<"Specialization", 'String'>
    readonly metaTitle_he: FieldRef<"Specialization", 'String'>
    readonly metaTitle_en: FieldRef<"Specialization", 'String'>
    readonly metaDescription_he: FieldRef<"Specialization", 'String'>
    readonly metaDescription_en: FieldRef<"Specialization", 'String'>
    readonly created_at: FieldRef<"Specialization", 'DateTime'>
    readonly updated_at: FieldRef<"Specialization", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Specialization findUnique
   */
  export type SpecializationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialization
     */
    select?: SpecializationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecializationInclude<ExtArgs> | null
    /**
     * Filter, which Specialization to fetch.
     */
    where: SpecializationWhereUniqueInput
  }

  /**
   * Specialization findUniqueOrThrow
   */
  export type SpecializationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialization
     */
    select?: SpecializationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecializationInclude<ExtArgs> | null
    /**
     * Filter, which Specialization to fetch.
     */
    where: SpecializationWhereUniqueInput
  }

  /**
   * Specialization findFirst
   */
  export type SpecializationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialization
     */
    select?: SpecializationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecializationInclude<ExtArgs> | null
    /**
     * Filter, which Specialization to fetch.
     */
    where?: SpecializationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Specializations to fetch.
     */
    orderBy?: SpecializationOrderByWithRelationInput | SpecializationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Specializations.
     */
    cursor?: SpecializationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Specializations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Specializations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Specializations.
     */
    distinct?: SpecializationScalarFieldEnum | SpecializationScalarFieldEnum[]
  }

  /**
   * Specialization findFirstOrThrow
   */
  export type SpecializationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialization
     */
    select?: SpecializationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecializationInclude<ExtArgs> | null
    /**
     * Filter, which Specialization to fetch.
     */
    where?: SpecializationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Specializations to fetch.
     */
    orderBy?: SpecializationOrderByWithRelationInput | SpecializationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Specializations.
     */
    cursor?: SpecializationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Specializations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Specializations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Specializations.
     */
    distinct?: SpecializationScalarFieldEnum | SpecializationScalarFieldEnum[]
  }

  /**
   * Specialization findMany
   */
  export type SpecializationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialization
     */
    select?: SpecializationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecializationInclude<ExtArgs> | null
    /**
     * Filter, which Specializations to fetch.
     */
    where?: SpecializationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Specializations to fetch.
     */
    orderBy?: SpecializationOrderByWithRelationInput | SpecializationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Specializations.
     */
    cursor?: SpecializationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Specializations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Specializations.
     */
    skip?: number
    distinct?: SpecializationScalarFieldEnum | SpecializationScalarFieldEnum[]
  }

  /**
   * Specialization create
   */
  export type SpecializationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialization
     */
    select?: SpecializationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecializationInclude<ExtArgs> | null
    /**
     * The data needed to create a Specialization.
     */
    data: XOR<SpecializationCreateInput, SpecializationUncheckedCreateInput>
  }

  /**
   * Specialization createMany
   */
  export type SpecializationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Specializations.
     */
    data: SpecializationCreateManyInput | SpecializationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Specialization createManyAndReturn
   */
  export type SpecializationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialization
     */
    select?: SpecializationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Specializations.
     */
    data: SpecializationCreateManyInput | SpecializationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Specialization update
   */
  export type SpecializationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialization
     */
    select?: SpecializationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecializationInclude<ExtArgs> | null
    /**
     * The data needed to update a Specialization.
     */
    data: XOR<SpecializationUpdateInput, SpecializationUncheckedUpdateInput>
    /**
     * Choose, which Specialization to update.
     */
    where: SpecializationWhereUniqueInput
  }

  /**
   * Specialization updateMany
   */
  export type SpecializationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Specializations.
     */
    data: XOR<SpecializationUpdateManyMutationInput, SpecializationUncheckedUpdateManyInput>
    /**
     * Filter which Specializations to update
     */
    where?: SpecializationWhereInput
  }

  /**
   * Specialization upsert
   */
  export type SpecializationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialization
     */
    select?: SpecializationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecializationInclude<ExtArgs> | null
    /**
     * The filter to search for the Specialization to update in case it exists.
     */
    where: SpecializationWhereUniqueInput
    /**
     * In case the Specialization found by the `where` argument doesn't exist, create a new Specialization with this data.
     */
    create: XOR<SpecializationCreateInput, SpecializationUncheckedCreateInput>
    /**
     * In case the Specialization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SpecializationUpdateInput, SpecializationUncheckedUpdateInput>
  }

  /**
   * Specialization delete
   */
  export type SpecializationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialization
     */
    select?: SpecializationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecializationInclude<ExtArgs> | null
    /**
     * Filter which Specialization to delete.
     */
    where: SpecializationWhereUniqueInput
  }

  /**
   * Specialization deleteMany
   */
  export type SpecializationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Specializations to delete
     */
    where?: SpecializationWhereInput
  }

  /**
   * Specialization.experts
   */
  export type Specialization$expertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expert
     */
    select?: ExpertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertInclude<ExtArgs> | null
    where?: ExpertWhereInput
    orderBy?: ExpertOrderByWithRelationInput | ExpertOrderByWithRelationInput[]
    cursor?: ExpertWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpertScalarFieldEnum | ExpertScalarFieldEnum[]
  }

  /**
   * Specialization.tasks
   */
  export type Specialization$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Specialization without action
   */
  export type SpecializationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialization
     */
    select?: SpecializationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecializationInclude<ExtArgs> | null
  }


  /**
   * Model Task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskMinAggregateOutputType = {
    id: string | null
    slug: string | null
    title: string | null
    description: string | null
    budget_range: string | null
    status: string | null
    approved: boolean | null
    client_name: string | null
    client_email: string | null
    client_company: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TaskMaxAggregateOutputType = {
    id: string | null
    slug: string | null
    title: string | null
    description: string | null
    budget_range: string | null
    status: string | null
    approved: boolean | null
    client_name: string | null
    client_email: string | null
    client_company: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TaskCountAggregateOutputType = {
    id: number
    slug: number
    title: number
    description: number
    budget_range: number
    status: number
    approved: number
    client_name: number
    client_email: number
    client_company: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type TaskMinAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    description?: true
    budget_range?: true
    status?: true
    approved?: true
    client_name?: true
    client_email?: true
    client_company?: true
    created_at?: true
    updated_at?: true
  }

  export type TaskMaxAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    description?: true
    budget_range?: true
    status?: true
    approved?: true
    client_name?: true
    client_email?: true
    client_company?: true
    created_at?: true
    updated_at?: true
  }

  export type TaskCountAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    description?: true
    budget_range?: true
    status?: true
    approved?: true
    client_name?: true
    client_email?: true
    client_company?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Task to aggregate.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type TaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithAggregationInput | TaskOrderByWithAggregationInput[]
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum
    having?: TaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }

  export type TaskGroupByOutputType = {
    id: string
    slug: string
    title: string
    description: string
    budget_range: string | null
    status: string
    approved: boolean
    client_name: string | null
    client_email: string | null
    client_company: string | null
    created_at: Date
    updated_at: Date
    _count: TaskCountAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type TaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    description?: boolean
    budget_range?: boolean
    status?: boolean
    approved?: boolean
    client_name?: boolean
    client_email?: boolean
    client_company?: boolean
    created_at?: boolean
    updated_at?: boolean
    specializations?: boolean | Task$specializationsArgs<ExtArgs>
    bids?: boolean | Task$bidsArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    description?: boolean
    budget_range?: boolean
    status?: boolean
    approved?: boolean
    client_name?: boolean
    client_email?: boolean
    client_company?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["task"]>

  export type TaskSelectScalar = {
    id?: boolean
    slug?: boolean
    title?: boolean
    description?: boolean
    budget_range?: boolean
    status?: boolean
    approved?: boolean
    client_name?: boolean
    client_email?: boolean
    client_company?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type TaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    specializations?: boolean | Task$specializationsArgs<ExtArgs>
    bids?: boolean | Task$bidsArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Task"
    objects: {
      specializations: Prisma.$SpecializationPayload<ExtArgs>[]
      bids: Prisma.$BidPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      slug: string
      title: string
      description: string
      budget_range: string | null
      status: string
      approved: boolean
      client_name: string | null
      client_email: string | null
      client_company: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["task"]>
    composites: {}
  }

  type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> = $Result.GetResult<Prisma.$TaskPayload, S>

  type TaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TaskFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TaskCountAggregateInputType | true
    }

  export interface TaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Task'], meta: { name: 'Task' } }
    /**
     * Find zero or one Task that matches the filter.
     * @param {TaskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskFindUniqueArgs>(args: SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Task that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TaskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskFindFirstArgs>(args?: SelectSubset<T, TaskFindFirstArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskWithIdOnly = await prisma.task.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskFindManyArgs>(args?: SelectSubset<T, TaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Task.
     * @param {TaskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
     */
    create<T extends TaskCreateArgs>(args: SelectSubset<T, TaskCreateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tasks.
     * @param {TaskCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskCreateManyArgs>(args?: SelectSubset<T, TaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tasks and returns the data saved in the database.
     * @param {TaskCreateManyAndReturnArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Task.
     * @param {TaskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
     */
    delete<T extends TaskDeleteArgs>(args: SelectSubset<T, TaskDeleteArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Task.
     * @param {TaskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskUpdateArgs>(args: SelectSubset<T, TaskUpdateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tasks.
     * @param {TaskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskDeleteManyArgs>(args?: SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskUpdateManyArgs>(args: SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Task.
     * @param {TaskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
     */
    upsert<T extends TaskUpsertArgs>(args: SelectSubset<T, TaskUpsertArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends TaskCountArgs>(
      args?: Subset<T, TaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskGroupByArgs} args - Group by arguments.
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
      T extends TaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskGroupByArgs['orderBy'] }
        : { orderBy?: TaskGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Task model
   */
  readonly fields: TaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    specializations<T extends Task$specializationsArgs<ExtArgs> = {}>(args?: Subset<T, Task$specializationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecializationPayload<ExtArgs>, T, "findMany"> | Null>
    bids<T extends Task$bidsArgs<ExtArgs> = {}>(args?: Subset<T, Task$bidsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Task model
   */ 
  interface TaskFieldRefs {
    readonly id: FieldRef<"Task", 'String'>
    readonly slug: FieldRef<"Task", 'String'>
    readonly title: FieldRef<"Task", 'String'>
    readonly description: FieldRef<"Task", 'String'>
    readonly budget_range: FieldRef<"Task", 'String'>
    readonly status: FieldRef<"Task", 'String'>
    readonly approved: FieldRef<"Task", 'Boolean'>
    readonly client_name: FieldRef<"Task", 'String'>
    readonly client_email: FieldRef<"Task", 'String'>
    readonly client_company: FieldRef<"Task", 'String'>
    readonly created_at: FieldRef<"Task", 'DateTime'>
    readonly updated_at: FieldRef<"Task", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Task findUnique
   */
  export type TaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findUniqueOrThrow
   */
  export type TaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findFirst
   */
  export type TaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findFirstOrThrow
   */
  export type TaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findMany
   */
  export type TaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task create
   */
  export type TaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to create a Task.
     */
    data: XOR<TaskCreateInput, TaskUncheckedCreateInput>
  }

  /**
   * Task createMany
   */
  export type TaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Task createManyAndReturn
   */
  export type TaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Task update
   */
  export type TaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to update a Task.
     */
    data: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
    /**
     * Choose, which Task to update.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task updateMany
   */
  export type TaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
  }

  /**
   * Task upsert
   */
  export type TaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The filter to search for the Task to update in case it exists.
     */
    where: TaskWhereUniqueInput
    /**
     * In case the Task found by the `where` argument doesn't exist, create a new Task with this data.
     */
    create: XOR<TaskCreateInput, TaskUncheckedCreateInput>
    /**
     * In case the Task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
  }

  /**
   * Task delete
   */
  export type TaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter which Task to delete.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task deleteMany
   */
  export type TaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to delete
     */
    where?: TaskWhereInput
  }

  /**
   * Task.specializations
   */
  export type Task$specializationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialization
     */
    select?: SpecializationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecializationInclude<ExtArgs> | null
    where?: SpecializationWhereInput
    orderBy?: SpecializationOrderByWithRelationInput | SpecializationOrderByWithRelationInput[]
    cursor?: SpecializationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SpecializationScalarFieldEnum | SpecializationScalarFieldEnum[]
  }

  /**
   * Task.bids
   */
  export type Task$bidsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    where?: BidWhereInput
    orderBy?: BidOrderByWithRelationInput | BidOrderByWithRelationInput[]
    cursor?: BidWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BidScalarFieldEnum | BidScalarFieldEnum[]
  }

  /**
   * Task without action
   */
  export type TaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
  }


  /**
   * Model Bid
   */

  export type AggregateBid = {
    _count: BidCountAggregateOutputType | null
    _avg: BidAvgAggregateOutputType | null
    _sum: BidSumAggregateOutputType | null
    _min: BidMinAggregateOutputType | null
    _max: BidMaxAggregateOutputType | null
  }

  export type BidAvgAggregateOutputType = {
    amount: number | null
  }

  export type BidSumAggregateOutputType = {
    amount: number | null
  }

  export type BidMinAggregateOutputType = {
    id: string | null
    task_id: string | null
    expert_id: string | null
    amount: number | null
    message: string | null
    status: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type BidMaxAggregateOutputType = {
    id: string | null
    task_id: string | null
    expert_id: string | null
    amount: number | null
    message: string | null
    status: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type BidCountAggregateOutputType = {
    id: number
    task_id: number
    expert_id: number
    amount: number
    message: number
    status: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type BidAvgAggregateInputType = {
    amount?: true
  }

  export type BidSumAggregateInputType = {
    amount?: true
  }

  export type BidMinAggregateInputType = {
    id?: true
    task_id?: true
    expert_id?: true
    amount?: true
    message?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type BidMaxAggregateInputType = {
    id?: true
    task_id?: true
    expert_id?: true
    amount?: true
    message?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type BidCountAggregateInputType = {
    id?: true
    task_id?: true
    expert_id?: true
    amount?: true
    message?: true
    status?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type BidAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bid to aggregate.
     */
    where?: BidWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bids to fetch.
     */
    orderBy?: BidOrderByWithRelationInput | BidOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BidWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bids
    **/
    _count?: true | BidCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BidAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BidSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BidMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BidMaxAggregateInputType
  }

  export type GetBidAggregateType<T extends BidAggregateArgs> = {
        [P in keyof T & keyof AggregateBid]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBid[P]>
      : GetScalarType<T[P], AggregateBid[P]>
  }




  export type BidGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BidWhereInput
    orderBy?: BidOrderByWithAggregationInput | BidOrderByWithAggregationInput[]
    by: BidScalarFieldEnum[] | BidScalarFieldEnum
    having?: BidScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BidCountAggregateInputType | true
    _avg?: BidAvgAggregateInputType
    _sum?: BidSumAggregateInputType
    _min?: BidMinAggregateInputType
    _max?: BidMaxAggregateInputType
  }

  export type BidGroupByOutputType = {
    id: string
    task_id: string
    expert_id: string
    amount: number | null
    message: string | null
    status: string
    created_at: Date
    updated_at: Date
    _count: BidCountAggregateOutputType | null
    _avg: BidAvgAggregateOutputType | null
    _sum: BidSumAggregateOutputType | null
    _min: BidMinAggregateOutputType | null
    _max: BidMaxAggregateOutputType | null
  }

  type GetBidGroupByPayload<T extends BidGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BidGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BidGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BidGroupByOutputType[P]>
            : GetScalarType<T[P], BidGroupByOutputType[P]>
        }
      >
    >


  export type BidSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    task_id?: boolean
    expert_id?: boolean
    amount?: boolean
    message?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    expert?: boolean | ExpertDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bid"]>

  export type BidSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    task_id?: boolean
    expert_id?: boolean
    amount?: boolean
    message?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    expert?: boolean | ExpertDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bid"]>

  export type BidSelectScalar = {
    id?: boolean
    task_id?: boolean
    expert_id?: boolean
    amount?: boolean
    message?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type BidInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    expert?: boolean | ExpertDefaultArgs<ExtArgs>
  }
  export type BidIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    expert?: boolean | ExpertDefaultArgs<ExtArgs>
  }

  export type $BidPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bid"
    objects: {
      task: Prisma.$TaskPayload<ExtArgs>
      expert: Prisma.$ExpertPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      task_id: string
      expert_id: string
      amount: number | null
      message: string | null
      status: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["bid"]>
    composites: {}
  }

  type BidGetPayload<S extends boolean | null | undefined | BidDefaultArgs> = $Result.GetResult<Prisma.$BidPayload, S>

  type BidCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BidFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BidCountAggregateInputType | true
    }

  export interface BidDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bid'], meta: { name: 'Bid' } }
    /**
     * Find zero or one Bid that matches the filter.
     * @param {BidFindUniqueArgs} args - Arguments to find a Bid
     * @example
     * // Get one Bid
     * const bid = await prisma.bid.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BidFindUniqueArgs>(args: SelectSubset<T, BidFindUniqueArgs<ExtArgs>>): Prisma__BidClient<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Bid that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BidFindUniqueOrThrowArgs} args - Arguments to find a Bid
     * @example
     * // Get one Bid
     * const bid = await prisma.bid.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BidFindUniqueOrThrowArgs>(args: SelectSubset<T, BidFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BidClient<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Bid that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BidFindFirstArgs} args - Arguments to find a Bid
     * @example
     * // Get one Bid
     * const bid = await prisma.bid.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BidFindFirstArgs>(args?: SelectSubset<T, BidFindFirstArgs<ExtArgs>>): Prisma__BidClient<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Bid that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BidFindFirstOrThrowArgs} args - Arguments to find a Bid
     * @example
     * // Get one Bid
     * const bid = await prisma.bid.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BidFindFirstOrThrowArgs>(args?: SelectSubset<T, BidFindFirstOrThrowArgs<ExtArgs>>): Prisma__BidClient<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Bids that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BidFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bids
     * const bids = await prisma.bid.findMany()
     * 
     * // Get first 10 Bids
     * const bids = await prisma.bid.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bidWithIdOnly = await prisma.bid.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BidFindManyArgs>(args?: SelectSubset<T, BidFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Bid.
     * @param {BidCreateArgs} args - Arguments to create a Bid.
     * @example
     * // Create one Bid
     * const Bid = await prisma.bid.create({
     *   data: {
     *     // ... data to create a Bid
     *   }
     * })
     * 
     */
    create<T extends BidCreateArgs>(args: SelectSubset<T, BidCreateArgs<ExtArgs>>): Prisma__BidClient<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Bids.
     * @param {BidCreateManyArgs} args - Arguments to create many Bids.
     * @example
     * // Create many Bids
     * const bid = await prisma.bid.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BidCreateManyArgs>(args?: SelectSubset<T, BidCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bids and returns the data saved in the database.
     * @param {BidCreateManyAndReturnArgs} args - Arguments to create many Bids.
     * @example
     * // Create many Bids
     * const bid = await prisma.bid.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bids and only return the `id`
     * const bidWithIdOnly = await prisma.bid.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BidCreateManyAndReturnArgs>(args?: SelectSubset<T, BidCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Bid.
     * @param {BidDeleteArgs} args - Arguments to delete one Bid.
     * @example
     * // Delete one Bid
     * const Bid = await prisma.bid.delete({
     *   where: {
     *     // ... filter to delete one Bid
     *   }
     * })
     * 
     */
    delete<T extends BidDeleteArgs>(args: SelectSubset<T, BidDeleteArgs<ExtArgs>>): Prisma__BidClient<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Bid.
     * @param {BidUpdateArgs} args - Arguments to update one Bid.
     * @example
     * // Update one Bid
     * const bid = await prisma.bid.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BidUpdateArgs>(args: SelectSubset<T, BidUpdateArgs<ExtArgs>>): Prisma__BidClient<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Bids.
     * @param {BidDeleteManyArgs} args - Arguments to filter Bids to delete.
     * @example
     * // Delete a few Bids
     * const { count } = await prisma.bid.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BidDeleteManyArgs>(args?: SelectSubset<T, BidDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bids.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BidUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bids
     * const bid = await prisma.bid.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BidUpdateManyArgs>(args: SelectSubset<T, BidUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Bid.
     * @param {BidUpsertArgs} args - Arguments to update or create a Bid.
     * @example
     * // Update or create a Bid
     * const bid = await prisma.bid.upsert({
     *   create: {
     *     // ... data to create a Bid
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bid we want to update
     *   }
     * })
     */
    upsert<T extends BidUpsertArgs>(args: SelectSubset<T, BidUpsertArgs<ExtArgs>>): Prisma__BidClient<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Bids.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BidCountArgs} args - Arguments to filter Bids to count.
     * @example
     * // Count the number of Bids
     * const count = await prisma.bid.count({
     *   where: {
     *     // ... the filter for the Bids we want to count
     *   }
     * })
    **/
    count<T extends BidCountArgs>(
      args?: Subset<T, BidCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BidCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bid.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BidAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BidAggregateArgs>(args: Subset<T, BidAggregateArgs>): Prisma.PrismaPromise<GetBidAggregateType<T>>

    /**
     * Group by Bid.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BidGroupByArgs} args - Group by arguments.
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
      T extends BidGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BidGroupByArgs['orderBy'] }
        : { orderBy?: BidGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BidGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBidGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bid model
   */
  readonly fields: BidFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bid.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BidClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    task<T extends TaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TaskDefaultArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    expert<T extends ExpertDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExpertDefaultArgs<ExtArgs>>): Prisma__ExpertClient<$Result.GetResult<Prisma.$ExpertPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Bid model
   */ 
  interface BidFieldRefs {
    readonly id: FieldRef<"Bid", 'String'>
    readonly task_id: FieldRef<"Bid", 'String'>
    readonly expert_id: FieldRef<"Bid", 'String'>
    readonly amount: FieldRef<"Bid", 'Int'>
    readonly message: FieldRef<"Bid", 'String'>
    readonly status: FieldRef<"Bid", 'String'>
    readonly created_at: FieldRef<"Bid", 'DateTime'>
    readonly updated_at: FieldRef<"Bid", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Bid findUnique
   */
  export type BidFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * Filter, which Bid to fetch.
     */
    where: BidWhereUniqueInput
  }

  /**
   * Bid findUniqueOrThrow
   */
  export type BidFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * Filter, which Bid to fetch.
     */
    where: BidWhereUniqueInput
  }

  /**
   * Bid findFirst
   */
  export type BidFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * Filter, which Bid to fetch.
     */
    where?: BidWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bids to fetch.
     */
    orderBy?: BidOrderByWithRelationInput | BidOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bids.
     */
    cursor?: BidWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bids.
     */
    distinct?: BidScalarFieldEnum | BidScalarFieldEnum[]
  }

  /**
   * Bid findFirstOrThrow
   */
  export type BidFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * Filter, which Bid to fetch.
     */
    where?: BidWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bids to fetch.
     */
    orderBy?: BidOrderByWithRelationInput | BidOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bids.
     */
    cursor?: BidWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bids.
     */
    distinct?: BidScalarFieldEnum | BidScalarFieldEnum[]
  }

  /**
   * Bid findMany
   */
  export type BidFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * Filter, which Bids to fetch.
     */
    where?: BidWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bids to fetch.
     */
    orderBy?: BidOrderByWithRelationInput | BidOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bids.
     */
    cursor?: BidWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bids.
     */
    skip?: number
    distinct?: BidScalarFieldEnum | BidScalarFieldEnum[]
  }

  /**
   * Bid create
   */
  export type BidCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * The data needed to create a Bid.
     */
    data: XOR<BidCreateInput, BidUncheckedCreateInput>
  }

  /**
   * Bid createMany
   */
  export type BidCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bids.
     */
    data: BidCreateManyInput | BidCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bid createManyAndReturn
   */
  export type BidCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Bids.
     */
    data: BidCreateManyInput | BidCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bid update
   */
  export type BidUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * The data needed to update a Bid.
     */
    data: XOR<BidUpdateInput, BidUncheckedUpdateInput>
    /**
     * Choose, which Bid to update.
     */
    where: BidWhereUniqueInput
  }

  /**
   * Bid updateMany
   */
  export type BidUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bids.
     */
    data: XOR<BidUpdateManyMutationInput, BidUncheckedUpdateManyInput>
    /**
     * Filter which Bids to update
     */
    where?: BidWhereInput
  }

  /**
   * Bid upsert
   */
  export type BidUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * The filter to search for the Bid to update in case it exists.
     */
    where: BidWhereUniqueInput
    /**
     * In case the Bid found by the `where` argument doesn't exist, create a new Bid with this data.
     */
    create: XOR<BidCreateInput, BidUncheckedCreateInput>
    /**
     * In case the Bid was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BidUpdateInput, BidUncheckedUpdateInput>
  }

  /**
   * Bid delete
   */
  export type BidDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * Filter which Bid to delete.
     */
    where: BidWhereUniqueInput
  }

  /**
   * Bid deleteMany
   */
  export type BidDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bids to delete
     */
    where?: BidWhereInput
  }

  /**
   * Bid without action
   */
  export type BidDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
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


  export const ExpertScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    name: 'name',
    profile_image: 'profile_image',
    company: 'company',
    average_rating: 'average_rating',
    total_reviews: 'total_reviews',
    hourly_rate_usd: 'hourly_rate_usd',
    hourly_rate_nis: 'hourly_rate_nis',
    languages: 'languages',
    verified: 'verified',
    active: 'active',
    status: 'status',
    linkedin_profile: 'linkedin_profile',
    cv_url: 'cv_url',
    created_at: 'created_at',
    updated_at: 'updated_at',
    email: 'email',
    bio_en: 'bio_en',
    bio_he: 'bio_he',
    name_he: 'name_he',
    specializations_en: 'specializations_en',
    specializations_he: 'specializations_he',
    title_en: 'title_en',
    title_he: 'title_he',
    userId: 'userId'
  };

  export type ExpertScalarFieldEnum = (typeof ExpertScalarFieldEnum)[keyof typeof ExpertScalarFieldEnum]


  export const OfferingScalarFieldEnum: {
    id: 'id',
    expert_id: 'expert_id',
    title: 'title',
    type: 'type',
    description: 'description',
    format: 'format',
    duration_minutes: 'duration_minutes',
    max_attendees: 'max_attendees',
    price_usd: 'price_usd',
    price_nis: 'price_nis',
    audience_level: 'audience_level',
    includes: 'includes',
    target_industries: 'target_industries',
    customizable: 'customizable',
    active: 'active',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type OfferingScalarFieldEnum = (typeof OfferingScalarFieldEnum)[keyof typeof OfferingScalarFieldEnum]


  export const BookingScalarFieldEnum: {
    id: 'id',
    expert_id: 'expert_id',
    offering_id: 'offering_id',
    company_name: 'company_name',
    company_contact_name: 'company_contact_name',
    company_email: 'company_email',
    company_phone: 'company_phone',
    date_requested: 'date_requested',
    attendees_count: 'attendees_count',
    notes_from_client: 'notes_from_client',
    status: 'status',
    quote_amount_usd: 'quote_amount_usd',
    quote_amount_nis: 'quote_amount_nis',
    payment_method: 'payment_method',
    payment_status: 'payment_status',
    stripe_payment_id: 'stripe_payment_id',
    platform_fee_usd: 'platform_fee_usd',
    platform_fee_nis: 'platform_fee_nis',
    expert_payout_usd: 'expert_payout_usd',
    expert_payout_nis: 'expert_payout_nis',
    notes_from_expert: 'notes_from_expert',
    payment_link: 'payment_link',
    invoice_link: 'invoice_link',
    transaction_id: 'transaction_id',
    expert_response_date: 'expert_response_date',
    event_date_confirmed: 'event_date_confirmed',
    review_sent: 'review_sent',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    booking_id: 'booking_id',
    expert_id: 'expert_id',
    company_name: 'company_name',
    rating: 'rating',
    title: 'title',
    text: 'text',
    verified: 'verified',
    created_at: 'created_at'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    name_he: 'name_he',
    name_en: 'name_en'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const BlogPostScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    title_he: 'title_he',
    title_en: 'title_en',
    excerpt_he: 'excerpt_he',
    excerpt_en: 'excerpt_en',
    content_he: 'content_he',
    content_en: 'content_en',
    cover_image: 'cover_image',
    published: 'published',
    publishedAt: 'publishedAt',
    category_id: 'category_id',
    author_name: 'author_name',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type BlogPostScalarFieldEnum = (typeof BlogPostScalarFieldEnum)[keyof typeof BlogPostScalarFieldEnum]


  export const FAQScalarFieldEnum: {
    id: 'id',
    question_he: 'question_he',
    answer_he: 'answer_he',
    question_en: 'question_en',
    answer_en: 'answer_en',
    post_id: 'post_id'
  };

  export type FAQScalarFieldEnum = (typeof FAQScalarFieldEnum)[keyof typeof FAQScalarFieldEnum]


  export const SpecializationScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    name_he: 'name_he',
    name_en: 'name_en',
    description_he: 'description_he',
    description_en: 'description_en',
    metaTitle_he: 'metaTitle_he',
    metaTitle_en: 'metaTitle_en',
    metaDescription_he: 'metaDescription_he',
    metaDescription_en: 'metaDescription_en',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type SpecializationScalarFieldEnum = (typeof SpecializationScalarFieldEnum)[keyof typeof SpecializationScalarFieldEnum]


  export const TaskScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    title: 'title',
    description: 'description',
    budget_range: 'budget_range',
    status: 'status',
    approved: 'approved',
    client_name: 'client_name',
    client_email: 'client_email',
    client_company: 'client_company',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const BidScalarFieldEnum: {
    id: 'id',
    task_id: 'task_id',
    expert_id: 'expert_id',
    amount: 'amount',
    message: 'message',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type BidScalarFieldEnum = (typeof BidScalarFieldEnum)[keyof typeof BidScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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
   * Deep Input Types
   */


  export type ExpertWhereInput = {
    AND?: ExpertWhereInput | ExpertWhereInput[]
    OR?: ExpertWhereInput[]
    NOT?: ExpertWhereInput | ExpertWhereInput[]
    id?: StringFilter<"Expert"> | string
    slug?: StringFilter<"Expert"> | string
    name?: StringFilter<"Expert"> | string
    profile_image?: StringNullableFilter<"Expert"> | string | null
    company?: StringNullableFilter<"Expert"> | string | null
    average_rating?: FloatFilter<"Expert"> | number
    total_reviews?: IntFilter<"Expert"> | number
    hourly_rate_usd?: IntNullableFilter<"Expert"> | number | null
    hourly_rate_nis?: IntNullableFilter<"Expert"> | number | null
    languages?: StringFilter<"Expert"> | string
    verified?: BoolFilter<"Expert"> | boolean
    active?: BoolFilter<"Expert"> | boolean
    status?: StringFilter<"Expert"> | string
    linkedin_profile?: StringNullableFilter<"Expert"> | string | null
    cv_url?: StringNullableFilter<"Expert"> | string | null
    created_at?: DateTimeFilter<"Expert"> | Date | string
    updated_at?: DateTimeFilter<"Expert"> | Date | string
    email?: StringNullableFilter<"Expert"> | string | null
    bio_en?: StringNullableFilter<"Expert"> | string | null
    bio_he?: StringNullableFilter<"Expert"> | string | null
    name_he?: StringNullableFilter<"Expert"> | string | null
    specializations_en?: StringNullableFilter<"Expert"> | string | null
    specializations_he?: StringNullableFilter<"Expert"> | string | null
    title_en?: StringNullableFilter<"Expert"> | string | null
    title_he?: StringNullableFilter<"Expert"> | string | null
    userId?: StringNullableFilter<"Expert"> | string | null
    bookings?: BookingListRelationFilter
    offerings?: OfferingListRelationFilter
    reviews?: ReviewListRelationFilter
    specializations_list?: SpecializationListRelationFilter
    bids?: BidListRelationFilter
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type ExpertOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    profile_image?: SortOrderInput | SortOrder
    company?: SortOrderInput | SortOrder
    average_rating?: SortOrder
    total_reviews?: SortOrder
    hourly_rate_usd?: SortOrderInput | SortOrder
    hourly_rate_nis?: SortOrderInput | SortOrder
    languages?: SortOrder
    verified?: SortOrder
    active?: SortOrder
    status?: SortOrder
    linkedin_profile?: SortOrderInput | SortOrder
    cv_url?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    email?: SortOrderInput | SortOrder
    bio_en?: SortOrderInput | SortOrder
    bio_he?: SortOrderInput | SortOrder
    name_he?: SortOrderInput | SortOrder
    specializations_en?: SortOrderInput | SortOrder
    specializations_he?: SortOrderInput | SortOrder
    title_en?: SortOrderInput | SortOrder
    title_he?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    bookings?: BookingOrderByRelationAggregateInput
    offerings?: OfferingOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
    specializations_list?: SpecializationOrderByRelationAggregateInput
    bids?: BidOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type ExpertWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    email?: string
    userId?: string
    AND?: ExpertWhereInput | ExpertWhereInput[]
    OR?: ExpertWhereInput[]
    NOT?: ExpertWhereInput | ExpertWhereInput[]
    name?: StringFilter<"Expert"> | string
    profile_image?: StringNullableFilter<"Expert"> | string | null
    company?: StringNullableFilter<"Expert"> | string | null
    average_rating?: FloatFilter<"Expert"> | number
    total_reviews?: IntFilter<"Expert"> | number
    hourly_rate_usd?: IntNullableFilter<"Expert"> | number | null
    hourly_rate_nis?: IntNullableFilter<"Expert"> | number | null
    languages?: StringFilter<"Expert"> | string
    verified?: BoolFilter<"Expert"> | boolean
    active?: BoolFilter<"Expert"> | boolean
    status?: StringFilter<"Expert"> | string
    linkedin_profile?: StringNullableFilter<"Expert"> | string | null
    cv_url?: StringNullableFilter<"Expert"> | string | null
    created_at?: DateTimeFilter<"Expert"> | Date | string
    updated_at?: DateTimeFilter<"Expert"> | Date | string
    bio_en?: StringNullableFilter<"Expert"> | string | null
    bio_he?: StringNullableFilter<"Expert"> | string | null
    name_he?: StringNullableFilter<"Expert"> | string | null
    specializations_en?: StringNullableFilter<"Expert"> | string | null
    specializations_he?: StringNullableFilter<"Expert"> | string | null
    title_en?: StringNullableFilter<"Expert"> | string | null
    title_he?: StringNullableFilter<"Expert"> | string | null
    bookings?: BookingListRelationFilter
    offerings?: OfferingListRelationFilter
    reviews?: ReviewListRelationFilter
    specializations_list?: SpecializationListRelationFilter
    bids?: BidListRelationFilter
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id" | "slug" | "email" | "userId">

  export type ExpertOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    profile_image?: SortOrderInput | SortOrder
    company?: SortOrderInput | SortOrder
    average_rating?: SortOrder
    total_reviews?: SortOrder
    hourly_rate_usd?: SortOrderInput | SortOrder
    hourly_rate_nis?: SortOrderInput | SortOrder
    languages?: SortOrder
    verified?: SortOrder
    active?: SortOrder
    status?: SortOrder
    linkedin_profile?: SortOrderInput | SortOrder
    cv_url?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    email?: SortOrderInput | SortOrder
    bio_en?: SortOrderInput | SortOrder
    bio_he?: SortOrderInput | SortOrder
    name_he?: SortOrderInput | SortOrder
    specializations_en?: SortOrderInput | SortOrder
    specializations_he?: SortOrderInput | SortOrder
    title_en?: SortOrderInput | SortOrder
    title_he?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: ExpertCountOrderByAggregateInput
    _avg?: ExpertAvgOrderByAggregateInput
    _max?: ExpertMaxOrderByAggregateInput
    _min?: ExpertMinOrderByAggregateInput
    _sum?: ExpertSumOrderByAggregateInput
  }

  export type ExpertScalarWhereWithAggregatesInput = {
    AND?: ExpertScalarWhereWithAggregatesInput | ExpertScalarWhereWithAggregatesInput[]
    OR?: ExpertScalarWhereWithAggregatesInput[]
    NOT?: ExpertScalarWhereWithAggregatesInput | ExpertScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Expert"> | string
    slug?: StringWithAggregatesFilter<"Expert"> | string
    name?: StringWithAggregatesFilter<"Expert"> | string
    profile_image?: StringNullableWithAggregatesFilter<"Expert"> | string | null
    company?: StringNullableWithAggregatesFilter<"Expert"> | string | null
    average_rating?: FloatWithAggregatesFilter<"Expert"> | number
    total_reviews?: IntWithAggregatesFilter<"Expert"> | number
    hourly_rate_usd?: IntNullableWithAggregatesFilter<"Expert"> | number | null
    hourly_rate_nis?: IntNullableWithAggregatesFilter<"Expert"> | number | null
    languages?: StringWithAggregatesFilter<"Expert"> | string
    verified?: BoolWithAggregatesFilter<"Expert"> | boolean
    active?: BoolWithAggregatesFilter<"Expert"> | boolean
    status?: StringWithAggregatesFilter<"Expert"> | string
    linkedin_profile?: StringNullableWithAggregatesFilter<"Expert"> | string | null
    cv_url?: StringNullableWithAggregatesFilter<"Expert"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Expert"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Expert"> | Date | string
    email?: StringNullableWithAggregatesFilter<"Expert"> | string | null
    bio_en?: StringNullableWithAggregatesFilter<"Expert"> | string | null
    bio_he?: StringNullableWithAggregatesFilter<"Expert"> | string | null
    name_he?: StringNullableWithAggregatesFilter<"Expert"> | string | null
    specializations_en?: StringNullableWithAggregatesFilter<"Expert"> | string | null
    specializations_he?: StringNullableWithAggregatesFilter<"Expert"> | string | null
    title_en?: StringNullableWithAggregatesFilter<"Expert"> | string | null
    title_he?: StringNullableWithAggregatesFilter<"Expert"> | string | null
    userId?: StringNullableWithAggregatesFilter<"Expert"> | string | null
  }

  export type OfferingWhereInput = {
    AND?: OfferingWhereInput | OfferingWhereInput[]
    OR?: OfferingWhereInput[]
    NOT?: OfferingWhereInput | OfferingWhereInput[]
    id?: StringFilter<"Offering"> | string
    expert_id?: StringFilter<"Offering"> | string
    title?: StringFilter<"Offering"> | string
    type?: StringFilter<"Offering"> | string
    description?: StringFilter<"Offering"> | string
    format?: StringFilter<"Offering"> | string
    duration_minutes?: IntFilter<"Offering"> | number
    max_attendees?: IntNullableFilter<"Offering"> | number | null
    price_usd?: IntFilter<"Offering"> | number
    price_nis?: IntNullableFilter<"Offering"> | number | null
    audience_level?: StringFilter<"Offering"> | string
    includes?: StringNullableFilter<"Offering"> | string | null
    target_industries?: StringNullableFilter<"Offering"> | string | null
    customizable?: BoolFilter<"Offering"> | boolean
    active?: BoolFilter<"Offering"> | boolean
    created_at?: DateTimeFilter<"Offering"> | Date | string
    updated_at?: DateTimeFilter<"Offering"> | Date | string
    bookings?: BookingListRelationFilter
    expert?: XOR<ExpertRelationFilter, ExpertWhereInput>
  }

  export type OfferingOrderByWithRelationInput = {
    id?: SortOrder
    expert_id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    description?: SortOrder
    format?: SortOrder
    duration_minutes?: SortOrder
    max_attendees?: SortOrderInput | SortOrder
    price_usd?: SortOrder
    price_nis?: SortOrderInput | SortOrder
    audience_level?: SortOrder
    includes?: SortOrderInput | SortOrder
    target_industries?: SortOrderInput | SortOrder
    customizable?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    bookings?: BookingOrderByRelationAggregateInput
    expert?: ExpertOrderByWithRelationInput
  }

  export type OfferingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OfferingWhereInput | OfferingWhereInput[]
    OR?: OfferingWhereInput[]
    NOT?: OfferingWhereInput | OfferingWhereInput[]
    expert_id?: StringFilter<"Offering"> | string
    title?: StringFilter<"Offering"> | string
    type?: StringFilter<"Offering"> | string
    description?: StringFilter<"Offering"> | string
    format?: StringFilter<"Offering"> | string
    duration_minutes?: IntFilter<"Offering"> | number
    max_attendees?: IntNullableFilter<"Offering"> | number | null
    price_usd?: IntFilter<"Offering"> | number
    price_nis?: IntNullableFilter<"Offering"> | number | null
    audience_level?: StringFilter<"Offering"> | string
    includes?: StringNullableFilter<"Offering"> | string | null
    target_industries?: StringNullableFilter<"Offering"> | string | null
    customizable?: BoolFilter<"Offering"> | boolean
    active?: BoolFilter<"Offering"> | boolean
    created_at?: DateTimeFilter<"Offering"> | Date | string
    updated_at?: DateTimeFilter<"Offering"> | Date | string
    bookings?: BookingListRelationFilter
    expert?: XOR<ExpertRelationFilter, ExpertWhereInput>
  }, "id">

  export type OfferingOrderByWithAggregationInput = {
    id?: SortOrder
    expert_id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    description?: SortOrder
    format?: SortOrder
    duration_minutes?: SortOrder
    max_attendees?: SortOrderInput | SortOrder
    price_usd?: SortOrder
    price_nis?: SortOrderInput | SortOrder
    audience_level?: SortOrder
    includes?: SortOrderInput | SortOrder
    target_industries?: SortOrderInput | SortOrder
    customizable?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: OfferingCountOrderByAggregateInput
    _avg?: OfferingAvgOrderByAggregateInput
    _max?: OfferingMaxOrderByAggregateInput
    _min?: OfferingMinOrderByAggregateInput
    _sum?: OfferingSumOrderByAggregateInput
  }

  export type OfferingScalarWhereWithAggregatesInput = {
    AND?: OfferingScalarWhereWithAggregatesInput | OfferingScalarWhereWithAggregatesInput[]
    OR?: OfferingScalarWhereWithAggregatesInput[]
    NOT?: OfferingScalarWhereWithAggregatesInput | OfferingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Offering"> | string
    expert_id?: StringWithAggregatesFilter<"Offering"> | string
    title?: StringWithAggregatesFilter<"Offering"> | string
    type?: StringWithAggregatesFilter<"Offering"> | string
    description?: StringWithAggregatesFilter<"Offering"> | string
    format?: StringWithAggregatesFilter<"Offering"> | string
    duration_minutes?: IntWithAggregatesFilter<"Offering"> | number
    max_attendees?: IntNullableWithAggregatesFilter<"Offering"> | number | null
    price_usd?: IntWithAggregatesFilter<"Offering"> | number
    price_nis?: IntNullableWithAggregatesFilter<"Offering"> | number | null
    audience_level?: StringWithAggregatesFilter<"Offering"> | string
    includes?: StringNullableWithAggregatesFilter<"Offering"> | string | null
    target_industries?: StringNullableWithAggregatesFilter<"Offering"> | string | null
    customizable?: BoolWithAggregatesFilter<"Offering"> | boolean
    active?: BoolWithAggregatesFilter<"Offering"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"Offering"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Offering"> | Date | string
  }

  export type BookingWhereInput = {
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    id?: StringFilter<"Booking"> | string
    expert_id?: StringFilter<"Booking"> | string
    offering_id?: StringFilter<"Booking"> | string
    company_name?: StringFilter<"Booking"> | string
    company_contact_name?: StringFilter<"Booking"> | string
    company_email?: StringFilter<"Booking"> | string
    company_phone?: StringNullableFilter<"Booking"> | string | null
    date_requested?: DateTimeFilter<"Booking"> | Date | string
    attendees_count?: IntNullableFilter<"Booking"> | number | null
    notes_from_client?: StringNullableFilter<"Booking"> | string | null
    status?: StringFilter<"Booking"> | string
    quote_amount_usd?: IntFilter<"Booking"> | number
    quote_amount_nis?: IntNullableFilter<"Booking"> | number | null
    payment_method?: StringFilter<"Booking"> | string
    payment_status?: StringFilter<"Booking"> | string
    stripe_payment_id?: StringNullableFilter<"Booking"> | string | null
    platform_fee_usd?: IntNullableFilter<"Booking"> | number | null
    platform_fee_nis?: IntNullableFilter<"Booking"> | number | null
    expert_payout_usd?: IntNullableFilter<"Booking"> | number | null
    expert_payout_nis?: IntNullableFilter<"Booking"> | number | null
    notes_from_expert?: StringNullableFilter<"Booking"> | string | null
    payment_link?: StringNullableFilter<"Booking"> | string | null
    invoice_link?: StringNullableFilter<"Booking"> | string | null
    transaction_id?: StringNullableFilter<"Booking"> | string | null
    expert_response_date?: DateTimeNullableFilter<"Booking"> | Date | string | null
    event_date_confirmed?: DateTimeNullableFilter<"Booking"> | Date | string | null
    review_sent?: BoolFilter<"Booking"> | boolean
    created_at?: DateTimeFilter<"Booking"> | Date | string
    updated_at?: DateTimeFilter<"Booking"> | Date | string
    expert?: XOR<ExpertRelationFilter, ExpertWhereInput>
    offering?: XOR<OfferingRelationFilter, OfferingWhereInput>
    reviews?: ReviewListRelationFilter
  }

  export type BookingOrderByWithRelationInput = {
    id?: SortOrder
    expert_id?: SortOrder
    offering_id?: SortOrder
    company_name?: SortOrder
    company_contact_name?: SortOrder
    company_email?: SortOrder
    company_phone?: SortOrderInput | SortOrder
    date_requested?: SortOrder
    attendees_count?: SortOrderInput | SortOrder
    notes_from_client?: SortOrderInput | SortOrder
    status?: SortOrder
    quote_amount_usd?: SortOrder
    quote_amount_nis?: SortOrderInput | SortOrder
    payment_method?: SortOrder
    payment_status?: SortOrder
    stripe_payment_id?: SortOrderInput | SortOrder
    platform_fee_usd?: SortOrderInput | SortOrder
    platform_fee_nis?: SortOrderInput | SortOrder
    expert_payout_usd?: SortOrderInput | SortOrder
    expert_payout_nis?: SortOrderInput | SortOrder
    notes_from_expert?: SortOrderInput | SortOrder
    payment_link?: SortOrderInput | SortOrder
    invoice_link?: SortOrderInput | SortOrder
    transaction_id?: SortOrderInput | SortOrder
    expert_response_date?: SortOrderInput | SortOrder
    event_date_confirmed?: SortOrderInput | SortOrder
    review_sent?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    expert?: ExpertOrderByWithRelationInput
    offering?: OfferingOrderByWithRelationInput
    reviews?: ReviewOrderByRelationAggregateInput
  }

  export type BookingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    expert_id?: StringFilter<"Booking"> | string
    offering_id?: StringFilter<"Booking"> | string
    company_name?: StringFilter<"Booking"> | string
    company_contact_name?: StringFilter<"Booking"> | string
    company_email?: StringFilter<"Booking"> | string
    company_phone?: StringNullableFilter<"Booking"> | string | null
    date_requested?: DateTimeFilter<"Booking"> | Date | string
    attendees_count?: IntNullableFilter<"Booking"> | number | null
    notes_from_client?: StringNullableFilter<"Booking"> | string | null
    status?: StringFilter<"Booking"> | string
    quote_amount_usd?: IntFilter<"Booking"> | number
    quote_amount_nis?: IntNullableFilter<"Booking"> | number | null
    payment_method?: StringFilter<"Booking"> | string
    payment_status?: StringFilter<"Booking"> | string
    stripe_payment_id?: StringNullableFilter<"Booking"> | string | null
    platform_fee_usd?: IntNullableFilter<"Booking"> | number | null
    platform_fee_nis?: IntNullableFilter<"Booking"> | number | null
    expert_payout_usd?: IntNullableFilter<"Booking"> | number | null
    expert_payout_nis?: IntNullableFilter<"Booking"> | number | null
    notes_from_expert?: StringNullableFilter<"Booking"> | string | null
    payment_link?: StringNullableFilter<"Booking"> | string | null
    invoice_link?: StringNullableFilter<"Booking"> | string | null
    transaction_id?: StringNullableFilter<"Booking"> | string | null
    expert_response_date?: DateTimeNullableFilter<"Booking"> | Date | string | null
    event_date_confirmed?: DateTimeNullableFilter<"Booking"> | Date | string | null
    review_sent?: BoolFilter<"Booking"> | boolean
    created_at?: DateTimeFilter<"Booking"> | Date | string
    updated_at?: DateTimeFilter<"Booking"> | Date | string
    expert?: XOR<ExpertRelationFilter, ExpertWhereInput>
    offering?: XOR<OfferingRelationFilter, OfferingWhereInput>
    reviews?: ReviewListRelationFilter
  }, "id">

  export type BookingOrderByWithAggregationInput = {
    id?: SortOrder
    expert_id?: SortOrder
    offering_id?: SortOrder
    company_name?: SortOrder
    company_contact_name?: SortOrder
    company_email?: SortOrder
    company_phone?: SortOrderInput | SortOrder
    date_requested?: SortOrder
    attendees_count?: SortOrderInput | SortOrder
    notes_from_client?: SortOrderInput | SortOrder
    status?: SortOrder
    quote_amount_usd?: SortOrder
    quote_amount_nis?: SortOrderInput | SortOrder
    payment_method?: SortOrder
    payment_status?: SortOrder
    stripe_payment_id?: SortOrderInput | SortOrder
    platform_fee_usd?: SortOrderInput | SortOrder
    platform_fee_nis?: SortOrderInput | SortOrder
    expert_payout_usd?: SortOrderInput | SortOrder
    expert_payout_nis?: SortOrderInput | SortOrder
    notes_from_expert?: SortOrderInput | SortOrder
    payment_link?: SortOrderInput | SortOrder
    invoice_link?: SortOrderInput | SortOrder
    transaction_id?: SortOrderInput | SortOrder
    expert_response_date?: SortOrderInput | SortOrder
    event_date_confirmed?: SortOrderInput | SortOrder
    review_sent?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: BookingCountOrderByAggregateInput
    _avg?: BookingAvgOrderByAggregateInput
    _max?: BookingMaxOrderByAggregateInput
    _min?: BookingMinOrderByAggregateInput
    _sum?: BookingSumOrderByAggregateInput
  }

  export type BookingScalarWhereWithAggregatesInput = {
    AND?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    OR?: BookingScalarWhereWithAggregatesInput[]
    NOT?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Booking"> | string
    expert_id?: StringWithAggregatesFilter<"Booking"> | string
    offering_id?: StringWithAggregatesFilter<"Booking"> | string
    company_name?: StringWithAggregatesFilter<"Booking"> | string
    company_contact_name?: StringWithAggregatesFilter<"Booking"> | string
    company_email?: StringWithAggregatesFilter<"Booking"> | string
    company_phone?: StringNullableWithAggregatesFilter<"Booking"> | string | null
    date_requested?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    attendees_count?: IntNullableWithAggregatesFilter<"Booking"> | number | null
    notes_from_client?: StringNullableWithAggregatesFilter<"Booking"> | string | null
    status?: StringWithAggregatesFilter<"Booking"> | string
    quote_amount_usd?: IntWithAggregatesFilter<"Booking"> | number
    quote_amount_nis?: IntNullableWithAggregatesFilter<"Booking"> | number | null
    payment_method?: StringWithAggregatesFilter<"Booking"> | string
    payment_status?: StringWithAggregatesFilter<"Booking"> | string
    stripe_payment_id?: StringNullableWithAggregatesFilter<"Booking"> | string | null
    platform_fee_usd?: IntNullableWithAggregatesFilter<"Booking"> | number | null
    platform_fee_nis?: IntNullableWithAggregatesFilter<"Booking"> | number | null
    expert_payout_usd?: IntNullableWithAggregatesFilter<"Booking"> | number | null
    expert_payout_nis?: IntNullableWithAggregatesFilter<"Booking"> | number | null
    notes_from_expert?: StringNullableWithAggregatesFilter<"Booking"> | string | null
    payment_link?: StringNullableWithAggregatesFilter<"Booking"> | string | null
    invoice_link?: StringNullableWithAggregatesFilter<"Booking"> | string | null
    transaction_id?: StringNullableWithAggregatesFilter<"Booking"> | string | null
    expert_response_date?: DateTimeNullableWithAggregatesFilter<"Booking"> | Date | string | null
    event_date_confirmed?: DateTimeNullableWithAggregatesFilter<"Booking"> | Date | string | null
    review_sent?: BoolWithAggregatesFilter<"Booking"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: StringFilter<"Review"> | string
    booking_id?: StringNullableFilter<"Review"> | string | null
    expert_id?: StringFilter<"Review"> | string
    company_name?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    title?: StringNullableFilter<"Review"> | string | null
    text?: StringFilter<"Review"> | string
    verified?: BoolFilter<"Review"> | boolean
    created_at?: DateTimeFilter<"Review"> | Date | string
    booking?: XOR<BookingNullableRelationFilter, BookingWhereInput> | null
    expert?: XOR<ExpertRelationFilter, ExpertWhereInput>
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    booking_id?: SortOrderInput | SortOrder
    expert_id?: SortOrder
    company_name?: SortOrder
    rating?: SortOrder
    title?: SortOrderInput | SortOrder
    text?: SortOrder
    verified?: SortOrder
    created_at?: SortOrder
    booking?: BookingOrderByWithRelationInput
    expert?: ExpertOrderByWithRelationInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    booking_id?: StringNullableFilter<"Review"> | string | null
    expert_id?: StringFilter<"Review"> | string
    company_name?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    title?: StringNullableFilter<"Review"> | string | null
    text?: StringFilter<"Review"> | string
    verified?: BoolFilter<"Review"> | boolean
    created_at?: DateTimeFilter<"Review"> | Date | string
    booking?: XOR<BookingNullableRelationFilter, BookingWhereInput> | null
    expert?: XOR<ExpertRelationFilter, ExpertWhereInput>
  }, "id">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    booking_id?: SortOrderInput | SortOrder
    expert_id?: SortOrder
    company_name?: SortOrder
    rating?: SortOrder
    title?: SortOrderInput | SortOrder
    text?: SortOrder
    verified?: SortOrder
    created_at?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Review"> | string
    booking_id?: StringNullableWithAggregatesFilter<"Review"> | string | null
    expert_id?: StringWithAggregatesFilter<"Review"> | string
    company_name?: StringWithAggregatesFilter<"Review"> | string
    rating?: IntWithAggregatesFilter<"Review"> | number
    title?: StringNullableWithAggregatesFilter<"Review"> | string | null
    text?: StringWithAggregatesFilter<"Review"> | string
    verified?: BoolWithAggregatesFilter<"Review"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"Review"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    expert?: XOR<ExpertNullableRelationFilter, ExpertWhereInput> | null
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    role?: SortOrder
    expert?: ExpertOrderByWithRelationInput
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    expert?: XOR<ExpertNullableRelationFilter, ExpertWhereInput> | null
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    role?: SortOrder
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
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: StringWithAggregatesFilter<"User"> | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    token?: string
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "token" | "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    slug?: StringFilter<"Category"> | string
    name_he?: StringFilter<"Category"> | string
    name_en?: StringFilter<"Category"> | string
    posts?: BlogPostListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    name_he?: SortOrder
    name_en?: SortOrder
    posts?: BlogPostOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name_he?: StringFilter<"Category"> | string
    name_en?: StringFilter<"Category"> | string
    posts?: BlogPostListRelationFilter
  }, "id" | "slug">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    name_he?: SortOrder
    name_en?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    slug?: StringWithAggregatesFilter<"Category"> | string
    name_he?: StringWithAggregatesFilter<"Category"> | string
    name_en?: StringWithAggregatesFilter<"Category"> | string
  }

  export type BlogPostWhereInput = {
    AND?: BlogPostWhereInput | BlogPostWhereInput[]
    OR?: BlogPostWhereInput[]
    NOT?: BlogPostWhereInput | BlogPostWhereInput[]
    id?: StringFilter<"BlogPost"> | string
    slug?: StringFilter<"BlogPost"> | string
    title_he?: StringFilter<"BlogPost"> | string
    title_en?: StringFilter<"BlogPost"> | string
    excerpt_he?: StringFilter<"BlogPost"> | string
    excerpt_en?: StringFilter<"BlogPost"> | string
    content_he?: StringFilter<"BlogPost"> | string
    content_en?: StringFilter<"BlogPost"> | string
    cover_image?: StringNullableFilter<"BlogPost"> | string | null
    published?: BoolFilter<"BlogPost"> | boolean
    publishedAt?: DateTimeFilter<"BlogPost"> | Date | string
    category_id?: StringFilter<"BlogPost"> | string
    author_name?: StringFilter<"BlogPost"> | string
    created_at?: DateTimeFilter<"BlogPost"> | Date | string
    updated_at?: DateTimeFilter<"BlogPost"> | Date | string
    category?: XOR<CategoryRelationFilter, CategoryWhereInput>
    faqs?: FAQListRelationFilter
  }

  export type BlogPostOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    title_he?: SortOrder
    title_en?: SortOrder
    excerpt_he?: SortOrder
    excerpt_en?: SortOrder
    content_he?: SortOrder
    content_en?: SortOrder
    cover_image?: SortOrderInput | SortOrder
    published?: SortOrder
    publishedAt?: SortOrder
    category_id?: SortOrder
    author_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    category?: CategoryOrderByWithRelationInput
    faqs?: FAQOrderByRelationAggregateInput
  }

  export type BlogPostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: BlogPostWhereInput | BlogPostWhereInput[]
    OR?: BlogPostWhereInput[]
    NOT?: BlogPostWhereInput | BlogPostWhereInput[]
    title_he?: StringFilter<"BlogPost"> | string
    title_en?: StringFilter<"BlogPost"> | string
    excerpt_he?: StringFilter<"BlogPost"> | string
    excerpt_en?: StringFilter<"BlogPost"> | string
    content_he?: StringFilter<"BlogPost"> | string
    content_en?: StringFilter<"BlogPost"> | string
    cover_image?: StringNullableFilter<"BlogPost"> | string | null
    published?: BoolFilter<"BlogPost"> | boolean
    publishedAt?: DateTimeFilter<"BlogPost"> | Date | string
    category_id?: StringFilter<"BlogPost"> | string
    author_name?: StringFilter<"BlogPost"> | string
    created_at?: DateTimeFilter<"BlogPost"> | Date | string
    updated_at?: DateTimeFilter<"BlogPost"> | Date | string
    category?: XOR<CategoryRelationFilter, CategoryWhereInput>
    faqs?: FAQListRelationFilter
  }, "id" | "slug">

  export type BlogPostOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    title_he?: SortOrder
    title_en?: SortOrder
    excerpt_he?: SortOrder
    excerpt_en?: SortOrder
    content_he?: SortOrder
    content_en?: SortOrder
    cover_image?: SortOrderInput | SortOrder
    published?: SortOrder
    publishedAt?: SortOrder
    category_id?: SortOrder
    author_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: BlogPostCountOrderByAggregateInput
    _max?: BlogPostMaxOrderByAggregateInput
    _min?: BlogPostMinOrderByAggregateInput
  }

  export type BlogPostScalarWhereWithAggregatesInput = {
    AND?: BlogPostScalarWhereWithAggregatesInput | BlogPostScalarWhereWithAggregatesInput[]
    OR?: BlogPostScalarWhereWithAggregatesInput[]
    NOT?: BlogPostScalarWhereWithAggregatesInput | BlogPostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BlogPost"> | string
    slug?: StringWithAggregatesFilter<"BlogPost"> | string
    title_he?: StringWithAggregatesFilter<"BlogPost"> | string
    title_en?: StringWithAggregatesFilter<"BlogPost"> | string
    excerpt_he?: StringWithAggregatesFilter<"BlogPost"> | string
    excerpt_en?: StringWithAggregatesFilter<"BlogPost"> | string
    content_he?: StringWithAggregatesFilter<"BlogPost"> | string
    content_en?: StringWithAggregatesFilter<"BlogPost"> | string
    cover_image?: StringNullableWithAggregatesFilter<"BlogPost"> | string | null
    published?: BoolWithAggregatesFilter<"BlogPost"> | boolean
    publishedAt?: DateTimeWithAggregatesFilter<"BlogPost"> | Date | string
    category_id?: StringWithAggregatesFilter<"BlogPost"> | string
    author_name?: StringWithAggregatesFilter<"BlogPost"> | string
    created_at?: DateTimeWithAggregatesFilter<"BlogPost"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"BlogPost"> | Date | string
  }

  export type FAQWhereInput = {
    AND?: FAQWhereInput | FAQWhereInput[]
    OR?: FAQWhereInput[]
    NOT?: FAQWhereInput | FAQWhereInput[]
    id?: StringFilter<"FAQ"> | string
    question_he?: StringFilter<"FAQ"> | string
    answer_he?: StringFilter<"FAQ"> | string
    question_en?: StringFilter<"FAQ"> | string
    answer_en?: StringFilter<"FAQ"> | string
    post_id?: StringFilter<"FAQ"> | string
    post?: XOR<BlogPostRelationFilter, BlogPostWhereInput>
  }

  export type FAQOrderByWithRelationInput = {
    id?: SortOrder
    question_he?: SortOrder
    answer_he?: SortOrder
    question_en?: SortOrder
    answer_en?: SortOrder
    post_id?: SortOrder
    post?: BlogPostOrderByWithRelationInput
  }

  export type FAQWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FAQWhereInput | FAQWhereInput[]
    OR?: FAQWhereInput[]
    NOT?: FAQWhereInput | FAQWhereInput[]
    question_he?: StringFilter<"FAQ"> | string
    answer_he?: StringFilter<"FAQ"> | string
    question_en?: StringFilter<"FAQ"> | string
    answer_en?: StringFilter<"FAQ"> | string
    post_id?: StringFilter<"FAQ"> | string
    post?: XOR<BlogPostRelationFilter, BlogPostWhereInput>
  }, "id">

  export type FAQOrderByWithAggregationInput = {
    id?: SortOrder
    question_he?: SortOrder
    answer_he?: SortOrder
    question_en?: SortOrder
    answer_en?: SortOrder
    post_id?: SortOrder
    _count?: FAQCountOrderByAggregateInput
    _max?: FAQMaxOrderByAggregateInput
    _min?: FAQMinOrderByAggregateInput
  }

  export type FAQScalarWhereWithAggregatesInput = {
    AND?: FAQScalarWhereWithAggregatesInput | FAQScalarWhereWithAggregatesInput[]
    OR?: FAQScalarWhereWithAggregatesInput[]
    NOT?: FAQScalarWhereWithAggregatesInput | FAQScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FAQ"> | string
    question_he?: StringWithAggregatesFilter<"FAQ"> | string
    answer_he?: StringWithAggregatesFilter<"FAQ"> | string
    question_en?: StringWithAggregatesFilter<"FAQ"> | string
    answer_en?: StringWithAggregatesFilter<"FAQ"> | string
    post_id?: StringWithAggregatesFilter<"FAQ"> | string
  }

  export type SpecializationWhereInput = {
    AND?: SpecializationWhereInput | SpecializationWhereInput[]
    OR?: SpecializationWhereInput[]
    NOT?: SpecializationWhereInput | SpecializationWhereInput[]
    id?: StringFilter<"Specialization"> | string
    slug?: StringFilter<"Specialization"> | string
    name_he?: StringFilter<"Specialization"> | string
    name_en?: StringFilter<"Specialization"> | string
    description_he?: StringNullableFilter<"Specialization"> | string | null
    description_en?: StringNullableFilter<"Specialization"> | string | null
    metaTitle_he?: StringNullableFilter<"Specialization"> | string | null
    metaTitle_en?: StringNullableFilter<"Specialization"> | string | null
    metaDescription_he?: StringNullableFilter<"Specialization"> | string | null
    metaDescription_en?: StringNullableFilter<"Specialization"> | string | null
    created_at?: DateTimeFilter<"Specialization"> | Date | string
    updated_at?: DateTimeFilter<"Specialization"> | Date | string
    experts?: ExpertListRelationFilter
    tasks?: TaskListRelationFilter
  }

  export type SpecializationOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    name_he?: SortOrder
    name_en?: SortOrder
    description_he?: SortOrderInput | SortOrder
    description_en?: SortOrderInput | SortOrder
    metaTitle_he?: SortOrderInput | SortOrder
    metaTitle_en?: SortOrderInput | SortOrder
    metaDescription_he?: SortOrderInput | SortOrder
    metaDescription_en?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    experts?: ExpertOrderByRelationAggregateInput
    tasks?: TaskOrderByRelationAggregateInput
  }

  export type SpecializationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: SpecializationWhereInput | SpecializationWhereInput[]
    OR?: SpecializationWhereInput[]
    NOT?: SpecializationWhereInput | SpecializationWhereInput[]
    name_he?: StringFilter<"Specialization"> | string
    name_en?: StringFilter<"Specialization"> | string
    description_he?: StringNullableFilter<"Specialization"> | string | null
    description_en?: StringNullableFilter<"Specialization"> | string | null
    metaTitle_he?: StringNullableFilter<"Specialization"> | string | null
    metaTitle_en?: StringNullableFilter<"Specialization"> | string | null
    metaDescription_he?: StringNullableFilter<"Specialization"> | string | null
    metaDescription_en?: StringNullableFilter<"Specialization"> | string | null
    created_at?: DateTimeFilter<"Specialization"> | Date | string
    updated_at?: DateTimeFilter<"Specialization"> | Date | string
    experts?: ExpertListRelationFilter
    tasks?: TaskListRelationFilter
  }, "id" | "slug">

  export type SpecializationOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    name_he?: SortOrder
    name_en?: SortOrder
    description_he?: SortOrderInput | SortOrder
    description_en?: SortOrderInput | SortOrder
    metaTitle_he?: SortOrderInput | SortOrder
    metaTitle_en?: SortOrderInput | SortOrder
    metaDescription_he?: SortOrderInput | SortOrder
    metaDescription_en?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: SpecializationCountOrderByAggregateInput
    _max?: SpecializationMaxOrderByAggregateInput
    _min?: SpecializationMinOrderByAggregateInput
  }

  export type SpecializationScalarWhereWithAggregatesInput = {
    AND?: SpecializationScalarWhereWithAggregatesInput | SpecializationScalarWhereWithAggregatesInput[]
    OR?: SpecializationScalarWhereWithAggregatesInput[]
    NOT?: SpecializationScalarWhereWithAggregatesInput | SpecializationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Specialization"> | string
    slug?: StringWithAggregatesFilter<"Specialization"> | string
    name_he?: StringWithAggregatesFilter<"Specialization"> | string
    name_en?: StringWithAggregatesFilter<"Specialization"> | string
    description_he?: StringNullableWithAggregatesFilter<"Specialization"> | string | null
    description_en?: StringNullableWithAggregatesFilter<"Specialization"> | string | null
    metaTitle_he?: StringNullableWithAggregatesFilter<"Specialization"> | string | null
    metaTitle_en?: StringNullableWithAggregatesFilter<"Specialization"> | string | null
    metaDescription_he?: StringNullableWithAggregatesFilter<"Specialization"> | string | null
    metaDescription_en?: StringNullableWithAggregatesFilter<"Specialization"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Specialization"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Specialization"> | Date | string
  }

  export type TaskWhereInput = {
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    id?: StringFilter<"Task"> | string
    slug?: StringFilter<"Task"> | string
    title?: StringFilter<"Task"> | string
    description?: StringFilter<"Task"> | string
    budget_range?: StringNullableFilter<"Task"> | string | null
    status?: StringFilter<"Task"> | string
    approved?: BoolFilter<"Task"> | boolean
    client_name?: StringNullableFilter<"Task"> | string | null
    client_email?: StringNullableFilter<"Task"> | string | null
    client_company?: StringNullableFilter<"Task"> | string | null
    created_at?: DateTimeFilter<"Task"> | Date | string
    updated_at?: DateTimeFilter<"Task"> | Date | string
    specializations?: SpecializationListRelationFilter
    bids?: BidListRelationFilter
  }

  export type TaskOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    description?: SortOrder
    budget_range?: SortOrderInput | SortOrder
    status?: SortOrder
    approved?: SortOrder
    client_name?: SortOrderInput | SortOrder
    client_email?: SortOrderInput | SortOrder
    client_company?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    specializations?: SpecializationOrderByRelationAggregateInput
    bids?: BidOrderByRelationAggregateInput
  }

  export type TaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    title?: StringFilter<"Task"> | string
    description?: StringFilter<"Task"> | string
    budget_range?: StringNullableFilter<"Task"> | string | null
    status?: StringFilter<"Task"> | string
    approved?: BoolFilter<"Task"> | boolean
    client_name?: StringNullableFilter<"Task"> | string | null
    client_email?: StringNullableFilter<"Task"> | string | null
    client_company?: StringNullableFilter<"Task"> | string | null
    created_at?: DateTimeFilter<"Task"> | Date | string
    updated_at?: DateTimeFilter<"Task"> | Date | string
    specializations?: SpecializationListRelationFilter
    bids?: BidListRelationFilter
  }, "id" | "slug">

  export type TaskOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    description?: SortOrder
    budget_range?: SortOrderInput | SortOrder
    status?: SortOrder
    approved?: SortOrder
    client_name?: SortOrderInput | SortOrder
    client_email?: SortOrderInput | SortOrder
    client_company?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: TaskCountOrderByAggregateInput
    _max?: TaskMaxOrderByAggregateInput
    _min?: TaskMinOrderByAggregateInput
  }

  export type TaskScalarWhereWithAggregatesInput = {
    AND?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    OR?: TaskScalarWhereWithAggregatesInput[]
    NOT?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Task"> | string
    slug?: StringWithAggregatesFilter<"Task"> | string
    title?: StringWithAggregatesFilter<"Task"> | string
    description?: StringWithAggregatesFilter<"Task"> | string
    budget_range?: StringNullableWithAggregatesFilter<"Task"> | string | null
    status?: StringWithAggregatesFilter<"Task"> | string
    approved?: BoolWithAggregatesFilter<"Task"> | boolean
    client_name?: StringNullableWithAggregatesFilter<"Task"> | string | null
    client_email?: StringNullableWithAggregatesFilter<"Task"> | string | null
    client_company?: StringNullableWithAggregatesFilter<"Task"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Task"> | Date | string
  }

  export type BidWhereInput = {
    AND?: BidWhereInput | BidWhereInput[]
    OR?: BidWhereInput[]
    NOT?: BidWhereInput | BidWhereInput[]
    id?: StringFilter<"Bid"> | string
    task_id?: StringFilter<"Bid"> | string
    expert_id?: StringFilter<"Bid"> | string
    amount?: IntNullableFilter<"Bid"> | number | null
    message?: StringNullableFilter<"Bid"> | string | null
    status?: StringFilter<"Bid"> | string
    created_at?: DateTimeFilter<"Bid"> | Date | string
    updated_at?: DateTimeFilter<"Bid"> | Date | string
    task?: XOR<TaskRelationFilter, TaskWhereInput>
    expert?: XOR<ExpertRelationFilter, ExpertWhereInput>
  }

  export type BidOrderByWithRelationInput = {
    id?: SortOrder
    task_id?: SortOrder
    expert_id?: SortOrder
    amount?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    task?: TaskOrderByWithRelationInput
    expert?: ExpertOrderByWithRelationInput
  }

  export type BidWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    task_id_expert_id?: BidTask_idExpert_idCompoundUniqueInput
    AND?: BidWhereInput | BidWhereInput[]
    OR?: BidWhereInput[]
    NOT?: BidWhereInput | BidWhereInput[]
    task_id?: StringFilter<"Bid"> | string
    expert_id?: StringFilter<"Bid"> | string
    amount?: IntNullableFilter<"Bid"> | number | null
    message?: StringNullableFilter<"Bid"> | string | null
    status?: StringFilter<"Bid"> | string
    created_at?: DateTimeFilter<"Bid"> | Date | string
    updated_at?: DateTimeFilter<"Bid"> | Date | string
    task?: XOR<TaskRelationFilter, TaskWhereInput>
    expert?: XOR<ExpertRelationFilter, ExpertWhereInput>
  }, "id" | "task_id_expert_id">

  export type BidOrderByWithAggregationInput = {
    id?: SortOrder
    task_id?: SortOrder
    expert_id?: SortOrder
    amount?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: BidCountOrderByAggregateInput
    _avg?: BidAvgOrderByAggregateInput
    _max?: BidMaxOrderByAggregateInput
    _min?: BidMinOrderByAggregateInput
    _sum?: BidSumOrderByAggregateInput
  }

  export type BidScalarWhereWithAggregatesInput = {
    AND?: BidScalarWhereWithAggregatesInput | BidScalarWhereWithAggregatesInput[]
    OR?: BidScalarWhereWithAggregatesInput[]
    NOT?: BidScalarWhereWithAggregatesInput | BidScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Bid"> | string
    task_id?: StringWithAggregatesFilter<"Bid"> | string
    expert_id?: StringWithAggregatesFilter<"Bid"> | string
    amount?: IntNullableWithAggregatesFilter<"Bid"> | number | null
    message?: StringNullableWithAggregatesFilter<"Bid"> | string | null
    status?: StringWithAggregatesFilter<"Bid"> | string
    created_at?: DateTimeWithAggregatesFilter<"Bid"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Bid"> | Date | string
  }

  export type ExpertCreateInput = {
    id?: string
    slug: string
    name: string
    profile_image?: string | null
    company?: string | null
    average_rating?: number
    total_reviews?: number
    hourly_rate_usd?: number | null
    hourly_rate_nis?: number | null
    languages: string
    verified?: boolean
    active?: boolean
    status?: string
    linkedin_profile?: string | null
    cv_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    email?: string | null
    bio_en?: string | null
    bio_he?: string | null
    name_he?: string | null
    specializations_en?: string | null
    specializations_he?: string | null
    title_en?: string | null
    title_he?: string | null
    bookings?: BookingCreateNestedManyWithoutExpertInput
    offerings?: OfferingCreateNestedManyWithoutExpertInput
    reviews?: ReviewCreateNestedManyWithoutExpertInput
    specializations_list?: SpecializationCreateNestedManyWithoutExpertsInput
    bids?: BidCreateNestedManyWithoutExpertInput
    user?: UserCreateNestedOneWithoutExpertInput
  }

  export type ExpertUncheckedCreateInput = {
    id?: string
    slug: string
    name: string
    profile_image?: string | null
    company?: string | null
    average_rating?: number
    total_reviews?: number
    hourly_rate_usd?: number | null
    hourly_rate_nis?: number | null
    languages: string
    verified?: boolean
    active?: boolean
    status?: string
    linkedin_profile?: string | null
    cv_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    email?: string | null
    bio_en?: string | null
    bio_he?: string | null
    name_he?: string | null
    specializations_en?: string | null
    specializations_he?: string | null
    title_en?: string | null
    title_he?: string | null
    userId?: string | null
    bookings?: BookingUncheckedCreateNestedManyWithoutExpertInput
    offerings?: OfferingUncheckedCreateNestedManyWithoutExpertInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutExpertInput
    specializations_list?: SpecializationUncheckedCreateNestedManyWithoutExpertsInput
    bids?: BidUncheckedCreateNestedManyWithoutExpertInput
  }

  export type ExpertUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    average_rating?: FloatFieldUpdateOperationsInput | number
    total_reviews?: IntFieldUpdateOperationsInput | number
    hourly_rate_usd?: NullableIntFieldUpdateOperationsInput | number | null
    hourly_rate_nis?: NullableIntFieldUpdateOperationsInput | number | null
    languages?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    linkedin_profile?: NullableStringFieldUpdateOperationsInput | string | null
    cv_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    bio_en?: NullableStringFieldUpdateOperationsInput | string | null
    bio_he?: NullableStringFieldUpdateOperationsInput | string | null
    name_he?: NullableStringFieldUpdateOperationsInput | string | null
    specializations_en?: NullableStringFieldUpdateOperationsInput | string | null
    specializations_he?: NullableStringFieldUpdateOperationsInput | string | null
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
    title_he?: NullableStringFieldUpdateOperationsInput | string | null
    bookings?: BookingUpdateManyWithoutExpertNestedInput
    offerings?: OfferingUpdateManyWithoutExpertNestedInput
    reviews?: ReviewUpdateManyWithoutExpertNestedInput
    specializations_list?: SpecializationUpdateManyWithoutExpertsNestedInput
    bids?: BidUpdateManyWithoutExpertNestedInput
    user?: UserUpdateOneWithoutExpertNestedInput
  }

  export type ExpertUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    average_rating?: FloatFieldUpdateOperationsInput | number
    total_reviews?: IntFieldUpdateOperationsInput | number
    hourly_rate_usd?: NullableIntFieldUpdateOperationsInput | number | null
    hourly_rate_nis?: NullableIntFieldUpdateOperationsInput | number | null
    languages?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    linkedin_profile?: NullableStringFieldUpdateOperationsInput | string | null
    cv_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    bio_en?: NullableStringFieldUpdateOperationsInput | string | null
    bio_he?: NullableStringFieldUpdateOperationsInput | string | null
    name_he?: NullableStringFieldUpdateOperationsInput | string | null
    specializations_en?: NullableStringFieldUpdateOperationsInput | string | null
    specializations_he?: NullableStringFieldUpdateOperationsInput | string | null
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
    title_he?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    bookings?: BookingUncheckedUpdateManyWithoutExpertNestedInput
    offerings?: OfferingUncheckedUpdateManyWithoutExpertNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutExpertNestedInput
    specializations_list?: SpecializationUncheckedUpdateManyWithoutExpertsNestedInput
    bids?: BidUncheckedUpdateManyWithoutExpertNestedInput
  }

  export type ExpertCreateManyInput = {
    id?: string
    slug: string
    name: string
    profile_image?: string | null
    company?: string | null
    average_rating?: number
    total_reviews?: number
    hourly_rate_usd?: number | null
    hourly_rate_nis?: number | null
    languages: string
    verified?: boolean
    active?: boolean
    status?: string
    linkedin_profile?: string | null
    cv_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    email?: string | null
    bio_en?: string | null
    bio_he?: string | null
    name_he?: string | null
    specializations_en?: string | null
    specializations_he?: string | null
    title_en?: string | null
    title_he?: string | null
    userId?: string | null
  }

  export type ExpertUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    average_rating?: FloatFieldUpdateOperationsInput | number
    total_reviews?: IntFieldUpdateOperationsInput | number
    hourly_rate_usd?: NullableIntFieldUpdateOperationsInput | number | null
    hourly_rate_nis?: NullableIntFieldUpdateOperationsInput | number | null
    languages?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    linkedin_profile?: NullableStringFieldUpdateOperationsInput | string | null
    cv_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    bio_en?: NullableStringFieldUpdateOperationsInput | string | null
    bio_he?: NullableStringFieldUpdateOperationsInput | string | null
    name_he?: NullableStringFieldUpdateOperationsInput | string | null
    specializations_en?: NullableStringFieldUpdateOperationsInput | string | null
    specializations_he?: NullableStringFieldUpdateOperationsInput | string | null
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
    title_he?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExpertUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    average_rating?: FloatFieldUpdateOperationsInput | number
    total_reviews?: IntFieldUpdateOperationsInput | number
    hourly_rate_usd?: NullableIntFieldUpdateOperationsInput | number | null
    hourly_rate_nis?: NullableIntFieldUpdateOperationsInput | number | null
    languages?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    linkedin_profile?: NullableStringFieldUpdateOperationsInput | string | null
    cv_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    bio_en?: NullableStringFieldUpdateOperationsInput | string | null
    bio_he?: NullableStringFieldUpdateOperationsInput | string | null
    name_he?: NullableStringFieldUpdateOperationsInput | string | null
    specializations_en?: NullableStringFieldUpdateOperationsInput | string | null
    specializations_he?: NullableStringFieldUpdateOperationsInput | string | null
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
    title_he?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OfferingCreateInput = {
    id?: string
    title: string
    type?: string
    description: string
    format: string
    duration_minutes: number
    max_attendees?: number | null
    price_usd: number
    price_nis?: number | null
    audience_level: string
    includes?: string | null
    target_industries?: string | null
    customizable?: boolean
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    bookings?: BookingCreateNestedManyWithoutOfferingInput
    expert: ExpertCreateNestedOneWithoutOfferingsInput
  }

  export type OfferingUncheckedCreateInput = {
    id?: string
    expert_id: string
    title: string
    type?: string
    description: string
    format: string
    duration_minutes: number
    max_attendees?: number | null
    price_usd: number
    price_nis?: number | null
    audience_level: string
    includes?: string | null
    target_industries?: string | null
    customizable?: boolean
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutOfferingInput
  }

  export type OfferingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    format?: StringFieldUpdateOperationsInput | string
    duration_minutes?: IntFieldUpdateOperationsInput | number
    max_attendees?: NullableIntFieldUpdateOperationsInput | number | null
    price_usd?: IntFieldUpdateOperationsInput | number
    price_nis?: NullableIntFieldUpdateOperationsInput | number | null
    audience_level?: StringFieldUpdateOperationsInput | string
    includes?: NullableStringFieldUpdateOperationsInput | string | null
    target_industries?: NullableStringFieldUpdateOperationsInput | string | null
    customizable?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutOfferingNestedInput
    expert?: ExpertUpdateOneRequiredWithoutOfferingsNestedInput
  }

  export type OfferingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expert_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    format?: StringFieldUpdateOperationsInput | string
    duration_minutes?: IntFieldUpdateOperationsInput | number
    max_attendees?: NullableIntFieldUpdateOperationsInput | number | null
    price_usd?: IntFieldUpdateOperationsInput | number
    price_nis?: NullableIntFieldUpdateOperationsInput | number | null
    audience_level?: StringFieldUpdateOperationsInput | string
    includes?: NullableStringFieldUpdateOperationsInput | string | null
    target_industries?: NullableStringFieldUpdateOperationsInput | string | null
    customizable?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutOfferingNestedInput
  }

  export type OfferingCreateManyInput = {
    id?: string
    expert_id: string
    title: string
    type?: string
    description: string
    format: string
    duration_minutes: number
    max_attendees?: number | null
    price_usd: number
    price_nis?: number | null
    audience_level: string
    includes?: string | null
    target_industries?: string | null
    customizable?: boolean
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type OfferingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    format?: StringFieldUpdateOperationsInput | string
    duration_minutes?: IntFieldUpdateOperationsInput | number
    max_attendees?: NullableIntFieldUpdateOperationsInput | number | null
    price_usd?: IntFieldUpdateOperationsInput | number
    price_nis?: NullableIntFieldUpdateOperationsInput | number | null
    audience_level?: StringFieldUpdateOperationsInput | string
    includes?: NullableStringFieldUpdateOperationsInput | string | null
    target_industries?: NullableStringFieldUpdateOperationsInput | string | null
    customizable?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OfferingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    expert_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    format?: StringFieldUpdateOperationsInput | string
    duration_minutes?: IntFieldUpdateOperationsInput | number
    max_attendees?: NullableIntFieldUpdateOperationsInput | number | null
    price_usd?: IntFieldUpdateOperationsInput | number
    price_nis?: NullableIntFieldUpdateOperationsInput | number | null
    audience_level?: StringFieldUpdateOperationsInput | string
    includes?: NullableStringFieldUpdateOperationsInput | string | null
    target_industries?: NullableStringFieldUpdateOperationsInput | string | null
    customizable?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateInput = {
    id?: string
    company_name: string
    company_contact_name: string
    company_email: string
    company_phone?: string | null
    date_requested: Date | string
    attendees_count?: number | null
    notes_from_client?: string | null
    status?: string
    quote_amount_usd: number
    quote_amount_nis?: number | null
    payment_method?: string
    payment_status?: string
    stripe_payment_id?: string | null
    platform_fee_usd?: number | null
    platform_fee_nis?: number | null
    expert_payout_usd?: number | null
    expert_payout_nis?: number | null
    notes_from_expert?: string | null
    payment_link?: string | null
    invoice_link?: string | null
    transaction_id?: string | null
    expert_response_date?: Date | string | null
    event_date_confirmed?: Date | string | null
    review_sent?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    expert: ExpertCreateNestedOneWithoutBookingsInput
    offering: OfferingCreateNestedOneWithoutBookingsInput
    reviews?: ReviewCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateInput = {
    id?: string
    expert_id: string
    offering_id: string
    company_name: string
    company_contact_name: string
    company_email: string
    company_phone?: string | null
    date_requested: Date | string
    attendees_count?: number | null
    notes_from_client?: string | null
    status?: string
    quote_amount_usd: number
    quote_amount_nis?: number | null
    payment_method?: string
    payment_status?: string
    stripe_payment_id?: string | null
    platform_fee_usd?: number | null
    platform_fee_nis?: number | null
    expert_payout_usd?: number | null
    expert_payout_nis?: number | null
    notes_from_expert?: string | null
    payment_link?: string | null
    invoice_link?: string | null
    transaction_id?: string | null
    expert_response_date?: Date | string | null
    event_date_confirmed?: Date | string | null
    review_sent?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    reviews?: ReviewUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    company_contact_name?: StringFieldUpdateOperationsInput | string
    company_email?: StringFieldUpdateOperationsInput | string
    company_phone?: NullableStringFieldUpdateOperationsInput | string | null
    date_requested?: DateTimeFieldUpdateOperationsInput | Date | string
    attendees_count?: NullableIntFieldUpdateOperationsInput | number | null
    notes_from_client?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    quote_amount_usd?: IntFieldUpdateOperationsInput | number
    quote_amount_nis?: NullableIntFieldUpdateOperationsInput | number | null
    payment_method?: StringFieldUpdateOperationsInput | string
    payment_status?: StringFieldUpdateOperationsInput | string
    stripe_payment_id?: NullableStringFieldUpdateOperationsInput | string | null
    platform_fee_usd?: NullableIntFieldUpdateOperationsInput | number | null
    platform_fee_nis?: NullableIntFieldUpdateOperationsInput | number | null
    expert_payout_usd?: NullableIntFieldUpdateOperationsInput | number | null
    expert_payout_nis?: NullableIntFieldUpdateOperationsInput | number | null
    notes_from_expert?: NullableStringFieldUpdateOperationsInput | string | null
    payment_link?: NullableStringFieldUpdateOperationsInput | string | null
    invoice_link?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    expert_response_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    event_date_confirmed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    review_sent?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expert?: ExpertUpdateOneRequiredWithoutBookingsNestedInput
    offering?: OfferingUpdateOneRequiredWithoutBookingsNestedInput
    reviews?: ReviewUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expert_id?: StringFieldUpdateOperationsInput | string
    offering_id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    company_contact_name?: StringFieldUpdateOperationsInput | string
    company_email?: StringFieldUpdateOperationsInput | string
    company_phone?: NullableStringFieldUpdateOperationsInput | string | null
    date_requested?: DateTimeFieldUpdateOperationsInput | Date | string
    attendees_count?: NullableIntFieldUpdateOperationsInput | number | null
    notes_from_client?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    quote_amount_usd?: IntFieldUpdateOperationsInput | number
    quote_amount_nis?: NullableIntFieldUpdateOperationsInput | number | null
    payment_method?: StringFieldUpdateOperationsInput | string
    payment_status?: StringFieldUpdateOperationsInput | string
    stripe_payment_id?: NullableStringFieldUpdateOperationsInput | string | null
    platform_fee_usd?: NullableIntFieldUpdateOperationsInput | number | null
    platform_fee_nis?: NullableIntFieldUpdateOperationsInput | number | null
    expert_payout_usd?: NullableIntFieldUpdateOperationsInput | number | null
    expert_payout_nis?: NullableIntFieldUpdateOperationsInput | number | null
    notes_from_expert?: NullableStringFieldUpdateOperationsInput | string | null
    payment_link?: NullableStringFieldUpdateOperationsInput | string | null
    invoice_link?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    expert_response_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    event_date_confirmed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    review_sent?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingCreateManyInput = {
    id?: string
    expert_id: string
    offering_id: string
    company_name: string
    company_contact_name: string
    company_email: string
    company_phone?: string | null
    date_requested: Date | string
    attendees_count?: number | null
    notes_from_client?: string | null
    status?: string
    quote_amount_usd: number
    quote_amount_nis?: number | null
    payment_method?: string
    payment_status?: string
    stripe_payment_id?: string | null
    platform_fee_usd?: number | null
    platform_fee_nis?: number | null
    expert_payout_usd?: number | null
    expert_payout_nis?: number | null
    notes_from_expert?: string | null
    payment_link?: string | null
    invoice_link?: string | null
    transaction_id?: string | null
    expert_response_date?: Date | string | null
    event_date_confirmed?: Date | string | null
    review_sent?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type BookingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    company_contact_name?: StringFieldUpdateOperationsInput | string
    company_email?: StringFieldUpdateOperationsInput | string
    company_phone?: NullableStringFieldUpdateOperationsInput | string | null
    date_requested?: DateTimeFieldUpdateOperationsInput | Date | string
    attendees_count?: NullableIntFieldUpdateOperationsInput | number | null
    notes_from_client?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    quote_amount_usd?: IntFieldUpdateOperationsInput | number
    quote_amount_nis?: NullableIntFieldUpdateOperationsInput | number | null
    payment_method?: StringFieldUpdateOperationsInput | string
    payment_status?: StringFieldUpdateOperationsInput | string
    stripe_payment_id?: NullableStringFieldUpdateOperationsInput | string | null
    platform_fee_usd?: NullableIntFieldUpdateOperationsInput | number | null
    platform_fee_nis?: NullableIntFieldUpdateOperationsInput | number | null
    expert_payout_usd?: NullableIntFieldUpdateOperationsInput | number | null
    expert_payout_nis?: NullableIntFieldUpdateOperationsInput | number | null
    notes_from_expert?: NullableStringFieldUpdateOperationsInput | string | null
    payment_link?: NullableStringFieldUpdateOperationsInput | string | null
    invoice_link?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    expert_response_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    event_date_confirmed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    review_sent?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    expert_id?: StringFieldUpdateOperationsInput | string
    offering_id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    company_contact_name?: StringFieldUpdateOperationsInput | string
    company_email?: StringFieldUpdateOperationsInput | string
    company_phone?: NullableStringFieldUpdateOperationsInput | string | null
    date_requested?: DateTimeFieldUpdateOperationsInput | Date | string
    attendees_count?: NullableIntFieldUpdateOperationsInput | number | null
    notes_from_client?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    quote_amount_usd?: IntFieldUpdateOperationsInput | number
    quote_amount_nis?: NullableIntFieldUpdateOperationsInput | number | null
    payment_method?: StringFieldUpdateOperationsInput | string
    payment_status?: StringFieldUpdateOperationsInput | string
    stripe_payment_id?: NullableStringFieldUpdateOperationsInput | string | null
    platform_fee_usd?: NullableIntFieldUpdateOperationsInput | number | null
    platform_fee_nis?: NullableIntFieldUpdateOperationsInput | number | null
    expert_payout_usd?: NullableIntFieldUpdateOperationsInput | number | null
    expert_payout_nis?: NullableIntFieldUpdateOperationsInput | number | null
    notes_from_expert?: NullableStringFieldUpdateOperationsInput | string | null
    payment_link?: NullableStringFieldUpdateOperationsInput | string | null
    invoice_link?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    expert_response_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    event_date_confirmed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    review_sent?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateInput = {
    id?: string
    company_name: string
    rating: number
    title?: string | null
    text: string
    verified?: boolean
    created_at?: Date | string
    booking?: BookingCreateNestedOneWithoutReviewsInput
    expert: ExpertCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: string
    booking_id?: string | null
    expert_id: string
    company_name: string
    rating: number
    title?: string | null
    text: string
    verified?: boolean
    created_at?: Date | string
  }

  export type ReviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    text?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: BookingUpdateOneWithoutReviewsNestedInput
    expert?: ExpertUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    booking_id?: NullableStringFieldUpdateOperationsInput | string | null
    expert_id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    text?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateManyInput = {
    id?: string
    booking_id?: string | null
    expert_id: string
    company_name: string
    rating: number
    title?: string | null
    text: string
    verified?: boolean
    created_at?: Date | string
  }

  export type ReviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    text?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    booking_id?: NullableStringFieldUpdateOperationsInput | string | null
    expert_id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    text?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    role?: string
    expert?: ExpertCreateNestedOneWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    role?: string
    expert?: ExpertUncheckedCreateNestedOneWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    expert?: ExpertUpdateOneWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    expert?: ExpertUncheckedUpdateOneWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    role?: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    id?: string
    slug: string
    name_he: string
    name_en: string
    posts?: BlogPostCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    slug: string
    name_he: string
    name_en: string
    posts?: BlogPostUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name_he?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    posts?: BlogPostUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name_he?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    posts?: BlogPostUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    slug: string
    name_he: string
    name_en: string
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name_he?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name_he?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
  }

  export type BlogPostCreateInput = {
    id?: string
    slug: string
    title_he: string
    title_en: string
    excerpt_he: string
    excerpt_en: string
    content_he: string
    content_en: string
    cover_image?: string | null
    published?: boolean
    publishedAt?: Date | string
    author_name: string
    created_at?: Date | string
    updated_at?: Date | string
    category: CategoryCreateNestedOneWithoutPostsInput
    faqs?: FAQCreateNestedManyWithoutPostInput
  }

  export type BlogPostUncheckedCreateInput = {
    id?: string
    slug: string
    title_he: string
    title_en: string
    excerpt_he: string
    excerpt_en: string
    content_he: string
    content_en: string
    cover_image?: string | null
    published?: boolean
    publishedAt?: Date | string
    category_id: string
    author_name: string
    created_at?: Date | string
    updated_at?: Date | string
    faqs?: FAQUncheckedCreateNestedManyWithoutPostInput
  }

  export type BlogPostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title_he?: StringFieldUpdateOperationsInput | string
    title_en?: StringFieldUpdateOperationsInput | string
    excerpt_he?: StringFieldUpdateOperationsInput | string
    excerpt_en?: StringFieldUpdateOperationsInput | string
    content_he?: StringFieldUpdateOperationsInput | string
    content_en?: StringFieldUpdateOperationsInput | string
    cover_image?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutPostsNestedInput
    faqs?: FAQUpdateManyWithoutPostNestedInput
  }

  export type BlogPostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title_he?: StringFieldUpdateOperationsInput | string
    title_en?: StringFieldUpdateOperationsInput | string
    excerpt_he?: StringFieldUpdateOperationsInput | string
    excerpt_en?: StringFieldUpdateOperationsInput | string
    content_he?: StringFieldUpdateOperationsInput | string
    content_en?: StringFieldUpdateOperationsInput | string
    cover_image?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category_id?: StringFieldUpdateOperationsInput | string
    author_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    faqs?: FAQUncheckedUpdateManyWithoutPostNestedInput
  }

  export type BlogPostCreateManyInput = {
    id?: string
    slug: string
    title_he: string
    title_en: string
    excerpt_he: string
    excerpt_en: string
    content_he: string
    content_en: string
    cover_image?: string | null
    published?: boolean
    publishedAt?: Date | string
    category_id: string
    author_name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type BlogPostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title_he?: StringFieldUpdateOperationsInput | string
    title_en?: StringFieldUpdateOperationsInput | string
    excerpt_he?: StringFieldUpdateOperationsInput | string
    excerpt_en?: StringFieldUpdateOperationsInput | string
    content_he?: StringFieldUpdateOperationsInput | string
    content_en?: StringFieldUpdateOperationsInput | string
    cover_image?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogPostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title_he?: StringFieldUpdateOperationsInput | string
    title_en?: StringFieldUpdateOperationsInput | string
    excerpt_he?: StringFieldUpdateOperationsInput | string
    excerpt_en?: StringFieldUpdateOperationsInput | string
    content_he?: StringFieldUpdateOperationsInput | string
    content_en?: StringFieldUpdateOperationsInput | string
    cover_image?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category_id?: StringFieldUpdateOperationsInput | string
    author_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FAQCreateInput = {
    id?: string
    question_he: string
    answer_he: string
    question_en: string
    answer_en: string
    post: BlogPostCreateNestedOneWithoutFaqsInput
  }

  export type FAQUncheckedCreateInput = {
    id?: string
    question_he: string
    answer_he: string
    question_en: string
    answer_en: string
    post_id: string
  }

  export type FAQUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    question_he?: StringFieldUpdateOperationsInput | string
    answer_he?: StringFieldUpdateOperationsInput | string
    question_en?: StringFieldUpdateOperationsInput | string
    answer_en?: StringFieldUpdateOperationsInput | string
    post?: BlogPostUpdateOneRequiredWithoutFaqsNestedInput
  }

  export type FAQUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    question_he?: StringFieldUpdateOperationsInput | string
    answer_he?: StringFieldUpdateOperationsInput | string
    question_en?: StringFieldUpdateOperationsInput | string
    answer_en?: StringFieldUpdateOperationsInput | string
    post_id?: StringFieldUpdateOperationsInput | string
  }

  export type FAQCreateManyInput = {
    id?: string
    question_he: string
    answer_he: string
    question_en: string
    answer_en: string
    post_id: string
  }

  export type FAQUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    question_he?: StringFieldUpdateOperationsInput | string
    answer_he?: StringFieldUpdateOperationsInput | string
    question_en?: StringFieldUpdateOperationsInput | string
    answer_en?: StringFieldUpdateOperationsInput | string
  }

  export type FAQUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    question_he?: StringFieldUpdateOperationsInput | string
    answer_he?: StringFieldUpdateOperationsInput | string
    question_en?: StringFieldUpdateOperationsInput | string
    answer_en?: StringFieldUpdateOperationsInput | string
    post_id?: StringFieldUpdateOperationsInput | string
  }

  export type SpecializationCreateInput = {
    id?: string
    slug: string
    name_he: string
    name_en: string
    description_he?: string | null
    description_en?: string | null
    metaTitle_he?: string | null
    metaTitle_en?: string | null
    metaDescription_he?: string | null
    metaDescription_en?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    experts?: ExpertCreateNestedManyWithoutSpecializations_listInput
    tasks?: TaskCreateNestedManyWithoutSpecializationsInput
  }

  export type SpecializationUncheckedCreateInput = {
    id?: string
    slug: string
    name_he: string
    name_en: string
    description_he?: string | null
    description_en?: string | null
    metaTitle_he?: string | null
    metaTitle_en?: string | null
    metaDescription_he?: string | null
    metaDescription_en?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    experts?: ExpertUncheckedCreateNestedManyWithoutSpecializations_listInput
    tasks?: TaskUncheckedCreateNestedManyWithoutSpecializationsInput
  }

  export type SpecializationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name_he?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    description_he?: NullableStringFieldUpdateOperationsInput | string | null
    description_en?: NullableStringFieldUpdateOperationsInput | string | null
    metaTitle_he?: NullableStringFieldUpdateOperationsInput | string | null
    metaTitle_en?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription_he?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription_en?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    experts?: ExpertUpdateManyWithoutSpecializations_listNestedInput
    tasks?: TaskUpdateManyWithoutSpecializationsNestedInput
  }

  export type SpecializationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name_he?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    description_he?: NullableStringFieldUpdateOperationsInput | string | null
    description_en?: NullableStringFieldUpdateOperationsInput | string | null
    metaTitle_he?: NullableStringFieldUpdateOperationsInput | string | null
    metaTitle_en?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription_he?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription_en?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    experts?: ExpertUncheckedUpdateManyWithoutSpecializations_listNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutSpecializationsNestedInput
  }

  export type SpecializationCreateManyInput = {
    id?: string
    slug: string
    name_he: string
    name_en: string
    description_he?: string | null
    description_en?: string | null
    metaTitle_he?: string | null
    metaTitle_en?: string | null
    metaDescription_he?: string | null
    metaDescription_en?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SpecializationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name_he?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    description_he?: NullableStringFieldUpdateOperationsInput | string | null
    description_en?: NullableStringFieldUpdateOperationsInput | string | null
    metaTitle_he?: NullableStringFieldUpdateOperationsInput | string | null
    metaTitle_en?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription_he?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription_en?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpecializationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name_he?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    description_he?: NullableStringFieldUpdateOperationsInput | string | null
    description_en?: NullableStringFieldUpdateOperationsInput | string | null
    metaTitle_he?: NullableStringFieldUpdateOperationsInput | string | null
    metaTitle_en?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription_he?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription_en?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCreateInput = {
    id?: string
    slug: string
    title: string
    description: string
    budget_range?: string | null
    status?: string
    approved?: boolean
    client_name?: string | null
    client_email?: string | null
    client_company?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    specializations?: SpecializationCreateNestedManyWithoutTasksInput
    bids?: BidCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateInput = {
    id?: string
    slug: string
    title: string
    description: string
    budget_range?: string | null
    status?: string
    approved?: boolean
    client_name?: string | null
    client_email?: string | null
    client_company?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    specializations?: SpecializationUncheckedCreateNestedManyWithoutTasksInput
    bids?: BidUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    budget_range?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    client_name?: NullableStringFieldUpdateOperationsInput | string | null
    client_email?: NullableStringFieldUpdateOperationsInput | string | null
    client_company?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    specializations?: SpecializationUpdateManyWithoutTasksNestedInput
    bids?: BidUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    budget_range?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    client_name?: NullableStringFieldUpdateOperationsInput | string | null
    client_email?: NullableStringFieldUpdateOperationsInput | string | null
    client_company?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    specializations?: SpecializationUncheckedUpdateManyWithoutTasksNestedInput
    bids?: BidUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskCreateManyInput = {
    id?: string
    slug: string
    title: string
    description: string
    budget_range?: string | null
    status?: string
    approved?: boolean
    client_name?: string | null
    client_email?: string | null
    client_company?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    budget_range?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    client_name?: NullableStringFieldUpdateOperationsInput | string | null
    client_email?: NullableStringFieldUpdateOperationsInput | string | null
    client_company?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    budget_range?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    client_name?: NullableStringFieldUpdateOperationsInput | string | null
    client_email?: NullableStringFieldUpdateOperationsInput | string | null
    client_company?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BidCreateInput = {
    id?: string
    amount?: number | null
    message?: string | null
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
    task: TaskCreateNestedOneWithoutBidsInput
    expert: ExpertCreateNestedOneWithoutBidsInput
  }

  export type BidUncheckedCreateInput = {
    id?: string
    task_id: string
    expert_id: string
    amount?: number | null
    message?: string | null
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type BidUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TaskUpdateOneRequiredWithoutBidsNestedInput
    expert?: ExpertUpdateOneRequiredWithoutBidsNestedInput
  }

  export type BidUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    task_id?: StringFieldUpdateOperationsInput | string
    expert_id?: StringFieldUpdateOperationsInput | string
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BidCreateManyInput = {
    id?: string
    task_id: string
    expert_id: string
    amount?: number | null
    message?: string | null
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type BidUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BidUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    task_id?: StringFieldUpdateOperationsInput | string
    expert_id?: StringFieldUpdateOperationsInput | string
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type BookingListRelationFilter = {
    every?: BookingWhereInput
    some?: BookingWhereInput
    none?: BookingWhereInput
  }

  export type OfferingListRelationFilter = {
    every?: OfferingWhereInput
    some?: OfferingWhereInput
    none?: OfferingWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type SpecializationListRelationFilter = {
    every?: SpecializationWhereInput
    some?: SpecializationWhereInput
    none?: SpecializationWhereInput
  }

  export type BidListRelationFilter = {
    every?: BidWhereInput
    some?: BidWhereInput
    none?: BidWhereInput
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OfferingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SpecializationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BidOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExpertCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    profile_image?: SortOrder
    company?: SortOrder
    average_rating?: SortOrder
    total_reviews?: SortOrder
    hourly_rate_usd?: SortOrder
    hourly_rate_nis?: SortOrder
    languages?: SortOrder
    verified?: SortOrder
    active?: SortOrder
    status?: SortOrder
    linkedin_profile?: SortOrder
    cv_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    email?: SortOrder
    bio_en?: SortOrder
    bio_he?: SortOrder
    name_he?: SortOrder
    specializations_en?: SortOrder
    specializations_he?: SortOrder
    title_en?: SortOrder
    title_he?: SortOrder
    userId?: SortOrder
  }

  export type ExpertAvgOrderByAggregateInput = {
    average_rating?: SortOrder
    total_reviews?: SortOrder
    hourly_rate_usd?: SortOrder
    hourly_rate_nis?: SortOrder
  }

  export type ExpertMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    profile_image?: SortOrder
    company?: SortOrder
    average_rating?: SortOrder
    total_reviews?: SortOrder
    hourly_rate_usd?: SortOrder
    hourly_rate_nis?: SortOrder
    languages?: SortOrder
    verified?: SortOrder
    active?: SortOrder
    status?: SortOrder
    linkedin_profile?: SortOrder
    cv_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    email?: SortOrder
    bio_en?: SortOrder
    bio_he?: SortOrder
    name_he?: SortOrder
    specializations_en?: SortOrder
    specializations_he?: SortOrder
    title_en?: SortOrder
    title_he?: SortOrder
    userId?: SortOrder
  }

  export type ExpertMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    profile_image?: SortOrder
    company?: SortOrder
    average_rating?: SortOrder
    total_reviews?: SortOrder
    hourly_rate_usd?: SortOrder
    hourly_rate_nis?: SortOrder
    languages?: SortOrder
    verified?: SortOrder
    active?: SortOrder
    status?: SortOrder
    linkedin_profile?: SortOrder
    cv_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    email?: SortOrder
    bio_en?: SortOrder
    bio_he?: SortOrder
    name_he?: SortOrder
    specializations_en?: SortOrder
    specializations_he?: SortOrder
    title_en?: SortOrder
    title_he?: SortOrder
    userId?: SortOrder
  }

  export type ExpertSumOrderByAggregateInput = {
    average_rating?: SortOrder
    total_reviews?: SortOrder
    hourly_rate_usd?: SortOrder
    hourly_rate_nis?: SortOrder
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type ExpertRelationFilter = {
    is?: ExpertWhereInput
    isNot?: ExpertWhereInput
  }

  export type OfferingCountOrderByAggregateInput = {
    id?: SortOrder
    expert_id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    description?: SortOrder
    format?: SortOrder
    duration_minutes?: SortOrder
    max_attendees?: SortOrder
    price_usd?: SortOrder
    price_nis?: SortOrder
    audience_level?: SortOrder
    includes?: SortOrder
    target_industries?: SortOrder
    customizable?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type OfferingAvgOrderByAggregateInput = {
    duration_minutes?: SortOrder
    max_attendees?: SortOrder
    price_usd?: SortOrder
    price_nis?: SortOrder
  }

  export type OfferingMaxOrderByAggregateInput = {
    id?: SortOrder
    expert_id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    description?: SortOrder
    format?: SortOrder
    duration_minutes?: SortOrder
    max_attendees?: SortOrder
    price_usd?: SortOrder
    price_nis?: SortOrder
    audience_level?: SortOrder
    includes?: SortOrder
    target_industries?: SortOrder
    customizable?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type OfferingMinOrderByAggregateInput = {
    id?: SortOrder
    expert_id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    description?: SortOrder
    format?: SortOrder
    duration_minutes?: SortOrder
    max_attendees?: SortOrder
    price_usd?: SortOrder
    price_nis?: SortOrder
    audience_level?: SortOrder
    includes?: SortOrder
    target_industries?: SortOrder
    customizable?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type OfferingSumOrderByAggregateInput = {
    duration_minutes?: SortOrder
    max_attendees?: SortOrder
    price_usd?: SortOrder
    price_nis?: SortOrder
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

  export type OfferingRelationFilter = {
    is?: OfferingWhereInput
    isNot?: OfferingWhereInput
  }

  export type BookingCountOrderByAggregateInput = {
    id?: SortOrder
    expert_id?: SortOrder
    offering_id?: SortOrder
    company_name?: SortOrder
    company_contact_name?: SortOrder
    company_email?: SortOrder
    company_phone?: SortOrder
    date_requested?: SortOrder
    attendees_count?: SortOrder
    notes_from_client?: SortOrder
    status?: SortOrder
    quote_amount_usd?: SortOrder
    quote_amount_nis?: SortOrder
    payment_method?: SortOrder
    payment_status?: SortOrder
    stripe_payment_id?: SortOrder
    platform_fee_usd?: SortOrder
    platform_fee_nis?: SortOrder
    expert_payout_usd?: SortOrder
    expert_payout_nis?: SortOrder
    notes_from_expert?: SortOrder
    payment_link?: SortOrder
    invoice_link?: SortOrder
    transaction_id?: SortOrder
    expert_response_date?: SortOrder
    event_date_confirmed?: SortOrder
    review_sent?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BookingAvgOrderByAggregateInput = {
    attendees_count?: SortOrder
    quote_amount_usd?: SortOrder
    quote_amount_nis?: SortOrder
    platform_fee_usd?: SortOrder
    platform_fee_nis?: SortOrder
    expert_payout_usd?: SortOrder
    expert_payout_nis?: SortOrder
  }

  export type BookingMaxOrderByAggregateInput = {
    id?: SortOrder
    expert_id?: SortOrder
    offering_id?: SortOrder
    company_name?: SortOrder
    company_contact_name?: SortOrder
    company_email?: SortOrder
    company_phone?: SortOrder
    date_requested?: SortOrder
    attendees_count?: SortOrder
    notes_from_client?: SortOrder
    status?: SortOrder
    quote_amount_usd?: SortOrder
    quote_amount_nis?: SortOrder
    payment_method?: SortOrder
    payment_status?: SortOrder
    stripe_payment_id?: SortOrder
    platform_fee_usd?: SortOrder
    platform_fee_nis?: SortOrder
    expert_payout_usd?: SortOrder
    expert_payout_nis?: SortOrder
    notes_from_expert?: SortOrder
    payment_link?: SortOrder
    invoice_link?: SortOrder
    transaction_id?: SortOrder
    expert_response_date?: SortOrder
    event_date_confirmed?: SortOrder
    review_sent?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BookingMinOrderByAggregateInput = {
    id?: SortOrder
    expert_id?: SortOrder
    offering_id?: SortOrder
    company_name?: SortOrder
    company_contact_name?: SortOrder
    company_email?: SortOrder
    company_phone?: SortOrder
    date_requested?: SortOrder
    attendees_count?: SortOrder
    notes_from_client?: SortOrder
    status?: SortOrder
    quote_amount_usd?: SortOrder
    quote_amount_nis?: SortOrder
    payment_method?: SortOrder
    payment_status?: SortOrder
    stripe_payment_id?: SortOrder
    platform_fee_usd?: SortOrder
    platform_fee_nis?: SortOrder
    expert_payout_usd?: SortOrder
    expert_payout_nis?: SortOrder
    notes_from_expert?: SortOrder
    payment_link?: SortOrder
    invoice_link?: SortOrder
    transaction_id?: SortOrder
    expert_response_date?: SortOrder
    event_date_confirmed?: SortOrder
    review_sent?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BookingSumOrderByAggregateInput = {
    attendees_count?: SortOrder
    quote_amount_usd?: SortOrder
    quote_amount_nis?: SortOrder
    platform_fee_usd?: SortOrder
    platform_fee_nis?: SortOrder
    expert_payout_usd?: SortOrder
    expert_payout_nis?: SortOrder
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

  export type BookingNullableRelationFilter = {
    is?: BookingWhereInput | null
    isNot?: BookingWhereInput | null
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    booking_id?: SortOrder
    expert_id?: SortOrder
    company_name?: SortOrder
    rating?: SortOrder
    title?: SortOrder
    text?: SortOrder
    verified?: SortOrder
    created_at?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    booking_id?: SortOrder
    expert_id?: SortOrder
    company_name?: SortOrder
    rating?: SortOrder
    title?: SortOrder
    text?: SortOrder
    verified?: SortOrder
    created_at?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    booking_id?: SortOrder
    expert_id?: SortOrder
    company_name?: SortOrder
    rating?: SortOrder
    title?: SortOrder
    text?: SortOrder
    verified?: SortOrder
    created_at?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type ExpertNullableRelationFilter = {
    is?: ExpertWhereInput | null
    isNot?: ExpertWhereInput | null
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    role?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    role?: SortOrder
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type BlogPostListRelationFilter = {
    every?: BlogPostWhereInput
    some?: BlogPostWhereInput
    none?: BlogPostWhereInput
  }

  export type BlogPostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name_he?: SortOrder
    name_en?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name_he?: SortOrder
    name_en?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name_he?: SortOrder
    name_en?: SortOrder
  }

  export type CategoryRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type FAQListRelationFilter = {
    every?: FAQWhereInput
    some?: FAQWhereInput
    none?: FAQWhereInput
  }

  export type FAQOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BlogPostCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title_he?: SortOrder
    title_en?: SortOrder
    excerpt_he?: SortOrder
    excerpt_en?: SortOrder
    content_he?: SortOrder
    content_en?: SortOrder
    cover_image?: SortOrder
    published?: SortOrder
    publishedAt?: SortOrder
    category_id?: SortOrder
    author_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BlogPostMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title_he?: SortOrder
    title_en?: SortOrder
    excerpt_he?: SortOrder
    excerpt_en?: SortOrder
    content_he?: SortOrder
    content_en?: SortOrder
    cover_image?: SortOrder
    published?: SortOrder
    publishedAt?: SortOrder
    category_id?: SortOrder
    author_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BlogPostMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title_he?: SortOrder
    title_en?: SortOrder
    excerpt_he?: SortOrder
    excerpt_en?: SortOrder
    content_he?: SortOrder
    content_en?: SortOrder
    cover_image?: SortOrder
    published?: SortOrder
    publishedAt?: SortOrder
    category_id?: SortOrder
    author_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BlogPostRelationFilter = {
    is?: BlogPostWhereInput
    isNot?: BlogPostWhereInput
  }

  export type FAQCountOrderByAggregateInput = {
    id?: SortOrder
    question_he?: SortOrder
    answer_he?: SortOrder
    question_en?: SortOrder
    answer_en?: SortOrder
    post_id?: SortOrder
  }

  export type FAQMaxOrderByAggregateInput = {
    id?: SortOrder
    question_he?: SortOrder
    answer_he?: SortOrder
    question_en?: SortOrder
    answer_en?: SortOrder
    post_id?: SortOrder
  }

  export type FAQMinOrderByAggregateInput = {
    id?: SortOrder
    question_he?: SortOrder
    answer_he?: SortOrder
    question_en?: SortOrder
    answer_en?: SortOrder
    post_id?: SortOrder
  }

  export type ExpertListRelationFilter = {
    every?: ExpertWhereInput
    some?: ExpertWhereInput
    none?: ExpertWhereInput
  }

  export type TaskListRelationFilter = {
    every?: TaskWhereInput
    some?: TaskWhereInput
    none?: TaskWhereInput
  }

  export type ExpertOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SpecializationCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name_he?: SortOrder
    name_en?: SortOrder
    description_he?: SortOrder
    description_en?: SortOrder
    metaTitle_he?: SortOrder
    metaTitle_en?: SortOrder
    metaDescription_he?: SortOrder
    metaDescription_en?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SpecializationMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name_he?: SortOrder
    name_en?: SortOrder
    description_he?: SortOrder
    description_en?: SortOrder
    metaTitle_he?: SortOrder
    metaTitle_en?: SortOrder
    metaDescription_he?: SortOrder
    metaDescription_en?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SpecializationMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name_he?: SortOrder
    name_en?: SortOrder
    description_he?: SortOrder
    description_en?: SortOrder
    metaTitle_he?: SortOrder
    metaTitle_en?: SortOrder
    metaDescription_he?: SortOrder
    metaDescription_en?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TaskCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    description?: SortOrder
    budget_range?: SortOrder
    status?: SortOrder
    approved?: SortOrder
    client_name?: SortOrder
    client_email?: SortOrder
    client_company?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TaskMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    description?: SortOrder
    budget_range?: SortOrder
    status?: SortOrder
    approved?: SortOrder
    client_name?: SortOrder
    client_email?: SortOrder
    client_company?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TaskMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    description?: SortOrder
    budget_range?: SortOrder
    status?: SortOrder
    approved?: SortOrder
    client_name?: SortOrder
    client_email?: SortOrder
    client_company?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TaskRelationFilter = {
    is?: TaskWhereInput
    isNot?: TaskWhereInput
  }

  export type BidTask_idExpert_idCompoundUniqueInput = {
    task_id: string
    expert_id: string
  }

  export type BidCountOrderByAggregateInput = {
    id?: SortOrder
    task_id?: SortOrder
    expert_id?: SortOrder
    amount?: SortOrder
    message?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BidAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type BidMaxOrderByAggregateInput = {
    id?: SortOrder
    task_id?: SortOrder
    expert_id?: SortOrder
    amount?: SortOrder
    message?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BidMinOrderByAggregateInput = {
    id?: SortOrder
    task_id?: SortOrder
    expert_id?: SortOrder
    amount?: SortOrder
    message?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BidSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type BookingCreateNestedManyWithoutExpertInput = {
    create?: XOR<BookingCreateWithoutExpertInput, BookingUncheckedCreateWithoutExpertInput> | BookingCreateWithoutExpertInput[] | BookingUncheckedCreateWithoutExpertInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutExpertInput | BookingCreateOrConnectWithoutExpertInput[]
    createMany?: BookingCreateManyExpertInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type OfferingCreateNestedManyWithoutExpertInput = {
    create?: XOR<OfferingCreateWithoutExpertInput, OfferingUncheckedCreateWithoutExpertInput> | OfferingCreateWithoutExpertInput[] | OfferingUncheckedCreateWithoutExpertInput[]
    connectOrCreate?: OfferingCreateOrConnectWithoutExpertInput | OfferingCreateOrConnectWithoutExpertInput[]
    createMany?: OfferingCreateManyExpertInputEnvelope
    connect?: OfferingWhereUniqueInput | OfferingWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutExpertInput = {
    create?: XOR<ReviewCreateWithoutExpertInput, ReviewUncheckedCreateWithoutExpertInput> | ReviewCreateWithoutExpertInput[] | ReviewUncheckedCreateWithoutExpertInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutExpertInput | ReviewCreateOrConnectWithoutExpertInput[]
    createMany?: ReviewCreateManyExpertInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type SpecializationCreateNestedManyWithoutExpertsInput = {
    create?: XOR<SpecializationCreateWithoutExpertsInput, SpecializationUncheckedCreateWithoutExpertsInput> | SpecializationCreateWithoutExpertsInput[] | SpecializationUncheckedCreateWithoutExpertsInput[]
    connectOrCreate?: SpecializationCreateOrConnectWithoutExpertsInput | SpecializationCreateOrConnectWithoutExpertsInput[]
    connect?: SpecializationWhereUniqueInput | SpecializationWhereUniqueInput[]
  }

  export type BidCreateNestedManyWithoutExpertInput = {
    create?: XOR<BidCreateWithoutExpertInput, BidUncheckedCreateWithoutExpertInput> | BidCreateWithoutExpertInput[] | BidUncheckedCreateWithoutExpertInput[]
    connectOrCreate?: BidCreateOrConnectWithoutExpertInput | BidCreateOrConnectWithoutExpertInput[]
    createMany?: BidCreateManyExpertInputEnvelope
    connect?: BidWhereUniqueInput | BidWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutExpertInput = {
    create?: XOR<UserCreateWithoutExpertInput, UserUncheckedCreateWithoutExpertInput>
    connectOrCreate?: UserCreateOrConnectWithoutExpertInput
    connect?: UserWhereUniqueInput
  }

  export type BookingUncheckedCreateNestedManyWithoutExpertInput = {
    create?: XOR<BookingCreateWithoutExpertInput, BookingUncheckedCreateWithoutExpertInput> | BookingCreateWithoutExpertInput[] | BookingUncheckedCreateWithoutExpertInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutExpertInput | BookingCreateOrConnectWithoutExpertInput[]
    createMany?: BookingCreateManyExpertInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type OfferingUncheckedCreateNestedManyWithoutExpertInput = {
    create?: XOR<OfferingCreateWithoutExpertInput, OfferingUncheckedCreateWithoutExpertInput> | OfferingCreateWithoutExpertInput[] | OfferingUncheckedCreateWithoutExpertInput[]
    connectOrCreate?: OfferingCreateOrConnectWithoutExpertInput | OfferingCreateOrConnectWithoutExpertInput[]
    createMany?: OfferingCreateManyExpertInputEnvelope
    connect?: OfferingWhereUniqueInput | OfferingWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutExpertInput = {
    create?: XOR<ReviewCreateWithoutExpertInput, ReviewUncheckedCreateWithoutExpertInput> | ReviewCreateWithoutExpertInput[] | ReviewUncheckedCreateWithoutExpertInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutExpertInput | ReviewCreateOrConnectWithoutExpertInput[]
    createMany?: ReviewCreateManyExpertInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type SpecializationUncheckedCreateNestedManyWithoutExpertsInput = {
    create?: XOR<SpecializationCreateWithoutExpertsInput, SpecializationUncheckedCreateWithoutExpertsInput> | SpecializationCreateWithoutExpertsInput[] | SpecializationUncheckedCreateWithoutExpertsInput[]
    connectOrCreate?: SpecializationCreateOrConnectWithoutExpertsInput | SpecializationCreateOrConnectWithoutExpertsInput[]
    connect?: SpecializationWhereUniqueInput | SpecializationWhereUniqueInput[]
  }

  export type BidUncheckedCreateNestedManyWithoutExpertInput = {
    create?: XOR<BidCreateWithoutExpertInput, BidUncheckedCreateWithoutExpertInput> | BidCreateWithoutExpertInput[] | BidUncheckedCreateWithoutExpertInput[]
    connectOrCreate?: BidCreateOrConnectWithoutExpertInput | BidCreateOrConnectWithoutExpertInput[]
    createMany?: BidCreateManyExpertInputEnvelope
    connect?: BidWhereUniqueInput | BidWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BookingUpdateManyWithoutExpertNestedInput = {
    create?: XOR<BookingCreateWithoutExpertInput, BookingUncheckedCreateWithoutExpertInput> | BookingCreateWithoutExpertInput[] | BookingUncheckedCreateWithoutExpertInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutExpertInput | BookingCreateOrConnectWithoutExpertInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutExpertInput | BookingUpsertWithWhereUniqueWithoutExpertInput[]
    createMany?: BookingCreateManyExpertInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutExpertInput | BookingUpdateWithWhereUniqueWithoutExpertInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutExpertInput | BookingUpdateManyWithWhereWithoutExpertInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type OfferingUpdateManyWithoutExpertNestedInput = {
    create?: XOR<OfferingCreateWithoutExpertInput, OfferingUncheckedCreateWithoutExpertInput> | OfferingCreateWithoutExpertInput[] | OfferingUncheckedCreateWithoutExpertInput[]
    connectOrCreate?: OfferingCreateOrConnectWithoutExpertInput | OfferingCreateOrConnectWithoutExpertInput[]
    upsert?: OfferingUpsertWithWhereUniqueWithoutExpertInput | OfferingUpsertWithWhereUniqueWithoutExpertInput[]
    createMany?: OfferingCreateManyExpertInputEnvelope
    set?: OfferingWhereUniqueInput | OfferingWhereUniqueInput[]
    disconnect?: OfferingWhereUniqueInput | OfferingWhereUniqueInput[]
    delete?: OfferingWhereUniqueInput | OfferingWhereUniqueInput[]
    connect?: OfferingWhereUniqueInput | OfferingWhereUniqueInput[]
    update?: OfferingUpdateWithWhereUniqueWithoutExpertInput | OfferingUpdateWithWhereUniqueWithoutExpertInput[]
    updateMany?: OfferingUpdateManyWithWhereWithoutExpertInput | OfferingUpdateManyWithWhereWithoutExpertInput[]
    deleteMany?: OfferingScalarWhereInput | OfferingScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutExpertNestedInput = {
    create?: XOR<ReviewCreateWithoutExpertInput, ReviewUncheckedCreateWithoutExpertInput> | ReviewCreateWithoutExpertInput[] | ReviewUncheckedCreateWithoutExpertInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutExpertInput | ReviewCreateOrConnectWithoutExpertInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutExpertInput | ReviewUpsertWithWhereUniqueWithoutExpertInput[]
    createMany?: ReviewCreateManyExpertInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutExpertInput | ReviewUpdateWithWhereUniqueWithoutExpertInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutExpertInput | ReviewUpdateManyWithWhereWithoutExpertInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type SpecializationUpdateManyWithoutExpertsNestedInput = {
    create?: XOR<SpecializationCreateWithoutExpertsInput, SpecializationUncheckedCreateWithoutExpertsInput> | SpecializationCreateWithoutExpertsInput[] | SpecializationUncheckedCreateWithoutExpertsInput[]
    connectOrCreate?: SpecializationCreateOrConnectWithoutExpertsInput | SpecializationCreateOrConnectWithoutExpertsInput[]
    upsert?: SpecializationUpsertWithWhereUniqueWithoutExpertsInput | SpecializationUpsertWithWhereUniqueWithoutExpertsInput[]
    set?: SpecializationWhereUniqueInput | SpecializationWhereUniqueInput[]
    disconnect?: SpecializationWhereUniqueInput | SpecializationWhereUniqueInput[]
    delete?: SpecializationWhereUniqueInput | SpecializationWhereUniqueInput[]
    connect?: SpecializationWhereUniqueInput | SpecializationWhereUniqueInput[]
    update?: SpecializationUpdateWithWhereUniqueWithoutExpertsInput | SpecializationUpdateWithWhereUniqueWithoutExpertsInput[]
    updateMany?: SpecializationUpdateManyWithWhereWithoutExpertsInput | SpecializationUpdateManyWithWhereWithoutExpertsInput[]
    deleteMany?: SpecializationScalarWhereInput | SpecializationScalarWhereInput[]
  }

  export type BidUpdateManyWithoutExpertNestedInput = {
    create?: XOR<BidCreateWithoutExpertInput, BidUncheckedCreateWithoutExpertInput> | BidCreateWithoutExpertInput[] | BidUncheckedCreateWithoutExpertInput[]
    connectOrCreate?: BidCreateOrConnectWithoutExpertInput | BidCreateOrConnectWithoutExpertInput[]
    upsert?: BidUpsertWithWhereUniqueWithoutExpertInput | BidUpsertWithWhereUniqueWithoutExpertInput[]
    createMany?: BidCreateManyExpertInputEnvelope
    set?: BidWhereUniqueInput | BidWhereUniqueInput[]
    disconnect?: BidWhereUniqueInput | BidWhereUniqueInput[]
    delete?: BidWhereUniqueInput | BidWhereUniqueInput[]
    connect?: BidWhereUniqueInput | BidWhereUniqueInput[]
    update?: BidUpdateWithWhereUniqueWithoutExpertInput | BidUpdateWithWhereUniqueWithoutExpertInput[]
    updateMany?: BidUpdateManyWithWhereWithoutExpertInput | BidUpdateManyWithWhereWithoutExpertInput[]
    deleteMany?: BidScalarWhereInput | BidScalarWhereInput[]
  }

  export type UserUpdateOneWithoutExpertNestedInput = {
    create?: XOR<UserCreateWithoutExpertInput, UserUncheckedCreateWithoutExpertInput>
    connectOrCreate?: UserCreateOrConnectWithoutExpertInput
    upsert?: UserUpsertWithoutExpertInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutExpertInput, UserUpdateWithoutExpertInput>, UserUncheckedUpdateWithoutExpertInput>
  }

  export type BookingUncheckedUpdateManyWithoutExpertNestedInput = {
    create?: XOR<BookingCreateWithoutExpertInput, BookingUncheckedCreateWithoutExpertInput> | BookingCreateWithoutExpertInput[] | BookingUncheckedCreateWithoutExpertInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutExpertInput | BookingCreateOrConnectWithoutExpertInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutExpertInput | BookingUpsertWithWhereUniqueWithoutExpertInput[]
    createMany?: BookingCreateManyExpertInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutExpertInput | BookingUpdateWithWhereUniqueWithoutExpertInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutExpertInput | BookingUpdateManyWithWhereWithoutExpertInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type OfferingUncheckedUpdateManyWithoutExpertNestedInput = {
    create?: XOR<OfferingCreateWithoutExpertInput, OfferingUncheckedCreateWithoutExpertInput> | OfferingCreateWithoutExpertInput[] | OfferingUncheckedCreateWithoutExpertInput[]
    connectOrCreate?: OfferingCreateOrConnectWithoutExpertInput | OfferingCreateOrConnectWithoutExpertInput[]
    upsert?: OfferingUpsertWithWhereUniqueWithoutExpertInput | OfferingUpsertWithWhereUniqueWithoutExpertInput[]
    createMany?: OfferingCreateManyExpertInputEnvelope
    set?: OfferingWhereUniqueInput | OfferingWhereUniqueInput[]
    disconnect?: OfferingWhereUniqueInput | OfferingWhereUniqueInput[]
    delete?: OfferingWhereUniqueInput | OfferingWhereUniqueInput[]
    connect?: OfferingWhereUniqueInput | OfferingWhereUniqueInput[]
    update?: OfferingUpdateWithWhereUniqueWithoutExpertInput | OfferingUpdateWithWhereUniqueWithoutExpertInput[]
    updateMany?: OfferingUpdateManyWithWhereWithoutExpertInput | OfferingUpdateManyWithWhereWithoutExpertInput[]
    deleteMany?: OfferingScalarWhereInput | OfferingScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutExpertNestedInput = {
    create?: XOR<ReviewCreateWithoutExpertInput, ReviewUncheckedCreateWithoutExpertInput> | ReviewCreateWithoutExpertInput[] | ReviewUncheckedCreateWithoutExpertInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutExpertInput | ReviewCreateOrConnectWithoutExpertInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutExpertInput | ReviewUpsertWithWhereUniqueWithoutExpertInput[]
    createMany?: ReviewCreateManyExpertInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutExpertInput | ReviewUpdateWithWhereUniqueWithoutExpertInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutExpertInput | ReviewUpdateManyWithWhereWithoutExpertInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type SpecializationUncheckedUpdateManyWithoutExpertsNestedInput = {
    create?: XOR<SpecializationCreateWithoutExpertsInput, SpecializationUncheckedCreateWithoutExpertsInput> | SpecializationCreateWithoutExpertsInput[] | SpecializationUncheckedCreateWithoutExpertsInput[]
    connectOrCreate?: SpecializationCreateOrConnectWithoutExpertsInput | SpecializationCreateOrConnectWithoutExpertsInput[]
    upsert?: SpecializationUpsertWithWhereUniqueWithoutExpertsInput | SpecializationUpsertWithWhereUniqueWithoutExpertsInput[]
    set?: SpecializationWhereUniqueInput | SpecializationWhereUniqueInput[]
    disconnect?: SpecializationWhereUniqueInput | SpecializationWhereUniqueInput[]
    delete?: SpecializationWhereUniqueInput | SpecializationWhereUniqueInput[]
    connect?: SpecializationWhereUniqueInput | SpecializationWhereUniqueInput[]
    update?: SpecializationUpdateWithWhereUniqueWithoutExpertsInput | SpecializationUpdateWithWhereUniqueWithoutExpertsInput[]
    updateMany?: SpecializationUpdateManyWithWhereWithoutExpertsInput | SpecializationUpdateManyWithWhereWithoutExpertsInput[]
    deleteMany?: SpecializationScalarWhereInput | SpecializationScalarWhereInput[]
  }

  export type BidUncheckedUpdateManyWithoutExpertNestedInput = {
    create?: XOR<BidCreateWithoutExpertInput, BidUncheckedCreateWithoutExpertInput> | BidCreateWithoutExpertInput[] | BidUncheckedCreateWithoutExpertInput[]
    connectOrCreate?: BidCreateOrConnectWithoutExpertInput | BidCreateOrConnectWithoutExpertInput[]
    upsert?: BidUpsertWithWhereUniqueWithoutExpertInput | BidUpsertWithWhereUniqueWithoutExpertInput[]
    createMany?: BidCreateManyExpertInputEnvelope
    set?: BidWhereUniqueInput | BidWhereUniqueInput[]
    disconnect?: BidWhereUniqueInput | BidWhereUniqueInput[]
    delete?: BidWhereUniqueInput | BidWhereUniqueInput[]
    connect?: BidWhereUniqueInput | BidWhereUniqueInput[]
    update?: BidUpdateWithWhereUniqueWithoutExpertInput | BidUpdateWithWhereUniqueWithoutExpertInput[]
    updateMany?: BidUpdateManyWithWhereWithoutExpertInput | BidUpdateManyWithWhereWithoutExpertInput[]
    deleteMany?: BidScalarWhereInput | BidScalarWhereInput[]
  }

  export type BookingCreateNestedManyWithoutOfferingInput = {
    create?: XOR<BookingCreateWithoutOfferingInput, BookingUncheckedCreateWithoutOfferingInput> | BookingCreateWithoutOfferingInput[] | BookingUncheckedCreateWithoutOfferingInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutOfferingInput | BookingCreateOrConnectWithoutOfferingInput[]
    createMany?: BookingCreateManyOfferingInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type ExpertCreateNestedOneWithoutOfferingsInput = {
    create?: XOR<ExpertCreateWithoutOfferingsInput, ExpertUncheckedCreateWithoutOfferingsInput>
    connectOrCreate?: ExpertCreateOrConnectWithoutOfferingsInput
    connect?: ExpertWhereUniqueInput
  }

  export type BookingUncheckedCreateNestedManyWithoutOfferingInput = {
    create?: XOR<BookingCreateWithoutOfferingInput, BookingUncheckedCreateWithoutOfferingInput> | BookingCreateWithoutOfferingInput[] | BookingUncheckedCreateWithoutOfferingInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutOfferingInput | BookingCreateOrConnectWithoutOfferingInput[]
    createMany?: BookingCreateManyOfferingInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type BookingUpdateManyWithoutOfferingNestedInput = {
    create?: XOR<BookingCreateWithoutOfferingInput, BookingUncheckedCreateWithoutOfferingInput> | BookingCreateWithoutOfferingInput[] | BookingUncheckedCreateWithoutOfferingInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutOfferingInput | BookingCreateOrConnectWithoutOfferingInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutOfferingInput | BookingUpsertWithWhereUniqueWithoutOfferingInput[]
    createMany?: BookingCreateManyOfferingInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutOfferingInput | BookingUpdateWithWhereUniqueWithoutOfferingInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutOfferingInput | BookingUpdateManyWithWhereWithoutOfferingInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type ExpertUpdateOneRequiredWithoutOfferingsNestedInput = {
    create?: XOR<ExpertCreateWithoutOfferingsInput, ExpertUncheckedCreateWithoutOfferingsInput>
    connectOrCreate?: ExpertCreateOrConnectWithoutOfferingsInput
    upsert?: ExpertUpsertWithoutOfferingsInput
    connect?: ExpertWhereUniqueInput
    update?: XOR<XOR<ExpertUpdateToOneWithWhereWithoutOfferingsInput, ExpertUpdateWithoutOfferingsInput>, ExpertUncheckedUpdateWithoutOfferingsInput>
  }

  export type BookingUncheckedUpdateManyWithoutOfferingNestedInput = {
    create?: XOR<BookingCreateWithoutOfferingInput, BookingUncheckedCreateWithoutOfferingInput> | BookingCreateWithoutOfferingInput[] | BookingUncheckedCreateWithoutOfferingInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutOfferingInput | BookingCreateOrConnectWithoutOfferingInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutOfferingInput | BookingUpsertWithWhereUniqueWithoutOfferingInput[]
    createMany?: BookingCreateManyOfferingInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutOfferingInput | BookingUpdateWithWhereUniqueWithoutOfferingInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutOfferingInput | BookingUpdateManyWithWhereWithoutOfferingInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type ExpertCreateNestedOneWithoutBookingsInput = {
    create?: XOR<ExpertCreateWithoutBookingsInput, ExpertUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: ExpertCreateOrConnectWithoutBookingsInput
    connect?: ExpertWhereUniqueInput
  }

  export type OfferingCreateNestedOneWithoutBookingsInput = {
    create?: XOR<OfferingCreateWithoutBookingsInput, OfferingUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: OfferingCreateOrConnectWithoutBookingsInput
    connect?: OfferingWhereUniqueInput
  }

  export type ReviewCreateNestedManyWithoutBookingInput = {
    create?: XOR<ReviewCreateWithoutBookingInput, ReviewUncheckedCreateWithoutBookingInput> | ReviewCreateWithoutBookingInput[] | ReviewUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutBookingInput | ReviewCreateOrConnectWithoutBookingInput[]
    createMany?: ReviewCreateManyBookingInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutBookingInput = {
    create?: XOR<ReviewCreateWithoutBookingInput, ReviewUncheckedCreateWithoutBookingInput> | ReviewCreateWithoutBookingInput[] | ReviewUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutBookingInput | ReviewCreateOrConnectWithoutBookingInput[]
    createMany?: ReviewCreateManyBookingInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ExpertUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<ExpertCreateWithoutBookingsInput, ExpertUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: ExpertCreateOrConnectWithoutBookingsInput
    upsert?: ExpertUpsertWithoutBookingsInput
    connect?: ExpertWhereUniqueInput
    update?: XOR<XOR<ExpertUpdateToOneWithWhereWithoutBookingsInput, ExpertUpdateWithoutBookingsInput>, ExpertUncheckedUpdateWithoutBookingsInput>
  }

  export type OfferingUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<OfferingCreateWithoutBookingsInput, OfferingUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: OfferingCreateOrConnectWithoutBookingsInput
    upsert?: OfferingUpsertWithoutBookingsInput
    connect?: OfferingWhereUniqueInput
    update?: XOR<XOR<OfferingUpdateToOneWithWhereWithoutBookingsInput, OfferingUpdateWithoutBookingsInput>, OfferingUncheckedUpdateWithoutBookingsInput>
  }

  export type ReviewUpdateManyWithoutBookingNestedInput = {
    create?: XOR<ReviewCreateWithoutBookingInput, ReviewUncheckedCreateWithoutBookingInput> | ReviewCreateWithoutBookingInput[] | ReviewUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutBookingInput | ReviewCreateOrConnectWithoutBookingInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutBookingInput | ReviewUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: ReviewCreateManyBookingInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutBookingInput | ReviewUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutBookingInput | ReviewUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutBookingNestedInput = {
    create?: XOR<ReviewCreateWithoutBookingInput, ReviewUncheckedCreateWithoutBookingInput> | ReviewCreateWithoutBookingInput[] | ReviewUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutBookingInput | ReviewCreateOrConnectWithoutBookingInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutBookingInput | ReviewUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: ReviewCreateManyBookingInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutBookingInput | ReviewUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutBookingInput | ReviewUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type BookingCreateNestedOneWithoutReviewsInput = {
    create?: XOR<BookingCreateWithoutReviewsInput, BookingUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: BookingCreateOrConnectWithoutReviewsInput
    connect?: BookingWhereUniqueInput
  }

  export type ExpertCreateNestedOneWithoutReviewsInput = {
    create?: XOR<ExpertCreateWithoutReviewsInput, ExpertUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: ExpertCreateOrConnectWithoutReviewsInput
    connect?: ExpertWhereUniqueInput
  }

  export type BookingUpdateOneWithoutReviewsNestedInput = {
    create?: XOR<BookingCreateWithoutReviewsInput, BookingUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: BookingCreateOrConnectWithoutReviewsInput
    upsert?: BookingUpsertWithoutReviewsInput
    disconnect?: BookingWhereInput | boolean
    delete?: BookingWhereInput | boolean
    connect?: BookingWhereUniqueInput
    update?: XOR<XOR<BookingUpdateToOneWithWhereWithoutReviewsInput, BookingUpdateWithoutReviewsInput>, BookingUncheckedUpdateWithoutReviewsInput>
  }

  export type ExpertUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<ExpertCreateWithoutReviewsInput, ExpertUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: ExpertCreateOrConnectWithoutReviewsInput
    upsert?: ExpertUpsertWithoutReviewsInput
    connect?: ExpertWhereUniqueInput
    update?: XOR<XOR<ExpertUpdateToOneWithWhereWithoutReviewsInput, ExpertUpdateWithoutReviewsInput>, ExpertUncheckedUpdateWithoutReviewsInput>
  }

  export type ExpertCreateNestedOneWithoutUserInput = {
    create?: XOR<ExpertCreateWithoutUserInput, ExpertUncheckedCreateWithoutUserInput>
    connectOrCreate?: ExpertCreateOrConnectWithoutUserInput
    connect?: ExpertWhereUniqueInput
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type ExpertUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ExpertCreateWithoutUserInput, ExpertUncheckedCreateWithoutUserInput>
    connectOrCreate?: ExpertCreateOrConnectWithoutUserInput
    connect?: ExpertWhereUniqueInput
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type ExpertUpdateOneWithoutUserNestedInput = {
    create?: XOR<ExpertCreateWithoutUserInput, ExpertUncheckedCreateWithoutUserInput>
    connectOrCreate?: ExpertCreateOrConnectWithoutUserInput
    upsert?: ExpertUpsertWithoutUserInput
    disconnect?: ExpertWhereInput | boolean
    delete?: ExpertWhereInput | boolean
    connect?: ExpertWhereUniqueInput
    update?: XOR<XOR<ExpertUpdateToOneWithWhereWithoutUserInput, ExpertUpdateWithoutUserInput>, ExpertUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type ExpertUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ExpertCreateWithoutUserInput, ExpertUncheckedCreateWithoutUserInput>
    connectOrCreate?: ExpertCreateOrConnectWithoutUserInput
    upsert?: ExpertUpsertWithoutUserInput
    disconnect?: ExpertWhereInput | boolean
    delete?: ExpertWhereInput | boolean
    connect?: ExpertWhereUniqueInput
    update?: XOR<XOR<ExpertUpdateToOneWithWhereWithoutUserInput, ExpertUpdateWithoutUserInput>, ExpertUncheckedUpdateWithoutUserInput>
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type BlogPostCreateNestedManyWithoutCategoryInput = {
    create?: XOR<BlogPostCreateWithoutCategoryInput, BlogPostUncheckedCreateWithoutCategoryInput> | BlogPostCreateWithoutCategoryInput[] | BlogPostUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BlogPostCreateOrConnectWithoutCategoryInput | BlogPostCreateOrConnectWithoutCategoryInput[]
    createMany?: BlogPostCreateManyCategoryInputEnvelope
    connect?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
  }

  export type BlogPostUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<BlogPostCreateWithoutCategoryInput, BlogPostUncheckedCreateWithoutCategoryInput> | BlogPostCreateWithoutCategoryInput[] | BlogPostUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BlogPostCreateOrConnectWithoutCategoryInput | BlogPostCreateOrConnectWithoutCategoryInput[]
    createMany?: BlogPostCreateManyCategoryInputEnvelope
    connect?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
  }

  export type BlogPostUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<BlogPostCreateWithoutCategoryInput, BlogPostUncheckedCreateWithoutCategoryInput> | BlogPostCreateWithoutCategoryInput[] | BlogPostUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BlogPostCreateOrConnectWithoutCategoryInput | BlogPostCreateOrConnectWithoutCategoryInput[]
    upsert?: BlogPostUpsertWithWhereUniqueWithoutCategoryInput | BlogPostUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: BlogPostCreateManyCategoryInputEnvelope
    set?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    disconnect?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    delete?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    connect?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    update?: BlogPostUpdateWithWhereUniqueWithoutCategoryInput | BlogPostUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: BlogPostUpdateManyWithWhereWithoutCategoryInput | BlogPostUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: BlogPostScalarWhereInput | BlogPostScalarWhereInput[]
  }

  export type BlogPostUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<BlogPostCreateWithoutCategoryInput, BlogPostUncheckedCreateWithoutCategoryInput> | BlogPostCreateWithoutCategoryInput[] | BlogPostUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BlogPostCreateOrConnectWithoutCategoryInput | BlogPostCreateOrConnectWithoutCategoryInput[]
    upsert?: BlogPostUpsertWithWhereUniqueWithoutCategoryInput | BlogPostUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: BlogPostCreateManyCategoryInputEnvelope
    set?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    disconnect?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    delete?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    connect?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    update?: BlogPostUpdateWithWhereUniqueWithoutCategoryInput | BlogPostUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: BlogPostUpdateManyWithWhereWithoutCategoryInput | BlogPostUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: BlogPostScalarWhereInput | BlogPostScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutPostsInput = {
    create?: XOR<CategoryCreateWithoutPostsInput, CategoryUncheckedCreateWithoutPostsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutPostsInput
    connect?: CategoryWhereUniqueInput
  }

  export type FAQCreateNestedManyWithoutPostInput = {
    create?: XOR<FAQCreateWithoutPostInput, FAQUncheckedCreateWithoutPostInput> | FAQCreateWithoutPostInput[] | FAQUncheckedCreateWithoutPostInput[]
    connectOrCreate?: FAQCreateOrConnectWithoutPostInput | FAQCreateOrConnectWithoutPostInput[]
    createMany?: FAQCreateManyPostInputEnvelope
    connect?: FAQWhereUniqueInput | FAQWhereUniqueInput[]
  }

  export type FAQUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<FAQCreateWithoutPostInput, FAQUncheckedCreateWithoutPostInput> | FAQCreateWithoutPostInput[] | FAQUncheckedCreateWithoutPostInput[]
    connectOrCreate?: FAQCreateOrConnectWithoutPostInput | FAQCreateOrConnectWithoutPostInput[]
    createMany?: FAQCreateManyPostInputEnvelope
    connect?: FAQWhereUniqueInput | FAQWhereUniqueInput[]
  }

  export type CategoryUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<CategoryCreateWithoutPostsInput, CategoryUncheckedCreateWithoutPostsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutPostsInput
    upsert?: CategoryUpsertWithoutPostsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutPostsInput, CategoryUpdateWithoutPostsInput>, CategoryUncheckedUpdateWithoutPostsInput>
  }

  export type FAQUpdateManyWithoutPostNestedInput = {
    create?: XOR<FAQCreateWithoutPostInput, FAQUncheckedCreateWithoutPostInput> | FAQCreateWithoutPostInput[] | FAQUncheckedCreateWithoutPostInput[]
    connectOrCreate?: FAQCreateOrConnectWithoutPostInput | FAQCreateOrConnectWithoutPostInput[]
    upsert?: FAQUpsertWithWhereUniqueWithoutPostInput | FAQUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: FAQCreateManyPostInputEnvelope
    set?: FAQWhereUniqueInput | FAQWhereUniqueInput[]
    disconnect?: FAQWhereUniqueInput | FAQWhereUniqueInput[]
    delete?: FAQWhereUniqueInput | FAQWhereUniqueInput[]
    connect?: FAQWhereUniqueInput | FAQWhereUniqueInput[]
    update?: FAQUpdateWithWhereUniqueWithoutPostInput | FAQUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: FAQUpdateManyWithWhereWithoutPostInput | FAQUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: FAQScalarWhereInput | FAQScalarWhereInput[]
  }

  export type FAQUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<FAQCreateWithoutPostInput, FAQUncheckedCreateWithoutPostInput> | FAQCreateWithoutPostInput[] | FAQUncheckedCreateWithoutPostInput[]
    connectOrCreate?: FAQCreateOrConnectWithoutPostInput | FAQCreateOrConnectWithoutPostInput[]
    upsert?: FAQUpsertWithWhereUniqueWithoutPostInput | FAQUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: FAQCreateManyPostInputEnvelope
    set?: FAQWhereUniqueInput | FAQWhereUniqueInput[]
    disconnect?: FAQWhereUniqueInput | FAQWhereUniqueInput[]
    delete?: FAQWhereUniqueInput | FAQWhereUniqueInput[]
    connect?: FAQWhereUniqueInput | FAQWhereUniqueInput[]
    update?: FAQUpdateWithWhereUniqueWithoutPostInput | FAQUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: FAQUpdateManyWithWhereWithoutPostInput | FAQUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: FAQScalarWhereInput | FAQScalarWhereInput[]
  }

  export type BlogPostCreateNestedOneWithoutFaqsInput = {
    create?: XOR<BlogPostCreateWithoutFaqsInput, BlogPostUncheckedCreateWithoutFaqsInput>
    connectOrCreate?: BlogPostCreateOrConnectWithoutFaqsInput
    connect?: BlogPostWhereUniqueInput
  }

  export type BlogPostUpdateOneRequiredWithoutFaqsNestedInput = {
    create?: XOR<BlogPostCreateWithoutFaqsInput, BlogPostUncheckedCreateWithoutFaqsInput>
    connectOrCreate?: BlogPostCreateOrConnectWithoutFaqsInput
    upsert?: BlogPostUpsertWithoutFaqsInput
    connect?: BlogPostWhereUniqueInput
    update?: XOR<XOR<BlogPostUpdateToOneWithWhereWithoutFaqsInput, BlogPostUpdateWithoutFaqsInput>, BlogPostUncheckedUpdateWithoutFaqsInput>
  }

  export type ExpertCreateNestedManyWithoutSpecializations_listInput = {
    create?: XOR<ExpertCreateWithoutSpecializations_listInput, ExpertUncheckedCreateWithoutSpecializations_listInput> | ExpertCreateWithoutSpecializations_listInput[] | ExpertUncheckedCreateWithoutSpecializations_listInput[]
    connectOrCreate?: ExpertCreateOrConnectWithoutSpecializations_listInput | ExpertCreateOrConnectWithoutSpecializations_listInput[]
    connect?: ExpertWhereUniqueInput | ExpertWhereUniqueInput[]
  }

  export type TaskCreateNestedManyWithoutSpecializationsInput = {
    create?: XOR<TaskCreateWithoutSpecializationsInput, TaskUncheckedCreateWithoutSpecializationsInput> | TaskCreateWithoutSpecializationsInput[] | TaskUncheckedCreateWithoutSpecializationsInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutSpecializationsInput | TaskCreateOrConnectWithoutSpecializationsInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type ExpertUncheckedCreateNestedManyWithoutSpecializations_listInput = {
    create?: XOR<ExpertCreateWithoutSpecializations_listInput, ExpertUncheckedCreateWithoutSpecializations_listInput> | ExpertCreateWithoutSpecializations_listInput[] | ExpertUncheckedCreateWithoutSpecializations_listInput[]
    connectOrCreate?: ExpertCreateOrConnectWithoutSpecializations_listInput | ExpertCreateOrConnectWithoutSpecializations_listInput[]
    connect?: ExpertWhereUniqueInput | ExpertWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutSpecializationsInput = {
    create?: XOR<TaskCreateWithoutSpecializationsInput, TaskUncheckedCreateWithoutSpecializationsInput> | TaskCreateWithoutSpecializationsInput[] | TaskUncheckedCreateWithoutSpecializationsInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutSpecializationsInput | TaskCreateOrConnectWithoutSpecializationsInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type ExpertUpdateManyWithoutSpecializations_listNestedInput = {
    create?: XOR<ExpertCreateWithoutSpecializations_listInput, ExpertUncheckedCreateWithoutSpecializations_listInput> | ExpertCreateWithoutSpecializations_listInput[] | ExpertUncheckedCreateWithoutSpecializations_listInput[]
    connectOrCreate?: ExpertCreateOrConnectWithoutSpecializations_listInput | ExpertCreateOrConnectWithoutSpecializations_listInput[]
    upsert?: ExpertUpsertWithWhereUniqueWithoutSpecializations_listInput | ExpertUpsertWithWhereUniqueWithoutSpecializations_listInput[]
    set?: ExpertWhereUniqueInput | ExpertWhereUniqueInput[]
    disconnect?: ExpertWhereUniqueInput | ExpertWhereUniqueInput[]
    delete?: ExpertWhereUniqueInput | ExpertWhereUniqueInput[]
    connect?: ExpertWhereUniqueInput | ExpertWhereUniqueInput[]
    update?: ExpertUpdateWithWhereUniqueWithoutSpecializations_listInput | ExpertUpdateWithWhereUniqueWithoutSpecializations_listInput[]
    updateMany?: ExpertUpdateManyWithWhereWithoutSpecializations_listInput | ExpertUpdateManyWithWhereWithoutSpecializations_listInput[]
    deleteMany?: ExpertScalarWhereInput | ExpertScalarWhereInput[]
  }

  export type TaskUpdateManyWithoutSpecializationsNestedInput = {
    create?: XOR<TaskCreateWithoutSpecializationsInput, TaskUncheckedCreateWithoutSpecializationsInput> | TaskCreateWithoutSpecializationsInput[] | TaskUncheckedCreateWithoutSpecializationsInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutSpecializationsInput | TaskCreateOrConnectWithoutSpecializationsInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutSpecializationsInput | TaskUpsertWithWhereUniqueWithoutSpecializationsInput[]
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutSpecializationsInput | TaskUpdateWithWhereUniqueWithoutSpecializationsInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutSpecializationsInput | TaskUpdateManyWithWhereWithoutSpecializationsInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type ExpertUncheckedUpdateManyWithoutSpecializations_listNestedInput = {
    create?: XOR<ExpertCreateWithoutSpecializations_listInput, ExpertUncheckedCreateWithoutSpecializations_listInput> | ExpertCreateWithoutSpecializations_listInput[] | ExpertUncheckedCreateWithoutSpecializations_listInput[]
    connectOrCreate?: ExpertCreateOrConnectWithoutSpecializations_listInput | ExpertCreateOrConnectWithoutSpecializations_listInput[]
    upsert?: ExpertUpsertWithWhereUniqueWithoutSpecializations_listInput | ExpertUpsertWithWhereUniqueWithoutSpecializations_listInput[]
    set?: ExpertWhereUniqueInput | ExpertWhereUniqueInput[]
    disconnect?: ExpertWhereUniqueInput | ExpertWhereUniqueInput[]
    delete?: ExpertWhereUniqueInput | ExpertWhereUniqueInput[]
    connect?: ExpertWhereUniqueInput | ExpertWhereUniqueInput[]
    update?: ExpertUpdateWithWhereUniqueWithoutSpecializations_listInput | ExpertUpdateWithWhereUniqueWithoutSpecializations_listInput[]
    updateMany?: ExpertUpdateManyWithWhereWithoutSpecializations_listInput | ExpertUpdateManyWithWhereWithoutSpecializations_listInput[]
    deleteMany?: ExpertScalarWhereInput | ExpertScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutSpecializationsNestedInput = {
    create?: XOR<TaskCreateWithoutSpecializationsInput, TaskUncheckedCreateWithoutSpecializationsInput> | TaskCreateWithoutSpecializationsInput[] | TaskUncheckedCreateWithoutSpecializationsInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutSpecializationsInput | TaskCreateOrConnectWithoutSpecializationsInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutSpecializationsInput | TaskUpsertWithWhereUniqueWithoutSpecializationsInput[]
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutSpecializationsInput | TaskUpdateWithWhereUniqueWithoutSpecializationsInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutSpecializationsInput | TaskUpdateManyWithWhereWithoutSpecializationsInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type SpecializationCreateNestedManyWithoutTasksInput = {
    create?: XOR<SpecializationCreateWithoutTasksInput, SpecializationUncheckedCreateWithoutTasksInput> | SpecializationCreateWithoutTasksInput[] | SpecializationUncheckedCreateWithoutTasksInput[]
    connectOrCreate?: SpecializationCreateOrConnectWithoutTasksInput | SpecializationCreateOrConnectWithoutTasksInput[]
    connect?: SpecializationWhereUniqueInput | SpecializationWhereUniqueInput[]
  }

  export type BidCreateNestedManyWithoutTaskInput = {
    create?: XOR<BidCreateWithoutTaskInput, BidUncheckedCreateWithoutTaskInput> | BidCreateWithoutTaskInput[] | BidUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: BidCreateOrConnectWithoutTaskInput | BidCreateOrConnectWithoutTaskInput[]
    createMany?: BidCreateManyTaskInputEnvelope
    connect?: BidWhereUniqueInput | BidWhereUniqueInput[]
  }

  export type SpecializationUncheckedCreateNestedManyWithoutTasksInput = {
    create?: XOR<SpecializationCreateWithoutTasksInput, SpecializationUncheckedCreateWithoutTasksInput> | SpecializationCreateWithoutTasksInput[] | SpecializationUncheckedCreateWithoutTasksInput[]
    connectOrCreate?: SpecializationCreateOrConnectWithoutTasksInput | SpecializationCreateOrConnectWithoutTasksInput[]
    connect?: SpecializationWhereUniqueInput | SpecializationWhereUniqueInput[]
  }

  export type BidUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<BidCreateWithoutTaskInput, BidUncheckedCreateWithoutTaskInput> | BidCreateWithoutTaskInput[] | BidUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: BidCreateOrConnectWithoutTaskInput | BidCreateOrConnectWithoutTaskInput[]
    createMany?: BidCreateManyTaskInputEnvelope
    connect?: BidWhereUniqueInput | BidWhereUniqueInput[]
  }

  export type SpecializationUpdateManyWithoutTasksNestedInput = {
    create?: XOR<SpecializationCreateWithoutTasksInput, SpecializationUncheckedCreateWithoutTasksInput> | SpecializationCreateWithoutTasksInput[] | SpecializationUncheckedCreateWithoutTasksInput[]
    connectOrCreate?: SpecializationCreateOrConnectWithoutTasksInput | SpecializationCreateOrConnectWithoutTasksInput[]
    upsert?: SpecializationUpsertWithWhereUniqueWithoutTasksInput | SpecializationUpsertWithWhereUniqueWithoutTasksInput[]
    set?: SpecializationWhereUniqueInput | SpecializationWhereUniqueInput[]
    disconnect?: SpecializationWhereUniqueInput | SpecializationWhereUniqueInput[]
    delete?: SpecializationWhereUniqueInput | SpecializationWhereUniqueInput[]
    connect?: SpecializationWhereUniqueInput | SpecializationWhereUniqueInput[]
    update?: SpecializationUpdateWithWhereUniqueWithoutTasksInput | SpecializationUpdateWithWhereUniqueWithoutTasksInput[]
    updateMany?: SpecializationUpdateManyWithWhereWithoutTasksInput | SpecializationUpdateManyWithWhereWithoutTasksInput[]
    deleteMany?: SpecializationScalarWhereInput | SpecializationScalarWhereInput[]
  }

  export type BidUpdateManyWithoutTaskNestedInput = {
    create?: XOR<BidCreateWithoutTaskInput, BidUncheckedCreateWithoutTaskInput> | BidCreateWithoutTaskInput[] | BidUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: BidCreateOrConnectWithoutTaskInput | BidCreateOrConnectWithoutTaskInput[]
    upsert?: BidUpsertWithWhereUniqueWithoutTaskInput | BidUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: BidCreateManyTaskInputEnvelope
    set?: BidWhereUniqueInput | BidWhereUniqueInput[]
    disconnect?: BidWhereUniqueInput | BidWhereUniqueInput[]
    delete?: BidWhereUniqueInput | BidWhereUniqueInput[]
    connect?: BidWhereUniqueInput | BidWhereUniqueInput[]
    update?: BidUpdateWithWhereUniqueWithoutTaskInput | BidUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: BidUpdateManyWithWhereWithoutTaskInput | BidUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: BidScalarWhereInput | BidScalarWhereInput[]
  }

  export type SpecializationUncheckedUpdateManyWithoutTasksNestedInput = {
    create?: XOR<SpecializationCreateWithoutTasksInput, SpecializationUncheckedCreateWithoutTasksInput> | SpecializationCreateWithoutTasksInput[] | SpecializationUncheckedCreateWithoutTasksInput[]
    connectOrCreate?: SpecializationCreateOrConnectWithoutTasksInput | SpecializationCreateOrConnectWithoutTasksInput[]
    upsert?: SpecializationUpsertWithWhereUniqueWithoutTasksInput | SpecializationUpsertWithWhereUniqueWithoutTasksInput[]
    set?: SpecializationWhereUniqueInput | SpecializationWhereUniqueInput[]
    disconnect?: SpecializationWhereUniqueInput | SpecializationWhereUniqueInput[]
    delete?: SpecializationWhereUniqueInput | SpecializationWhereUniqueInput[]
    connect?: SpecializationWhereUniqueInput | SpecializationWhereUniqueInput[]
    update?: SpecializationUpdateWithWhereUniqueWithoutTasksInput | SpecializationUpdateWithWhereUniqueWithoutTasksInput[]
    updateMany?: SpecializationUpdateManyWithWhereWithoutTasksInput | SpecializationUpdateManyWithWhereWithoutTasksInput[]
    deleteMany?: SpecializationScalarWhereInput | SpecializationScalarWhereInput[]
  }

  export type BidUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<BidCreateWithoutTaskInput, BidUncheckedCreateWithoutTaskInput> | BidCreateWithoutTaskInput[] | BidUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: BidCreateOrConnectWithoutTaskInput | BidCreateOrConnectWithoutTaskInput[]
    upsert?: BidUpsertWithWhereUniqueWithoutTaskInput | BidUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: BidCreateManyTaskInputEnvelope
    set?: BidWhereUniqueInput | BidWhereUniqueInput[]
    disconnect?: BidWhereUniqueInput | BidWhereUniqueInput[]
    delete?: BidWhereUniqueInput | BidWhereUniqueInput[]
    connect?: BidWhereUniqueInput | BidWhereUniqueInput[]
    update?: BidUpdateWithWhereUniqueWithoutTaskInput | BidUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: BidUpdateManyWithWhereWithoutTaskInput | BidUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: BidScalarWhereInput | BidScalarWhereInput[]
  }

  export type TaskCreateNestedOneWithoutBidsInput = {
    create?: XOR<TaskCreateWithoutBidsInput, TaskUncheckedCreateWithoutBidsInput>
    connectOrCreate?: TaskCreateOrConnectWithoutBidsInput
    connect?: TaskWhereUniqueInput
  }

  export type ExpertCreateNestedOneWithoutBidsInput = {
    create?: XOR<ExpertCreateWithoutBidsInput, ExpertUncheckedCreateWithoutBidsInput>
    connectOrCreate?: ExpertCreateOrConnectWithoutBidsInput
    connect?: ExpertWhereUniqueInput
  }

  export type TaskUpdateOneRequiredWithoutBidsNestedInput = {
    create?: XOR<TaskCreateWithoutBidsInput, TaskUncheckedCreateWithoutBidsInput>
    connectOrCreate?: TaskCreateOrConnectWithoutBidsInput
    upsert?: TaskUpsertWithoutBidsInput
    connect?: TaskWhereUniqueInput
    update?: XOR<XOR<TaskUpdateToOneWithWhereWithoutBidsInput, TaskUpdateWithoutBidsInput>, TaskUncheckedUpdateWithoutBidsInput>
  }

  export type ExpertUpdateOneRequiredWithoutBidsNestedInput = {
    create?: XOR<ExpertCreateWithoutBidsInput, ExpertUncheckedCreateWithoutBidsInput>
    connectOrCreate?: ExpertCreateOrConnectWithoutBidsInput
    upsert?: ExpertUpsertWithoutBidsInput
    connect?: ExpertWhereUniqueInput
    update?: XOR<XOR<ExpertUpdateToOneWithWhereWithoutBidsInput, ExpertUpdateWithoutBidsInput>, ExpertUncheckedUpdateWithoutBidsInput>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type BookingCreateWithoutExpertInput = {
    id?: string
    company_name: string
    company_contact_name: string
    company_email: string
    company_phone?: string | null
    date_requested: Date | string
    attendees_count?: number | null
    notes_from_client?: string | null
    status?: string
    quote_amount_usd: number
    quote_amount_nis?: number | null
    payment_method?: string
    payment_status?: string
    stripe_payment_id?: string | null
    platform_fee_usd?: number | null
    platform_fee_nis?: number | null
    expert_payout_usd?: number | null
    expert_payout_nis?: number | null
    notes_from_expert?: string | null
    payment_link?: string | null
    invoice_link?: string | null
    transaction_id?: string | null
    expert_response_date?: Date | string | null
    event_date_confirmed?: Date | string | null
    review_sent?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    offering: OfferingCreateNestedOneWithoutBookingsInput
    reviews?: ReviewCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutExpertInput = {
    id?: string
    offering_id: string
    company_name: string
    company_contact_name: string
    company_email: string
    company_phone?: string | null
    date_requested: Date | string
    attendees_count?: number | null
    notes_from_client?: string | null
    status?: string
    quote_amount_usd: number
    quote_amount_nis?: number | null
    payment_method?: string
    payment_status?: string
    stripe_payment_id?: string | null
    platform_fee_usd?: number | null
    platform_fee_nis?: number | null
    expert_payout_usd?: number | null
    expert_payout_nis?: number | null
    notes_from_expert?: string | null
    payment_link?: string | null
    invoice_link?: string | null
    transaction_id?: string | null
    expert_response_date?: Date | string | null
    event_date_confirmed?: Date | string | null
    review_sent?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    reviews?: ReviewUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutExpertInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutExpertInput, BookingUncheckedCreateWithoutExpertInput>
  }

  export type BookingCreateManyExpertInputEnvelope = {
    data: BookingCreateManyExpertInput | BookingCreateManyExpertInput[]
    skipDuplicates?: boolean
  }

  export type OfferingCreateWithoutExpertInput = {
    id?: string
    title: string
    type?: string
    description: string
    format: string
    duration_minutes: number
    max_attendees?: number | null
    price_usd: number
    price_nis?: number | null
    audience_level: string
    includes?: string | null
    target_industries?: string | null
    customizable?: boolean
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    bookings?: BookingCreateNestedManyWithoutOfferingInput
  }

  export type OfferingUncheckedCreateWithoutExpertInput = {
    id?: string
    title: string
    type?: string
    description: string
    format: string
    duration_minutes: number
    max_attendees?: number | null
    price_usd: number
    price_nis?: number | null
    audience_level: string
    includes?: string | null
    target_industries?: string | null
    customizable?: boolean
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutOfferingInput
  }

  export type OfferingCreateOrConnectWithoutExpertInput = {
    where: OfferingWhereUniqueInput
    create: XOR<OfferingCreateWithoutExpertInput, OfferingUncheckedCreateWithoutExpertInput>
  }

  export type OfferingCreateManyExpertInputEnvelope = {
    data: OfferingCreateManyExpertInput | OfferingCreateManyExpertInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutExpertInput = {
    id?: string
    company_name: string
    rating: number
    title?: string | null
    text: string
    verified?: boolean
    created_at?: Date | string
    booking?: BookingCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutExpertInput = {
    id?: string
    booking_id?: string | null
    company_name: string
    rating: number
    title?: string | null
    text: string
    verified?: boolean
    created_at?: Date | string
  }

  export type ReviewCreateOrConnectWithoutExpertInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutExpertInput, ReviewUncheckedCreateWithoutExpertInput>
  }

  export type ReviewCreateManyExpertInputEnvelope = {
    data: ReviewCreateManyExpertInput | ReviewCreateManyExpertInput[]
    skipDuplicates?: boolean
  }

  export type SpecializationCreateWithoutExpertsInput = {
    id?: string
    slug: string
    name_he: string
    name_en: string
    description_he?: string | null
    description_en?: string | null
    metaTitle_he?: string | null
    metaTitle_en?: string | null
    metaDescription_he?: string | null
    metaDescription_en?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    tasks?: TaskCreateNestedManyWithoutSpecializationsInput
  }

  export type SpecializationUncheckedCreateWithoutExpertsInput = {
    id?: string
    slug: string
    name_he: string
    name_en: string
    description_he?: string | null
    description_en?: string | null
    metaTitle_he?: string | null
    metaTitle_en?: string | null
    metaDescription_he?: string | null
    metaDescription_en?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutSpecializationsInput
  }

  export type SpecializationCreateOrConnectWithoutExpertsInput = {
    where: SpecializationWhereUniqueInput
    create: XOR<SpecializationCreateWithoutExpertsInput, SpecializationUncheckedCreateWithoutExpertsInput>
  }

  export type BidCreateWithoutExpertInput = {
    id?: string
    amount?: number | null
    message?: string | null
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
    task: TaskCreateNestedOneWithoutBidsInput
  }

  export type BidUncheckedCreateWithoutExpertInput = {
    id?: string
    task_id: string
    amount?: number | null
    message?: string | null
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type BidCreateOrConnectWithoutExpertInput = {
    where: BidWhereUniqueInput
    create: XOR<BidCreateWithoutExpertInput, BidUncheckedCreateWithoutExpertInput>
  }

  export type BidCreateManyExpertInputEnvelope = {
    data: BidCreateManyExpertInput | BidCreateManyExpertInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutExpertInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    role?: string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutExpertInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    role?: string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutExpertInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutExpertInput, UserUncheckedCreateWithoutExpertInput>
  }

  export type BookingUpsertWithWhereUniqueWithoutExpertInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutExpertInput, BookingUncheckedUpdateWithoutExpertInput>
    create: XOR<BookingCreateWithoutExpertInput, BookingUncheckedCreateWithoutExpertInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutExpertInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutExpertInput, BookingUncheckedUpdateWithoutExpertInput>
  }

  export type BookingUpdateManyWithWhereWithoutExpertInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutExpertInput>
  }

  export type BookingScalarWhereInput = {
    AND?: BookingScalarWhereInput | BookingScalarWhereInput[]
    OR?: BookingScalarWhereInput[]
    NOT?: BookingScalarWhereInput | BookingScalarWhereInput[]
    id?: StringFilter<"Booking"> | string
    expert_id?: StringFilter<"Booking"> | string
    offering_id?: StringFilter<"Booking"> | string
    company_name?: StringFilter<"Booking"> | string
    company_contact_name?: StringFilter<"Booking"> | string
    company_email?: StringFilter<"Booking"> | string
    company_phone?: StringNullableFilter<"Booking"> | string | null
    date_requested?: DateTimeFilter<"Booking"> | Date | string
    attendees_count?: IntNullableFilter<"Booking"> | number | null
    notes_from_client?: StringNullableFilter<"Booking"> | string | null
    status?: StringFilter<"Booking"> | string
    quote_amount_usd?: IntFilter<"Booking"> | number
    quote_amount_nis?: IntNullableFilter<"Booking"> | number | null
    payment_method?: StringFilter<"Booking"> | string
    payment_status?: StringFilter<"Booking"> | string
    stripe_payment_id?: StringNullableFilter<"Booking"> | string | null
    platform_fee_usd?: IntNullableFilter<"Booking"> | number | null
    platform_fee_nis?: IntNullableFilter<"Booking"> | number | null
    expert_payout_usd?: IntNullableFilter<"Booking"> | number | null
    expert_payout_nis?: IntNullableFilter<"Booking"> | number | null
    notes_from_expert?: StringNullableFilter<"Booking"> | string | null
    payment_link?: StringNullableFilter<"Booking"> | string | null
    invoice_link?: StringNullableFilter<"Booking"> | string | null
    transaction_id?: StringNullableFilter<"Booking"> | string | null
    expert_response_date?: DateTimeNullableFilter<"Booking"> | Date | string | null
    event_date_confirmed?: DateTimeNullableFilter<"Booking"> | Date | string | null
    review_sent?: BoolFilter<"Booking"> | boolean
    created_at?: DateTimeFilter<"Booking"> | Date | string
    updated_at?: DateTimeFilter<"Booking"> | Date | string
  }

  export type OfferingUpsertWithWhereUniqueWithoutExpertInput = {
    where: OfferingWhereUniqueInput
    update: XOR<OfferingUpdateWithoutExpertInput, OfferingUncheckedUpdateWithoutExpertInput>
    create: XOR<OfferingCreateWithoutExpertInput, OfferingUncheckedCreateWithoutExpertInput>
  }

  export type OfferingUpdateWithWhereUniqueWithoutExpertInput = {
    where: OfferingWhereUniqueInput
    data: XOR<OfferingUpdateWithoutExpertInput, OfferingUncheckedUpdateWithoutExpertInput>
  }

  export type OfferingUpdateManyWithWhereWithoutExpertInput = {
    where: OfferingScalarWhereInput
    data: XOR<OfferingUpdateManyMutationInput, OfferingUncheckedUpdateManyWithoutExpertInput>
  }

  export type OfferingScalarWhereInput = {
    AND?: OfferingScalarWhereInput | OfferingScalarWhereInput[]
    OR?: OfferingScalarWhereInput[]
    NOT?: OfferingScalarWhereInput | OfferingScalarWhereInput[]
    id?: StringFilter<"Offering"> | string
    expert_id?: StringFilter<"Offering"> | string
    title?: StringFilter<"Offering"> | string
    type?: StringFilter<"Offering"> | string
    description?: StringFilter<"Offering"> | string
    format?: StringFilter<"Offering"> | string
    duration_minutes?: IntFilter<"Offering"> | number
    max_attendees?: IntNullableFilter<"Offering"> | number | null
    price_usd?: IntFilter<"Offering"> | number
    price_nis?: IntNullableFilter<"Offering"> | number | null
    audience_level?: StringFilter<"Offering"> | string
    includes?: StringNullableFilter<"Offering"> | string | null
    target_industries?: StringNullableFilter<"Offering"> | string | null
    customizable?: BoolFilter<"Offering"> | boolean
    active?: BoolFilter<"Offering"> | boolean
    created_at?: DateTimeFilter<"Offering"> | Date | string
    updated_at?: DateTimeFilter<"Offering"> | Date | string
  }

  export type ReviewUpsertWithWhereUniqueWithoutExpertInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutExpertInput, ReviewUncheckedUpdateWithoutExpertInput>
    create: XOR<ReviewCreateWithoutExpertInput, ReviewUncheckedCreateWithoutExpertInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutExpertInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutExpertInput, ReviewUncheckedUpdateWithoutExpertInput>
  }

  export type ReviewUpdateManyWithWhereWithoutExpertInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutExpertInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: StringFilter<"Review"> | string
    booking_id?: StringNullableFilter<"Review"> | string | null
    expert_id?: StringFilter<"Review"> | string
    company_name?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    title?: StringNullableFilter<"Review"> | string | null
    text?: StringFilter<"Review"> | string
    verified?: BoolFilter<"Review"> | boolean
    created_at?: DateTimeFilter<"Review"> | Date | string
  }

  export type SpecializationUpsertWithWhereUniqueWithoutExpertsInput = {
    where: SpecializationWhereUniqueInput
    update: XOR<SpecializationUpdateWithoutExpertsInput, SpecializationUncheckedUpdateWithoutExpertsInput>
    create: XOR<SpecializationCreateWithoutExpertsInput, SpecializationUncheckedCreateWithoutExpertsInput>
  }

  export type SpecializationUpdateWithWhereUniqueWithoutExpertsInput = {
    where: SpecializationWhereUniqueInput
    data: XOR<SpecializationUpdateWithoutExpertsInput, SpecializationUncheckedUpdateWithoutExpertsInput>
  }

  export type SpecializationUpdateManyWithWhereWithoutExpertsInput = {
    where: SpecializationScalarWhereInput
    data: XOR<SpecializationUpdateManyMutationInput, SpecializationUncheckedUpdateManyWithoutExpertsInput>
  }

  export type SpecializationScalarWhereInput = {
    AND?: SpecializationScalarWhereInput | SpecializationScalarWhereInput[]
    OR?: SpecializationScalarWhereInput[]
    NOT?: SpecializationScalarWhereInput | SpecializationScalarWhereInput[]
    id?: StringFilter<"Specialization"> | string
    slug?: StringFilter<"Specialization"> | string
    name_he?: StringFilter<"Specialization"> | string
    name_en?: StringFilter<"Specialization"> | string
    description_he?: StringNullableFilter<"Specialization"> | string | null
    description_en?: StringNullableFilter<"Specialization"> | string | null
    metaTitle_he?: StringNullableFilter<"Specialization"> | string | null
    metaTitle_en?: StringNullableFilter<"Specialization"> | string | null
    metaDescription_he?: StringNullableFilter<"Specialization"> | string | null
    metaDescription_en?: StringNullableFilter<"Specialization"> | string | null
    created_at?: DateTimeFilter<"Specialization"> | Date | string
    updated_at?: DateTimeFilter<"Specialization"> | Date | string
  }

  export type BidUpsertWithWhereUniqueWithoutExpertInput = {
    where: BidWhereUniqueInput
    update: XOR<BidUpdateWithoutExpertInput, BidUncheckedUpdateWithoutExpertInput>
    create: XOR<BidCreateWithoutExpertInput, BidUncheckedCreateWithoutExpertInput>
  }

  export type BidUpdateWithWhereUniqueWithoutExpertInput = {
    where: BidWhereUniqueInput
    data: XOR<BidUpdateWithoutExpertInput, BidUncheckedUpdateWithoutExpertInput>
  }

  export type BidUpdateManyWithWhereWithoutExpertInput = {
    where: BidScalarWhereInput
    data: XOR<BidUpdateManyMutationInput, BidUncheckedUpdateManyWithoutExpertInput>
  }

  export type BidScalarWhereInput = {
    AND?: BidScalarWhereInput | BidScalarWhereInput[]
    OR?: BidScalarWhereInput[]
    NOT?: BidScalarWhereInput | BidScalarWhereInput[]
    id?: StringFilter<"Bid"> | string
    task_id?: StringFilter<"Bid"> | string
    expert_id?: StringFilter<"Bid"> | string
    amount?: IntNullableFilter<"Bid"> | number | null
    message?: StringNullableFilter<"Bid"> | string | null
    status?: StringFilter<"Bid"> | string
    created_at?: DateTimeFilter<"Bid"> | Date | string
    updated_at?: DateTimeFilter<"Bid"> | Date | string
  }

  export type UserUpsertWithoutExpertInput = {
    update: XOR<UserUpdateWithoutExpertInput, UserUncheckedUpdateWithoutExpertInput>
    create: XOR<UserCreateWithoutExpertInput, UserUncheckedCreateWithoutExpertInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutExpertInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutExpertInput, UserUncheckedUpdateWithoutExpertInput>
  }

  export type UserUpdateWithoutExpertInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutExpertInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BookingCreateWithoutOfferingInput = {
    id?: string
    company_name: string
    company_contact_name: string
    company_email: string
    company_phone?: string | null
    date_requested: Date | string
    attendees_count?: number | null
    notes_from_client?: string | null
    status?: string
    quote_amount_usd: number
    quote_amount_nis?: number | null
    payment_method?: string
    payment_status?: string
    stripe_payment_id?: string | null
    platform_fee_usd?: number | null
    platform_fee_nis?: number | null
    expert_payout_usd?: number | null
    expert_payout_nis?: number | null
    notes_from_expert?: string | null
    payment_link?: string | null
    invoice_link?: string | null
    transaction_id?: string | null
    expert_response_date?: Date | string | null
    event_date_confirmed?: Date | string | null
    review_sent?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    expert: ExpertCreateNestedOneWithoutBookingsInput
    reviews?: ReviewCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutOfferingInput = {
    id?: string
    expert_id: string
    company_name: string
    company_contact_name: string
    company_email: string
    company_phone?: string | null
    date_requested: Date | string
    attendees_count?: number | null
    notes_from_client?: string | null
    status?: string
    quote_amount_usd: number
    quote_amount_nis?: number | null
    payment_method?: string
    payment_status?: string
    stripe_payment_id?: string | null
    platform_fee_usd?: number | null
    platform_fee_nis?: number | null
    expert_payout_usd?: number | null
    expert_payout_nis?: number | null
    notes_from_expert?: string | null
    payment_link?: string | null
    invoice_link?: string | null
    transaction_id?: string | null
    expert_response_date?: Date | string | null
    event_date_confirmed?: Date | string | null
    review_sent?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    reviews?: ReviewUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutOfferingInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutOfferingInput, BookingUncheckedCreateWithoutOfferingInput>
  }

  export type BookingCreateManyOfferingInputEnvelope = {
    data: BookingCreateManyOfferingInput | BookingCreateManyOfferingInput[]
    skipDuplicates?: boolean
  }

  export type ExpertCreateWithoutOfferingsInput = {
    id?: string
    slug: string
    name: string
    profile_image?: string | null
    company?: string | null
    average_rating?: number
    total_reviews?: number
    hourly_rate_usd?: number | null
    hourly_rate_nis?: number | null
    languages: string
    verified?: boolean
    active?: boolean
    status?: string
    linkedin_profile?: string | null
    cv_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    email?: string | null
    bio_en?: string | null
    bio_he?: string | null
    name_he?: string | null
    specializations_en?: string | null
    specializations_he?: string | null
    title_en?: string | null
    title_he?: string | null
    bookings?: BookingCreateNestedManyWithoutExpertInput
    reviews?: ReviewCreateNestedManyWithoutExpertInput
    specializations_list?: SpecializationCreateNestedManyWithoutExpertsInput
    bids?: BidCreateNestedManyWithoutExpertInput
    user?: UserCreateNestedOneWithoutExpertInput
  }

  export type ExpertUncheckedCreateWithoutOfferingsInput = {
    id?: string
    slug: string
    name: string
    profile_image?: string | null
    company?: string | null
    average_rating?: number
    total_reviews?: number
    hourly_rate_usd?: number | null
    hourly_rate_nis?: number | null
    languages: string
    verified?: boolean
    active?: boolean
    status?: string
    linkedin_profile?: string | null
    cv_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    email?: string | null
    bio_en?: string | null
    bio_he?: string | null
    name_he?: string | null
    specializations_en?: string | null
    specializations_he?: string | null
    title_en?: string | null
    title_he?: string | null
    userId?: string | null
    bookings?: BookingUncheckedCreateNestedManyWithoutExpertInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutExpertInput
    specializations_list?: SpecializationUncheckedCreateNestedManyWithoutExpertsInput
    bids?: BidUncheckedCreateNestedManyWithoutExpertInput
  }

  export type ExpertCreateOrConnectWithoutOfferingsInput = {
    where: ExpertWhereUniqueInput
    create: XOR<ExpertCreateWithoutOfferingsInput, ExpertUncheckedCreateWithoutOfferingsInput>
  }

  export type BookingUpsertWithWhereUniqueWithoutOfferingInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutOfferingInput, BookingUncheckedUpdateWithoutOfferingInput>
    create: XOR<BookingCreateWithoutOfferingInput, BookingUncheckedCreateWithoutOfferingInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutOfferingInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutOfferingInput, BookingUncheckedUpdateWithoutOfferingInput>
  }

  export type BookingUpdateManyWithWhereWithoutOfferingInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutOfferingInput>
  }

  export type ExpertUpsertWithoutOfferingsInput = {
    update: XOR<ExpertUpdateWithoutOfferingsInput, ExpertUncheckedUpdateWithoutOfferingsInput>
    create: XOR<ExpertCreateWithoutOfferingsInput, ExpertUncheckedCreateWithoutOfferingsInput>
    where?: ExpertWhereInput
  }

  export type ExpertUpdateToOneWithWhereWithoutOfferingsInput = {
    where?: ExpertWhereInput
    data: XOR<ExpertUpdateWithoutOfferingsInput, ExpertUncheckedUpdateWithoutOfferingsInput>
  }

  export type ExpertUpdateWithoutOfferingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    average_rating?: FloatFieldUpdateOperationsInput | number
    total_reviews?: IntFieldUpdateOperationsInput | number
    hourly_rate_usd?: NullableIntFieldUpdateOperationsInput | number | null
    hourly_rate_nis?: NullableIntFieldUpdateOperationsInput | number | null
    languages?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    linkedin_profile?: NullableStringFieldUpdateOperationsInput | string | null
    cv_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    bio_en?: NullableStringFieldUpdateOperationsInput | string | null
    bio_he?: NullableStringFieldUpdateOperationsInput | string | null
    name_he?: NullableStringFieldUpdateOperationsInput | string | null
    specializations_en?: NullableStringFieldUpdateOperationsInput | string | null
    specializations_he?: NullableStringFieldUpdateOperationsInput | string | null
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
    title_he?: NullableStringFieldUpdateOperationsInput | string | null
    bookings?: BookingUpdateManyWithoutExpertNestedInput
    reviews?: ReviewUpdateManyWithoutExpertNestedInput
    specializations_list?: SpecializationUpdateManyWithoutExpertsNestedInput
    bids?: BidUpdateManyWithoutExpertNestedInput
    user?: UserUpdateOneWithoutExpertNestedInput
  }

  export type ExpertUncheckedUpdateWithoutOfferingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    average_rating?: FloatFieldUpdateOperationsInput | number
    total_reviews?: IntFieldUpdateOperationsInput | number
    hourly_rate_usd?: NullableIntFieldUpdateOperationsInput | number | null
    hourly_rate_nis?: NullableIntFieldUpdateOperationsInput | number | null
    languages?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    linkedin_profile?: NullableStringFieldUpdateOperationsInput | string | null
    cv_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    bio_en?: NullableStringFieldUpdateOperationsInput | string | null
    bio_he?: NullableStringFieldUpdateOperationsInput | string | null
    name_he?: NullableStringFieldUpdateOperationsInput | string | null
    specializations_en?: NullableStringFieldUpdateOperationsInput | string | null
    specializations_he?: NullableStringFieldUpdateOperationsInput | string | null
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
    title_he?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    bookings?: BookingUncheckedUpdateManyWithoutExpertNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutExpertNestedInput
    specializations_list?: SpecializationUncheckedUpdateManyWithoutExpertsNestedInput
    bids?: BidUncheckedUpdateManyWithoutExpertNestedInput
  }

  export type ExpertCreateWithoutBookingsInput = {
    id?: string
    slug: string
    name: string
    profile_image?: string | null
    company?: string | null
    average_rating?: number
    total_reviews?: number
    hourly_rate_usd?: number | null
    hourly_rate_nis?: number | null
    languages: string
    verified?: boolean
    active?: boolean
    status?: string
    linkedin_profile?: string | null
    cv_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    email?: string | null
    bio_en?: string | null
    bio_he?: string | null
    name_he?: string | null
    specializations_en?: string | null
    specializations_he?: string | null
    title_en?: string | null
    title_he?: string | null
    offerings?: OfferingCreateNestedManyWithoutExpertInput
    reviews?: ReviewCreateNestedManyWithoutExpertInput
    specializations_list?: SpecializationCreateNestedManyWithoutExpertsInput
    bids?: BidCreateNestedManyWithoutExpertInput
    user?: UserCreateNestedOneWithoutExpertInput
  }

  export type ExpertUncheckedCreateWithoutBookingsInput = {
    id?: string
    slug: string
    name: string
    profile_image?: string | null
    company?: string | null
    average_rating?: number
    total_reviews?: number
    hourly_rate_usd?: number | null
    hourly_rate_nis?: number | null
    languages: string
    verified?: boolean
    active?: boolean
    status?: string
    linkedin_profile?: string | null
    cv_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    email?: string | null
    bio_en?: string | null
    bio_he?: string | null
    name_he?: string | null
    specializations_en?: string | null
    specializations_he?: string | null
    title_en?: string | null
    title_he?: string | null
    userId?: string | null
    offerings?: OfferingUncheckedCreateNestedManyWithoutExpertInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutExpertInput
    specializations_list?: SpecializationUncheckedCreateNestedManyWithoutExpertsInput
    bids?: BidUncheckedCreateNestedManyWithoutExpertInput
  }

  export type ExpertCreateOrConnectWithoutBookingsInput = {
    where: ExpertWhereUniqueInput
    create: XOR<ExpertCreateWithoutBookingsInput, ExpertUncheckedCreateWithoutBookingsInput>
  }

  export type OfferingCreateWithoutBookingsInput = {
    id?: string
    title: string
    type?: string
    description: string
    format: string
    duration_minutes: number
    max_attendees?: number | null
    price_usd: number
    price_nis?: number | null
    audience_level: string
    includes?: string | null
    target_industries?: string | null
    customizable?: boolean
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    expert: ExpertCreateNestedOneWithoutOfferingsInput
  }

  export type OfferingUncheckedCreateWithoutBookingsInput = {
    id?: string
    expert_id: string
    title: string
    type?: string
    description: string
    format: string
    duration_minutes: number
    max_attendees?: number | null
    price_usd: number
    price_nis?: number | null
    audience_level: string
    includes?: string | null
    target_industries?: string | null
    customizable?: boolean
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type OfferingCreateOrConnectWithoutBookingsInput = {
    where: OfferingWhereUniqueInput
    create: XOR<OfferingCreateWithoutBookingsInput, OfferingUncheckedCreateWithoutBookingsInput>
  }

  export type ReviewCreateWithoutBookingInput = {
    id?: string
    company_name: string
    rating: number
    title?: string | null
    text: string
    verified?: boolean
    created_at?: Date | string
    expert: ExpertCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutBookingInput = {
    id?: string
    expert_id: string
    company_name: string
    rating: number
    title?: string | null
    text: string
    verified?: boolean
    created_at?: Date | string
  }

  export type ReviewCreateOrConnectWithoutBookingInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutBookingInput, ReviewUncheckedCreateWithoutBookingInput>
  }

  export type ReviewCreateManyBookingInputEnvelope = {
    data: ReviewCreateManyBookingInput | ReviewCreateManyBookingInput[]
    skipDuplicates?: boolean
  }

  export type ExpertUpsertWithoutBookingsInput = {
    update: XOR<ExpertUpdateWithoutBookingsInput, ExpertUncheckedUpdateWithoutBookingsInput>
    create: XOR<ExpertCreateWithoutBookingsInput, ExpertUncheckedCreateWithoutBookingsInput>
    where?: ExpertWhereInput
  }

  export type ExpertUpdateToOneWithWhereWithoutBookingsInput = {
    where?: ExpertWhereInput
    data: XOR<ExpertUpdateWithoutBookingsInput, ExpertUncheckedUpdateWithoutBookingsInput>
  }

  export type ExpertUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    average_rating?: FloatFieldUpdateOperationsInput | number
    total_reviews?: IntFieldUpdateOperationsInput | number
    hourly_rate_usd?: NullableIntFieldUpdateOperationsInput | number | null
    hourly_rate_nis?: NullableIntFieldUpdateOperationsInput | number | null
    languages?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    linkedin_profile?: NullableStringFieldUpdateOperationsInput | string | null
    cv_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    bio_en?: NullableStringFieldUpdateOperationsInput | string | null
    bio_he?: NullableStringFieldUpdateOperationsInput | string | null
    name_he?: NullableStringFieldUpdateOperationsInput | string | null
    specializations_en?: NullableStringFieldUpdateOperationsInput | string | null
    specializations_he?: NullableStringFieldUpdateOperationsInput | string | null
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
    title_he?: NullableStringFieldUpdateOperationsInput | string | null
    offerings?: OfferingUpdateManyWithoutExpertNestedInput
    reviews?: ReviewUpdateManyWithoutExpertNestedInput
    specializations_list?: SpecializationUpdateManyWithoutExpertsNestedInput
    bids?: BidUpdateManyWithoutExpertNestedInput
    user?: UserUpdateOneWithoutExpertNestedInput
  }

  export type ExpertUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    average_rating?: FloatFieldUpdateOperationsInput | number
    total_reviews?: IntFieldUpdateOperationsInput | number
    hourly_rate_usd?: NullableIntFieldUpdateOperationsInput | number | null
    hourly_rate_nis?: NullableIntFieldUpdateOperationsInput | number | null
    languages?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    linkedin_profile?: NullableStringFieldUpdateOperationsInput | string | null
    cv_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    bio_en?: NullableStringFieldUpdateOperationsInput | string | null
    bio_he?: NullableStringFieldUpdateOperationsInput | string | null
    name_he?: NullableStringFieldUpdateOperationsInput | string | null
    specializations_en?: NullableStringFieldUpdateOperationsInput | string | null
    specializations_he?: NullableStringFieldUpdateOperationsInput | string | null
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
    title_he?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    offerings?: OfferingUncheckedUpdateManyWithoutExpertNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutExpertNestedInput
    specializations_list?: SpecializationUncheckedUpdateManyWithoutExpertsNestedInput
    bids?: BidUncheckedUpdateManyWithoutExpertNestedInput
  }

  export type OfferingUpsertWithoutBookingsInput = {
    update: XOR<OfferingUpdateWithoutBookingsInput, OfferingUncheckedUpdateWithoutBookingsInput>
    create: XOR<OfferingCreateWithoutBookingsInput, OfferingUncheckedCreateWithoutBookingsInput>
    where?: OfferingWhereInput
  }

  export type OfferingUpdateToOneWithWhereWithoutBookingsInput = {
    where?: OfferingWhereInput
    data: XOR<OfferingUpdateWithoutBookingsInput, OfferingUncheckedUpdateWithoutBookingsInput>
  }

  export type OfferingUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    format?: StringFieldUpdateOperationsInput | string
    duration_minutes?: IntFieldUpdateOperationsInput | number
    max_attendees?: NullableIntFieldUpdateOperationsInput | number | null
    price_usd?: IntFieldUpdateOperationsInput | number
    price_nis?: NullableIntFieldUpdateOperationsInput | number | null
    audience_level?: StringFieldUpdateOperationsInput | string
    includes?: NullableStringFieldUpdateOperationsInput | string | null
    target_industries?: NullableStringFieldUpdateOperationsInput | string | null
    customizable?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expert?: ExpertUpdateOneRequiredWithoutOfferingsNestedInput
  }

  export type OfferingUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    expert_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    format?: StringFieldUpdateOperationsInput | string
    duration_minutes?: IntFieldUpdateOperationsInput | number
    max_attendees?: NullableIntFieldUpdateOperationsInput | number | null
    price_usd?: IntFieldUpdateOperationsInput | number
    price_nis?: NullableIntFieldUpdateOperationsInput | number | null
    audience_level?: StringFieldUpdateOperationsInput | string
    includes?: NullableStringFieldUpdateOperationsInput | string | null
    target_industries?: NullableStringFieldUpdateOperationsInput | string | null
    customizable?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpsertWithWhereUniqueWithoutBookingInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutBookingInput, ReviewUncheckedUpdateWithoutBookingInput>
    create: XOR<ReviewCreateWithoutBookingInput, ReviewUncheckedCreateWithoutBookingInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutBookingInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutBookingInput, ReviewUncheckedUpdateWithoutBookingInput>
  }

  export type ReviewUpdateManyWithWhereWithoutBookingInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutBookingInput>
  }

  export type BookingCreateWithoutReviewsInput = {
    id?: string
    company_name: string
    company_contact_name: string
    company_email: string
    company_phone?: string | null
    date_requested: Date | string
    attendees_count?: number | null
    notes_from_client?: string | null
    status?: string
    quote_amount_usd: number
    quote_amount_nis?: number | null
    payment_method?: string
    payment_status?: string
    stripe_payment_id?: string | null
    platform_fee_usd?: number | null
    platform_fee_nis?: number | null
    expert_payout_usd?: number | null
    expert_payout_nis?: number | null
    notes_from_expert?: string | null
    payment_link?: string | null
    invoice_link?: string | null
    transaction_id?: string | null
    expert_response_date?: Date | string | null
    event_date_confirmed?: Date | string | null
    review_sent?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    expert: ExpertCreateNestedOneWithoutBookingsInput
    offering: OfferingCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateWithoutReviewsInput = {
    id?: string
    expert_id: string
    offering_id: string
    company_name: string
    company_contact_name: string
    company_email: string
    company_phone?: string | null
    date_requested: Date | string
    attendees_count?: number | null
    notes_from_client?: string | null
    status?: string
    quote_amount_usd: number
    quote_amount_nis?: number | null
    payment_method?: string
    payment_status?: string
    stripe_payment_id?: string | null
    platform_fee_usd?: number | null
    platform_fee_nis?: number | null
    expert_payout_usd?: number | null
    expert_payout_nis?: number | null
    notes_from_expert?: string | null
    payment_link?: string | null
    invoice_link?: string | null
    transaction_id?: string | null
    expert_response_date?: Date | string | null
    event_date_confirmed?: Date | string | null
    review_sent?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type BookingCreateOrConnectWithoutReviewsInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutReviewsInput, BookingUncheckedCreateWithoutReviewsInput>
  }

  export type ExpertCreateWithoutReviewsInput = {
    id?: string
    slug: string
    name: string
    profile_image?: string | null
    company?: string | null
    average_rating?: number
    total_reviews?: number
    hourly_rate_usd?: number | null
    hourly_rate_nis?: number | null
    languages: string
    verified?: boolean
    active?: boolean
    status?: string
    linkedin_profile?: string | null
    cv_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    email?: string | null
    bio_en?: string | null
    bio_he?: string | null
    name_he?: string | null
    specializations_en?: string | null
    specializations_he?: string | null
    title_en?: string | null
    title_he?: string | null
    bookings?: BookingCreateNestedManyWithoutExpertInput
    offerings?: OfferingCreateNestedManyWithoutExpertInput
    specializations_list?: SpecializationCreateNestedManyWithoutExpertsInput
    bids?: BidCreateNestedManyWithoutExpertInput
    user?: UserCreateNestedOneWithoutExpertInput
  }

  export type ExpertUncheckedCreateWithoutReviewsInput = {
    id?: string
    slug: string
    name: string
    profile_image?: string | null
    company?: string | null
    average_rating?: number
    total_reviews?: number
    hourly_rate_usd?: number | null
    hourly_rate_nis?: number | null
    languages: string
    verified?: boolean
    active?: boolean
    status?: string
    linkedin_profile?: string | null
    cv_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    email?: string | null
    bio_en?: string | null
    bio_he?: string | null
    name_he?: string | null
    specializations_en?: string | null
    specializations_he?: string | null
    title_en?: string | null
    title_he?: string | null
    userId?: string | null
    bookings?: BookingUncheckedCreateNestedManyWithoutExpertInput
    offerings?: OfferingUncheckedCreateNestedManyWithoutExpertInput
    specializations_list?: SpecializationUncheckedCreateNestedManyWithoutExpertsInput
    bids?: BidUncheckedCreateNestedManyWithoutExpertInput
  }

  export type ExpertCreateOrConnectWithoutReviewsInput = {
    where: ExpertWhereUniqueInput
    create: XOR<ExpertCreateWithoutReviewsInput, ExpertUncheckedCreateWithoutReviewsInput>
  }

  export type BookingUpsertWithoutReviewsInput = {
    update: XOR<BookingUpdateWithoutReviewsInput, BookingUncheckedUpdateWithoutReviewsInput>
    create: XOR<BookingCreateWithoutReviewsInput, BookingUncheckedCreateWithoutReviewsInput>
    where?: BookingWhereInput
  }

  export type BookingUpdateToOneWithWhereWithoutReviewsInput = {
    where?: BookingWhereInput
    data: XOR<BookingUpdateWithoutReviewsInput, BookingUncheckedUpdateWithoutReviewsInput>
  }

  export type BookingUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    company_contact_name?: StringFieldUpdateOperationsInput | string
    company_email?: StringFieldUpdateOperationsInput | string
    company_phone?: NullableStringFieldUpdateOperationsInput | string | null
    date_requested?: DateTimeFieldUpdateOperationsInput | Date | string
    attendees_count?: NullableIntFieldUpdateOperationsInput | number | null
    notes_from_client?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    quote_amount_usd?: IntFieldUpdateOperationsInput | number
    quote_amount_nis?: NullableIntFieldUpdateOperationsInput | number | null
    payment_method?: StringFieldUpdateOperationsInput | string
    payment_status?: StringFieldUpdateOperationsInput | string
    stripe_payment_id?: NullableStringFieldUpdateOperationsInput | string | null
    platform_fee_usd?: NullableIntFieldUpdateOperationsInput | number | null
    platform_fee_nis?: NullableIntFieldUpdateOperationsInput | number | null
    expert_payout_usd?: NullableIntFieldUpdateOperationsInput | number | null
    expert_payout_nis?: NullableIntFieldUpdateOperationsInput | number | null
    notes_from_expert?: NullableStringFieldUpdateOperationsInput | string | null
    payment_link?: NullableStringFieldUpdateOperationsInput | string | null
    invoice_link?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    expert_response_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    event_date_confirmed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    review_sent?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expert?: ExpertUpdateOneRequiredWithoutBookingsNestedInput
    offering?: OfferingUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    expert_id?: StringFieldUpdateOperationsInput | string
    offering_id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    company_contact_name?: StringFieldUpdateOperationsInput | string
    company_email?: StringFieldUpdateOperationsInput | string
    company_phone?: NullableStringFieldUpdateOperationsInput | string | null
    date_requested?: DateTimeFieldUpdateOperationsInput | Date | string
    attendees_count?: NullableIntFieldUpdateOperationsInput | number | null
    notes_from_client?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    quote_amount_usd?: IntFieldUpdateOperationsInput | number
    quote_amount_nis?: NullableIntFieldUpdateOperationsInput | number | null
    payment_method?: StringFieldUpdateOperationsInput | string
    payment_status?: StringFieldUpdateOperationsInput | string
    stripe_payment_id?: NullableStringFieldUpdateOperationsInput | string | null
    platform_fee_usd?: NullableIntFieldUpdateOperationsInput | number | null
    platform_fee_nis?: NullableIntFieldUpdateOperationsInput | number | null
    expert_payout_usd?: NullableIntFieldUpdateOperationsInput | number | null
    expert_payout_nis?: NullableIntFieldUpdateOperationsInput | number | null
    notes_from_expert?: NullableStringFieldUpdateOperationsInput | string | null
    payment_link?: NullableStringFieldUpdateOperationsInput | string | null
    invoice_link?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    expert_response_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    event_date_confirmed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    review_sent?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpertUpsertWithoutReviewsInput = {
    update: XOR<ExpertUpdateWithoutReviewsInput, ExpertUncheckedUpdateWithoutReviewsInput>
    create: XOR<ExpertCreateWithoutReviewsInput, ExpertUncheckedCreateWithoutReviewsInput>
    where?: ExpertWhereInput
  }

  export type ExpertUpdateToOneWithWhereWithoutReviewsInput = {
    where?: ExpertWhereInput
    data: XOR<ExpertUpdateWithoutReviewsInput, ExpertUncheckedUpdateWithoutReviewsInput>
  }

  export type ExpertUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    average_rating?: FloatFieldUpdateOperationsInput | number
    total_reviews?: IntFieldUpdateOperationsInput | number
    hourly_rate_usd?: NullableIntFieldUpdateOperationsInput | number | null
    hourly_rate_nis?: NullableIntFieldUpdateOperationsInput | number | null
    languages?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    linkedin_profile?: NullableStringFieldUpdateOperationsInput | string | null
    cv_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    bio_en?: NullableStringFieldUpdateOperationsInput | string | null
    bio_he?: NullableStringFieldUpdateOperationsInput | string | null
    name_he?: NullableStringFieldUpdateOperationsInput | string | null
    specializations_en?: NullableStringFieldUpdateOperationsInput | string | null
    specializations_he?: NullableStringFieldUpdateOperationsInput | string | null
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
    title_he?: NullableStringFieldUpdateOperationsInput | string | null
    bookings?: BookingUpdateManyWithoutExpertNestedInput
    offerings?: OfferingUpdateManyWithoutExpertNestedInput
    specializations_list?: SpecializationUpdateManyWithoutExpertsNestedInput
    bids?: BidUpdateManyWithoutExpertNestedInput
    user?: UserUpdateOneWithoutExpertNestedInput
  }

  export type ExpertUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    average_rating?: FloatFieldUpdateOperationsInput | number
    total_reviews?: IntFieldUpdateOperationsInput | number
    hourly_rate_usd?: NullableIntFieldUpdateOperationsInput | number | null
    hourly_rate_nis?: NullableIntFieldUpdateOperationsInput | number | null
    languages?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    linkedin_profile?: NullableStringFieldUpdateOperationsInput | string | null
    cv_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    bio_en?: NullableStringFieldUpdateOperationsInput | string | null
    bio_he?: NullableStringFieldUpdateOperationsInput | string | null
    name_he?: NullableStringFieldUpdateOperationsInput | string | null
    specializations_en?: NullableStringFieldUpdateOperationsInput | string | null
    specializations_he?: NullableStringFieldUpdateOperationsInput | string | null
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
    title_he?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    bookings?: BookingUncheckedUpdateManyWithoutExpertNestedInput
    offerings?: OfferingUncheckedUpdateManyWithoutExpertNestedInput
    specializations_list?: SpecializationUncheckedUpdateManyWithoutExpertsNestedInput
    bids?: BidUncheckedUpdateManyWithoutExpertNestedInput
  }

  export type ExpertCreateWithoutUserInput = {
    id?: string
    slug: string
    name: string
    profile_image?: string | null
    company?: string | null
    average_rating?: number
    total_reviews?: number
    hourly_rate_usd?: number | null
    hourly_rate_nis?: number | null
    languages: string
    verified?: boolean
    active?: boolean
    status?: string
    linkedin_profile?: string | null
    cv_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    email?: string | null
    bio_en?: string | null
    bio_he?: string | null
    name_he?: string | null
    specializations_en?: string | null
    specializations_he?: string | null
    title_en?: string | null
    title_he?: string | null
    bookings?: BookingCreateNestedManyWithoutExpertInput
    offerings?: OfferingCreateNestedManyWithoutExpertInput
    reviews?: ReviewCreateNestedManyWithoutExpertInput
    specializations_list?: SpecializationCreateNestedManyWithoutExpertsInput
    bids?: BidCreateNestedManyWithoutExpertInput
  }

  export type ExpertUncheckedCreateWithoutUserInput = {
    id?: string
    slug: string
    name: string
    profile_image?: string | null
    company?: string | null
    average_rating?: number
    total_reviews?: number
    hourly_rate_usd?: number | null
    hourly_rate_nis?: number | null
    languages: string
    verified?: boolean
    active?: boolean
    status?: string
    linkedin_profile?: string | null
    cv_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    email?: string | null
    bio_en?: string | null
    bio_he?: string | null
    name_he?: string | null
    specializations_en?: string | null
    specializations_he?: string | null
    title_en?: string | null
    title_he?: string | null
    bookings?: BookingUncheckedCreateNestedManyWithoutExpertInput
    offerings?: OfferingUncheckedCreateNestedManyWithoutExpertInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutExpertInput
    specializations_list?: SpecializationUncheckedCreateNestedManyWithoutExpertsInput
    bids?: BidUncheckedCreateNestedManyWithoutExpertInput
  }

  export type ExpertCreateOrConnectWithoutUserInput = {
    where: ExpertWhereUniqueInput
    create: XOR<ExpertCreateWithoutUserInput, ExpertUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ExpertUpsertWithoutUserInput = {
    update: XOR<ExpertUpdateWithoutUserInput, ExpertUncheckedUpdateWithoutUserInput>
    create: XOR<ExpertCreateWithoutUserInput, ExpertUncheckedCreateWithoutUserInput>
    where?: ExpertWhereInput
  }

  export type ExpertUpdateToOneWithWhereWithoutUserInput = {
    where?: ExpertWhereInput
    data: XOR<ExpertUpdateWithoutUserInput, ExpertUncheckedUpdateWithoutUserInput>
  }

  export type ExpertUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    average_rating?: FloatFieldUpdateOperationsInput | number
    total_reviews?: IntFieldUpdateOperationsInput | number
    hourly_rate_usd?: NullableIntFieldUpdateOperationsInput | number | null
    hourly_rate_nis?: NullableIntFieldUpdateOperationsInput | number | null
    languages?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    linkedin_profile?: NullableStringFieldUpdateOperationsInput | string | null
    cv_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    bio_en?: NullableStringFieldUpdateOperationsInput | string | null
    bio_he?: NullableStringFieldUpdateOperationsInput | string | null
    name_he?: NullableStringFieldUpdateOperationsInput | string | null
    specializations_en?: NullableStringFieldUpdateOperationsInput | string | null
    specializations_he?: NullableStringFieldUpdateOperationsInput | string | null
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
    title_he?: NullableStringFieldUpdateOperationsInput | string | null
    bookings?: BookingUpdateManyWithoutExpertNestedInput
    offerings?: OfferingUpdateManyWithoutExpertNestedInput
    reviews?: ReviewUpdateManyWithoutExpertNestedInput
    specializations_list?: SpecializationUpdateManyWithoutExpertsNestedInput
    bids?: BidUpdateManyWithoutExpertNestedInput
  }

  export type ExpertUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    average_rating?: FloatFieldUpdateOperationsInput | number
    total_reviews?: IntFieldUpdateOperationsInput | number
    hourly_rate_usd?: NullableIntFieldUpdateOperationsInput | number | null
    hourly_rate_nis?: NullableIntFieldUpdateOperationsInput | number | null
    languages?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    linkedin_profile?: NullableStringFieldUpdateOperationsInput | string | null
    cv_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    bio_en?: NullableStringFieldUpdateOperationsInput | string | null
    bio_he?: NullableStringFieldUpdateOperationsInput | string | null
    name_he?: NullableStringFieldUpdateOperationsInput | string | null
    specializations_en?: NullableStringFieldUpdateOperationsInput | string | null
    specializations_he?: NullableStringFieldUpdateOperationsInput | string | null
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
    title_he?: NullableStringFieldUpdateOperationsInput | string | null
    bookings?: BookingUncheckedUpdateManyWithoutExpertNestedInput
    offerings?: OfferingUncheckedUpdateManyWithoutExpertNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutExpertNestedInput
    specializations_list?: SpecializationUncheckedUpdateManyWithoutExpertsNestedInput
    bids?: BidUncheckedUpdateManyWithoutExpertNestedInput
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    role?: string
    expert?: ExpertCreateNestedOneWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    role?: string
    expert?: ExpertUncheckedCreateNestedOneWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    expert?: ExpertUpdateOneWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    expert?: ExpertUncheckedUpdateOneWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    role?: string
    expert?: ExpertCreateNestedOneWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    role?: string
    expert?: ExpertUncheckedCreateNestedOneWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    expert?: ExpertUpdateOneWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    expert?: ExpertUncheckedUpdateOneWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BlogPostCreateWithoutCategoryInput = {
    id?: string
    slug: string
    title_he: string
    title_en: string
    excerpt_he: string
    excerpt_en: string
    content_he: string
    content_en: string
    cover_image?: string | null
    published?: boolean
    publishedAt?: Date | string
    author_name: string
    created_at?: Date | string
    updated_at?: Date | string
    faqs?: FAQCreateNestedManyWithoutPostInput
  }

  export type BlogPostUncheckedCreateWithoutCategoryInput = {
    id?: string
    slug: string
    title_he: string
    title_en: string
    excerpt_he: string
    excerpt_en: string
    content_he: string
    content_en: string
    cover_image?: string | null
    published?: boolean
    publishedAt?: Date | string
    author_name: string
    created_at?: Date | string
    updated_at?: Date | string
    faqs?: FAQUncheckedCreateNestedManyWithoutPostInput
  }

  export type BlogPostCreateOrConnectWithoutCategoryInput = {
    where: BlogPostWhereUniqueInput
    create: XOR<BlogPostCreateWithoutCategoryInput, BlogPostUncheckedCreateWithoutCategoryInput>
  }

  export type BlogPostCreateManyCategoryInputEnvelope = {
    data: BlogPostCreateManyCategoryInput | BlogPostCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type BlogPostUpsertWithWhereUniqueWithoutCategoryInput = {
    where: BlogPostWhereUniqueInput
    update: XOR<BlogPostUpdateWithoutCategoryInput, BlogPostUncheckedUpdateWithoutCategoryInput>
    create: XOR<BlogPostCreateWithoutCategoryInput, BlogPostUncheckedCreateWithoutCategoryInput>
  }

  export type BlogPostUpdateWithWhereUniqueWithoutCategoryInput = {
    where: BlogPostWhereUniqueInput
    data: XOR<BlogPostUpdateWithoutCategoryInput, BlogPostUncheckedUpdateWithoutCategoryInput>
  }

  export type BlogPostUpdateManyWithWhereWithoutCategoryInput = {
    where: BlogPostScalarWhereInput
    data: XOR<BlogPostUpdateManyMutationInput, BlogPostUncheckedUpdateManyWithoutCategoryInput>
  }

  export type BlogPostScalarWhereInput = {
    AND?: BlogPostScalarWhereInput | BlogPostScalarWhereInput[]
    OR?: BlogPostScalarWhereInput[]
    NOT?: BlogPostScalarWhereInput | BlogPostScalarWhereInput[]
    id?: StringFilter<"BlogPost"> | string
    slug?: StringFilter<"BlogPost"> | string
    title_he?: StringFilter<"BlogPost"> | string
    title_en?: StringFilter<"BlogPost"> | string
    excerpt_he?: StringFilter<"BlogPost"> | string
    excerpt_en?: StringFilter<"BlogPost"> | string
    content_he?: StringFilter<"BlogPost"> | string
    content_en?: StringFilter<"BlogPost"> | string
    cover_image?: StringNullableFilter<"BlogPost"> | string | null
    published?: BoolFilter<"BlogPost"> | boolean
    publishedAt?: DateTimeFilter<"BlogPost"> | Date | string
    category_id?: StringFilter<"BlogPost"> | string
    author_name?: StringFilter<"BlogPost"> | string
    created_at?: DateTimeFilter<"BlogPost"> | Date | string
    updated_at?: DateTimeFilter<"BlogPost"> | Date | string
  }

  export type CategoryCreateWithoutPostsInput = {
    id?: string
    slug: string
    name_he: string
    name_en: string
  }

  export type CategoryUncheckedCreateWithoutPostsInput = {
    id?: string
    slug: string
    name_he: string
    name_en: string
  }

  export type CategoryCreateOrConnectWithoutPostsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutPostsInput, CategoryUncheckedCreateWithoutPostsInput>
  }

  export type FAQCreateWithoutPostInput = {
    id?: string
    question_he: string
    answer_he: string
    question_en: string
    answer_en: string
  }

  export type FAQUncheckedCreateWithoutPostInput = {
    id?: string
    question_he: string
    answer_he: string
    question_en: string
    answer_en: string
  }

  export type FAQCreateOrConnectWithoutPostInput = {
    where: FAQWhereUniqueInput
    create: XOR<FAQCreateWithoutPostInput, FAQUncheckedCreateWithoutPostInput>
  }

  export type FAQCreateManyPostInputEnvelope = {
    data: FAQCreateManyPostInput | FAQCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type CategoryUpsertWithoutPostsInput = {
    update: XOR<CategoryUpdateWithoutPostsInput, CategoryUncheckedUpdateWithoutPostsInput>
    create: XOR<CategoryCreateWithoutPostsInput, CategoryUncheckedCreateWithoutPostsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutPostsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutPostsInput, CategoryUncheckedUpdateWithoutPostsInput>
  }

  export type CategoryUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name_he?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name_he?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
  }

  export type FAQUpsertWithWhereUniqueWithoutPostInput = {
    where: FAQWhereUniqueInput
    update: XOR<FAQUpdateWithoutPostInput, FAQUncheckedUpdateWithoutPostInput>
    create: XOR<FAQCreateWithoutPostInput, FAQUncheckedCreateWithoutPostInput>
  }

  export type FAQUpdateWithWhereUniqueWithoutPostInput = {
    where: FAQWhereUniqueInput
    data: XOR<FAQUpdateWithoutPostInput, FAQUncheckedUpdateWithoutPostInput>
  }

  export type FAQUpdateManyWithWhereWithoutPostInput = {
    where: FAQScalarWhereInput
    data: XOR<FAQUpdateManyMutationInput, FAQUncheckedUpdateManyWithoutPostInput>
  }

  export type FAQScalarWhereInput = {
    AND?: FAQScalarWhereInput | FAQScalarWhereInput[]
    OR?: FAQScalarWhereInput[]
    NOT?: FAQScalarWhereInput | FAQScalarWhereInput[]
    id?: StringFilter<"FAQ"> | string
    question_he?: StringFilter<"FAQ"> | string
    answer_he?: StringFilter<"FAQ"> | string
    question_en?: StringFilter<"FAQ"> | string
    answer_en?: StringFilter<"FAQ"> | string
    post_id?: StringFilter<"FAQ"> | string
  }

  export type BlogPostCreateWithoutFaqsInput = {
    id?: string
    slug: string
    title_he: string
    title_en: string
    excerpt_he: string
    excerpt_en: string
    content_he: string
    content_en: string
    cover_image?: string | null
    published?: boolean
    publishedAt?: Date | string
    author_name: string
    created_at?: Date | string
    updated_at?: Date | string
    category: CategoryCreateNestedOneWithoutPostsInput
  }

  export type BlogPostUncheckedCreateWithoutFaqsInput = {
    id?: string
    slug: string
    title_he: string
    title_en: string
    excerpt_he: string
    excerpt_en: string
    content_he: string
    content_en: string
    cover_image?: string | null
    published?: boolean
    publishedAt?: Date | string
    category_id: string
    author_name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type BlogPostCreateOrConnectWithoutFaqsInput = {
    where: BlogPostWhereUniqueInput
    create: XOR<BlogPostCreateWithoutFaqsInput, BlogPostUncheckedCreateWithoutFaqsInput>
  }

  export type BlogPostUpsertWithoutFaqsInput = {
    update: XOR<BlogPostUpdateWithoutFaqsInput, BlogPostUncheckedUpdateWithoutFaqsInput>
    create: XOR<BlogPostCreateWithoutFaqsInput, BlogPostUncheckedCreateWithoutFaqsInput>
    where?: BlogPostWhereInput
  }

  export type BlogPostUpdateToOneWithWhereWithoutFaqsInput = {
    where?: BlogPostWhereInput
    data: XOR<BlogPostUpdateWithoutFaqsInput, BlogPostUncheckedUpdateWithoutFaqsInput>
  }

  export type BlogPostUpdateWithoutFaqsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title_he?: StringFieldUpdateOperationsInput | string
    title_en?: StringFieldUpdateOperationsInput | string
    excerpt_he?: StringFieldUpdateOperationsInput | string
    excerpt_en?: StringFieldUpdateOperationsInput | string
    content_he?: StringFieldUpdateOperationsInput | string
    content_en?: StringFieldUpdateOperationsInput | string
    cover_image?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutPostsNestedInput
  }

  export type BlogPostUncheckedUpdateWithoutFaqsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title_he?: StringFieldUpdateOperationsInput | string
    title_en?: StringFieldUpdateOperationsInput | string
    excerpt_he?: StringFieldUpdateOperationsInput | string
    excerpt_en?: StringFieldUpdateOperationsInput | string
    content_he?: StringFieldUpdateOperationsInput | string
    content_en?: StringFieldUpdateOperationsInput | string
    cover_image?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category_id?: StringFieldUpdateOperationsInput | string
    author_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpertCreateWithoutSpecializations_listInput = {
    id?: string
    slug: string
    name: string
    profile_image?: string | null
    company?: string | null
    average_rating?: number
    total_reviews?: number
    hourly_rate_usd?: number | null
    hourly_rate_nis?: number | null
    languages: string
    verified?: boolean
    active?: boolean
    status?: string
    linkedin_profile?: string | null
    cv_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    email?: string | null
    bio_en?: string | null
    bio_he?: string | null
    name_he?: string | null
    specializations_en?: string | null
    specializations_he?: string | null
    title_en?: string | null
    title_he?: string | null
    bookings?: BookingCreateNestedManyWithoutExpertInput
    offerings?: OfferingCreateNestedManyWithoutExpertInput
    reviews?: ReviewCreateNestedManyWithoutExpertInput
    bids?: BidCreateNestedManyWithoutExpertInput
    user?: UserCreateNestedOneWithoutExpertInput
  }

  export type ExpertUncheckedCreateWithoutSpecializations_listInput = {
    id?: string
    slug: string
    name: string
    profile_image?: string | null
    company?: string | null
    average_rating?: number
    total_reviews?: number
    hourly_rate_usd?: number | null
    hourly_rate_nis?: number | null
    languages: string
    verified?: boolean
    active?: boolean
    status?: string
    linkedin_profile?: string | null
    cv_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    email?: string | null
    bio_en?: string | null
    bio_he?: string | null
    name_he?: string | null
    specializations_en?: string | null
    specializations_he?: string | null
    title_en?: string | null
    title_he?: string | null
    userId?: string | null
    bookings?: BookingUncheckedCreateNestedManyWithoutExpertInput
    offerings?: OfferingUncheckedCreateNestedManyWithoutExpertInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutExpertInput
    bids?: BidUncheckedCreateNestedManyWithoutExpertInput
  }

  export type ExpertCreateOrConnectWithoutSpecializations_listInput = {
    where: ExpertWhereUniqueInput
    create: XOR<ExpertCreateWithoutSpecializations_listInput, ExpertUncheckedCreateWithoutSpecializations_listInput>
  }

  export type TaskCreateWithoutSpecializationsInput = {
    id?: string
    slug: string
    title: string
    description: string
    budget_range?: string | null
    status?: string
    approved?: boolean
    client_name?: string | null
    client_email?: string | null
    client_company?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    bids?: BidCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutSpecializationsInput = {
    id?: string
    slug: string
    title: string
    description: string
    budget_range?: string | null
    status?: string
    approved?: boolean
    client_name?: string | null
    client_email?: string | null
    client_company?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    bids?: BidUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutSpecializationsInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutSpecializationsInput, TaskUncheckedCreateWithoutSpecializationsInput>
  }

  export type ExpertUpsertWithWhereUniqueWithoutSpecializations_listInput = {
    where: ExpertWhereUniqueInput
    update: XOR<ExpertUpdateWithoutSpecializations_listInput, ExpertUncheckedUpdateWithoutSpecializations_listInput>
    create: XOR<ExpertCreateWithoutSpecializations_listInput, ExpertUncheckedCreateWithoutSpecializations_listInput>
  }

  export type ExpertUpdateWithWhereUniqueWithoutSpecializations_listInput = {
    where: ExpertWhereUniqueInput
    data: XOR<ExpertUpdateWithoutSpecializations_listInput, ExpertUncheckedUpdateWithoutSpecializations_listInput>
  }

  export type ExpertUpdateManyWithWhereWithoutSpecializations_listInput = {
    where: ExpertScalarWhereInput
    data: XOR<ExpertUpdateManyMutationInput, ExpertUncheckedUpdateManyWithoutSpecializations_listInput>
  }

  export type ExpertScalarWhereInput = {
    AND?: ExpertScalarWhereInput | ExpertScalarWhereInput[]
    OR?: ExpertScalarWhereInput[]
    NOT?: ExpertScalarWhereInput | ExpertScalarWhereInput[]
    id?: StringFilter<"Expert"> | string
    slug?: StringFilter<"Expert"> | string
    name?: StringFilter<"Expert"> | string
    profile_image?: StringNullableFilter<"Expert"> | string | null
    company?: StringNullableFilter<"Expert"> | string | null
    average_rating?: FloatFilter<"Expert"> | number
    total_reviews?: IntFilter<"Expert"> | number
    hourly_rate_usd?: IntNullableFilter<"Expert"> | number | null
    hourly_rate_nis?: IntNullableFilter<"Expert"> | number | null
    languages?: StringFilter<"Expert"> | string
    verified?: BoolFilter<"Expert"> | boolean
    active?: BoolFilter<"Expert"> | boolean
    status?: StringFilter<"Expert"> | string
    linkedin_profile?: StringNullableFilter<"Expert"> | string | null
    cv_url?: StringNullableFilter<"Expert"> | string | null
    created_at?: DateTimeFilter<"Expert"> | Date | string
    updated_at?: DateTimeFilter<"Expert"> | Date | string
    email?: StringNullableFilter<"Expert"> | string | null
    bio_en?: StringNullableFilter<"Expert"> | string | null
    bio_he?: StringNullableFilter<"Expert"> | string | null
    name_he?: StringNullableFilter<"Expert"> | string | null
    specializations_en?: StringNullableFilter<"Expert"> | string | null
    specializations_he?: StringNullableFilter<"Expert"> | string | null
    title_en?: StringNullableFilter<"Expert"> | string | null
    title_he?: StringNullableFilter<"Expert"> | string | null
    userId?: StringNullableFilter<"Expert"> | string | null
  }

  export type TaskUpsertWithWhereUniqueWithoutSpecializationsInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutSpecializationsInput, TaskUncheckedUpdateWithoutSpecializationsInput>
    create: XOR<TaskCreateWithoutSpecializationsInput, TaskUncheckedCreateWithoutSpecializationsInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutSpecializationsInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutSpecializationsInput, TaskUncheckedUpdateWithoutSpecializationsInput>
  }

  export type TaskUpdateManyWithWhereWithoutSpecializationsInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutSpecializationsInput>
  }

  export type TaskScalarWhereInput = {
    AND?: TaskScalarWhereInput | TaskScalarWhereInput[]
    OR?: TaskScalarWhereInput[]
    NOT?: TaskScalarWhereInput | TaskScalarWhereInput[]
    id?: StringFilter<"Task"> | string
    slug?: StringFilter<"Task"> | string
    title?: StringFilter<"Task"> | string
    description?: StringFilter<"Task"> | string
    budget_range?: StringNullableFilter<"Task"> | string | null
    status?: StringFilter<"Task"> | string
    approved?: BoolFilter<"Task"> | boolean
    client_name?: StringNullableFilter<"Task"> | string | null
    client_email?: StringNullableFilter<"Task"> | string | null
    client_company?: StringNullableFilter<"Task"> | string | null
    created_at?: DateTimeFilter<"Task"> | Date | string
    updated_at?: DateTimeFilter<"Task"> | Date | string
  }

  export type SpecializationCreateWithoutTasksInput = {
    id?: string
    slug: string
    name_he: string
    name_en: string
    description_he?: string | null
    description_en?: string | null
    metaTitle_he?: string | null
    metaTitle_en?: string | null
    metaDescription_he?: string | null
    metaDescription_en?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    experts?: ExpertCreateNestedManyWithoutSpecializations_listInput
  }

  export type SpecializationUncheckedCreateWithoutTasksInput = {
    id?: string
    slug: string
    name_he: string
    name_en: string
    description_he?: string | null
    description_en?: string | null
    metaTitle_he?: string | null
    metaTitle_en?: string | null
    metaDescription_he?: string | null
    metaDescription_en?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    experts?: ExpertUncheckedCreateNestedManyWithoutSpecializations_listInput
  }

  export type SpecializationCreateOrConnectWithoutTasksInput = {
    where: SpecializationWhereUniqueInput
    create: XOR<SpecializationCreateWithoutTasksInput, SpecializationUncheckedCreateWithoutTasksInput>
  }

  export type BidCreateWithoutTaskInput = {
    id?: string
    amount?: number | null
    message?: string | null
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
    expert: ExpertCreateNestedOneWithoutBidsInput
  }

  export type BidUncheckedCreateWithoutTaskInput = {
    id?: string
    expert_id: string
    amount?: number | null
    message?: string | null
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type BidCreateOrConnectWithoutTaskInput = {
    where: BidWhereUniqueInput
    create: XOR<BidCreateWithoutTaskInput, BidUncheckedCreateWithoutTaskInput>
  }

  export type BidCreateManyTaskInputEnvelope = {
    data: BidCreateManyTaskInput | BidCreateManyTaskInput[]
    skipDuplicates?: boolean
  }

  export type SpecializationUpsertWithWhereUniqueWithoutTasksInput = {
    where: SpecializationWhereUniqueInput
    update: XOR<SpecializationUpdateWithoutTasksInput, SpecializationUncheckedUpdateWithoutTasksInput>
    create: XOR<SpecializationCreateWithoutTasksInput, SpecializationUncheckedCreateWithoutTasksInput>
  }

  export type SpecializationUpdateWithWhereUniqueWithoutTasksInput = {
    where: SpecializationWhereUniqueInput
    data: XOR<SpecializationUpdateWithoutTasksInput, SpecializationUncheckedUpdateWithoutTasksInput>
  }

  export type SpecializationUpdateManyWithWhereWithoutTasksInput = {
    where: SpecializationScalarWhereInput
    data: XOR<SpecializationUpdateManyMutationInput, SpecializationUncheckedUpdateManyWithoutTasksInput>
  }

  export type BidUpsertWithWhereUniqueWithoutTaskInput = {
    where: BidWhereUniqueInput
    update: XOR<BidUpdateWithoutTaskInput, BidUncheckedUpdateWithoutTaskInput>
    create: XOR<BidCreateWithoutTaskInput, BidUncheckedCreateWithoutTaskInput>
  }

  export type BidUpdateWithWhereUniqueWithoutTaskInput = {
    where: BidWhereUniqueInput
    data: XOR<BidUpdateWithoutTaskInput, BidUncheckedUpdateWithoutTaskInput>
  }

  export type BidUpdateManyWithWhereWithoutTaskInput = {
    where: BidScalarWhereInput
    data: XOR<BidUpdateManyMutationInput, BidUncheckedUpdateManyWithoutTaskInput>
  }

  export type TaskCreateWithoutBidsInput = {
    id?: string
    slug: string
    title: string
    description: string
    budget_range?: string | null
    status?: string
    approved?: boolean
    client_name?: string | null
    client_email?: string | null
    client_company?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    specializations?: SpecializationCreateNestedManyWithoutTasksInput
  }

  export type TaskUncheckedCreateWithoutBidsInput = {
    id?: string
    slug: string
    title: string
    description: string
    budget_range?: string | null
    status?: string
    approved?: boolean
    client_name?: string | null
    client_email?: string | null
    client_company?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    specializations?: SpecializationUncheckedCreateNestedManyWithoutTasksInput
  }

  export type TaskCreateOrConnectWithoutBidsInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutBidsInput, TaskUncheckedCreateWithoutBidsInput>
  }

  export type ExpertCreateWithoutBidsInput = {
    id?: string
    slug: string
    name: string
    profile_image?: string | null
    company?: string | null
    average_rating?: number
    total_reviews?: number
    hourly_rate_usd?: number | null
    hourly_rate_nis?: number | null
    languages: string
    verified?: boolean
    active?: boolean
    status?: string
    linkedin_profile?: string | null
    cv_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    email?: string | null
    bio_en?: string | null
    bio_he?: string | null
    name_he?: string | null
    specializations_en?: string | null
    specializations_he?: string | null
    title_en?: string | null
    title_he?: string | null
    bookings?: BookingCreateNestedManyWithoutExpertInput
    offerings?: OfferingCreateNestedManyWithoutExpertInput
    reviews?: ReviewCreateNestedManyWithoutExpertInput
    specializations_list?: SpecializationCreateNestedManyWithoutExpertsInput
    user?: UserCreateNestedOneWithoutExpertInput
  }

  export type ExpertUncheckedCreateWithoutBidsInput = {
    id?: string
    slug: string
    name: string
    profile_image?: string | null
    company?: string | null
    average_rating?: number
    total_reviews?: number
    hourly_rate_usd?: number | null
    hourly_rate_nis?: number | null
    languages: string
    verified?: boolean
    active?: boolean
    status?: string
    linkedin_profile?: string | null
    cv_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    email?: string | null
    bio_en?: string | null
    bio_he?: string | null
    name_he?: string | null
    specializations_en?: string | null
    specializations_he?: string | null
    title_en?: string | null
    title_he?: string | null
    userId?: string | null
    bookings?: BookingUncheckedCreateNestedManyWithoutExpertInput
    offerings?: OfferingUncheckedCreateNestedManyWithoutExpertInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutExpertInput
    specializations_list?: SpecializationUncheckedCreateNestedManyWithoutExpertsInput
  }

  export type ExpertCreateOrConnectWithoutBidsInput = {
    where: ExpertWhereUniqueInput
    create: XOR<ExpertCreateWithoutBidsInput, ExpertUncheckedCreateWithoutBidsInput>
  }

  export type TaskUpsertWithoutBidsInput = {
    update: XOR<TaskUpdateWithoutBidsInput, TaskUncheckedUpdateWithoutBidsInput>
    create: XOR<TaskCreateWithoutBidsInput, TaskUncheckedCreateWithoutBidsInput>
    where?: TaskWhereInput
  }

  export type TaskUpdateToOneWithWhereWithoutBidsInput = {
    where?: TaskWhereInput
    data: XOR<TaskUpdateWithoutBidsInput, TaskUncheckedUpdateWithoutBidsInput>
  }

  export type TaskUpdateWithoutBidsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    budget_range?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    client_name?: NullableStringFieldUpdateOperationsInput | string | null
    client_email?: NullableStringFieldUpdateOperationsInput | string | null
    client_company?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    specializations?: SpecializationUpdateManyWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateWithoutBidsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    budget_range?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    client_name?: NullableStringFieldUpdateOperationsInput | string | null
    client_email?: NullableStringFieldUpdateOperationsInput | string | null
    client_company?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    specializations?: SpecializationUncheckedUpdateManyWithoutTasksNestedInput
  }

  export type ExpertUpsertWithoutBidsInput = {
    update: XOR<ExpertUpdateWithoutBidsInput, ExpertUncheckedUpdateWithoutBidsInput>
    create: XOR<ExpertCreateWithoutBidsInput, ExpertUncheckedCreateWithoutBidsInput>
    where?: ExpertWhereInput
  }

  export type ExpertUpdateToOneWithWhereWithoutBidsInput = {
    where?: ExpertWhereInput
    data: XOR<ExpertUpdateWithoutBidsInput, ExpertUncheckedUpdateWithoutBidsInput>
  }

  export type ExpertUpdateWithoutBidsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    average_rating?: FloatFieldUpdateOperationsInput | number
    total_reviews?: IntFieldUpdateOperationsInput | number
    hourly_rate_usd?: NullableIntFieldUpdateOperationsInput | number | null
    hourly_rate_nis?: NullableIntFieldUpdateOperationsInput | number | null
    languages?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    linkedin_profile?: NullableStringFieldUpdateOperationsInput | string | null
    cv_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    bio_en?: NullableStringFieldUpdateOperationsInput | string | null
    bio_he?: NullableStringFieldUpdateOperationsInput | string | null
    name_he?: NullableStringFieldUpdateOperationsInput | string | null
    specializations_en?: NullableStringFieldUpdateOperationsInput | string | null
    specializations_he?: NullableStringFieldUpdateOperationsInput | string | null
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
    title_he?: NullableStringFieldUpdateOperationsInput | string | null
    bookings?: BookingUpdateManyWithoutExpertNestedInput
    offerings?: OfferingUpdateManyWithoutExpertNestedInput
    reviews?: ReviewUpdateManyWithoutExpertNestedInput
    specializations_list?: SpecializationUpdateManyWithoutExpertsNestedInput
    user?: UserUpdateOneWithoutExpertNestedInput
  }

  export type ExpertUncheckedUpdateWithoutBidsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    average_rating?: FloatFieldUpdateOperationsInput | number
    total_reviews?: IntFieldUpdateOperationsInput | number
    hourly_rate_usd?: NullableIntFieldUpdateOperationsInput | number | null
    hourly_rate_nis?: NullableIntFieldUpdateOperationsInput | number | null
    languages?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    linkedin_profile?: NullableStringFieldUpdateOperationsInput | string | null
    cv_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    bio_en?: NullableStringFieldUpdateOperationsInput | string | null
    bio_he?: NullableStringFieldUpdateOperationsInput | string | null
    name_he?: NullableStringFieldUpdateOperationsInput | string | null
    specializations_en?: NullableStringFieldUpdateOperationsInput | string | null
    specializations_he?: NullableStringFieldUpdateOperationsInput | string | null
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
    title_he?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    bookings?: BookingUncheckedUpdateManyWithoutExpertNestedInput
    offerings?: OfferingUncheckedUpdateManyWithoutExpertNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutExpertNestedInput
    specializations_list?: SpecializationUncheckedUpdateManyWithoutExpertsNestedInput
  }

  export type BookingCreateManyExpertInput = {
    id?: string
    offering_id: string
    company_name: string
    company_contact_name: string
    company_email: string
    company_phone?: string | null
    date_requested: Date | string
    attendees_count?: number | null
    notes_from_client?: string | null
    status?: string
    quote_amount_usd: number
    quote_amount_nis?: number | null
    payment_method?: string
    payment_status?: string
    stripe_payment_id?: string | null
    platform_fee_usd?: number | null
    platform_fee_nis?: number | null
    expert_payout_usd?: number | null
    expert_payout_nis?: number | null
    notes_from_expert?: string | null
    payment_link?: string | null
    invoice_link?: string | null
    transaction_id?: string | null
    expert_response_date?: Date | string | null
    event_date_confirmed?: Date | string | null
    review_sent?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type OfferingCreateManyExpertInput = {
    id?: string
    title: string
    type?: string
    description: string
    format: string
    duration_minutes: number
    max_attendees?: number | null
    price_usd: number
    price_nis?: number | null
    audience_level: string
    includes?: string | null
    target_industries?: string | null
    customizable?: boolean
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ReviewCreateManyExpertInput = {
    id?: string
    booking_id?: string | null
    company_name: string
    rating: number
    title?: string | null
    text: string
    verified?: boolean
    created_at?: Date | string
  }

  export type BidCreateManyExpertInput = {
    id?: string
    task_id: string
    amount?: number | null
    message?: string | null
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type BookingUpdateWithoutExpertInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    company_contact_name?: StringFieldUpdateOperationsInput | string
    company_email?: StringFieldUpdateOperationsInput | string
    company_phone?: NullableStringFieldUpdateOperationsInput | string | null
    date_requested?: DateTimeFieldUpdateOperationsInput | Date | string
    attendees_count?: NullableIntFieldUpdateOperationsInput | number | null
    notes_from_client?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    quote_amount_usd?: IntFieldUpdateOperationsInput | number
    quote_amount_nis?: NullableIntFieldUpdateOperationsInput | number | null
    payment_method?: StringFieldUpdateOperationsInput | string
    payment_status?: StringFieldUpdateOperationsInput | string
    stripe_payment_id?: NullableStringFieldUpdateOperationsInput | string | null
    platform_fee_usd?: NullableIntFieldUpdateOperationsInput | number | null
    platform_fee_nis?: NullableIntFieldUpdateOperationsInput | number | null
    expert_payout_usd?: NullableIntFieldUpdateOperationsInput | number | null
    expert_payout_nis?: NullableIntFieldUpdateOperationsInput | number | null
    notes_from_expert?: NullableStringFieldUpdateOperationsInput | string | null
    payment_link?: NullableStringFieldUpdateOperationsInput | string | null
    invoice_link?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    expert_response_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    event_date_confirmed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    review_sent?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    offering?: OfferingUpdateOneRequiredWithoutBookingsNestedInput
    reviews?: ReviewUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutExpertInput = {
    id?: StringFieldUpdateOperationsInput | string
    offering_id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    company_contact_name?: StringFieldUpdateOperationsInput | string
    company_email?: StringFieldUpdateOperationsInput | string
    company_phone?: NullableStringFieldUpdateOperationsInput | string | null
    date_requested?: DateTimeFieldUpdateOperationsInput | Date | string
    attendees_count?: NullableIntFieldUpdateOperationsInput | number | null
    notes_from_client?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    quote_amount_usd?: IntFieldUpdateOperationsInput | number
    quote_amount_nis?: NullableIntFieldUpdateOperationsInput | number | null
    payment_method?: StringFieldUpdateOperationsInput | string
    payment_status?: StringFieldUpdateOperationsInput | string
    stripe_payment_id?: NullableStringFieldUpdateOperationsInput | string | null
    platform_fee_usd?: NullableIntFieldUpdateOperationsInput | number | null
    platform_fee_nis?: NullableIntFieldUpdateOperationsInput | number | null
    expert_payout_usd?: NullableIntFieldUpdateOperationsInput | number | null
    expert_payout_nis?: NullableIntFieldUpdateOperationsInput | number | null
    notes_from_expert?: NullableStringFieldUpdateOperationsInput | string | null
    payment_link?: NullableStringFieldUpdateOperationsInput | string | null
    invoice_link?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    expert_response_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    event_date_confirmed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    review_sent?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutExpertInput = {
    id?: StringFieldUpdateOperationsInput | string
    offering_id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    company_contact_name?: StringFieldUpdateOperationsInput | string
    company_email?: StringFieldUpdateOperationsInput | string
    company_phone?: NullableStringFieldUpdateOperationsInput | string | null
    date_requested?: DateTimeFieldUpdateOperationsInput | Date | string
    attendees_count?: NullableIntFieldUpdateOperationsInput | number | null
    notes_from_client?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    quote_amount_usd?: IntFieldUpdateOperationsInput | number
    quote_amount_nis?: NullableIntFieldUpdateOperationsInput | number | null
    payment_method?: StringFieldUpdateOperationsInput | string
    payment_status?: StringFieldUpdateOperationsInput | string
    stripe_payment_id?: NullableStringFieldUpdateOperationsInput | string | null
    platform_fee_usd?: NullableIntFieldUpdateOperationsInput | number | null
    platform_fee_nis?: NullableIntFieldUpdateOperationsInput | number | null
    expert_payout_usd?: NullableIntFieldUpdateOperationsInput | number | null
    expert_payout_nis?: NullableIntFieldUpdateOperationsInput | number | null
    notes_from_expert?: NullableStringFieldUpdateOperationsInput | string | null
    payment_link?: NullableStringFieldUpdateOperationsInput | string | null
    invoice_link?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    expert_response_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    event_date_confirmed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    review_sent?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OfferingUpdateWithoutExpertInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    format?: StringFieldUpdateOperationsInput | string
    duration_minutes?: IntFieldUpdateOperationsInput | number
    max_attendees?: NullableIntFieldUpdateOperationsInput | number | null
    price_usd?: IntFieldUpdateOperationsInput | number
    price_nis?: NullableIntFieldUpdateOperationsInput | number | null
    audience_level?: StringFieldUpdateOperationsInput | string
    includes?: NullableStringFieldUpdateOperationsInput | string | null
    target_industries?: NullableStringFieldUpdateOperationsInput | string | null
    customizable?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutOfferingNestedInput
  }

  export type OfferingUncheckedUpdateWithoutExpertInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    format?: StringFieldUpdateOperationsInput | string
    duration_minutes?: IntFieldUpdateOperationsInput | number
    max_attendees?: NullableIntFieldUpdateOperationsInput | number | null
    price_usd?: IntFieldUpdateOperationsInput | number
    price_nis?: NullableIntFieldUpdateOperationsInput | number | null
    audience_level?: StringFieldUpdateOperationsInput | string
    includes?: NullableStringFieldUpdateOperationsInput | string | null
    target_industries?: NullableStringFieldUpdateOperationsInput | string | null
    customizable?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutOfferingNestedInput
  }

  export type OfferingUncheckedUpdateManyWithoutExpertInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    format?: StringFieldUpdateOperationsInput | string
    duration_minutes?: IntFieldUpdateOperationsInput | number
    max_attendees?: NullableIntFieldUpdateOperationsInput | number | null
    price_usd?: IntFieldUpdateOperationsInput | number
    price_nis?: NullableIntFieldUpdateOperationsInput | number | null
    audience_level?: StringFieldUpdateOperationsInput | string
    includes?: NullableStringFieldUpdateOperationsInput | string | null
    target_industries?: NullableStringFieldUpdateOperationsInput | string | null
    customizable?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutExpertInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    text?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: BookingUpdateOneWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutExpertInput = {
    id?: StringFieldUpdateOperationsInput | string
    booking_id?: NullableStringFieldUpdateOperationsInput | string | null
    company_name?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    text?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutExpertInput = {
    id?: StringFieldUpdateOperationsInput | string
    booking_id?: NullableStringFieldUpdateOperationsInput | string | null
    company_name?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    text?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpecializationUpdateWithoutExpertsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name_he?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    description_he?: NullableStringFieldUpdateOperationsInput | string | null
    description_en?: NullableStringFieldUpdateOperationsInput | string | null
    metaTitle_he?: NullableStringFieldUpdateOperationsInput | string | null
    metaTitle_en?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription_he?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription_en?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUpdateManyWithoutSpecializationsNestedInput
  }

  export type SpecializationUncheckedUpdateWithoutExpertsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name_he?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    description_he?: NullableStringFieldUpdateOperationsInput | string | null
    description_en?: NullableStringFieldUpdateOperationsInput | string | null
    metaTitle_he?: NullableStringFieldUpdateOperationsInput | string | null
    metaTitle_en?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription_he?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription_en?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutSpecializationsNestedInput
  }

  export type SpecializationUncheckedUpdateManyWithoutExpertsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name_he?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    description_he?: NullableStringFieldUpdateOperationsInput | string | null
    description_en?: NullableStringFieldUpdateOperationsInput | string | null
    metaTitle_he?: NullableStringFieldUpdateOperationsInput | string | null
    metaTitle_en?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription_he?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription_en?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BidUpdateWithoutExpertInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TaskUpdateOneRequiredWithoutBidsNestedInput
  }

  export type BidUncheckedUpdateWithoutExpertInput = {
    id?: StringFieldUpdateOperationsInput | string
    task_id?: StringFieldUpdateOperationsInput | string
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BidUncheckedUpdateManyWithoutExpertInput = {
    id?: StringFieldUpdateOperationsInput | string
    task_id?: StringFieldUpdateOperationsInput | string
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateManyOfferingInput = {
    id?: string
    expert_id: string
    company_name: string
    company_contact_name: string
    company_email: string
    company_phone?: string | null
    date_requested: Date | string
    attendees_count?: number | null
    notes_from_client?: string | null
    status?: string
    quote_amount_usd: number
    quote_amount_nis?: number | null
    payment_method?: string
    payment_status?: string
    stripe_payment_id?: string | null
    platform_fee_usd?: number | null
    platform_fee_nis?: number | null
    expert_payout_usd?: number | null
    expert_payout_nis?: number | null
    notes_from_expert?: string | null
    payment_link?: string | null
    invoice_link?: string | null
    transaction_id?: string | null
    expert_response_date?: Date | string | null
    event_date_confirmed?: Date | string | null
    review_sent?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type BookingUpdateWithoutOfferingInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    company_contact_name?: StringFieldUpdateOperationsInput | string
    company_email?: StringFieldUpdateOperationsInput | string
    company_phone?: NullableStringFieldUpdateOperationsInput | string | null
    date_requested?: DateTimeFieldUpdateOperationsInput | Date | string
    attendees_count?: NullableIntFieldUpdateOperationsInput | number | null
    notes_from_client?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    quote_amount_usd?: IntFieldUpdateOperationsInput | number
    quote_amount_nis?: NullableIntFieldUpdateOperationsInput | number | null
    payment_method?: StringFieldUpdateOperationsInput | string
    payment_status?: StringFieldUpdateOperationsInput | string
    stripe_payment_id?: NullableStringFieldUpdateOperationsInput | string | null
    platform_fee_usd?: NullableIntFieldUpdateOperationsInput | number | null
    platform_fee_nis?: NullableIntFieldUpdateOperationsInput | number | null
    expert_payout_usd?: NullableIntFieldUpdateOperationsInput | number | null
    expert_payout_nis?: NullableIntFieldUpdateOperationsInput | number | null
    notes_from_expert?: NullableStringFieldUpdateOperationsInput | string | null
    payment_link?: NullableStringFieldUpdateOperationsInput | string | null
    invoice_link?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    expert_response_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    event_date_confirmed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    review_sent?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expert?: ExpertUpdateOneRequiredWithoutBookingsNestedInput
    reviews?: ReviewUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutOfferingInput = {
    id?: StringFieldUpdateOperationsInput | string
    expert_id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    company_contact_name?: StringFieldUpdateOperationsInput | string
    company_email?: StringFieldUpdateOperationsInput | string
    company_phone?: NullableStringFieldUpdateOperationsInput | string | null
    date_requested?: DateTimeFieldUpdateOperationsInput | Date | string
    attendees_count?: NullableIntFieldUpdateOperationsInput | number | null
    notes_from_client?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    quote_amount_usd?: IntFieldUpdateOperationsInput | number
    quote_amount_nis?: NullableIntFieldUpdateOperationsInput | number | null
    payment_method?: StringFieldUpdateOperationsInput | string
    payment_status?: StringFieldUpdateOperationsInput | string
    stripe_payment_id?: NullableStringFieldUpdateOperationsInput | string | null
    platform_fee_usd?: NullableIntFieldUpdateOperationsInput | number | null
    platform_fee_nis?: NullableIntFieldUpdateOperationsInput | number | null
    expert_payout_usd?: NullableIntFieldUpdateOperationsInput | number | null
    expert_payout_nis?: NullableIntFieldUpdateOperationsInput | number | null
    notes_from_expert?: NullableStringFieldUpdateOperationsInput | string | null
    payment_link?: NullableStringFieldUpdateOperationsInput | string | null
    invoice_link?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    expert_response_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    event_date_confirmed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    review_sent?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutOfferingInput = {
    id?: StringFieldUpdateOperationsInput | string
    expert_id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    company_contact_name?: StringFieldUpdateOperationsInput | string
    company_email?: StringFieldUpdateOperationsInput | string
    company_phone?: NullableStringFieldUpdateOperationsInput | string | null
    date_requested?: DateTimeFieldUpdateOperationsInput | Date | string
    attendees_count?: NullableIntFieldUpdateOperationsInput | number | null
    notes_from_client?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    quote_amount_usd?: IntFieldUpdateOperationsInput | number
    quote_amount_nis?: NullableIntFieldUpdateOperationsInput | number | null
    payment_method?: StringFieldUpdateOperationsInput | string
    payment_status?: StringFieldUpdateOperationsInput | string
    stripe_payment_id?: NullableStringFieldUpdateOperationsInput | string | null
    platform_fee_usd?: NullableIntFieldUpdateOperationsInput | number | null
    platform_fee_nis?: NullableIntFieldUpdateOperationsInput | number | null
    expert_payout_usd?: NullableIntFieldUpdateOperationsInput | number | null
    expert_payout_nis?: NullableIntFieldUpdateOperationsInput | number | null
    notes_from_expert?: NullableStringFieldUpdateOperationsInput | string | null
    payment_link?: NullableStringFieldUpdateOperationsInput | string | null
    invoice_link?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    expert_response_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    event_date_confirmed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    review_sent?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateManyBookingInput = {
    id?: string
    expert_id: string
    company_name: string
    rating: number
    title?: string | null
    text: string
    verified?: boolean
    created_at?: Date | string
  }

  export type ReviewUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    text?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expert?: ExpertUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    expert_id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    text?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    expert_id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    text?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogPostCreateManyCategoryInput = {
    id?: string
    slug: string
    title_he: string
    title_en: string
    excerpt_he: string
    excerpt_en: string
    content_he: string
    content_en: string
    cover_image?: string | null
    published?: boolean
    publishedAt?: Date | string
    author_name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type BlogPostUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title_he?: StringFieldUpdateOperationsInput | string
    title_en?: StringFieldUpdateOperationsInput | string
    excerpt_he?: StringFieldUpdateOperationsInput | string
    excerpt_en?: StringFieldUpdateOperationsInput | string
    content_he?: StringFieldUpdateOperationsInput | string
    content_en?: StringFieldUpdateOperationsInput | string
    cover_image?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    faqs?: FAQUpdateManyWithoutPostNestedInput
  }

  export type BlogPostUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title_he?: StringFieldUpdateOperationsInput | string
    title_en?: StringFieldUpdateOperationsInput | string
    excerpt_he?: StringFieldUpdateOperationsInput | string
    excerpt_en?: StringFieldUpdateOperationsInput | string
    content_he?: StringFieldUpdateOperationsInput | string
    content_en?: StringFieldUpdateOperationsInput | string
    cover_image?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    faqs?: FAQUncheckedUpdateManyWithoutPostNestedInput
  }

  export type BlogPostUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title_he?: StringFieldUpdateOperationsInput | string
    title_en?: StringFieldUpdateOperationsInput | string
    excerpt_he?: StringFieldUpdateOperationsInput | string
    excerpt_en?: StringFieldUpdateOperationsInput | string
    content_he?: StringFieldUpdateOperationsInput | string
    content_en?: StringFieldUpdateOperationsInput | string
    cover_image?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FAQCreateManyPostInput = {
    id?: string
    question_he: string
    answer_he: string
    question_en: string
    answer_en: string
  }

  export type FAQUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    question_he?: StringFieldUpdateOperationsInput | string
    answer_he?: StringFieldUpdateOperationsInput | string
    question_en?: StringFieldUpdateOperationsInput | string
    answer_en?: StringFieldUpdateOperationsInput | string
  }

  export type FAQUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    question_he?: StringFieldUpdateOperationsInput | string
    answer_he?: StringFieldUpdateOperationsInput | string
    question_en?: StringFieldUpdateOperationsInput | string
    answer_en?: StringFieldUpdateOperationsInput | string
  }

  export type FAQUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    question_he?: StringFieldUpdateOperationsInput | string
    answer_he?: StringFieldUpdateOperationsInput | string
    question_en?: StringFieldUpdateOperationsInput | string
    answer_en?: StringFieldUpdateOperationsInput | string
  }

  export type ExpertUpdateWithoutSpecializations_listInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    average_rating?: FloatFieldUpdateOperationsInput | number
    total_reviews?: IntFieldUpdateOperationsInput | number
    hourly_rate_usd?: NullableIntFieldUpdateOperationsInput | number | null
    hourly_rate_nis?: NullableIntFieldUpdateOperationsInput | number | null
    languages?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    linkedin_profile?: NullableStringFieldUpdateOperationsInput | string | null
    cv_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    bio_en?: NullableStringFieldUpdateOperationsInput | string | null
    bio_he?: NullableStringFieldUpdateOperationsInput | string | null
    name_he?: NullableStringFieldUpdateOperationsInput | string | null
    specializations_en?: NullableStringFieldUpdateOperationsInput | string | null
    specializations_he?: NullableStringFieldUpdateOperationsInput | string | null
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
    title_he?: NullableStringFieldUpdateOperationsInput | string | null
    bookings?: BookingUpdateManyWithoutExpertNestedInput
    offerings?: OfferingUpdateManyWithoutExpertNestedInput
    reviews?: ReviewUpdateManyWithoutExpertNestedInput
    bids?: BidUpdateManyWithoutExpertNestedInput
    user?: UserUpdateOneWithoutExpertNestedInput
  }

  export type ExpertUncheckedUpdateWithoutSpecializations_listInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    average_rating?: FloatFieldUpdateOperationsInput | number
    total_reviews?: IntFieldUpdateOperationsInput | number
    hourly_rate_usd?: NullableIntFieldUpdateOperationsInput | number | null
    hourly_rate_nis?: NullableIntFieldUpdateOperationsInput | number | null
    languages?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    linkedin_profile?: NullableStringFieldUpdateOperationsInput | string | null
    cv_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    bio_en?: NullableStringFieldUpdateOperationsInput | string | null
    bio_he?: NullableStringFieldUpdateOperationsInput | string | null
    name_he?: NullableStringFieldUpdateOperationsInput | string | null
    specializations_en?: NullableStringFieldUpdateOperationsInput | string | null
    specializations_he?: NullableStringFieldUpdateOperationsInput | string | null
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
    title_he?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    bookings?: BookingUncheckedUpdateManyWithoutExpertNestedInput
    offerings?: OfferingUncheckedUpdateManyWithoutExpertNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutExpertNestedInput
    bids?: BidUncheckedUpdateManyWithoutExpertNestedInput
  }

  export type ExpertUncheckedUpdateManyWithoutSpecializations_listInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    average_rating?: FloatFieldUpdateOperationsInput | number
    total_reviews?: IntFieldUpdateOperationsInput | number
    hourly_rate_usd?: NullableIntFieldUpdateOperationsInput | number | null
    hourly_rate_nis?: NullableIntFieldUpdateOperationsInput | number | null
    languages?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    linkedin_profile?: NullableStringFieldUpdateOperationsInput | string | null
    cv_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    bio_en?: NullableStringFieldUpdateOperationsInput | string | null
    bio_he?: NullableStringFieldUpdateOperationsInput | string | null
    name_he?: NullableStringFieldUpdateOperationsInput | string | null
    specializations_en?: NullableStringFieldUpdateOperationsInput | string | null
    specializations_he?: NullableStringFieldUpdateOperationsInput | string | null
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
    title_he?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TaskUpdateWithoutSpecializationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    budget_range?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    client_name?: NullableStringFieldUpdateOperationsInput | string | null
    client_email?: NullableStringFieldUpdateOperationsInput | string | null
    client_company?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bids?: BidUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutSpecializationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    budget_range?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    client_name?: NullableStringFieldUpdateOperationsInput | string | null
    client_email?: NullableStringFieldUpdateOperationsInput | string | null
    client_company?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bids?: BidUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutSpecializationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    budget_range?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    client_name?: NullableStringFieldUpdateOperationsInput | string | null
    client_email?: NullableStringFieldUpdateOperationsInput | string | null
    client_company?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BidCreateManyTaskInput = {
    id?: string
    expert_id: string
    amount?: number | null
    message?: string | null
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SpecializationUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name_he?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    description_he?: NullableStringFieldUpdateOperationsInput | string | null
    description_en?: NullableStringFieldUpdateOperationsInput | string | null
    metaTitle_he?: NullableStringFieldUpdateOperationsInput | string | null
    metaTitle_en?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription_he?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription_en?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    experts?: ExpertUpdateManyWithoutSpecializations_listNestedInput
  }

  export type SpecializationUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name_he?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    description_he?: NullableStringFieldUpdateOperationsInput | string | null
    description_en?: NullableStringFieldUpdateOperationsInput | string | null
    metaTitle_he?: NullableStringFieldUpdateOperationsInput | string | null
    metaTitle_en?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription_he?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription_en?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    experts?: ExpertUncheckedUpdateManyWithoutSpecializations_listNestedInput
  }

  export type SpecializationUncheckedUpdateManyWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name_he?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    description_he?: NullableStringFieldUpdateOperationsInput | string | null
    description_en?: NullableStringFieldUpdateOperationsInput | string | null
    metaTitle_he?: NullableStringFieldUpdateOperationsInput | string | null
    metaTitle_en?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription_he?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription_en?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BidUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expert?: ExpertUpdateOneRequiredWithoutBidsNestedInput
  }

  export type BidUncheckedUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    expert_id?: StringFieldUpdateOperationsInput | string
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BidUncheckedUpdateManyWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    expert_id?: StringFieldUpdateOperationsInput | string
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ExpertCountOutputTypeDefaultArgs instead
     */
    export type ExpertCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ExpertCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OfferingCountOutputTypeDefaultArgs instead
     */
    export type OfferingCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OfferingCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BookingCountOutputTypeDefaultArgs instead
     */
    export type BookingCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BookingCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryCountOutputTypeDefaultArgs instead
     */
    export type CategoryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BlogPostCountOutputTypeDefaultArgs instead
     */
    export type BlogPostCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BlogPostCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SpecializationCountOutputTypeDefaultArgs instead
     */
    export type SpecializationCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SpecializationCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TaskCountOutputTypeDefaultArgs instead
     */
    export type TaskCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TaskCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ExpertDefaultArgs instead
     */
    export type ExpertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ExpertDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OfferingDefaultArgs instead
     */
    export type OfferingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OfferingDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BookingDefaultArgs instead
     */
    export type BookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BookingDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReviewDefaultArgs instead
     */
    export type ReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReviewDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AccountDefaultArgs instead
     */
    export type AccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AccountDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SessionDefaultArgs instead
     */
    export type SessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SessionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VerificationTokenDefaultArgs instead
     */
    export type VerificationTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VerificationTokenDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryDefaultArgs instead
     */
    export type CategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BlogPostDefaultArgs instead
     */
    export type BlogPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BlogPostDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FAQDefaultArgs instead
     */
    export type FAQArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FAQDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SpecializationDefaultArgs instead
     */
    export type SpecializationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SpecializationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TaskDefaultArgs instead
     */
    export type TaskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TaskDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BidDefaultArgs instead
     */
    export type BidArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BidDefaultArgs<ExtArgs>

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