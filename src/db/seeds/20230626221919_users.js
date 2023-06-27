/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex("users").del();
  await knex("users").insert([
    {
      id: 1,
      name: "John Doe",
      email: "johndoe@example.com",
      password: "password123",
      created_at: "2023-06-21T10:00:00Z",
      updated_at: "2023-06-21T10:00:00Z",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "janesmith@example.com",
      password: "secretpass",
      created_at: "2023-06-21T10:05:00Z",
      updated_at: "2023-06-21T10:05:00Z",
    },
    {
      id: 3,
      name: "Alex Johnson",
      email: "alexjohnson@example.com",
      password: "pass123",
      created_at: "2023-06-21T10:10:00Z",
      updated_at: "2023-06-21T10:10:00Z",
    },
    {
      id: 4,
      name: "Emily Wilson",
      email: "emilywilson@example.com",
      password: "12345678",
      created_at: "2023-06-21T10:15:00Z",
      updated_at: "2023-06-21T10:15:00Z",
    },
    {
      id: 5,
      name: "Michael Brown",
      email: "michaelbrown@example.com",
      password: "brown123",
      created_at: "2023-06-21T10:20:00Z",
      updated_at: "2023-06-21T10:20:00Z",
    },
    {
      id: 6,
      name: "Sarah Davis",
      email: "sarahdavis@example.com",
      password: "sarahpass",
      created_at: "2023-06-21T10:25:00Z",
      updated_at: "2023-06-21T10:25:00Z",
    },
    {
      id: 7,
      name: "Robert Johnson",
      email: "robertjohnson@example.com",
      password: "pass456",
      created_at: "2023-06-21T10:30:00Z",
      updated_at: "2023-06-21T10:30:00Z",
    },
    {
      id: 8,
      name: "Jessica Miller",
      email: "jessicamiller@example.com",
      password: "millerpass",
      created_at: "2023-06-21T10:35:00Z",
      updated_at: "2023-06-21T10:35:00Z",
    },
    {
      id: 9,
      name: "David Wilson",
      email: "davidwilson@example.com",
      password: "wilsonpass",
      created_at: "2023-06-21T10:40:00Z",
      updated_at: "2023-06-21T10:40:00Z",
    },
    {
      id: 10,
      name: "Olivia Johnson",
      email: "olidwilson@example.com",
      password: "wilsonpass2",
      created_at: "2023-06-21T10:45:00Z",
      updated_at: "2023-06-21T10:45:00Z",
    },
  ]);
}
