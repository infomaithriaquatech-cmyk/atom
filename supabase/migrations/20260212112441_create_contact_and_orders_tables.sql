/*
  # Create Contact Form and Orders Tables

  1. New Tables
    - `contacts`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, required)
      - `phone` (text, optional)
      - `message` (text, required)
      - `created_at` (timestamp)
    
    - `orders`
      - `id` (uuid, primary key)
      - `customer_name` (text, required)
      - `customer_email` (text, required)
      - `customer_phone` (text, required)
      - `address` (text, required)
      - `city` (text, required)
      - `state` (text, required)
      - `pincode` (text, required)
      - `product_name` (text, required)
      - `price` (numeric, required)
      - `status` (text, default 'pending')
      - `created_at` (timestamp)
  
  2. Security
    - Enable RLS on both tables
    - Add policies for public to insert contact submissions
    - Add policies for public to insert orders
    - Only admins can read (for now, no admin auth yet)
*/

CREATE TABLE IF NOT EXISTS contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name text NOT NULL,
  customer_email text NOT NULL,
  customer_phone text NOT NULL,
  address text NOT NULL,
  city text NOT NULL,
  state text NOT NULL,
  pincode text NOT NULL,
  product_name text NOT NULL DEFAULT 'Meghdoot Atom',
  price numeric NOT NULL DEFAULT 99999,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contacts
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Anyone can create orders"
  ON orders
  FOR INSERT
  TO anon
  WITH CHECK (true);