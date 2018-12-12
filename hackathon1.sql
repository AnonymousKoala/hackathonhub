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

DROP DATABASE hackathon3;
--
-- Name: hackathon3; Type: DATABASE; Schema: -; Owner: ctp_user
--

CREATE DATABASE hackathon3 WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'en_US.UTF-8' LC_CTYPE = 'en_US.UTF-8';


ALTER DATABASE hackathon3 OWNER TO ctp_user;

\connect hackathon3

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
-- Name: SequelizeMeta; Type: TABLE; Schema: public; Owner: ctp_user
--

CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);


ALTER TABLE public."SequelizeMeta" OWNER TO ctp_user;

--
-- Name: TeamEvents; Type: TABLE; Schema: public; Owner: ctp_user
--

CREATE TABLE public."TeamEvents" (
    te_id integer NOT NULL,
    title character varying(255),
    "teamID" integer,
    "eventID" integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."TeamEvents" OWNER TO ctp_user;

--
-- Name: TeamEvents_te_id_seq; Type: SEQUENCE; Schema: public; Owner: ctp_user
--

CREATE SEQUENCE public."TeamEvents_te_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."TeamEvents_te_id_seq" OWNER TO ctp_user;

--
-- Name: TeamEvents_te_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ctp_user
--

ALTER SEQUENCE public."TeamEvents_te_id_seq" OWNED BY public."TeamEvents".te_id;


--
-- Name: events; Type: TABLE; Schema: public; Owner: ctp_user
--

CREATE TABLE public.events (
    id integer NOT NULL,
    "eventID" integer,
    "eventName" character varying(255),
    "timeStart" character varying(255),
    "timeEnd" character varying(255),
    "eventDescription" character varying(255),
    "eventAddress" character varying(255),
    "eventCity" character varying(255),
    "eventZip" integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.events OWNER TO ctp_user;

--
-- Name: events_id_seq; Type: SEQUENCE; Schema: public; Owner: ctp_user
--

CREATE SEQUENCE public.events_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.events_id_seq OWNER TO ctp_user;

--
-- Name: events_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ctp_user
--

ALTER SEQUENCE public.events_id_seq OWNED BY public.events.id;


--
-- Name: teams; Type: TABLE; Schema: public; Owner: ctp_user
--

CREATE TABLE public.teams (
    id integer NOT NULL,
    "teamID" integer,
    "teamName" character varying(255),
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
-- Name: users; Type: TABLE; Schema: public; Owner: ctp_user
--

CREATE TABLE public.users (
    id integer NOT NULL,
    "userID" integer,
    "firstName" character varying(255),
    "lastName" character varying(255),
    "userName" character varying(255),
    "userDescription" character varying(255),
    "userEmail" character varying(255),
    "userRole" integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.users OWNER TO ctp_user;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: ctp_user
--

CREATE SEQUENCE public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO ctp_user;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ctp_user
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: te_id; Type: DEFAULT; Schema: public; Owner: ctp_user
--

ALTER TABLE ONLY public."TeamEvents" ALTER COLUMN te_id SET DEFAULT nextval('public."TeamEvents_te_id_seq"'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: ctp_user
--

ALTER TABLE ONLY public.events ALTER COLUMN id SET DEFAULT nextval('public.events_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: ctp_user
--

ALTER TABLE ONLY public.teams ALTER COLUMN id SET DEFAULT nextval('public.teams_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: ctp_user
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: SequelizeMeta; Type: TABLE DATA; Schema: public; Owner: ctp_user
--

COPY public."SequelizeMeta" (name) FROM stdin;
20181205110540-create-user.js
20181206042603-create-team.js
20181206155136-create-event.js
20181212053414-create-team-event.js
\.


--
-- Data for Name: TeamEvents; Type: TABLE DATA; Schema: public; Owner: ctp_user
--

COPY public."TeamEvents" (te_id, title, "teamID", "eventID", "createdAt", "updatedAt") FROM stdin;
\.


--
-- Name: TeamEvents_te_id_seq; Type: SEQUENCE SET; Schema: public; Owner: ctp_user
--

SELECT pg_catalog.setval('public."TeamEvents_te_id_seq"', 1, false);


--
-- Data for Name: events; Type: TABLE DATA; Schema: public; Owner: ctp_user
--

COPY public.events (id, "eventID", "eventName", "timeStart", "timeEnd", "eventDescription", "eventAddress", "eventCity", "eventZip", "createdAt", "updatedAt") FROM stdin;
\.


--
-- Name: events_id_seq; Type: SEQUENCE SET; Schema: public; Owner: ctp_user
--

SELECT pg_catalog.setval('public.events_id_seq', 1, false);


--
-- Data for Name: teams; Type: TABLE DATA; Schema: public; Owner: ctp_user
--

COPY public.teams (id, "teamID", "teamName", "createdAt", "updatedAt") FROM stdin;
\.


--
-- Name: teams_id_seq; Type: SEQUENCE SET; Schema: public; Owner: ctp_user
--

SELECT pg_catalog.setval('public.teams_id_seq', 1, false);


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: ctp_user
--

COPY public.users (id, "userID", "firstName", "lastName", "userName", "userDescription", "userEmail", "userRole", "createdAt", "updatedAt") FROM stdin;
\.


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: ctp_user
--

SELECT pg_catalog.setval('public.users_id_seq', 1, false);


--
-- Name: SequelizeMeta_pkey; Type: CONSTRAINT; Schema: public; Owner: ctp_user
--

ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);


--
-- Name: TeamEvents_pkey; Type: CONSTRAINT; Schema: public; Owner: ctp_user
--

ALTER TABLE ONLY public."TeamEvents"
    ADD CONSTRAINT "TeamEvents_pkey" PRIMARY KEY (te_id);


--
-- Name: events_pkey; Type: CONSTRAINT; Schema: public; Owner: ctp_user
--

ALTER TABLE ONLY public.events
    ADD CONSTRAINT events_pkey PRIMARY KEY (id);


--
-- Name: teams_pkey; Type: CONSTRAINT; Schema: public; Owner: ctp_user
--

ALTER TABLE ONLY public.teams
    ADD CONSTRAINT teams_pkey PRIMARY KEY (id);


--
-- Name: users_pkey; Type: CONSTRAINT; Schema: public; Owner: ctp_user
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: TeamEvents_eventID_fkey; Type: FK CONSTRAINT; Schema: public; Owner: ctp_user
--

ALTER TABLE ONLY public."TeamEvents"
    ADD CONSTRAINT "TeamEvents_eventID_fkey" FOREIGN KEY ("eventID") REFERENCES public.events(id);


--
-- Name: TeamEvents_teamID_fkey; Type: FK CONSTRAINT; Schema: public; Owner: ctp_user
--

ALTER TABLE ONLY public."TeamEvents"
    ADD CONSTRAINT "TeamEvents_teamID_fkey" FOREIGN KEY ("teamID") REFERENCES public.teams(id);


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

