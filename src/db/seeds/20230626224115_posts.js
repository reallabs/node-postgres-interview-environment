/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex("posts").del();
  await knex("posts").insert([
    {
      id: 1,
      user_id: 2,
      title: "First Post",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      created_at: "2023-06-20T10:30:00Z",
      updated_at: "2023-06-20T10:30:00Z",
    },
    {
      id: 2,
      user_id: 5,
      title: "Second Post",
      body: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      created_at: "2023-06-19T15:45:00Z",
      updated_at: "2023-06-19T15:45:00Z",
    },
    {
      id: 3,
      user_id: 8,
      title: "Third Post",
      body: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
      created_at: "2023-06-18T09:15:00Z",
      updated_at: "2023-06-18T09:15:00Z",
    },
    {
      id: 4,
      user_id: 3,
      title: "Fourth Post",
      body: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
      created_at: "2023-06-17T14:20:00Z",
      updated_at: "2023-06-17T14:20:00Z",
    },
    {
      id: 5,
      user_id: 7,
      title: "Fifth Post",
      body: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.",
      created_at: "2023-06-16T19:05:00Z",
      updated_at: "2023-06-16T19:05:00Z",
    },
  ]);
}
