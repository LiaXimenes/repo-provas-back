--
-- PostgreSQL database dump
--

-- Dumped from database version 12.7 (Ubuntu 12.7-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.7 (Ubuntu 12.7-0ubuntu0.20.04.1)

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
-- Name: category; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.category (
    id integer NOT NULL,
    name text NOT NULL
);


--
-- Name: category_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.category_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: category_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.category_id_seq OWNED BY public.category.id;


--
-- Name: semester; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.semester (
    id integer NOT NULL,
    name text NOT NULL
);


--
-- Name: semester_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.semester_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: semester_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.semester_id_seq OWNED BY public.semester.id;


--
-- Name: subject; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.subject (
    id integer NOT NULL,
    name text NOT NULL,
    "semesterId" integer NOT NULL
);


--
-- Name: subject_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.subject_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: subject_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.subject_id_seq OWNED BY public.subject.id;


--
-- Name: teacher; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.teacher (
    id integer NOT NULL,
    name text NOT NULL
);


--
-- Name: teacher_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.teacher_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: teacher_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.teacher_id_seq OWNED BY public.teacher.id;


--
-- Name: teacher_subject; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.teacher_subject (
    id integer NOT NULL,
    "teacherId" integer NOT NULL,
    "subjectId" integer NOT NULL
);


--
-- Name: teacher_subject_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.teacher_subject_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: teacher_subject_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.teacher_subject_id_seq OWNED BY public.teacher_subject.id;


--
-- Name: test; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.test (
    id integer NOT NULL,
    name text NOT NULL,
    "teacherId" integer NOT NULL,
    "subjectId" integer NOT NULL,
    "categoryId" integer NOT NULL,
    link text NOT NULL
);


--
-- Name: test_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.test_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: test_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.test_id_seq OWNED BY public.test.id;


--
-- Name: category id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.category ALTER COLUMN id SET DEFAULT nextval('public.category_id_seq'::regclass);


--
-- Name: semester id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.semester ALTER COLUMN id SET DEFAULT nextval('public.semester_id_seq'::regclass);


--
-- Name: subject id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.subject ALTER COLUMN id SET DEFAULT nextval('public.subject_id_seq'::regclass);


--
-- Name: teacher id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.teacher ALTER COLUMN id SET DEFAULT nextval('public.teacher_id_seq'::regclass);


--
-- Name: teacher_subject id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.teacher_subject ALTER COLUMN id SET DEFAULT nextval('public.teacher_subject_id_seq'::regclass);


--
-- Name: test id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.test ALTER COLUMN id SET DEFAULT nextval('public.test_id_seq'::regclass);


--
-- Data for Name: category; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.category VALUES (1, 'P1');
INSERT INTO public.category VALUES (2, 'P2');
INSERT INTO public.category VALUES (5, 'Outras');
INSERT INTO public.category VALUES (3, 'P3');
INSERT INTO public.category VALUES (4, '2 chamada');


--
-- Data for Name: semester; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.semester VALUES (1, 'Primeiro Semestre');
INSERT INTO public.semester VALUES (2, 'Segundo Semestre');
INSERT INTO public.semester VALUES (3, 'Terceiro Semestre');
INSERT INTO public.semester VALUES (4, 'Quarto Semestre');
INSERT INTO public.semester VALUES (5, 'Quinto Semestre');
INSERT INTO public.semester VALUES (6, 'Sexto Semestre');
INSERT INTO public.semester VALUES (7, 'Sétimo Semestre');
INSERT INTO public.semester VALUES (8, 'Oitavo Semestre');


--
-- Data for Name: subject; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.subject VALUES (1, 'História da Arte', 1);
INSERT INTO public.subject VALUES (2, 'Renascimento', 2);
INSERT INTO public.subject VALUES (3, 'Romantismo', 3);
INSERT INTO public.subject VALUES (4, 'Historia da Música', 2);
INSERT INTO public.subject VALUES (5, 'Estética Clássica', 3);
INSERT INTO public.subject VALUES (6, 'Estética Moderna', 4);
INSERT INTO public.subject VALUES (7, 'Arte Contemporânea', 5);
INSERT INTO public.subject VALUES (8, 'Teatro Grego', 5);
INSERT INTO public.subject VALUES (9, 'Teatro Contemporâneo', 6);
INSERT INTO public.subject VALUES (10, 'Teatro Brasileiro', 7);
INSERT INTO public.subject VALUES (11, 'Teatro Brasileiro Moderno', 8);


--
-- Data for Name: teacher; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.teacher VALUES (1, 'Juliana');
INSERT INTO public.teacher VALUES (2, 'Livia');
INSERT INTO public.teacher VALUES (3, 'Flavia');
INSERT INTO public.teacher VALUES (4, 'Mauricio');
INSERT INTO public.teacher VALUES (5, 'André');
INSERT INTO public.teacher VALUES (6, 'Renato');
INSERT INTO public.teacher VALUES (7, 'Cristina');


--
-- Data for Name: teacher_subject; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.teacher_subject VALUES (1, 3, 1);
INSERT INTO public.teacher_subject VALUES (2, 1, 2);
INSERT INTO public.teacher_subject VALUES (3, 2, 4);
INSERT INTO public.teacher_subject VALUES (4, 6, 5);
INSERT INTO public.teacher_subject VALUES (5, 6, 6);
INSERT INTO public.teacher_subject VALUES (6, 7, 10);
INSERT INTO public.teacher_subject VALUES (7, 7, 11);
INSERT INTO public.teacher_subject VALUES (8, 3, 7);
INSERT INTO public.teacher_subject VALUES (9, 4, 3);
INSERT INTO public.teacher_subject VALUES (10, 4, 8);


--
-- Data for Name: test; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.test VALUES (1, '2020.1 P1', 3, 1, 1, 'https://mega.nz/file/f9oWVYJQ#edMUr7E35UAYt6fwgqby4d1x9leEp-nEQ-lpGcLAgCY');
INSERT INTO public.test VALUES (2, '2019.2 P2', 1, 2, 2, 'http://www.dominiopublico.gov.br/download/texto/eb00002a.pdf');
INSERT INTO public.test VALUES (3, '2020.1 P2', 2, 4, 1, 'http://www.dominiopublico.gov.br/download/texto/gu005724.pdf');
INSERT INTO public.test VALUES (4, '2020.1 P2', 3, 1, 2, 'https://mega.nz/file/f9oWVYJQ#edMUr7E35UAYt6fwgqby4d1x9leEp-nEQ-lpGcLAgCY');
INSERT INTO public.test VALUES (5, '2020.1 P3', 3, 1, 3, 'https://mega.nz/file/f9oWVYJQ#edMUr7E35UAYt6fwgqby4d1x9leEp-nEQ-lpGcLAgCY');
INSERT INTO public.test VALUES (6, '2020.1 P2', 7, 10, 2, 'http://www.dominiopublico.gov.br/download/texto/ua000180.pdf');
INSERT INTO public.test VALUES (8, '2019.1', 6, 10, 1, 'http://www.dominiopublico.gov.br/download/texto/ua000180.pdf');
INSERT INTO public.test VALUES (9, '2019.1', 4, 8, 1, 'http://files.nossateca5.webnode.com/200000114-36851377ee/O%20Melhor%20Do%20Teatro%20Grego%20-%20Aristofane.pdf');
INSERT INTO public.test VALUES (10, '2019.2', 4, 8, 1, 'http://files.nossateca5.webnode.com/200000114-36851377ee/O%20Melhor%20Do%20Teatro%20Grego%20-%20Aristofane.pdf');
INSERT INTO public.test VALUES (11, '2020.2', 2, 4, 3, 'http://www.dominiopublico.gov.br/download/texto/pm000246.pdf');
INSERT INTO public.test VALUES (12, '2020.2', 2, 4, 3, 'http://www.dominiopublico.gov.br/download/texto/pm001267.pdf');
INSERT INTO public.test VALUES (13, '2019.1', 6, 10, 1, 'http://www.dominiopublico.gov.br/download/texto/ua000180.pdf');
INSERT INTO public.test VALUES (14, '2021.1', 2, 4, 3, 'https://site.brasilparalelo.com.br/series/a-primeira-arte/');


--
-- Name: category_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.category_id_seq', 5, true);


--
-- Name: semester_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.semester_id_seq', 8, true);


--
-- Name: subject_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.subject_id_seq', 11, true);


--
-- Name: teacher_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.teacher_id_seq', 7, true);


--
-- Name: teacher_subject_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.teacher_subject_id_seq', 10, true);


--
-- Name: test_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.test_id_seq', 14, true);


--
-- Name: category category_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.category
    ADD CONSTRAINT category_pk PRIMARY KEY (id);


--
-- Name: semester semester_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.semester
    ADD CONSTRAINT semester_pk PRIMARY KEY (id);


--
-- Name: subject subject_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.subject
    ADD CONSTRAINT subject_pk PRIMARY KEY (id);


--
-- Name: teacher teacher_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.teacher
    ADD CONSTRAINT teacher_pk PRIMARY KEY (id);


--
-- Name: teacher_subject teacher_subject_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.teacher_subject
    ADD CONSTRAINT teacher_subject_pk PRIMARY KEY (id);


--
-- Name: test test_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.test
    ADD CONSTRAINT test_pk PRIMARY KEY (id);


--
-- Name: subject subject_fk0; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.subject
    ADD CONSTRAINT subject_fk0 FOREIGN KEY ("semesterId") REFERENCES public.semester(id);


--
-- Name: teacher_subject teacher_subject_fk0; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.teacher_subject
    ADD CONSTRAINT teacher_subject_fk0 FOREIGN KEY ("teacherId") REFERENCES public.teacher(id);


--
-- Name: teacher_subject teacher_subject_fk1; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.teacher_subject
    ADD CONSTRAINT teacher_subject_fk1 FOREIGN KEY ("subjectId") REFERENCES public.subject(id);


--
-- Name: test test_fk0; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.test
    ADD CONSTRAINT test_fk0 FOREIGN KEY ("teacherId") REFERENCES public.teacher(id);


--
-- Name: test test_fk1; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.test
    ADD CONSTRAINT test_fk1 FOREIGN KEY ("subjectId") REFERENCES public.subject(id);


--
-- Name: test test_fk2; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.test
    ADD CONSTRAINT test_fk2 FOREIGN KEY ("categoryId") REFERENCES public.category(id);


--
-- PostgreSQL database dump complete
--

