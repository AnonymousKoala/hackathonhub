--
-- PostgreSQL database dump
--

-- Dumped from database version 9.5.14
-- Dumped by pg_dump version 9.5.14

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: attendees; Type: TABLE; Schema: public; Owner: ctp_user
--

CREATE TABLE public.attendees (
    id integer NOT NULL,
    "eventName" character varying(255) NOT NULL,
    "user" character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.attendees OWNER TO ctp_user;

--
-- Name: attendees_id_seq; Type: SEQUENCE; Schema: public; Owner: ctp_user
--

CREATE SEQUENCE public.attendees_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.attendees_id_seq OWNER TO ctp_user;

--
-- Name: attendees_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ctp_user
--

ALTER SEQUENCE public.attendees_id_seq OWNED BY public.attendees.id;


--
-- Name: hackathons; Type: TABLE; Schema: public; Owner: ctp_user
--

CREATE TABLE public.hackathons (
    id integer NOT NULL,
    "eventName" character varying(255) NOT NULL,
    "eventDescription" character varying(255) NOT NULL,
    "eventCity" character varying(255) NOT NULL,
    "eventState" character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.hackathons OWNER TO ctp_user;

--
-- Name: hackathons_id_seq; Type: SEQUENCE; Schema: public; Owner: ctp_user
--

CREATE SEQUENCE public.hackathons_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.hackathons_id_seq OWNER TO ctp_user;

--
-- Name: hackathons_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ctp_user
--

ALTER SEQUENCE public.hackathons_id_seq OWNED BY public.hackathons.id;


--
-- Name: teams; Type: TABLE; Schema: public; Owner: ctp_user
--

CREATE TABLE public.teams (
    id integer NOT NULL,
    "eventName" character varying(255) NOT NULL,
    "teamName" character varying(255) NOT NULL,
    member1 character varying(255),
    member2 character varying(255),
    member3 character varying(255),
    member4 character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.teams OWNER TO ctp_user;

--
-- Name: teams_id_seq; Type: SEQUENCE; Schema: public; Owner: ctp_user
--

CREATE SEQUENCE public.teams_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.teams_id_seq OWNER TO ctp_user;

--
-- Name: teams_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ctp_user
--

ALTER SEQUENCE public.teams_id_seq OWNED BY public.teams.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: anthony
--

CREATE TABLE public.users (
    id integer NOT NULL,
    "firstName" character varying(255) NOT NULL,
    "lastName" character varying(255) NOT NULL,
    username character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    password_hash character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.users OWNER TO anthony;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: anthony
--

CREATE SEQUENCE public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO anthony;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: anthony
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: userteams; Type: TABLE; Schema: public; Owner: ctp_user
--

CREATE TABLE public.userteams (
    id integer NOT NULL,
    "eventName" character varying(255) NOT NULL,
    "teamName" character varying(255) NOT NULL,
    "user" character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.userteams OWNER TO ctp_user;

--
-- Name: userteams_id_seq; Type: SEQUENCE; Schema: public; Owner: ctp_user
--

CREATE SEQUENCE public.userteams_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.userteams_id_seq OWNER TO ctp_user;

--
-- Name: userteams_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ctp_user
--

ALTER SEQUENCE public.userteams_id_seq OWNED BY public.userteams.id;


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: ctp_user
--

ALTER TABLE ONLY public.attendees ALTER COLUMN id SET DEFAULT nextval('public.attendees_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: ctp_user
--

ALTER TABLE ONLY public.hackathons ALTER COLUMN id SET DEFAULT nextval('public.hackathons_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: ctp_user
--

ALTER TABLE ONLY public.teams ALTER COLUMN id SET DEFAULT nextval('public.teams_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: anthony
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: ctp_user
--

ALTER TABLE ONLY public.userteams ALTER COLUMN id SET DEFAULT nextval('public.userteams_id_seq'::regclass);


--
-- Data for Name: attendees; Type: TABLE DATA; Schema: public; Owner: ctp_user
--

COPY public.attendees (id, "eventName", "user", "createdAt", "updatedAt") FROM stdin;
\.


--
-- Name: attendees_id_seq; Type: SEQUENCE SET; Schema: public; Owner: ctp_user
--

SELECT pg_catalog.setval('public.attendees_id_seq', 1, false);


--
-- Data for Name: hackathons; Type: TABLE DATA; Schema: public; Owner: ctp_user
--

COPY public.hackathons (id, "eventName", "eventDescription", "eventCity", "eventState", "createdAt", "updatedAt") FROM stdin;
1	Code for Me	It's a really good coding hackathon, we swear	Manhattan	NY	2018-12-06 14:38:59.889-05	2018-12-06 14:38:59.889-05
2	HACKSomeStuff	We hack some stuff and you might get paid for it? We're not sure. Also how long can this descripton run on for before we get told to st	Queens	NY	2018-12-06 14:43:43.845-05	2018-12-06 14:43:43.845-05
3	NYHack2018	The 2018th installation of NYHack, we've been going longer than computers have been invented!	Manhattan	NY	2018-12-06 14:46:19.8-05	2018-12-06 14:46:19.8-05
4	Road To Hack	Five successful years of this civic hackathon that encourages startups and students to come together and make something worthwhile for once.	Manhattan	NY	2018-12-06 14:54:11.83-05	2018-12-06 14:54:11.83-05
5	CodeBites	Hack and eat in this three day long event where you and your friends try to build something that you can actually put on your resume.	Seattle	WA	2018-12-06 14:55:05.148-05	2018-12-06 14:55:05.148-05
6	CodeNights	The sixth annual event of coding while drinking redbull and eating adderall, come join us for another sleepless to make borderline disabled code	Manhattan	NY	2018-12-07 01:30:27.318-05	2018-12-07 01:30:27.318-05
\.


--
-- Name: hackathons_id_seq; Type: SEQUENCE SET; Schema: public; Owner: ctp_user
--

SELECT pg_catalog.setval('public.hackathons_id_seq', 6, true);


--
-- Data for Name: teams; Type: TABLE DATA; Schema: public; Owner: ctp_user
--

COPY public.teams (id, "eventName", "teamName", member1, member2, member3, member4, "createdAt", "updatedAt") FROM stdin;
1	Code for Me	The Boys	ssmith	sting	hoolu	jsmith	2018-12-07 00:48:42.903-05	2018-12-07 00:48:42.903-05
2	Code for Me	CUNY Team 1	kchen	JTran	ysong	jsmith	2018-12-07 00:49:05.845-05	2018-12-07 00:49:05.845-05
3	Code for Me	CUNY Team 2	ssmith	slau	mmyer	jsmith	2018-12-07 00:49:27.138-05	2018-12-07 00:49:27.138-05
4	Code for Me	Brooklyn Tech	Panican	hliang	liwei	jsmith	2018-12-07 00:49:48.734-05	2018-12-07 00:49:48.734-05
5	Code for Me	Queens Hackers	jlau	lbenja	fnite		2018-12-07 00:50:10.366-05	2018-12-07 00:50:10.366-05
6	HACKSomeStuff	CUNY Team 1	jlau	kchen	ssmith	ysong	2018-12-07 00:50:29.148-05	2018-12-07 00:50:29.148-05
7	HACKSomeStuff	BTHS Hackthletes	kchen	hliang	jliam		2018-12-07 00:51:18.088-05	2018-12-07 00:51:18.088-05
8	HACKSomeStuff	Kings Borough Team 1	jsmith	lbenja	JTran		2018-12-07 00:51:34.243-05	2018-12-07 00:51:34.243-05
9	HACKSomeStuff	CUNY Team 2	fnite	hoolu	kchen		2018-12-07 00:51:46.265-05	2018-12-07 00:51:46.265-05
10	HACKSomeStuff	 Kings Borough Team 2	sting	jsmith	slau		2018-12-07 00:53:20.184-05	2018-12-07 00:53:20.184-05
11	NYHack2018	NYHack Team 1	jsmith	atsui3	hoolu	jlau	2018-12-07 00:59:11.751-05	2018-12-07 00:59:11.751-05
12	Road To Hack	BTHS Hackthletes	ssmith	sting	hoolu	John Smith	2018-12-07 01:15:16.62-05	2018-12-07 01:18:33.025-05
13	Road To Hack	The Koalas	fnite	lbenja	kchen	John Smith	2018-12-07 01:18:11.416-05	2018-12-07 01:18:33.025-05
14	CodeBites	CUNY Team 1	ssmith	sting	hoolu	John Smith	2018-12-07 01:26:42.387-05	2018-12-07 01:27:30.246-05
15	CodeNights	BTHS Hackthletes	fnite	lbenja	kchen		2018-12-07 01:31:14.893-05	2018-12-07 01:31:14.893-05
16	CodeNights	Dream Team 	ssmith	sting	hoolu		2018-12-07 01:32:12.802-05	2018-12-07 01:32:12.802-05
\.


--
-- Name: teams_id_seq; Type: SEQUENCE SET; Schema: public; Owner: ctp_user
--

SELECT pg_catalog.setval('public.teams_id_seq', 16, true);


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: anthony
--

COPY public.users (id, "firstName", "lastName", username, email, password_hash, "createdAt", "updatedAt") FROM stdin;
1	anthony	test	atsui	atsui@test.com	$2a$10$Y1mHKftGsPI5VEzKOoKrtONSfWDfUOEpInGEe8JJrFjXh.aTWssmu	2018-12-05 01:38:15.798-05	2018-12-05 01:38:15.798-05
2	jazmyn	fuller	jfuller	jfuller@test.com	$2a$10$zMYLy8A06N/MoHHmn8LSlOfykkNHNEP0zQUxLz9bWi1eY2RX7L5zG	2018-12-06 09:43:06.139-05	2018-12-06 09:43:06.139-05
3	Anthony	Tsui	atsui3	anthony3@test.com	$2a$10$NWaudMeX17gUQhzcMt5eK.bUF/FlKhYoQrDfu5vMP0IxEkGghJjLq	2018-12-06 18:36:21.023-05	2018-12-06 18:36:21.023-05
4	MPanican	Mark	Panican	mpanican@gmail.com	$2a$10$uF1uCjD8CWMxq2/v8s2m1.8pki52CP/xghbuIq9uNj1T./k5B.OBC	2018-12-06 18:36:58.757-05	2018-12-06 18:36:58.757-05
5	Jimmy	Tran	JTran	jtran@gmail.com	$2a$10$vQz/1pzSTiHAgHQxwWQ1YeEzhpEL4KH..japKn1.IUO4A6Dl0JG/C	2018-12-06 18:44:02.059-05	2018-12-06 18:44:02.059-05
6	Yung-Ho	Song	ysong	ysong@gmail.com	$2a$10$Qe11hRMH5jGpsLiI1aojOOTOMb8YthSjtv5xNMxkTgDyH/zjt06BG	2018-12-06 18:44:38.881-05	2018-12-06 18:44:38.881-05
7	John	Smith	jsmith	jsmith@gmail.com	$2a$10$yFMw41McSBHA.WBCyZTUiOvPhScmZ4hYXqVg9pOSBGhU1BO6gmtMG	2018-12-06 18:53:16.217-05	2018-12-06 18:53:16.217-05
8	Sum	Ting	sting	sting@gmail.com	$2a$10$lPXoZbhrZwYIPIUSwYQxweWBfsOz9pHp4C5rClIVBiLZ0suE1zqka	2018-12-06 23:42:03.168-05	2018-12-06 23:42:03.168-05
9	Hoo	Lu	hoolu	hoolu@gmail.com	$2a$10$HltN50x6kaRWIaixHi.XTOjNv/ZXeHlpVTIn/kRrBZTqKYs7xcIRq	2018-12-06 23:44:26.442-05	2018-12-06 23:44:26.442-05
10	Kevin	Chen	kchen	kchen@gmail.com	$2a$10$Ve2JAbnM9dAVDXtxjHReh.x3GnG/9BMKKVUXQZe93YLnI.a2FY8fm	2018-12-06 23:44:54.833-05	2018-12-06 23:44:54.833-05
44	Steven	Smith	ssmith	ssmith@gmail.com	$2a$10$k3U9x1kPcGgOIGfa0vgxCeRL0TYhuImSDwvEFX/wJUMf7VlA.IjZ.	2018-12-06 23:52:26.708-05	2018-12-06 23:52:26.708-05
45	Stephen	Lau	slau	slau@gmail.com	$2a$10$UeHuU/4kbjVUmL5Rboveteb.eZ0TwsO8nemaT4dDp8pji6PkrXwBe	2018-12-06 23:53:00.762-05	2018-12-06 23:53:00.762-05
46	Michael	Myer	mmyer	mmyer@gmail.com	$2a$10$0XUUkGUUAvh4uNcR1Db0meOtqu.eBD1WEJtGpaep9kMWdieL4OvFy	2018-12-06 23:53:16.783-05	2018-12-06 23:53:16.783-05
48	HenHao	Liang	hliang	hliang@gmail.com	$2a$10$KJsH7Z326eZHdDmKDF50Wu4z2ZwBwGSUvEtMSvvB0/vH62vrydiQS	2018-12-06 23:54:22.484-05	2018-12-06 23:54:22.484-05
49	Liam	Wei	liwei	liwei@gmail.com	$2a$10$euh2ryACHxYf.VsLkphyCeIcjGdwvhQCU8sKGFYPBMnuhrhavCrhS	2018-12-06 23:55:05.139-05	2018-12-06 23:55:05.139-05
50	Jacky	Lau	jlau	jlau@gmail.com	$2a$10$klDyxxFpuMWjq.NdnNtciesfndFyaykL.B1FVQ1XKNdkIzl.zjQUu	2018-12-06 23:55:16.368-05	2018-12-06 23:55:16.368-05
51	Lucas	Benja	lbenja	lbenja@gmail.com	$2a$10$ysPMo27Ai8baWt9EKKrrsOAZdcKEyxW3JyvrfvOVPjwu4lndKr0E2	2018-12-06 23:55:30.856-05	2018-12-06 23:55:30.856-05
52	Ford	Nite	fnite	fnite@gmail.com	$2a$10$jTWxZ/llzMUJbJImsiGAHeUIXuQ1MF1FVmrOZM4evt5za7TJuaDAa	2018-12-06 23:55:46.505-05	2018-12-06 23:55:46.505-05
\.


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: anthony
--

SELECT pg_catalog.setval('public.users_id_seq', 52, true);


--
-- Data for Name: userteams; Type: TABLE DATA; Schema: public; Owner: ctp_user
--

COPY public.userteams (id, "eventName", "teamName", "user", "createdAt", "updatedAt") FROM stdin;
1	Code for Me	The Boys	jsmith	2018-12-07 00:57:02.108-05	2018-12-07 00:57:02.108-05
2	HACKSomeStuff	Kings Borough Team 1	jsmith	2018-12-07 00:58:18.472-05	2018-12-07 00:58:18.472-05
3	NYHack2018	NYHack Team 1	jsmith	2018-12-07 00:59:24.649-05	2018-12-07 00:59:24.649-05
4	Code for Me	The Boys	ssmith	2018-12-07 01:03:06.274-05	2018-12-07 01:03:06.274-05
5	Code for Me	The Boys	sting	2018-12-07 01:03:20.967-05	2018-12-07 01:03:20.967-05
6	Code for Me	The Boys	hoolu	2018-12-07 01:03:28.724-05	2018-12-07 01:03:28.724-05
7	Code for Me	Cuny Team 1	kchen	2018-12-07 01:03:40.555-05	2018-12-07 01:03:40.555-05
8	Code for Me	CUNY Team 1	ysong	2018-12-07 01:03:50.664-05	2018-12-07 01:03:50.664-05
9	Code for Me	CUNY Team 1	JTran	2018-12-07 01:03:59.416-05	2018-12-07 01:03:59.416-05
10	Code for Me	CUNY Team 2	slau	2018-12-07 01:04:40.667-05	2018-12-07 01:04:40.667-05
11	Code for Me	CUNY Team 2	mmyer	2018-12-07 01:04:49.516-05	2018-12-07 01:04:49.516-05
12	HACKSomeStuff	CUNY Team 1	jlau	2018-12-07 01:05:15.953-05	2018-12-07 01:05:15.953-05
13	HACKSomeStuff	CUNY Team 1	kchen	2018-12-07 01:05:24.95-05	2018-12-07 01:05:24.95-05
14	HACKSomeStuff	CUNY Team 1	ssmith	2018-12-07 01:05:42.603-05	2018-12-07 01:05:42.603-05
15	HACKSomeStuff	CUNY Team 1	ysong	2018-12-07 01:05:52.588-05	2018-12-07 01:05:52.588-05
16	HACKSomeStuff	BTHS Hackthletes	kchen	2018-12-07 01:06:07.603-05	2018-12-07 01:06:07.603-05
17	HACKSomeStuff	BTHS Hackthletes	hliang	2018-12-07 01:06:39.09-05	2018-12-07 01:06:39.09-05
18	HACKSomeStuff	BTHS Hackthletes	jliam	2018-12-07 01:06:52.801-05	2018-12-07 01:06:52.801-05
19	HACKSomeStuff	Kings Borough Team 1	lbenja	2018-12-07 01:07:04.889-05	2018-12-07 01:07:04.889-05
20	HACKSomeStuff	Kings Borough Team 1	JTran	2018-12-07 01:07:17.451-05	2018-12-07 01:07:17.451-05
21	HACKSomeStuff	CUNY Team 2	fnite	2018-12-07 01:07:26.391-05	2018-12-07 01:07:26.391-05
22	HACKSomeStuff	CUNY Team 2	hoolu	2018-12-07 01:07:37.041-05	2018-12-07 01:07:37.041-05
23	HACKSomeStuff	Kings Borough Team 2	sting	2018-12-07 01:07:58.579-05	2018-12-07 01:07:58.579-05
24	HACKSomeStuff	Kings Borough Team 2	slau	2018-12-07 01:08:09.348-05	2018-12-07 01:08:09.348-05
25	NYHack2018	NYHack Team 1	atsui3	2018-12-07 01:08:24.344-05	2018-12-07 01:08:24.344-05
26	NYHack2018	NYHack Team 1	hoolu	2018-12-07 01:08:35.064-05	2018-12-07 01:08:35.064-05
27	NYHack2018	NYHack Team 1	jlau	2018-12-07 01:08:44.34-05	2018-12-07 01:08:44.34-05
28	Road To Hack	BTHS Hackthletes	ssmith	2018-12-07 01:15:29.238-05	2018-12-07 01:15:29.238-05
29	Road To Hack	BTHS Hackthletes	sting	2018-12-07 01:15:37.532-05	2018-12-07 01:15:37.532-05
30	Road To Hack	BTHS Hackthletes	hoolu	2018-12-07 01:15:46.296-05	2018-12-07 01:15:46.296-05
31	Road To Hack	The Koalas	fnite	2018-12-07 01:16:18.212-05	2018-12-07 01:16:18.212-05
32	Road To Hack	The Koalas	lbenja	2018-12-07 01:16:31.786-05	2018-12-07 01:16:31.786-05
33	Road to Hack	The Koalas	kchen	2018-12-07 01:17:03.017-05	2018-12-07 01:17:03.017-05
34	Road To Hack	BTHS Hackthletes	jsmith	2018-12-07 01:18:33.033-05	2018-12-07 01:18:33.033-05
35	CodeBites	CUNY Team 1	ssmith	2018-12-07 01:26:50.373-05	2018-12-07 01:26:50.373-05
36	CodeBites	CUNY Team 1	sting	2018-12-07 01:27:04.905-05	2018-12-07 01:27:04.905-05
37	CodeBites	CUNY Team 1	hoolu	2018-12-07 01:27:14.244-05	2018-12-07 01:27:14.244-05
38	CodeBites	CUNY Team 1	jsmith	2018-12-07 01:27:30.247-05	2018-12-07 01:27:30.247-05
39	CodeNights	BTHS Hackthletes	fnite	2018-12-07 01:31:24.933-05	2018-12-07 01:31:24.933-05
40	CodeNights	BTHS Hackthletes	lbenja	2018-12-07 01:31:32.078-05	2018-12-07 01:31:32.078-05
41	CodeNights	BTHS Hackthletes	kchen	2018-12-07 01:31:40.534-05	2018-12-07 01:31:40.534-05
42	CodeNights	Dream Team	ssmith	2018-12-07 01:32:18.609-05	2018-12-07 01:32:18.609-05
43	CodeNights	Dream Team	sting	2018-12-07 01:32:24.483-05	2018-12-07 01:32:24.483-05
44	CodeNights	Dream Team	hoolu	2018-12-07 01:32:31.723-05	2018-12-07 01:32:31.723-05
\.


--
-- Name: userteams_id_seq; Type: SEQUENCE SET; Schema: public; Owner: ctp_user
--

SELECT pg_catalog.setval('public.userteams_id_seq', 44, true);


--
-- Name: attendees_pkey; Type: CONSTRAINT; Schema: public; Owner: ctp_user
--

ALTER TABLE ONLY public.attendees
    ADD CONSTRAINT attendees_pkey PRIMARY KEY (id);


--
-- Name: hackathons_pkey; Type: CONSTRAINT; Schema: public; Owner: ctp_user
--

ALTER TABLE ONLY public.hackathons
    ADD CONSTRAINT hackathons_pkey PRIMARY KEY (id);


--
-- Name: teams_pkey; Type: CONSTRAINT; Schema: public; Owner: ctp_user
--

ALTER TABLE ONLY public.teams
    ADD CONSTRAINT teams_pkey PRIMARY KEY (id);


--
-- Name: users_email_key; Type: CONSTRAINT; Schema: public; Owner: anthony
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users_pkey; Type: CONSTRAINT; Schema: public; Owner: anthony
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: users_username_key; Type: CONSTRAINT; Schema: public; Owner: anthony
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_username_key UNIQUE (username);


--
-- Name: userteams_pkey; Type: CONSTRAINT; Schema: public; Owner: ctp_user
--

ALTER TABLE ONLY public.userteams
    ADD CONSTRAINT userteams_pkey PRIMARY KEY (id);


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM postgres;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

