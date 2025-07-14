const tuVanData = [
  {
    id: 1,
    title: "Phòng tránh cảm cúm mùa lạnh",
    shortDesc: "Giữ ấm cơ thể và bổ sung dưỡng chất để tăng sức đề kháng.",
    detail: `Mùa lạnh là thời điểm virus cúm phát triển mạnh. Để phòng bệnh, bạn nên giữ ấm toàn thân, đặc biệt là vùng cổ, mũi và bàn chân. Hạn chế tiếp xúc với người bị bệnh, rửa tay thường xuyên bằng xà phòng, đeo khẩu trang khi ra ngoài. 
Uống đủ nước ấm và bổ sung vitamin C từ trái cây như cam, quýt, bưởi sẽ giúp tăng cường hệ miễn dịch. Ngoài ra, chế độ ăn đầy đủ dinh dưỡng, nghỉ ngơi hợp lý và vận động nhẹ nhàng hàng ngày sẽ giúp cơ thể khỏe mạnh hơn.`,
    image: "https://cdn.bcare.vn/upload/2019/04/17/20190416_155443_276368_cum-e1536739128744.max-800x800.jpg"
  },
  {
    id: 2,
    title: "Phòng tránh sốt xuất huyết mùa mưa",
    shortDesc: "Biện pháp tiêu diệt muỗi và phòng bệnh hiệu quả.",
    detail: `Sốt xuất huyết là bệnh truyền nhiễm nguy hiểm do muỗi vằn gây ra, thường xuất hiện nhiều vào mùa mưa. Để phòng bệnh, bạn cần loại bỏ nơi muỗi sinh sản như nước đọng trong chậu, bình hoa, vỏ lon. 
Ngủ màn kể cả ban ngày, sử dụng kem chống muỗi hoặc xịt muỗi vào các góc tối trong nhà. Khi có dấu hiệu sốt cao, đau đầu, buồn nôn, nổi ban da thì cần đến cơ sở y tế để được chẩn đoán và điều trị kịp thời.`,
    image: "https://sp.yimg.com/ib/th/id/OIP.LZz3gAz0A56fHaoYvPLatQHaEK?pid=Api&w=148&h=148&c=7&dpr=2&rs=1"
  },
  {
    id: 3,
    title: "Phòng bệnh tay chân miệng cho trẻ",
    shortDesc: "Hướng dẫn chăm sóc, vệ sinh và phòng tránh lây nhiễm.",
    detail: `Tay chân miệng là bệnh thường gặp ở trẻ nhỏ, lây lan qua tiếp xúc trực tiếp hoặc qua đồ dùng, bề mặt bị nhiễm. Phụ huynh cần rửa tay cho trẻ thường xuyên bằng xà phòng, khử khuẩn đồ chơi, bàn ghế, sàn nhà.
Nếu trẻ có biểu hiện sốt nhẹ, mệt mỏi, nổi mụn nước ở miệng, lòng bàn tay, lòng bàn chân thì nên đưa đến cơ sở y tế. Không cho trẻ đến lớp khi đang mắc bệnh để hạn chế lây lan.`,
    image: "https://up.yimg.com/ib/th/id/OIP.uch14MXQvAdsaMvd0WIA6gHaD4?pid=Api&rs=1&c=1&qlt=95&w=224&h=117"
  },
  {
    id: 4,
    title: "Chăm sóc sức khỏe mùa nắng nóng",
    shortDesc: "Giữ cơ thể mát mẻ, tránh sốc nhiệt và mất nước.",
    detail: `Trong những ngày nắng gắt, nhiệt độ cao dễ khiến cơ thể bị mất nước, chóng mặt, thậm chí sốc nhiệt. Hãy hạn chế ra ngoài vào khung giờ từ 11h đến 15h, mặc áo sáng màu, đội nón và đeo kính râm khi đi nắng.
Uống nước thường xuyên, ngay cả khi không khát, bổ sung điện giải khi vận động mạnh hoặc ra nhiều mồ hôi. Tránh uống nước đá lạnh đột ngột, ăn nhiều rau xanh và trái cây giàu nước như dưa hấu, cam, bưởi.`,
    image: "https://vienhuyethoc.vn/wp-content/uploads/2023/05/N%E1%BA%AFng-n%C3%B3ng-k%E1%BB%B7-l%E1%BB%A5cc-.jpg"
  },
  {
    id: 5,
    title: "Phòng ngừa viêm đường hô hấp",
    shortDesc: "Cách giữ gìn hệ hô hấp khỏe mạnh khi giao mùa.",
    detail: `Khi thời tiết thay đổi đột ngột, hệ hô hấp dễ bị ảnh hưởng, đặc biệt là ở người lớn tuổi và trẻ em. Hãy giữ ấm cổ và ngực khi ra đường, hạn chế tiếp xúc với không khí lạnh hoặc bụi bẩn. 
Tránh dùng điều hòa ở nhiệt độ quá thấp, duy trì độ ẩm phòng ngủ, và dùng nước muối sinh lý để súc miệng, rửa mũi hằng ngày. Tăng cường thực phẩm chống viêm như gừng, nghệ, tỏi trong chế độ ăn.`,
    image: "https://up.yimg.com/ib/th/id/OIP.KJZTy2Y6fbWqrsUEZ3m9CwHaFj?pid=Api&rs=1&c=1&qlt=95&w=155&h=116"
  },
  {
    id: 6,
    title: "Bảo vệ da khi thời tiết hanh khô",
    shortDesc: "Giữ ẩm đúng cách để có làn da mềm mại, khỏe mạnh.",
    detail: `Mùa hanh khô khiến làn da mất nước, dễ bong tróc và nứt nẻ. Bạn nên tắm bằng nước ấm (không quá nóng), dùng sữa tắm dịu nhẹ và bôi kem dưỡng ẩm sau khi lau khô người. 
Uống đủ nước, tránh cà phê và rượu bia vì có thể làm da mất nước nhiều hơn. Nên chọn sản phẩm chăm sóc da chứa thành phần tự nhiên như nha đam, yến mạch, bơ hạt mỡ để giúp da giữ nước hiệu quả.`,
    image: "https://up.yimg.com/ib/th/id/OIP.AmZYV4bSPJYXSziHDs3RpwHaFF?pid=Api&rs=1&c=1&qlt=95&w=151&h=103"
  }
];

export default tuVanData;
