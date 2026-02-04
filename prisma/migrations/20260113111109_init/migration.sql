-- CreateTable
CREATE TABLE "Expert" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "bio_long" TEXT,
    "profile_image" TEXT,
    "company" TEXT,
    "title" TEXT NOT NULL,
    "specializations" TEXT NOT NULL,
    "average_rating" REAL NOT NULL DEFAULT 0,
    "total_reviews" INTEGER NOT NULL DEFAULT 0,
    "hourly_rate_usd" INTEGER,
    "languages" TEXT NOT NULL,
    "verified" BOOLEAN NOT NULL DEFAULT false,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Offering" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "expert_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "format" TEXT NOT NULL,
    "duration_minutes" INTEGER NOT NULL,
    "max_attendees" INTEGER,
    "price_usd" INTEGER NOT NULL,
    "audience_level" TEXT NOT NULL,
    "includes" TEXT,
    "target_industries" TEXT,
    "customizable" BOOLEAN NOT NULL DEFAULT false,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "Offering_expert_id_fkey" FOREIGN KEY ("expert_id") REFERENCES "Expert" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Booking" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "expert_id" TEXT NOT NULL,
    "offering_id" TEXT NOT NULL,
    "company_name" TEXT NOT NULL,
    "company_contact_name" TEXT NOT NULL,
    "company_email" TEXT NOT NULL,
    "company_phone" TEXT,
    "date_requested" DATETIME NOT NULL,
    "attendees_count" INTEGER,
    "notes_from_client" TEXT,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "quote_amount_usd" INTEGER NOT NULL,
    "payment_method" TEXT NOT NULL DEFAULT 'pending',
    "payment_status" TEXT NOT NULL DEFAULT 'unpaid',
    "stripe_payment_id" TEXT,
    "platform_fee_usd" INTEGER,
    "expert_payout_usd" INTEGER,
    "notes_from_expert" TEXT,
    "expert_response_date" DATETIME,
    "event_date_confirmed" DATETIME,
    "review_sent" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "Booking_expert_id_fkey" FOREIGN KEY ("expert_id") REFERENCES "Expert" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Booking_offering_id_fkey" FOREIGN KEY ("offering_id") REFERENCES "Offering" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Review" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "booking_id" TEXT NOT NULL,
    "expert_id" TEXT NOT NULL,
    "company_name" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "title" TEXT,
    "text" TEXT NOT NULL,
    "verified" BOOLEAN NOT NULL DEFAULT true,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Review_expert_id_fkey" FOREIGN KEY ("expert_id") REFERENCES "Expert" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Review_booking_id_fkey" FOREIGN KEY ("booking_id") REFERENCES "Booking" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Expert_slug_key" ON "Expert"("slug");
