-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 14, 2025 at 05:15 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tl_thuoc`
--

-- --------------------------------------------------------

--
-- Table structure for table `lienhe`
--

CREATE TABLE `lienhe` (
  `id` int(11) NOT NULL,
  `ten` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `noidung` text DEFAULT NULL,
  `traloi` text DEFAULT NULL,
  `trangthai` varchar(50) DEFAULT 'Chưa trả lời'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `lienhe`
--

INSERT INTO `lienhe` (`id`, `ten`, `email`, `noidung`, `traloi`, `trangthai`) VALUES
(6, NULL, 'tl@gmail.com', NULL, NULL, 'Chưa trả lời'),
(7, NULL, 'tl@gmail.com', NULL, NULL, 'Chưa trả lời'),
(8, 'tl', 'tl@gmail.com', 'dètgyhujhgfbdvdcdfdvgbv', NULL, 'Chưa trả lời'),
(9, 'tl', 'tl@gmail.com', 'azsdfghjkl.,/', NULL, 'Chưa trả lời'),
(10, 'thu8 ưdqyfgh', 'tl@gmail.com', 'ádfghjikjhgfvfghk', NULL, 'Chưa trả lời');

-- --------------------------------------------------------

--
-- Table structure for table `tl_admin`
--

CREATE TABLE `tl_admin` (
  `tl_maadmin` varchar(10) NOT NULL,
  `tl_tenadmin` varchar(100) DEFAULT NULL,
  `tl_email` varchar(100) DEFAULT NULL,
  `tl_matkhau` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tl_admin`
--

INSERT INTO `tl_admin` (`tl_maadmin`, `tl_tenadmin`, `tl_email`, `tl_matkhau`) VALUES
('A001', 'Admin One', 'admin1@example.com', 'password123'),
('A002', 'Admin Two', 'admin2@example.com', 'password123'),
('A003', 'Admin Three', 'admin3@example.com', 'password123'),
('A004', 'Admin Four', 'admin4@example.com', 'password123'),
('A005', 'Admin Five', 'admin5@example.com', 'password123');

-- --------------------------------------------------------

--
-- Table structure for table `tl_cthoadon`
--

CREATE TABLE `tl_cthoadon` (
  `tl_macthd` varchar(10) NOT NULL,
  `tl_mahd` varchar(10) DEFAULT NULL,
  `tl_mathuoc` varchar(10) DEFAULT NULL,
  `tl_soluong` int(11) DEFAULT NULL,
  `tl_dongia` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tl_cthoadon`
--

INSERT INTO `tl_cthoadon` (`tl_macthd`, `tl_mahd`, `tl_mathuoc`, `tl_soluong`, `tl_dongia`) VALUES
('CTHD001', 'HD001', 'T001', 10, 5000.00),
('CTHD002', 'HD001', 'T003', 5, 15000.00),
('CTHD003', 'HD002', 'T002', 3, 12000.00),
('CTHD004', 'HD003', 'T004', 4, 20000.00),
('CTHD005', 'HD004', 'T005', 6, 8000.00);

-- --------------------------------------------------------

--
-- Table structure for table `tl_giohang`
--

CREATE TABLE `tl_giohang` (
  `tl_magiohang` varchar(10) NOT NULL,
  `tl_makh` varchar(10) DEFAULT NULL,
  `tl_mathuoc` varchar(10) DEFAULT NULL,
  `tl_soluong` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tl_giohang`
--

INSERT INTO `tl_giohang` (`tl_magiohang`, `tl_makh`, `tl_mathuoc`, `tl_soluong`) VALUES
('GH001', 'KH001', 'T001', 2),
('GH002', 'KH002', 'T002', 1),
('GH003', 'KH003', 'T003', 3),
('GH004', 'KH004', 'T004', 1),
('GH005', 'KH005', 'T005', 4);

-- --------------------------------------------------------

--
-- Table structure for table `tl_hoadon`
--

CREATE TABLE `tl_hoadon` (
  `tl_mahd` varchar(10) NOT NULL,
  `tl_makh` varchar(10) DEFAULT NULL,
  `tl_ngaydat` datetime DEFAULT NULL,
  `tl_tongtien` decimal(10,2) DEFAULT NULL,
  `tl_trangthai` varchar(50) DEFAULT NULL,
  `tl_makm` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tl_hoadon`
--

INSERT INTO `tl_hoadon` (`tl_mahd`, `tl_makh`, `tl_ngaydat`, `tl_tongtien`, `tl_trangthai`, `tl_makm`) VALUES
('HD001', 'KH001', '2025-05-01 10:30:00', 150000.00, 'Đã thanh toán', 'KM001'),
('HD002', 'KH002', '2025-05-02 14:15:00', 75000.00, 'Chưa thanh toán', NULL),
('HD003', 'KH003', '2025-05-03 09:45:00', 200000.00, 'Đã thanh toán', 'KM003'),
('HD004', 'KH004', '2025-05-04 16:00:00', 120000.00, 'Đang xử lý', 'KM005'),
('HD005', 'KH005', '2025-05-05 11:20:00', 50000.00, 'Hủy', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tl_khachhang`
--

CREATE TABLE `tl_khachhang` (
  `tl_makh` varchar(10) NOT NULL,
  `tl_tenkh` varchar(100) DEFAULT NULL,
  `tl_email` varchar(100) DEFAULT NULL,
  `tl_sdt` varchar(20) DEFAULT NULL,
  `tl_diachi` varchar(255) DEFAULT NULL,
  `tl_matkhau` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tl_khachhang`
--

INSERT INTO `tl_khachhang` (`tl_makh`, `tl_tenkh`, `tl_email`, `tl_sdt`, `tl_diachi`, `tl_matkhau`) VALUES
('KH001', 'Nguyen Van A', 'nva@example.com', '0912345678', '123 Đường A, Quận 1', 'areyoucrazy'),
('KH002', 'Tran Thi B', 'ttb@example.com', '0987654321', '456 Đường B, Quận 2', 'areyouok'),
('KH003', 'Le Van C', 'lvc@example.com', '0911222333', '789 Đường C, Quận 3', 'helloem'),
('KH004', 'Pham Thi D', 'ptd@example.com', '0909888777', '321 Đường D, Quận 4', '123pass\r\n'),
('KH005', 'Hoang Van E', 'hve@example.com', '0933444555', '654 Đường E, Quận 5', 'pass12345'),
('KH006', 'Lê Thu', 'thu@gmail.com', '0900111222', 'Hà Nội', '123456'),
('KH007', 'llllllllllllllllllllllllll', 'thu1@gmail.com', '9876543', 'ha nam', '123456');

-- --------------------------------------------------------

--
-- Table structure for table `tl_khuyenmai`
--

CREATE TABLE `tl_khuyenmai` (
  `tl_makm` varchar(10) NOT NULL,
  `tl_tenkm` varchar(100) DEFAULT NULL,
  `tl_mota` text DEFAULT NULL,
  `tl_mucgiam` decimal(5,2) DEFAULT NULL,
  `tl_giatridon` decimal(10,2) DEFAULT NULL,
  `tl_ngaybatdau` date DEFAULT NULL,
  `tl_ngayketthuc` date DEFAULT NULL,
  `tl_trangthai` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tl_khuyenmai`
--

INSERT INTO `tl_khuyenmai` (`tl_makm`, `tl_tenkm`, `tl_mota`, `tl_mucgiam`, `tl_giatridon`, `tl_ngaybatdau`, `tl_ngayketthuc`, `tl_trangthai`) VALUES
('KM001', 'Giảm giá hè', 'Giảm 10% cho đơn hàng trên 500k', 10.00, 500000.00, '2025-06-01', '2025-06-30', 'Đang hoạt động'),
('KM002', 'Mừng năm mới', 'Giảm 15% cho mọi đơn hàng', 15.00, 0.00, '2025-01-01', '2025-01-31', 'Đã kết thúc'),
('KM003', 'Khuyến mãi tháng 5', 'Giảm 5% cho đơn hàng trên 300k', 5.00, 300000.00, '2025-05-01', '2025-05-31', 'Đang hoạt động'),
('KM004', 'Giảm giá đặc biệt', 'Giảm 20% cho khách hàng VIP', 20.00, 0.00, '2025-04-01', '2025-04-30', 'Đã kết thúc'),
('KM005', 'Flash sale', 'Giảm 25% cho 100 đơn hàng đầu tiên', 25.00, 0.00, '2025-05-10', '2025-05-15', 'Đang hoạt động'),
('KM01', 'Giảm giá mùa hè', 'Giảm 10% cho đơn hàng từ 100k', 10.00, 100000.00, '2025-05-01', '2025-06-01', 'Đang áp dụng'),
('KM02', 'Khuyến mãi khách hàng mới', 'Giảm 5% đơn đầu tiên', 5.00, 50000.00, '2025-01-01', '2025-12-31', 'Đang áp dụng');

-- --------------------------------------------------------

--
-- Table structure for table `tl_nhacungcap`
--

CREATE TABLE `tl_nhacungcap` (
  `tl_mancc` varchar(10) NOT NULL,
  `tl_tenncc` varchar(255) DEFAULT NULL,
  `tl_diachi` varchar(255) DEFAULT NULL,
  `tl_sdt` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tl_nhacungcap`
--

INSERT INTO `tl_nhacungcap` (`tl_mancc`, `tl_tenncc`, `tl_diachi`, `tl_sdt`) VALUES
('NCC001', 'Công ty TNHH Dược Phẩm A', '10 Đường X, TP.HCM', '0281234567'),
('NCC002', 'Công ty Dược Phẩm B', '20 Đường Y, TP.HCM', '0282345678'),
('NCC003', 'Nhà cung cấp C', '30 Đường Z, TP.HCM', '0283456789'),
('NCC004', 'Nhà cung cấp D', '40 Đường W, TP.HCM', '0284567890'),
('NCC005', 'Nhà cung cấp E', '50 Đường V, TP.HCM', '0285678901'),
('NCC01', 'Công ty Dược Phẩm ABC', 'Hà Nội', '0988123456'),
('NCC02', 'Công ty Dược Phẩm XYZ', 'TP.HCM', '0977654321');

-- --------------------------------------------------------

--
-- Table structure for table `tl_thuoc`
--

CREATE TABLE `tl_thuoc` (
  `tl_mathuoc` varchar(10) NOT NULL,
  `tl_tenthuc` varchar(255) DEFAULT NULL,
  `tl_loai` varchar(100) DEFAULT NULL,
  `tl_congdung` text DEFAULT NULL,
  `tl_giaban` decimal(10,2) DEFAULT NULL,
  `tl_soluongton` int(11) DEFAULT NULL,
  `tl_mancc` varchar(10) DEFAULT NULL,
  `tl_hinhanh` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tl_thuoc`
--

INSERT INTO `tl_thuoc` (`tl_mathuoc`, `tl_tenthuc`, `tl_loai`, `tl_congdung`, `tl_giaban`, `tl_soluongton`, `tl_mancc`, `tl_hinhanh`) VALUES
('T001', 'Paracetamol', 'Thuốc giảm đau', 'Giảm đau, hạ sốt', 5000.00, 100, 'NCC001', 'https://cdn.nhathuoclongchau.com.vn/unsafe/768x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00005713_panadol_extra_do_500mg_180v_sanofi_3541_63d7_large_72b42bbdda.jpg'),
('T002', 'Amoxicillin', 'Thuốc kháng sinh', 'Điều trị nhiễm khuẩn', 12000.00, 50, 'NCC002', 'https://m.media-amazon.com/images/I/81jsoO+rWBL._AC_SL1500_.jpg'),
('T003', 'Vitamin C', 'Thực phẩm chức năng', 'Tăng cường miễn dịch', 15000.00, 200, 'NCC003', 'https://m.media-amazon.com/images/I/71wIJHm3edL.__AC_SX300_SY300_QL70_ML2_.jpg'),
('T004', 'Omeprazole', 'Thuốc dạ dày', 'Giảm tiết acid dạ dày', 20000.00, 75, 'NCC004', 'https://m.media-amazon.com/images/I/610fIk9FtZL._AC_SX679_.jpg'),
('T005', 'Ibuprofen', 'Thuốc giảm đau', 'Giảm đau, chống viêm', 8000.00, 120, 'NCC005', 'https://m.media-amazon.com/images/I/61lT-oMqXzL._AC_SL1500_.jpg'),
('thu', 'thu', 'bm', 'vô dụng', 99999999.99, 11, 'NCC005', 'https://wineandfood.vn/image/catalog/anh-bai-viet/cac-loai-thuc-pham-khac/siro-cay-la-phong/chiec-la-phong.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `tl_user`
--

CREATE TABLE `tl_user` (
  `tl_mauser` varchar(10) NOT NULL,
  `tl_username` varchar(50) DEFAULT NULL,
  `tl_email` varchar(100) DEFAULT NULL,
  `tl_password` varchar(255) DEFAULT NULL,
  `tl_fullname` varchar(100) DEFAULT NULL,
  `tl_role` varchar(50) DEFAULT NULL,
  `tl_phonenumber` varchar(15) DEFAULT NULL,
  `tl_address` text DEFAULT NULL,
  `tl_created_at` datetime DEFAULT NULL,
  `tl_updated_at` datetime DEFAULT NULL,
  `tl_makh` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tl_user`
--

INSERT INTO `tl_user` (`tl_mauser`, `tl_username`, `tl_email`, `tl_password`, `tl_fullname`, `tl_role`, `tl_phonenumber`, `tl_address`, `tl_created_at`, `tl_updated_at`, `tl_makh`) VALUES
('U001', 'nguyenvana', 'a@gmail.com', '$2b$10$SvuNE9/2Vs/Q5vkqpI.iXudMZ3RN9TgLp5KCUAopdGEbm73uM2uDC', 'Nguyễn Văn A', 'customer', '0901123456', 'Hà Nội', '2025-05-01 10:00:00', '2025-05-01 10:00:00', NULL),
('U002', 'tranthib', 'b@gmail.com', '123456', 'Trần Thị B', 'customer', '0902233445', 'Đà Nẵng', '2025-05-02 11:00:00', '2025-05-02 11:00:00', NULL),
('U003', 'adminuser', 'admin@example.com', '$2b$10$SPOVEONsWoHQ86Lv9a48HepArxtE78ZjMsFfTmrXbvL4b1196rpNa', 'Admin', 'admin', '0911222333', 'Văn phòng', '2025-05-01 08:00:00', '2025-05-01 08:00:00', NULL),
('U004', 'thuthuthu', 'tttt@hgamail.com', '$2b$10$ciwt0p1wGqTjkuOGTDMBQud7MASjYVh9.wmnUlJETDFHPyteqEXyK', 'tttt', 'customer', '11111111111', 'mỹ tho', '2025-06-20 01:34:50', '2025-06-20 01:34:50', NULL),
('U005', 'thu123', 'thu@gmail.com', '$2b$10$fbw0wY2aUsygxtpb/9hdBubqcx1Hfy79iqooaKPB6atSfIklAl4Pi', 'Lê Thu', 'customer', '0900111222', 'Hà Nội', '2025-06-20 01:36:52', '2025-06-20 01:36:52', NULL),
('U006', 'linhling', 'thu123456@gmail.com', '$2b$10$E5LV6R/Fqz7CYdTNIYRmAONmstcj0KkJ0Z4VZ0LD0p9zjZM6u.Xtm', 'thuthuhtuhtu', 'customer', '67987654321', 'hà nội', '2025-06-20 05:34:12', '2025-06-23 01:29:15', 'KH006'),
('U007', 'linh', 'linh1@gmail.com', '$2b$10$61V9Nwyzc9YgPe0y402Ytu2bDyzgNRRlTj8N31ziT2btLrr2XmrX.', 'đttlinhn', 'customer', '0900909090', 'ha noi', '2025-06-20 06:53:56', '2025-06-20 06:53:56', NULL),
('U008', 'tl', 'tl@gmail.com', '$2b$10$NRvvUvBjZAMyrK25AWUpCulyiM9WM5d9ED4ygtOkzr9ZoIWXnrIS2', 'tltltl', 'customer', '8888888888', 'hn2', '2025-06-23 02:01:40', '2025-07-04 17:05:00', NULL),
('U009', 'thulinh', 'tthulinh@gmail.com', '$2b$10$nPBUQudyAFaxp1vTpWgSj.Qj1FDkLluHnhHy1uawN.7/ikseAfzce', 'thulinh', 'customer', '12345321', 'ha noi', '2025-07-10 23:41:52', '2025-07-10 23:41:52', NULL),
('U010', 'tltl', 'tltltl@gmail.com', '$2b$10$MCIiMA4.a1i9FlAytjxQVeAZ.Hi6btQKRRPz4.pYTo.pjgw4rbxBq', 'tltltlthulinh', 'customer', '808080808', 'hà nam', '2025-07-11 01:10:05', '2025-07-11 01:10:05', NULL),
('U011', 'tfyghujinkml', 'ttttttttllllllll@gmail.com', '$2b$10$.fqXDC54Lww8/9xsPhpLDujk7WaPs/FX4OEtO6XzuM1lmzm1hWlUW', 'ththththth', 'customer', '34567890', 'hânma', '2025-07-11 07:50:12', '2025-07-11 07:50:12', NULL),
('U012', 'thuthuthulinh', 'thuthuthuthulinh@gmail.com', '$2b$10$Co8XHCO.aOoQEna8rrCc6O2W4qg2MPvB/8sA9S8A1WnKcJ5Q9.6m6', 'thuhtuthtulinh', 'customer', '345679-', 'hanoi', '2025-07-11 08:40:28', '2025-07-11 08:40:28', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `lienhe`
--
ALTER TABLE `lienhe`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tl_admin`
--
ALTER TABLE `tl_admin`
  ADD PRIMARY KEY (`tl_maadmin`);

--
-- Indexes for table `tl_cthoadon`
--
ALTER TABLE `tl_cthoadon`
  ADD PRIMARY KEY (`tl_macthd`),
  ADD KEY `tl_mahd` (`tl_mahd`),
  ADD KEY `tl_mathuoc` (`tl_mathuoc`);

--
-- Indexes for table `tl_giohang`
--
ALTER TABLE `tl_giohang`
  ADD PRIMARY KEY (`tl_magiohang`),
  ADD KEY `tl_makh` (`tl_makh`),
  ADD KEY `tl_mathuoc` (`tl_mathuoc`);

--
-- Indexes for table `tl_hoadon`
--
ALTER TABLE `tl_hoadon`
  ADD PRIMARY KEY (`tl_mahd`),
  ADD KEY `tl_makh` (`tl_makh`),
  ADD KEY `tl_makm` (`tl_makm`);

--
-- Indexes for table `tl_khachhang`
--
ALTER TABLE `tl_khachhang`
  ADD PRIMARY KEY (`tl_makh`);

--
-- Indexes for table `tl_khuyenmai`
--
ALTER TABLE `tl_khuyenmai`
  ADD PRIMARY KEY (`tl_makm`);

--
-- Indexes for table `tl_nhacungcap`
--
ALTER TABLE `tl_nhacungcap`
  ADD PRIMARY KEY (`tl_mancc`);

--
-- Indexes for table `tl_thuoc`
--
ALTER TABLE `tl_thuoc`
  ADD PRIMARY KEY (`tl_mathuoc`),
  ADD KEY `tl_mancc` (`tl_mancc`);

--
-- Indexes for table `tl_user`
--
ALTER TABLE `tl_user`
  ADD PRIMARY KEY (`tl_mauser`),
  ADD UNIQUE KEY `tl_username` (`tl_username`),
  ADD UNIQUE KEY `tl_email` (`tl_email`),
  ADD KEY `tl_makh` (`tl_makh`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `lienhe`
--
ALTER TABLE `lienhe`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tl_cthoadon`
--
ALTER TABLE `tl_cthoadon`
  ADD CONSTRAINT `tl_cthoadon_ibfk_1` FOREIGN KEY (`tl_mahd`) REFERENCES `tl_hoadon` (`tl_mahd`),
  ADD CONSTRAINT `tl_cthoadon_ibfk_2` FOREIGN KEY (`tl_mathuoc`) REFERENCES `tl_thuoc` (`tl_mathuoc`);

--
-- Constraints for table `tl_giohang`
--
ALTER TABLE `tl_giohang`
  ADD CONSTRAINT `tl_giohang_ibfk_1` FOREIGN KEY (`tl_makh`) REFERENCES `tl_khachhang` (`tl_makh`),
  ADD CONSTRAINT `tl_giohang_ibfk_2` FOREIGN KEY (`tl_mathuoc`) REFERENCES `tl_thuoc` (`tl_mathuoc`);

--
-- Constraints for table `tl_hoadon`
--
ALTER TABLE `tl_hoadon`
  ADD CONSTRAINT `tl_hoadon_ibfk_1` FOREIGN KEY (`tl_makh`) REFERENCES `tl_khachhang` (`tl_makh`),
  ADD CONSTRAINT `tl_hoadon_ibfk_2` FOREIGN KEY (`tl_makm`) REFERENCES `tl_khuyenmai` (`tl_makm`);

--
-- Constraints for table `tl_thuoc`
--
ALTER TABLE `tl_thuoc`
  ADD CONSTRAINT `tl_thuoc_ibfk_1` FOREIGN KEY (`tl_mancc`) REFERENCES `tl_nhacungcap` (`tl_mancc`);

--
-- Constraints for table `tl_user`
--
ALTER TABLE `tl_user`
  ADD CONSTRAINT `tl_user_ibfk_1` FOREIGN KEY (`tl_makh`) REFERENCES `tl_khachhang` (`tl_makh`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
