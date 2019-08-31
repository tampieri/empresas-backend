CREATE TABLE IF NOT EXISTS "users" (
  "id"  SERIAL , 
  "client" VARCHAR(255) NOT NULL, 
  "email" VARCHAR(255) NOT NULL UNIQUE, 
  "senha" VARCHAR(255) NOT NULL, 
  "permissao" VARCHAR(255) NOT NULL);

INSERT INTO public.users (client, email, senha, permissao)
VALUES  ('lucas rizel', 'lucasrizel@ioasys.com.br', '12345678', 'ADM');