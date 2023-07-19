--
-- PostgreSQL database dump
--

-- Dumped from database version 15.2 (Debian 15.2-1.pgdg110+1)
-- Dumped by pg_dump version 15.2 (Debian 15.2-1.pgdg110+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: follows; Type: TABLE; Schema: public; Owner: interviewapp
--

CREATE TABLE public.follows (
    follower_id integer NOT NULL,
    followee_id integer NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    deleted_at timestamp with time zone
);


ALTER TABLE public.follows OWNER TO interviewapp;

--
-- Name: posts; Type: TABLE; Schema: public; Owner: interviewapp
--

CREATE TABLE public.posts (
    id integer NOT NULL,
    user_id integer NOT NULL,
    title character varying(255) NOT NULL,
    body character varying(255) NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    deleted_at timestamp with time zone
);


ALTER TABLE public.posts OWNER TO interviewapp;

--
-- Name: posts_id_seq; Type: SEQUENCE; Schema: public; Owner: interviewapp
--

CREATE SEQUENCE public.posts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.posts_id_seq OWNER TO interviewapp;

--
-- Name: posts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: interviewapp
--

ALTER SEQUENCE public.posts_id_seq OWNED BY public.posts.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: interviewapp
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    deleted_at timestamp with time zone
);


ALTER TABLE public.users OWNER TO interviewapp;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: interviewapp
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO interviewapp;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: interviewapp
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: posts id; Type: DEFAULT; Schema: public; Owner: interviewapp
--

ALTER TABLE ONLY public.posts ALTER COLUMN id SET DEFAULT nextval('public.posts_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: interviewapp
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: follows; Type: TABLE DATA; Schema: public; Owner: interviewapp
--

COPY public.follows (follower_id, followee_id, created_at, updated_at, deleted_at) FROM stdin;
2	5	2023-07-19 17:45:14.735+00	2023-07-19 17:45:14.735+00	\N
3	1	2023-07-19 17:45:14.737+00	2023-07-19 17:45:14.737+00	\N
4	7	2023-07-19 17:45:14.738+00	2023-07-19 17:45:14.738+00	\N
6	9	2023-07-19 17:45:14.739+00	2023-07-19 17:45:14.739+00	\N
8	10	2023-07-19 17:45:14.741+00	2023-07-19 17:45:14.741+00	\N
5	3	2023-07-19 17:45:14.743+00	2023-07-19 17:45:14.743+00	\N
\.


--
-- Data for Name: posts; Type: TABLE DATA; Schema: public; Owner: interviewapp
--

COPY public.posts (id, user_id, title, body, created_at, updated_at, deleted_at) FROM stdin;
1	2	First Post	Lorem ipsum dolor sit amet, consectetur adipiscing elit.	2023-07-19 17:45:14.726+00	2023-07-19 17:45:14.726+00	\N
2	5	Second Post	Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.	2023-07-19 17:45:14.728+00	2023-07-19 17:45:14.728+00	\N
3	8	Third Post	Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.	2023-07-19 17:45:14.729+00	2023-07-19 17:45:14.729+00	\N
4	3	Fourth Post	Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.	2023-07-19 17:45:14.732+00	2023-07-19 17:45:14.732+00	\N
5	7	Fifth Post	Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.	2023-07-19 17:45:14.733+00	2023-07-19 17:45:14.733+00	\N
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: interviewapp
--

COPY public.users (id, name, email, password, created_at, updated_at, deleted_at) FROM stdin;
1	John Doe	johndoe@example.com	password123	2023-07-19 17:45:14.702+00	2023-07-19 17:45:14.702+00	\N
2	Jane Smith	janesmith@example.com	secretpass	2023-07-19 17:45:14.709+00	2023-07-19 17:45:14.709+00	\N
3	Alex Johnson	alexjohnson@example.com	pass123	2023-07-19 17:45:14.711+00	2023-07-19 17:45:14.711+00	\N
4	Emily Wilson	emilywilson@example.com	12345678	2023-07-19 17:45:14.713+00	2023-07-19 17:45:14.713+00	\N
5	Michael Brown	michaelbrown@example.com	brown123	2023-07-19 17:45:14.715+00	2023-07-19 17:45:14.715+00	\N
6	Sarah Davis	sarahdavis@example.com	sarahpass	2023-07-19 17:45:14.717+00	2023-07-19 17:45:14.717+00	\N
7	Robert Johnson	robertjohnson@example.com	pass456	2023-07-19 17:45:14.718+00	2023-07-19 17:45:14.718+00	\N
8	Jessica Miller	jessicamiller@example.com	millerpass	2023-07-19 17:45:14.72+00	2023-07-19 17:45:14.72+00	\N
9	David Wilson	davidwilson@example.com	wilsonpass	2023-07-19 17:45:14.722+00	2023-07-19 17:45:14.722+00	\N
10	Olivia Johnson	olidwilson@example.com	wilsonpass2	2023-07-19 17:45:14.724+00	2023-07-19 17:45:14.724+00	\N
\.


--
-- Name: posts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: interviewapp
--

SELECT pg_catalog.setval('public.posts_id_seq', 6, false);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: interviewapp
--

SELECT pg_catalog.setval('public.users_id_seq', 11, false);


--
-- Name: follows follows_pkey; Type: CONSTRAINT; Schema: public; Owner: interviewapp
--

ALTER TABLE ONLY public.follows
    ADD CONSTRAINT follows_pkey PRIMARY KEY (follower_id, followee_id);


--
-- Name: posts posts_pkey; Type: CONSTRAINT; Schema: public; Owner: interviewapp
--

ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: interviewapp
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: follows follows_followee_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: interviewapp
--

ALTER TABLE ONLY public.follows
    ADD CONSTRAINT follows_followee_id_fkey FOREIGN KEY (followee_id) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: follows follows_follower_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: interviewapp
--

ALTER TABLE ONLY public.follows
    ADD CONSTRAINT follows_follower_id_fkey FOREIGN KEY (follower_id) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: posts posts_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: interviewapp
--

ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

