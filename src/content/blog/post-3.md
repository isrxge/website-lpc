---
title: "Veeam sửa lỗi cho phép tin tặc xâm phạm cơ sở hạ tầng sao lưu"
meta_title: ""
description: "this is meta description"
date: 2022-04-04T05:00:00Z
image: "/images/news/news_3.jpg"
categories: ["Security"]
author: "Bảo Võ"
tags: ["Veeam", "CVE-2023-27532", "Lỗ hổng bảo mật"]
draft: false
---

Veeam kêu gọi khách hàng vá lỗ hổng bảo mật Dịch vụ sao lưu nghiêm trọng cao ảnh hưởng đến phần mềm Sao lưu & Sao chép.
Lỗ hổng (được theo dõi là CVE-2023-27532) đã được báo cáo vào giữa tháng 2 bởi một nhà nghiên cứu bảo mật có tên Shanigen và nó ảnh hưởng đến tất cả các phiên bản Veeam Backup & Replication (VBR). 
Những kẻ tấn công không được xác thực có thể khai thác nó để truy cập vào các máy chủ cơ sở hạ tầng dự phòng sau khi có được thông tin xác thực được mã hóa được lưu trữ trong cơ sở dữ liệu cấu hình VeeamVBR.
Theo  lời khuyên của Veeam , nguyên nhân sâu xa đằng sau lỗ hổng này là Veeam.Backup.Service.exe (chạy trên TCP 9401 theo mặc định) cho phép người dùng không được xác thực yêu cầu thông tin xác thực được mã hóa.
"Chúng tôi đã phát triển các bản vá cho V11 và V12 để giảm thiểu lỗ hổng này và chúng tôi khuyên bạn nên cập nhật cài đặt của mình ngay lập tức", công ty cho biết trong một email gửi cho khách hàng hôm thứ Ba.
"Nếu bạn không phải là người quản lý hiện tại của môi trường Veeam của mình, vui lòng chuyển tiếp email này đến người thích hợp."
Công ty đã phát hành các bản cập nhật bảo mật giải quyết lỗ hổng này cho VBR  V11  và  V12 , với những khách hàng sử dụng các bản phát hành cũ hơn nên cập nhật lên một trong hai sản phẩm được hỗ trợ này trước.
Cách giải quyết cũng có sẵn Veeam cũng cung cấp một bản sửa lỗi tạm thời cho những khách hàng không thể triển khai ngay các bản vá CVE-2023-27532 của tuần này.
Để chặn vectơ tấn công và bảo vệ các máy chủ dễ bị tổn thương trước các nỗ lực khai thác tiềm năng, bạn cũng có thể chặn các kết nối bên ngoài tới cổng TCP 9401 bằng tường lửa máy chủ dự phòng.
Tuy nhiên, điều quan trọng cần lưu ý là chỉ nên sử dụng giải pháp thay thế này trong môi trường Veeam không phân phối vì nó cũng sẽ ảnh hưởng đến kết nối của máy chủ gắn kết với máy chủ VBR.
Veeam cảnh báo: “Khi một lỗ hổng được tiết lộ, những kẻ tấn công sẽ đảo ngược các bản vá để hiểu lỗ hổng và khai thác một lỗ hổng trên một phiên bản phần mềm chưa được vá”.
"Điều này nhấn mạnh tầm quan trọng của việc đảm bảo tất cả các hệ thống của bạn sử dụng phiên bản mới nhất của tất cả phần mềm đã triển khai và các bản vá được cài đặt kịp thời."
Veeam  cho biết  phần mềm sao lưu, khắc phục sự cố và bảo vệ dữ liệu của họ đang được sử dụng bởi hơn 450.000 khách hàng trên toàn thế giới, bao gồm 82% công ty trong danh sách Fortune 500 và 72% trong số các công ty trong Global 2.000.
Nguồn: bleepingcomputer.com
