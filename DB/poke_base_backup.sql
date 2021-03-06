PGDMP     0                    x        	   poke_base    10.12    10.12 1    8           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                       false            9           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                       false            :           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                       false            ;           1262    16393 	   poke_base    DATABASE     �   CREATE DATABASE poke_base WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'Polish_Poland.1250' LC_CTYPE = 'Polish_Poland.1250';
    DROP DATABASE poke_base;
             postgres    false                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
             postgres    false            <           0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                  postgres    false    3                        3079    12924    plpgsql 	   EXTENSION     ?   CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;
    DROP EXTENSION plpgsql;
                  false            =           0    0    EXTENSION plpgsql    COMMENT     @   COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';
                       false    1            �            1259    16580    Gyms    TABLE     �   CREATE TABLE public."Gyms" (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    badge character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public."Gyms";
       public         postgres    false    3            �            1259    16549    caught_pokemons    TABLE     L  CREATE TABLE public.caught_pokemons (
    id integer NOT NULL,
    pokemon_id integer NOT NULL,
    trainer_id integer NOT NULL,
    pokemon_new_name character varying(30),
    pokemon_gender character varying(1),
    pokemon_level integer NOT NULL,
    date_caught date NOT NULL,
    place_caught character varying(30) NOT NULL
);
 #   DROP TABLE public.caught_pokemons;
       public         postgres    false    3            �            1259    16525    gyms    TABLE     �   CREATE TABLE public.gyms (
    id integer NOT NULL,
    name character varying(30) NOT NULL,
    badge character varying(30) NOT NULL
);
    DROP TABLE public.gyms;
       public         postgres    false    3            �            1259    16501    pokemon_type    TABLE     }   CREATE TABLE public.pokemon_type (
    id integer NOT NULL,
    pokemon_id integer NOT NULL,
    type_id integer NOT NULL
);
     DROP TABLE public.pokemon_type;
       public         postgres    false    3            �            1259    16487    pokemons    TABLE     c   CREATE TABLE public.pokemons (
    id integer NOT NULL,
    name character varying(30) NOT NULL
);
    DROP TABLE public.pokemons;
       public         postgres    false    3            �            1259    16564    selected_pokemons    TABLE       CREATE TABLE public.selected_pokemons (
    id integer NOT NULL,
    caught_pokemon_id integer NOT NULL,
    trainer_id integer NOT NULL,
    pokemon_order integer NOT NULL,
    CONSTRAINT selected_pokemons_pokemon_order_check CHECK (((pokemon_order >= 1) AND (pokemon_order <= 6)))
);
 %   DROP TABLE public.selected_pokemons;
       public         postgres    false    3            �            1259    16534    trainer_gym    TABLE     {   CREATE TABLE public.trainer_gym (
    id integer NOT NULL,
    trainer_id integer NOT NULL,
    gym_id integer NOT NULL
);
    DROP TABLE public.trainer_gym;
       public         postgres    false    3            �            1259    16516    trainers    TABLE     :  CREATE TABLE public.trainers (
    id integer NOT NULL,
    nickname character varying(30) NOT NULL,
    email character varying(30) NOT NULL,
    country character varying(30),
    city character varying(30),
    street_name character varying(30),
    street_number character varying(10),
    postcode integer
);
    DROP TABLE public.trainers;
       public         postgres    false    3            �            1259    16494    types    TABLE     `   CREATE TABLE public.types (
    id integer NOT NULL,
    name character varying(30) NOT NULL
);
    DROP TABLE public.types;
       public         postgres    false    3            5          0    16580    Gyms 
   TABLE DATA               K   COPY public."Gyms" (id, name, badge, "createdAt", "updatedAt") FROM stdin;
    public       postgres    false    204   R9       3          0    16549    caught_pokemons 
   TABLE DATA               �   COPY public.caught_pokemons (id, pokemon_id, trainer_id, pokemon_new_name, pokemon_gender, pokemon_level, date_caught, place_caught) FROM stdin;
    public       postgres    false    202   o9       1          0    16525    gyms 
   TABLE DATA               /   COPY public.gyms (id, name, badge) FROM stdin;
    public       postgres    false    200   �;       /          0    16501    pokemon_type 
   TABLE DATA               ?   COPY public.pokemon_type (id, pokemon_id, type_id) FROM stdin;
    public       postgres    false    198   %=       -          0    16487    pokemons 
   TABLE DATA               ,   COPY public.pokemons (id, name) FROM stdin;
    public       postgres    false    196   �@       4          0    16564    selected_pokemons 
   TABLE DATA               ]   COPY public.selected_pokemons (id, caught_pokemon_id, trainer_id, pokemon_order) FROM stdin;
    public       postgres    false    203   �D       2          0    16534    trainer_gym 
   TABLE DATA               =   COPY public.trainer_gym (id, trainer_id, gym_id) FROM stdin;
    public       postgres    false    201   3E       0          0    16516    trainers 
   TABLE DATA               l   COPY public.trainers (id, nickname, email, country, city, street_name, street_number, postcode) FROM stdin;
    public       postgres    false    199   �E       .          0    16494    types 
   TABLE DATA               )   COPY public.types (id, name) FROM stdin;
    public       postgres    false    197   �H       �
           2606    16587    Gyms Gyms_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public."Gyms"
    ADD CONSTRAINT "Gyms_pkey" PRIMARY KEY (id);
 <   ALTER TABLE ONLY public."Gyms" DROP CONSTRAINT "Gyms_pkey";
       public         postgres    false    204            �
           2606    16553 $   caught_pokemons caught_pokemons_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public.caught_pokemons
    ADD CONSTRAINT caught_pokemons_pkey PRIMARY KEY (id);
 N   ALTER TABLE ONLY public.caught_pokemons DROP CONSTRAINT caught_pokemons_pkey;
       public         postgres    false    202            �
           2606    16533    gyms gyms_badge_key 
   CONSTRAINT     O   ALTER TABLE ONLY public.gyms
    ADD CONSTRAINT gyms_badge_key UNIQUE (badge);
 =   ALTER TABLE ONLY public.gyms DROP CONSTRAINT gyms_badge_key;
       public         postgres    false    200            �
           2606    16531    gyms gyms_name_key 
   CONSTRAINT     M   ALTER TABLE ONLY public.gyms
    ADD CONSTRAINT gyms_name_key UNIQUE (name);
 <   ALTER TABLE ONLY public.gyms DROP CONSTRAINT gyms_name_key;
       public         postgres    false    200            �
           2606    16529    gyms gyms_pkey 
   CONSTRAINT     L   ALTER TABLE ONLY public.gyms
    ADD CONSTRAINT gyms_pkey PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.gyms DROP CONSTRAINT gyms_pkey;
       public         postgres    false    200            �
           2606    16505    pokemon_type pokemon_type_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.pokemon_type
    ADD CONSTRAINT pokemon_type_pkey PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.pokemon_type DROP CONSTRAINT pokemon_type_pkey;
       public         postgres    false    198            �
           2606    16493    pokemons pokemons_name_key 
   CONSTRAINT     U   ALTER TABLE ONLY public.pokemons
    ADD CONSTRAINT pokemons_name_key UNIQUE (name);
 D   ALTER TABLE ONLY public.pokemons DROP CONSTRAINT pokemons_name_key;
       public         postgres    false    196            �
           2606    16491    pokemons pokemons_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.pokemons
    ADD CONSTRAINT pokemons_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.pokemons DROP CONSTRAINT pokemons_pkey;
       public         postgres    false    196            �
           2606    16569 (   selected_pokemons selected_pokemons_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY public.selected_pokemons
    ADD CONSTRAINT selected_pokemons_pkey PRIMARY KEY (id);
 R   ALTER TABLE ONLY public.selected_pokemons DROP CONSTRAINT selected_pokemons_pkey;
       public         postgres    false    203            �
           2606    16538    trainer_gym trainer_gym_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.trainer_gym
    ADD CONSTRAINT trainer_gym_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.trainer_gym DROP CONSTRAINT trainer_gym_pkey;
       public         postgres    false    201            �
           2606    16524    trainers trainers_email_key 
   CONSTRAINT     W   ALTER TABLE ONLY public.trainers
    ADD CONSTRAINT trainers_email_key UNIQUE (email);
 E   ALTER TABLE ONLY public.trainers DROP CONSTRAINT trainers_email_key;
       public         postgres    false    199            �
           2606    16522    trainers trainers_nickname_key 
   CONSTRAINT     ]   ALTER TABLE ONLY public.trainers
    ADD CONSTRAINT trainers_nickname_key UNIQUE (nickname);
 H   ALTER TABLE ONLY public.trainers DROP CONSTRAINT trainers_nickname_key;
       public         postgres    false    199            �
           2606    16520    trainers trainers_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.trainers
    ADD CONSTRAINT trainers_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.trainers DROP CONSTRAINT trainers_pkey;
       public         postgres    false    199            �
           2606    16500    types types_name_key 
   CONSTRAINT     O   ALTER TABLE ONLY public.types
    ADD CONSTRAINT types_name_key UNIQUE (name);
 >   ALTER TABLE ONLY public.types DROP CONSTRAINT types_name_key;
       public         postgres    false    197            �
           2606    16498    types types_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.types
    ADD CONSTRAINT types_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.types DROP CONSTRAINT types_pkey;
       public         postgres    false    197            �
           2606    16554 /   caught_pokemons caught_pokemons_pokemon_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.caught_pokemons
    ADD CONSTRAINT caught_pokemons_pokemon_id_fkey FOREIGN KEY (pokemon_id) REFERENCES public.pokemons(id);
 Y   ALTER TABLE ONLY public.caught_pokemons DROP CONSTRAINT caught_pokemons_pokemon_id_fkey;
       public       postgres    false    196    202    2705            �
           2606    16559 /   caught_pokemons caught_pokemons_trainer_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.caught_pokemons
    ADD CONSTRAINT caught_pokemons_trainer_id_fkey FOREIGN KEY (trainer_id) REFERENCES public.trainers(id);
 Y   ALTER TABLE ONLY public.caught_pokemons DROP CONSTRAINT caught_pokemons_trainer_id_fkey;
       public       postgres    false    202    2717    199            �
           2606    16506 )   pokemon_type pokemon_type_pokemon_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.pokemon_type
    ADD CONSTRAINT pokemon_type_pokemon_id_fkey FOREIGN KEY (pokemon_id) REFERENCES public.pokemons(id);
 S   ALTER TABLE ONLY public.pokemon_type DROP CONSTRAINT pokemon_type_pokemon_id_fkey;
       public       postgres    false    2705    198    196            �
           2606    16511 &   pokemon_type pokemon_type_type_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.pokemon_type
    ADD CONSTRAINT pokemon_type_type_id_fkey FOREIGN KEY (type_id) REFERENCES public.types(id);
 P   ALTER TABLE ONLY public.pokemon_type DROP CONSTRAINT pokemon_type_type_id_fkey;
       public       postgres    false    198    2709    197            �
           2606    16570 :   selected_pokemons selected_pokemons_caught_pokemon_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.selected_pokemons
    ADD CONSTRAINT selected_pokemons_caught_pokemon_id_fkey FOREIGN KEY (caught_pokemon_id) REFERENCES public.caught_pokemons(id);
 d   ALTER TABLE ONLY public.selected_pokemons DROP CONSTRAINT selected_pokemons_caught_pokemon_id_fkey;
       public       postgres    false    2727    203    202            �
           2606    16575 3   selected_pokemons selected_pokemons_trainer_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.selected_pokemons
    ADD CONSTRAINT selected_pokemons_trainer_id_fkey FOREIGN KEY (trainer_id) REFERENCES public.trainers(id);
 ]   ALTER TABLE ONLY public.selected_pokemons DROP CONSTRAINT selected_pokemons_trainer_id_fkey;
       public       postgres    false    199    2717    203            �
           2606    16544 #   trainer_gym trainer_gym_gym_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.trainer_gym
    ADD CONSTRAINT trainer_gym_gym_id_fkey FOREIGN KEY (gym_id) REFERENCES public.gyms(id);
 M   ALTER TABLE ONLY public.trainer_gym DROP CONSTRAINT trainer_gym_gym_id_fkey;
       public       postgres    false    201    2723    200            �
           2606    16539 '   trainer_gym trainer_gym_trainer_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.trainer_gym
    ADD CONSTRAINT trainer_gym_trainer_id_fkey FOREIGN KEY (trainer_id) REFERENCES public.trainers(id);
 Q   ALTER TABLE ONLY public.trainer_gym DROP CONSTRAINT trainer_gym_trainer_id_fkey;
       public       postgres    false    2717    199    201            5      x������ � �      3   w  x�uT�n�0=�B?�Bܴ{�[�US4ArɅ����L��Z��)Y!�
`�~~�̈B����A��Y~����s���qG;*c	CT�wz�8_��3ݛ��ᯄ�d gR�r��
&�� (�g���������uDBQ�6���S�x��?O�yt/h���hR�	k�=g��ju��ؖT�(᫲�*T�J��Gk�l��^#�I��K�<����@��Kd�"N�`\���N+B)H	��azu��E�1΀a+����.k���)��&�lT��6�1���<I�Rb��(0�2�M� )0��[�.�^+O�D�؀��k[��Ђ��M�[����K=6-��GU�1_g����?:ۙ~}�_�8+67Ф;�3<	�5�Tǉ�8���Ҍ���ޣ�uJ),���g4���86�e0ar��P�YӦ����1m8v�b��Uٽ����rA�P�<��u{m�V� �s:�m[�AT��½��L9y�-'\�q������i���AS��t��+�=/��_ml=+�j Ūr}��ި�F�ƚ����^��"�׻���w��u�yK��o��p��K�����C���&���T��-�r���B�?'���      1     x�]��N�0��}D��Ȫmp��ش��5^c-�Q��*OO����j����R��:O./������^S��֨0\��){��\k�X��T�hP8���aI�^��?l��} ۣt�A���]�����b*�2�9��J7��]X����ɥ�m�5z Op`Ǌ���|4���!?������jEYq/?Z���ٛy�kl�(`-�W�D���&��,+�z�����d�A�I����.M���-%�����O1�j�����+��Z1�E����7l�f_wY���r��      /   Z  x�-�I� ��0y|�����H���j�Xhhጌ_�<���ŏ'�����b�/�k'��t��*3vd��qʎ�e�$vK�I-���m-kv{D^�n�>!�Բ&��zhY��s��f�<��e����j��]m�������в&Q�S�zE7����8�Ql��Y�����~x<Z<^+6�ð��0��eM�UQ����~���_�_px�6�k �mQ'.O|�z5���8$v�6O��k^--#�Z�eͣZ9�4sq�ǯ�����^[+��U�
v���%�@��Mm-kZ�=��W��l�zY�M�,�Aj�/���v�Aj��d��RU�3��+�ͭ;HNp���{�M���ni
z��`��������A�X���ZR��c7��B䇌�l~)(
���@�����MAQ�Ά���Y��8#K�!Y��{����y��4�Yx����q���	*zW�h�S[(T(�Q�"�?�#Q<����b�@��M:Ή����yӏ⏊H$n.�j�!��[q��p 'n�`��U���2dR�Cʷꇄi�U@�4���]�X����B~��O9�� R{�G� �U��x�xP��کb�
cz*���l�$o�,�V-J�_!�O#/�:�f�ܯ��SQ�Y�5���f,�{�P����`�e�P�@��¬�{P֩�^*�׃np�K&��{G���5X��Ī��]�*������nz�������RK��ov�"�)<��� �2^�xFU�*��{1��Dey��ٵՓ^U�J+��"Q!��/�y�H�JZ�|�((i�f�7ɩC��:���S���� ;R=�B)����e/D�ݾ{����+]��ں
��-�m������Z�z(Q      -   �  x�=�I�(��w���ٻ��TJ!��������SјݨO�#�d��M���7�4�:���&r�ƙ๽��q��_������1���>S��aUФ���+�M�G�Y�� a�6*�3㪪i�[��UC#֢u�UK��s��
)V�_��@Q������*�����>\���C�M��˚t��e�mzZ3�-nۛ�?�hp�ĵr9��s���xqU<��ϕ��W6�sU�j��{*pU߼Y�p��:��6^\���C��;�����i��9sr5�O�,�:���uA��J���G��.i	�<[�\״�v�z[g�w�5�>��0.�������=����f�8�7�漤h7%J>�_�a�i�禦��<m�4�˃-��6��k��F����ٴ�P�IK��tg?z�V=���-5^��H�Qs+m3?ؐvz�_�s+ONk8������F�c�j�;�r⮐.<��5�5%�'L�JJ�'=� ��c�,[H�	s�w�6�7%r�J�f���3������:]��Q_�<��=FD/���ۗ��0v}E/_&M��}M3^��F@
ѷtx�w4���[��i������"6��A���u&a4��]<T����E	�/�P��ġ���b`����@/=mQ�#�$-����wpP���@"�,jP��m�e�I��2���1x�h9����զ=x'JQt,T�����i�)#`U���z�`)uW�����^k����A�-��
�'i���@���~ꃫ��h��s��ΖIWP,�� ?g���@u�.����� WtNAC�~^�7�y�����]��h�?�`/s'p�P�x@?Z.�,;P!�k��-� c޷���Gs���J=����?�Ҵ�Zn�)`r/�,QA��	*��C{<�(�G�[O�vC�N���Ņ6g/����vB�Íh���"�ނ{ax�%z��c�p(�n>�/5�c���0��� @      4   �   x�-N�!{K�d�m`�K��#�l���iAP@$65D��58ܸ�ʃ��-s��e��-(�rL.v�m�����,Җ�UG6b�>m����E=�ҍ�}�B��p��L%��;�3y�,��aTt8]>�sk�,{��$~?$�$W      2   j   x����0�R1��^�3�ì$
&Ą�Q�a�����\�J�x���=��#<�
�e�.���d-�G���k�?v���K7����ðVX�lNF5��C�W��      0     x�uT�n�8}}�~ �u��Mq�M��A���CQ�Ic���ђTm��w�E`8�M��3��9g��FS!�Ϋ�&�#Y9��[�;S�;G[��`QL��l���A}N9�ku�	9ض�l:[*�l
+
�����ei���^�WP[)�F�LJ��!_�@n��*Ij���j��4��d�P���:����h	}��ʏ���#�ֳ����I��[o�<,��
�y��g��V�+��d'�;"�l�a�&�ˢ)�+�h�}��� If�΢8��7����7��wR���Q�5�Jt�4�f�+,��M��e���`����r^9!.��`	�e����E7(,�'m�[����JQ��RDK�ӕt.�hr�n[CG��������'�A|���@�zyn¯|�	�%$�8�"x&���5��A�.����$͹}���7x8��Zс!�FB&�Q�	�=��^�,^�-\�&x�Јwc�\h�ɯh^H��7�oGZ���qݣVM��o�����3��^n�H�[D~� �f�4)!��U�pߨhUs��?����Dx�D�zܫ>�Y8����9���3�/��]���ɠ+�{>a)?���{��tQ���m�G��L�y+���^Wp�T-#Y���tD?9v��x�k��m5�ѝS�-�q$"���%��������a��]��'E����}�������mՔk	.�D�Pa1~��{���t��kT��A�;**?v%��pڝv2E�-�Г���&\F���+4��ֻ�J�tþx	��t牰=On;�c��JkŤ      .   �   x��A�0���a��.nj��Fl�o���6.'�y�{�%'J�`��K4��v�(���j��u�����6����=�6�G�)�dה��?�c/�_[o�e����6b@��	aͥRF��B{��6�-�     