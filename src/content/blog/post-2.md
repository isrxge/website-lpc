---
title: "Tấn công Ransomware ESXiArgs trên máy chủ VMware ESXi toàn cầu"
meta_title: ""
description: "this is meta description"
date: 2022-04-04T05:00:00Z
image: "/images/news/news_2.jpg"
categories: ["Security"]
author: "Đang Lê"
tags: ["VMware ESXi", "CVE-2021-21974", "Ransomware"]
draft: false
---

Quản trị viên, nhà cung cấp dịch vụ lưu trữ và French Computer Emergency Response Team - nhóm ứng phó sự cố an ninh máy tính của chính phủ quốc gia Pháp (CERT-FR) cảnh báo rằng những kẻ tấn công chủ động nhắm mục tiêu vào các máy chủ VMware ESXi chưa được vá trước lỗ hổng thực thi mã từ xa đã tồn tại hai năm để triển khai một phần mềm tống tiền ESXiArgs mới.

Được theo dõi là CVE-2021-21974 , lỗ hổng bảo mật do sự cố tràn bộ nhớ trong dịch vụ OpenSLP có thể bị khai thác bởi các tác nhân đe dọa chưa được xác thực trong các cuộc tấn công có độ phức tạp thấp.

“Theo các cuộc điều tra hiện tại, các chiến dịch tấn công này dường như đang khai thác lỗ hổng CVE-2021-21974, lỗ hổng này đã có bản vá từ ngày 23 tháng 2 năm 2021,” CERT-FR cho biết.

"Các hệ thống hiện đang được nhắm mục tiêu sẽ là các trình ảo hóa ESXi trong phiên bản 6.x và trước 6.7."
Để chặn các cuộc tấn công sắp tới, quản trị viên phải vô hiệu hóa dịch vụ Giao thức vị trí dịch vụ (SLP) dễ bị tấn công trên các trình ảo hóa ESXi chưa được cập nhật.

CERT-FR đặc biệt khuyên bạn nên áp dụng bản vá càng sớm càng tốt nhưng bổ sung thêm rằng các hệ thống chưa được vá cũng nên được quét để tìm kiếm các dấu hiệu xâm phạm.
CVE-2021-21974 ảnh hưởng đến các hệ thống sau:
Phiên bản ESXi 7.x trước ESXi70U1c-17325551
Phiên bản ESXi 6.7.x trước ESXi670-202102401-SG
Phiên bản ESXi 6.5.x trước ESXi650-202102101-SG

Nhà cung cấp dịch vụ đám mây của Pháp OVHcloud lần đầu tiên công bố một báo cáo liên kết làn sóng tấn công khổng lồ này nhắm vào các máy chủ VMware ESXi với hoạt động của mã độc tống tiền Nevada. 

"Theo các chuyên gia từ Ecosystem cũng như Authorities, chúng có thể liên quan đến mã độc tống tiền Nevada và đang sử dụng CVE-2021-21974 làm vector xâm phạm. Cuộc điều tra vẫn đang được tiến hành để xác nhận những giả định đó", CISO Julien Levrard của OVHcloud cho biết .
"Cuộc tấn công chủ yếu nhắm vào các máy chủ ESXi trong phiên bản trước 7.0 U3i, dường như thông qua cổng OpenSLP (427)."

Tuy nhiên, công ty đã quay lại ngay sau khi câu chuyện của chúng tôi được phát hành, nói rằng họ cho rằng đó là do hoạt động sai của phần mềm tống tiền.
Vào cuối ngày đầu tiên của cuộc tấn công, khoảng 120 máy chủ ESXi đã bị mã hóa.
Tuy nhiên, con số đã nhanh chóng tăng lên vào cuối tuần, với 2.400 thiết bị VMware ESXi trên toàn thế giới hiện được phát hiện là bị xâm nhập trong chiến dịch ransomware, theo tìm kiếm của Censys .
Trong một lời khuyên được công bố vào ngày 6 tháng 2, VMware đã xác nhận rằng cuộc tấn công này khai thác các lỗ hổng ESXi cũ hơn chứ không phải lỗ hổng zero-day.
Công ty khuyên quản trị viên nên cài đặt các bản cập nhật mới nhất cho máy chủ ESXi và tắt dịch vụ OpenSLP, dịch vụ này đã bị tắt theo mặc định kể từ năm 2021.
Một số quản trị viên bị xâm phạm trong cuộc tấn công này cho biết họ không kích hoạt SLP [1, 2], làm tăng thêm sự nhầm lẫn về cách máy chủ bị xâm phạm.
Nhìn chung, chiến dịch ransomware đã không đạt được nhiều thành công khi xét đến số lượng lớn các thiết bị được mã hóa, với dịch vụ theo dõi thanh toán tiền chuộc  Ransomwhere chỉ báo cáo bốn khoản thanh toán tiền chuộc với tổng số tiền là 88.000 đô la.
Việc thiếu thanh toán tiền chuộc có thể là do  hướng dẫn khôi phục VMware ESXi  do nhà nghiên cứu bảo mật Enes Sonmez tạo ra, cho phép nhiều quản trị viên xây dựng lại máy ảo và khôi phục dữ liệu của họ miễn phí.
Nguồn: Bleepingcomputer.com

