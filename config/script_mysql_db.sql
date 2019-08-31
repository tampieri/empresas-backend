-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 31-Ago-2019 às 16:10
-- Versão do servidor: 10.4.6-MariaDB
-- versão do PHP: 7.2.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `db`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `enterprise`
--

CREATE TABLE `enterprise` (
  `id_enterprise` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `cnpj` bigint(14) DEFAULT NULL,
  `enterprise_types` int(10) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Extraindo dados da tabela `enterprise`
--

INSERT INTO `enterprise` (`id_enterprise`, `name`, `cnpj`, `enterprise_types`, `user_id`) VALUES
(1, 'Enteprise1', 26460987000110, 1, 1),
(2, 'Enteprise2', 97655390000170, 1, 2),
(3, 'Enteprise3', 87282965000100, 2, 3);

-- --------------------------------------------------------

--
-- Estrutura da tabela `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `client` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `email` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `password` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `permissao` varchar(20) COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Extraindo dados da tabela `user`
--

INSERT INTO `user` (`id`, `client`, `email`, `password`, `permissao`) VALUES
(1, 'lucas rizel', 'lucasrizel@ioasys.com.br', '12345678', 'ADM');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `enterprise`
--
ALTER TABLE `enterprise`
  ADD PRIMARY KEY (`id_enterprise`);

--
-- Índices para tabela `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `enterprise`
--
ALTER TABLE `enterprise`
  MODIFY `id_enterprise` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
