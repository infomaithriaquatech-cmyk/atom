/*
  # Add Payment Type to Orders Table
  
  1. Changes
    - `payment_type` (text, default 'full_payment')
    - `payment_amount` (numeric, amount paid)
    - `remaining_amount` (numeric, amount pending)
  
  2. Values
    - payment_type can be 'full_payment' or 'book_now'
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'orders' AND column_name = 'payment_type'
  ) THEN
    ALTER TABLE orders ADD COLUMN payment_type text NOT NULL DEFAULT 'full_payment';
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'orders' AND column_name = 'payment_amount'
  ) THEN
    ALTER TABLE orders ADD COLUMN payment_amount numeric DEFAULT 0;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'orders' AND column_name = 'remaining_amount'
  ) THEN
    ALTER TABLE orders ADD COLUMN remaining_amount numeric DEFAULT 0;
  END IF;
END $$;