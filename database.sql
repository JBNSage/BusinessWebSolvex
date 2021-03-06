USE [bwdatabase]
GO
ALTER TABLE [dbo].[user] DROP CONSTRAINT [FK_user_country]
GO
ALTER TABLE [dbo].[product] DROP CONSTRAINT [FK_product_provider]
GO
ALTER TABLE [dbo].[product] DROP CONSTRAINT [FK_product_category]
GO
ALTER TABLE [dbo].[order_details] DROP CONSTRAINT [FK_order_details_product]
GO
ALTER TABLE [dbo].[order_details] DROP CONSTRAINT [FK_order_details_order]
GO
ALTER TABLE [dbo].[order] DROP CONSTRAINT [FK_order_user]
GO
ALTER TABLE [dbo].[credit_card] DROP CONSTRAINT [FK_credit_card_user]
GO
ALTER TABLE [dbo].[city] DROP CONSTRAINT [FK_city_country]
GO
ALTER TABLE [dbo].[address] DROP CONSTRAINT [FK_user_address]
GO
ALTER TABLE [dbo].[address] DROP CONSTRAINT [FK_address_city]
GO
ALTER TABLE [dbo].[user] DROP CONSTRAINT [DF__tmp_ms_xx__updat__1DB06A4F]
GO
ALTER TABLE [dbo].[user] DROP CONSTRAINT [DF__tmp_ms_xx__creat__1CBC4616]
GO
ALTER TABLE [dbo].[product] DROP CONSTRAINT [DF__product__updated__0C85DE4D]
GO
ALTER TABLE [dbo].[product] DROP CONSTRAINT [DF__product__created__0B91BA14]
GO
ALTER TABLE [dbo].[product] DROP CONSTRAINT [DF__product__rating__0A9D95DB]
GO
ALTER TABLE [dbo].[order] DROP CONSTRAINT [DF__order__updated_a__09A971A2]
GO
ALTER TABLE [dbo].[order] DROP CONSTRAINT [DF__order__created_a__08B54D69]
GO
ALTER TABLE [dbo].[order] DROP CONSTRAINT [DF__order__estimated__07C12930]
GO
/****** Object:  Table [dbo].[user]    Script Date: 5/5/2022 9:06:34 AM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[user]') AND type in (N'U'))
DROP TABLE [dbo].[user]
GO
/****** Object:  Table [dbo].[provider]    Script Date: 5/5/2022 9:06:34 AM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[provider]') AND type in (N'U'))
DROP TABLE [dbo].[provider]
GO
/****** Object:  Table [dbo].[product]    Script Date: 5/5/2022 9:06:34 AM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[product]') AND type in (N'U'))
DROP TABLE [dbo].[product]
GO
/****** Object:  Table [dbo].[order_details]    Script Date: 5/5/2022 9:06:34 AM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[order_details]') AND type in (N'U'))
DROP TABLE [dbo].[order_details]
GO
/****** Object:  Table [dbo].[order]    Script Date: 5/5/2022 9:06:34 AM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[order]') AND type in (N'U'))
DROP TABLE [dbo].[order]
GO
/****** Object:  Table [dbo].[credit_card]    Script Date: 5/5/2022 9:06:34 AM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[credit_card]') AND type in (N'U'))
DROP TABLE [dbo].[credit_card]
GO
/****** Object:  Table [dbo].[country]    Script Date: 5/5/2022 9:06:34 AM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[country]') AND type in (N'U'))
DROP TABLE [dbo].[country]
GO
/****** Object:  Table [dbo].[city]    Script Date: 5/5/2022 9:06:34 AM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[city]') AND type in (N'U'))
DROP TABLE [dbo].[city]
GO
/****** Object:  Table [dbo].[category]    Script Date: 5/5/2022 9:06:34 AM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[category]') AND type in (N'U'))
DROP TABLE [dbo].[category]
GO
/****** Object:  Table [dbo].[address]    Script Date: 5/5/2022 9:06:34 AM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[address]') AND type in (N'U'))
DROP TABLE [dbo].[address]
GO
USE [master]
GO
/****** Object:  Database [bwdatabase]    Script Date: 5/5/2022 9:06:34 AM ******/
DROP DATABASE [bwdatabase]
GO
/****** Object:  Database [bwdatabase]    Script Date: 5/5/2022 9:06:34 AM ******/
CREATE DATABASE [bwdatabase]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'bwdatabase', FILENAME = N'C:\Users\Juan Luis\bwdatabase.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'bwdatabase_log', FILENAME = N'C:\Users\Juan Luis\bwdatabase_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [bwdatabase] SET COMPATIBILITY_LEVEL = 130
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [bwdatabase].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [bwdatabase] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [bwdatabase] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [bwdatabase] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [bwdatabase] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [bwdatabase] SET ARITHABORT OFF 
GO
ALTER DATABASE [bwdatabase] SET AUTO_CLOSE ON 
GO
ALTER DATABASE [bwdatabase] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [bwdatabase] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [bwdatabase] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [bwdatabase] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [bwdatabase] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [bwdatabase] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [bwdatabase] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [bwdatabase] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [bwdatabase] SET  ENABLE_BROKER 
GO
ALTER DATABASE [bwdatabase] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [bwdatabase] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [bwdatabase] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [bwdatabase] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [bwdatabase] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [bwdatabase] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [bwdatabase] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [bwdatabase] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [bwdatabase] SET  MULTI_USER 
GO
ALTER DATABASE [bwdatabase] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [bwdatabase] SET DB_CHAINING OFF 
GO
ALTER DATABASE [bwdatabase] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [bwdatabase] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [bwdatabase] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [bwdatabase] SET QUERY_STORE = OFF
GO
USE [bwdatabase]
GO
ALTER DATABASE SCOPED CONFIGURATION SET LEGACY_CARDINALITY_ESTIMATION = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION SET MAXDOP = 0;
GO
ALTER DATABASE SCOPED CONFIGURATION SET PARAMETER_SNIFFING = ON;
GO
ALTER DATABASE SCOPED CONFIGURATION SET QUERY_OPTIMIZER_HOTFIXES = OFF;
GO
USE [bwdatabase]
GO
/****** Object:  Table [dbo].[address]    Script Date: 5/5/2022 9:06:34 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[address](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[userId] [int] NOT NULL,
	[street] [varchar](50) NOT NULL,
	[building] [varchar](50) NOT NULL,
	[postal_code] [varchar](10) NOT NULL,
	[cityId] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[category]    Script Date: 5/5/2022 9:06:34 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[category](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[name] [varchar](50) NOT NULL,
	[picture] [varchar](1000) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[city]    Script Date: 5/5/2022 9:06:34 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[city](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[name] [varchar](50) NOT NULL,
	[countryId] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[country]    Script Date: 5/5/2022 9:06:34 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[country](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[name] [varchar](50) NOT NULL,
	[flag] [varchar](200) NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[credit_card]    Script Date: 5/5/2022 9:06:34 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[credit_card](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[name] [varchar](50) NOT NULL,
	[userId] [int] NOT NULL,
	[number] [varchar](20) NOT NULL,
	[cvv] [varchar](10) NOT NULL,
	[expiration_date] [date] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[order]    Script Date: 5/5/2022 9:06:34 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[order](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[userId] [int] NOT NULL,
	[state] [varchar](50) NOT NULL,
	[card] [varchar](20) NOT NULL,
	[estimated_arrival] [datetime] NOT NULL,
	[arrived_at] [datetime] NULL,
	[canceled_at] [datetime] NULL,
	[total] [int] NOT NULL,
	[shipping_cost] [int] NOT NULL,
	[created_at] [datetime] NOT NULL,
	[updated_at] [datetime] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[order_details]    Script Date: 5/5/2022 9:06:34 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[order_details](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[orderId] [int] NOT NULL,
	[productId] [int] NOT NULL,
	[quantity] [int] NOT NULL,
	[price] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[product]    Script Date: 5/5/2022 9:06:34 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[product](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[name] [varchar](50) NOT NULL,
	[price] [int] NOT NULL,
	[quantity] [int] NOT NULL,
	[providerId] [int] NOT NULL,
	[categoryId] [int] NOT NULL,
	[rating] [tinyint] NOT NULL,
	[picture] [varchar](200) NULL,
	[created_at] [datetime] NOT NULL,
	[updated_at] [datetime] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[provider]    Script Date: 5/5/2022 9:06:34 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[provider](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[name] [varchar](50) NOT NULL,
	[phone] [varchar](15) NOT NULL,
	[email] [varchar](50) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[user]    Script Date: 5/5/2022 9:06:34 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[user](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[email] [varchar](50) NOT NULL,
	[first_name] [varchar](50) NOT NULL,
	[last_name] [varchar](50) NOT NULL,
	[password] [varchar](50) NOT NULL,
	[phone] [varchar](15) NULL,
	[countryId] [int] NULL,
	[created_at] [datetime] NOT NULL,
	[updated_at] [datetime] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[address] ON 

INSERT [dbo].[address] ([Id], [userId], [street], [building], [postal_code], [cityId]) VALUES (2, 1, N'Villa mella, crossing 4', N'23, el dorado', N'4431', 6)
INSERT [dbo].[address] ([Id], [userId], [street], [building], [postal_code], [cityId]) VALUES (10, 2, N'1234', N'1234', N'12345', 6)
INSERT [dbo].[address] ([Id], [userId], [street], [building], [postal_code], [cityId]) VALUES (12, 2, N'1234', N'1234', N'1324', 4)
SET IDENTITY_INSERT [dbo].[address] OFF
GO
SET IDENTITY_INSERT [dbo].[category] ON 

INSERT [dbo].[category] ([Id], [name], [picture]) VALUES (1, N'electronics', N'https://s3-alpha-sig.figma.com/img/530f/7e16/05ec8831229db4c181b79227cb934d13?Expires=1652659200&Signature=KOqv3OiR9k14C~knqWQ1~FwheH6OwBYrrnnctIkhXdg6yiA1cWG7KfjYXZu1zMVcY7FBhrE1kZv-s4-16hYVe8fTfvvTl-X6yXub7tSuQCh-pERQbeIfAoE7kNsZqY6nBf~3l4syooUDrg3ly9xT2P5gb-gdYinxryRwzGOpNMse-qwSfXYNS4apchuUe8Y8Z2JDs5OGfql2himK3A1WKv5I0sbYszpcak4TuT~X-QcQaCWJ-WY8c1xMKgOdIm2FPbAwkkiHAmPxWCZJzZdZJS01e2aq48zSfceSvcyJvfVYENVY4JOhoCpzIczB9JgvkT9x1vHmk--SaSbQkNg-iQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA')
INSERT [dbo].[category] ([Id], [name], [picture]) VALUES (2, N'footwear', N'https://s3-alpha-sig.figma.com/img/b7e5/5f8b/1e759fe105f5944d9d774ebf79876db6?Expires=1652659200&Signature=YfoKpE2VOG0Ot54UWmDzON3beqjfPOeKFPoe4nAi1Y9c9DoVPo4uBNQRqeV0IXZP0QtMal83TJLpjCqYF4zGAgcLZ7p1pg2TRtViXRIsSxuKuwkc7IThZEQW7oeyy06vYKeE8yIqoXEDrpTNxuqRrxh0NHSVzJZrSt1PQpE8xt76pUoH5P-WC5gdP0XeTTSa7DCAeJsId7nZWG9t5~RnKKmakoFKENjEX0gUU5iNWnR4PHoBZOCGduShUGfA-g6aNTGUK1sWD-t15dhjkg5nNoT0niEE3mKa6zbuqrMIZhk1URBLsNHu0~VO8CItMkYaYr805M7nY3tTTAu-ae8s2A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA')
INSERT [dbo].[category] ([Id], [name], [picture]) VALUES (3, N'games', N'https://s3-alpha-sig.figma.com/img/843f/3e7c/a7edd91d3af41ec2d3833247ce8604c2?Expires=1652659200&Signature=e4YrjFbQ4GmV5hBJNizDv7CCl8~cL5Epp2MxPCvmqWzTigS43l57ETqhEzLoOPdQ7SyJMVU9YUey8Y93np7zEGlJjFifJN5bq98X~xUls0VzfdVicCdZ6UGCvUteWnUDCW32wczLx8VYoL5NusCQMS5fUZjrrVZglDC4BY5fKVsSdS0V9sKk7Q7hDIQa2SCk6wXrw1DB9RDP7cWyjJ8nZUkjHih375GJarsbKB1~TVcYx9zNLdtg5mu7XcElZL2bP6mVfocttB78keqrTJ9O~a-xruGYBEU7XQvUN7~XcZovFAbC-Y3~yw4BNdzhuS064l29wF8rdldVDxSzkULFgA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA')
SET IDENTITY_INSERT [dbo].[category] OFF
GO
SET IDENTITY_INSERT [dbo].[city] ON 

INSERT [dbo].[city] ([Id], [name], [countryId]) VALUES (4, N'Santo Domingo', 1)
INSERT [dbo].[city] ([Id], [name], [countryId]) VALUES (6, N'Boston', 2)
SET IDENTITY_INSERT [dbo].[city] OFF
GO
SET IDENTITY_INSERT [dbo].[country] ON 

INSERT [dbo].[country] ([Id], [name], [flag]) VALUES (1, N'Reública Dominicana', NULL)
INSERT [dbo].[country] ([Id], [name], [flag]) VALUES (2, N'Estados Unidos', N'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/300px-Flag_of_the_United_States.svg.png')
SET IDENTITY_INSERT [dbo].[country] OFF
GO
SET IDENTITY_INSERT [dbo].[credit_card] ON 

INSERT [dbo].[credit_card] ([Id], [name], [userId], [number], [cvv], [expiration_date]) VALUES (3, N'julio', 2, N'123413243444123', N'123', CAST(N'2022-05-21' AS Date))
INSERT [dbo].[credit_card] ([Id], [name], [userId], [number], [cvv], [expiration_date]) VALUES (5, N'qwer', 2, N'123123123333312', N'123', CAST(N'2022-05-14' AS Date))
INSERT [dbo].[credit_card] ([Id], [name], [userId], [number], [cvv], [expiration_date]) VALUES (6, N'1234', 1, N'1234123412344123', N'123', CAST(N'2022-05-13' AS Date))
SET IDENTITY_INSERT [dbo].[credit_card] OFF
GO
SET IDENTITY_INSERT [dbo].[order] ON 

INSERT [dbo].[order] ([Id], [userId], [state], [card], [estimated_arrival], [arrived_at], [canceled_at], [total], [shipping_cost], [created_at], [updated_at]) VALUES (59, 1, N'shipping', N'4123', CAST(N'2022-05-05T12:49:49.520' AS DateTime), NULL, NULL, 28420, 100, CAST(N'2022-05-05T08:49:49.593' AS DateTime), CAST(N'2022-05-05T08:49:49.593' AS DateTime))
SET IDENTITY_INSERT [dbo].[order] OFF
GO
SET IDENTITY_INSERT [dbo].[order_details] ON 

INSERT [dbo].[order_details] ([Id], [orderId], [productId], [quantity], [price]) VALUES (50, 59, 1, 8, 3000)
SET IDENTITY_INSERT [dbo].[order_details] OFF
GO
SET IDENTITY_INSERT [dbo].[product] ON 

INSERT [dbo].[product] ([Id], [name], [price], [quantity], [providerId], [categoryId], [rating], [picture], [created_at], [updated_at]) VALUES (1, N'XBOX ONE', 3000, 90, 1, 3, 4, N'https://res.cloudinary.com/mtree/f_auto,dpr_auto,q_auto/Gillette-MX/6zCTWRPaHWYCet3GvB9287/aead43fe54f1d460692bd74bae97ac86/Mask_Group_16_2x.jpg', CAST(N'2022-05-04T08:35:49.837' AS DateTime), CAST(N'2022-05-04T08:35:49.837' AS DateTime))
INSERT [dbo].[product] ([Id], [name], [price], [quantity], [providerId], [categoryId], [rating], [picture], [created_at], [updated_at]) VALUES (2, N'MSI LAPTOP', 5000, 7, 1, 1, 4, N'https://res.cloudinary.com/mtree/f_auto,dpr_auto,q_auto/Gillette-MX/6zCTWRPaHWYCet3GvB9287/aead43fe54f1d460692bd74bae97ac86/Mask_Group_16_2x.jpg', CAST(N'2022-05-04T08:38:34.877' AS DateTime), CAST(N'2022-05-04T08:38:34.877' AS DateTime))
INSERT [dbo].[product] ([Id], [name], [price], [quantity], [providerId], [categoryId], [rating], [picture], [created_at], [updated_at]) VALUES (3, N'JORDAN SNEAKERS', 5000, 0, 1, 2, 4, N'https://res.cloudinary.com/mtree/f_auto,dpr_auto,q_auto/Gillette-MX/6zCTWRPaHWYCet3GvB9287/aead43fe54f1d460692bd74bae97ac86/Mask_Group_16_2x.jpg', CAST(N'2022-05-04T08:38:54.310' AS DateTime), CAST(N'2022-05-04T08:38:54.310' AS DateTime))
SET IDENTITY_INSERT [dbo].[product] OFF
GO
SET IDENTITY_INSERT [dbo].[provider] ON 

INSERT [dbo].[provider] ([Id], [name], [phone], [email]) VALUES (1, N'Sony.inc', N'8097890987', N'sony@gmail.com')
SET IDENTITY_INSERT [dbo].[provider] OFF
GO
SET IDENTITY_INSERT [dbo].[user] ON 

INSERT [dbo].[user] ([Id], [email], [first_name], [last_name], [password], [phone], [countryId], [created_at], [updated_at]) VALUES (1, N'jlbello24@gmail.com', N'Juan Luis', N'Bello Polanco', N'123', N'8297813572', NULL, CAST(N'2022-05-04T08:29:39.263' AS DateTime), CAST(N'2022-05-04T08:29:39.263' AS DateTime))
INSERT [dbo].[user] ([Id], [email], [first_name], [last_name], [password], [phone], [countryId], [created_at], [updated_at]) VALUES (2, N'julio@gmail.com', N'julia', N'carlos', N'1234', NULL, NULL, CAST(N'2022-05-04T10:55:36.317' AS DateTime), CAST(N'2022-05-04T10:55:36.317' AS DateTime))
INSERT [dbo].[user] ([Id], [email], [first_name], [last_name], [password], [phone], [countryId], [created_at], [updated_at]) VALUES (3, N'manuel@hotmail.com', N'manuel', N'salo', N'123', NULL, NULL, CAST(N'2022-05-05T03:02:57.760' AS DateTime), CAST(N'2022-05-05T03:02:57.760' AS DateTime))
SET IDENTITY_INSERT [dbo].[user] OFF
GO
ALTER TABLE [dbo].[order] ADD  DEFAULT (getdate()) FOR [estimated_arrival]
GO
ALTER TABLE [dbo].[order] ADD  DEFAULT (getdate()) FOR [created_at]
GO
ALTER TABLE [dbo].[order] ADD  DEFAULT (getdate()) FOR [updated_at]
GO
ALTER TABLE [dbo].[product] ADD  DEFAULT ((0)) FOR [rating]
GO
ALTER TABLE [dbo].[product] ADD  DEFAULT (getdate()) FOR [created_at]
GO
ALTER TABLE [dbo].[product] ADD  DEFAULT (getdate()) FOR [updated_at]
GO
ALTER TABLE [dbo].[user] ADD  DEFAULT (getdate()) FOR [created_at]
GO
ALTER TABLE [dbo].[user] ADD  DEFAULT (getdate()) FOR [updated_at]
GO
ALTER TABLE [dbo].[address]  WITH CHECK ADD  CONSTRAINT [FK_address_city] FOREIGN KEY([cityId])
REFERENCES [dbo].[city] ([Id])
GO
ALTER TABLE [dbo].[address] CHECK CONSTRAINT [FK_address_city]
GO
ALTER TABLE [dbo].[address]  WITH CHECK ADD  CONSTRAINT [FK_user_address] FOREIGN KEY([userId])
REFERENCES [dbo].[user] ([Id])
GO
ALTER TABLE [dbo].[address] CHECK CONSTRAINT [FK_user_address]
GO
ALTER TABLE [dbo].[city]  WITH CHECK ADD  CONSTRAINT [FK_city_country] FOREIGN KEY([countryId])
REFERENCES [dbo].[country] ([Id])
GO
ALTER TABLE [dbo].[city] CHECK CONSTRAINT [FK_city_country]
GO
ALTER TABLE [dbo].[credit_card]  WITH CHECK ADD  CONSTRAINT [FK_credit_card_user] FOREIGN KEY([userId])
REFERENCES [dbo].[user] ([Id])
GO
ALTER TABLE [dbo].[credit_card] CHECK CONSTRAINT [FK_credit_card_user]
GO
ALTER TABLE [dbo].[order]  WITH CHECK ADD  CONSTRAINT [FK_order_user] FOREIGN KEY([userId])
REFERENCES [dbo].[user] ([Id])
GO
ALTER TABLE [dbo].[order] CHECK CONSTRAINT [FK_order_user]
GO
ALTER TABLE [dbo].[order_details]  WITH CHECK ADD  CONSTRAINT [FK_order_details_order] FOREIGN KEY([orderId])
REFERENCES [dbo].[order] ([Id])
GO
ALTER TABLE [dbo].[order_details] CHECK CONSTRAINT [FK_order_details_order]
GO
ALTER TABLE [dbo].[order_details]  WITH CHECK ADD  CONSTRAINT [FK_order_details_product] FOREIGN KEY([productId])
REFERENCES [dbo].[product] ([Id])
GO
ALTER TABLE [dbo].[order_details] CHECK CONSTRAINT [FK_order_details_product]
GO
ALTER TABLE [dbo].[product]  WITH CHECK ADD  CONSTRAINT [FK_product_category] FOREIGN KEY([categoryId])
REFERENCES [dbo].[category] ([Id])
GO
ALTER TABLE [dbo].[product] CHECK CONSTRAINT [FK_product_category]
GO
ALTER TABLE [dbo].[product]  WITH CHECK ADD  CONSTRAINT [FK_product_provider] FOREIGN KEY([providerId])
REFERENCES [dbo].[provider] ([Id])
GO
ALTER TABLE [dbo].[product] CHECK CONSTRAINT [FK_product_provider]
GO
ALTER TABLE [dbo].[user]  WITH CHECK ADD  CONSTRAINT [FK_user_country] FOREIGN KEY([countryId])
REFERENCES [dbo].[country] ([Id])
GO
ALTER TABLE [dbo].[user] CHECK CONSTRAINT [FK_user_country]
GO
USE [master]
GO
ALTER DATABASE [bwdatabase] SET  READ_WRITE 
GO
