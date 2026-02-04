
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.ExpertScalarFieldEnum = {
  id: 'id',
  slug: 'slug',
  name: 'name',
  bio: 'bio',
  bio_long: 'bio_long',
  profile_image: 'profile_image',
  company: 'company',
  title: 'title',
  specializations: 'specializations',
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
  bio_long_en: 'bio_long_en',
  bio_long_he: 'bio_long_he',
  name_he: 'name_he',
  specializations_en: 'specializations_en',
  specializations_he: 'specializations_he',
  title_en: 'title_en',
  title_he: 'title_he'
};

exports.Prisma.OfferingScalarFieldEnum = {
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

exports.Prisma.BookingScalarFieldEnum = {
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

exports.Prisma.ReviewScalarFieldEnum = {
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

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  emailVerified: 'emailVerified',
  image: 'image'
};

exports.Prisma.AccountScalarFieldEnum = {
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

exports.Prisma.SessionScalarFieldEnum = {
  id: 'id',
  sessionToken: 'sessionToken',
  userId: 'userId',
  expires: 'expires'
};

exports.Prisma.VerificationTokenScalarFieldEnum = {
  identifier: 'identifier',
  token: 'token',
  expires: 'expires'
};

exports.Prisma.CategoryScalarFieldEnum = {
  id: 'id',
  slug: 'slug',
  name_he: 'name_he',
  name_en: 'name_en'
};

exports.Prisma.BlogPostScalarFieldEnum = {
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

exports.Prisma.FAQScalarFieldEnum = {
  id: 'id',
  question_he: 'question_he',
  answer_he: 'answer_he',
  question_en: 'question_en',
  answer_en: 'answer_en',
  post_id: 'post_id'
};

exports.Prisma.SpecializationScalarFieldEnum = {
  id: 'id',
  slug: 'slug',
  name_he: 'name_he',
  name_en: 'name_en',
  description_he: 'description_he',
  description_en: 'description_en',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.TaskScalarFieldEnum = {
  id: 'id',
  slug: 'slug',
  title: 'title',
  description: 'description',
  budget_range: 'budget_range',
  status: 'status',
  client_name: 'client_name',
  client_email: 'client_email',
  client_company: 'client_company',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.BidScalarFieldEnum = {
  id: 'id',
  task_id: 'task_id',
  expert_id: 'expert_id',
  amount: 'amount',
  message: 'message',
  status: 'status',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
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

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
