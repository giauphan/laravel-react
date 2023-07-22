<?php

namespace Database\Seeders;

use App\Models\BlogPost;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class Blog extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        BlogPost::insert([
            'lang' => "",
            'tieuDe' => "Cơ hội OCOP từ TikTok",
            'tomTat' => "",
            'urlHinh' => "upload/images/titok.jpg",
            'ngayDang' => now(),
            'noiDung' => 				
           ' <div id="__MB_MASTERCMS_EL_3" class="fw clearfix"><p style="text-align: center;"><br> <em><img src="https://langngheviet.com.vn/stores/news_dataimages/langnghevietcomvn/092022/09/10/co-hoi-ocop-tu-tiktok-16-.3746.jpg" style="max-width:100%;" alt title><br> Hà Nội hợp tác cùng TikTok nâng cao năng lực chuyển đổi số cho Chương trình OCOP. </em><br>  </p> Thực tế hiện nay, ít có một nền tảng giải trí nào trên thế giới thịnh hành và đem đến sức hút to lớn với người dân Việt Nam như TikTok.<br> <br> Thương mại điện tử TikTok Shop tại thị trường Việt Nam hiện cũng được xem là một giải pháp sáng tạo, mở ra nhiều cơ hội kinh doanh cho các chủ thể OCOP. Được tích hợp trọn bộ ngay trên nền tảng giải trí, TikTok Shop giúp các chủ thể OCOP tối ưu hóa quy trình tiếp cận người dùng.<br> <br> Với xu hướng mua sắm kết hợp giải trí (shoppertainment), các tổ chức, cá nhân, nhất là nhóm DN vừa và nhỏ sẽ có thêm cơ hội để gắn kết với cộng đồng thông qua yếu tố giải trí và khả năng tương tác cao. Đây là đặc điểm, yếu tố thu hút người dùng mà hiếm nền tảng mạng xã hội nào có thể vượt qua được TikTok thời điểm hiện tại.<br> <br> Tâm lý này sẽ tạo ra cơ hội để các thương hiệu nắm bắt xu hướng, cách tiếp cận ưu tiên; qua đó đáp ứng được cả nhu cầu chức năng và cảm xúc, tiến tới xây dựng mối quan hệ với khách hàng bền vững hơn… Đó là những chia sẻ khả quan khi Văn phòng Điều phối xây dựng nông thôn mới Hà Nội ký kết hợp tác với TikTok<br> <br> <br> Được biết, TikTok với vai trò là đối tác chính thức của Văn phòng Điều phối xây dựng nông thôn mới Hà Nội trong việc nâng cao năng lực số cho các đơn vị thành viên và chủ thể OCOP của TP, sẽ đồng tổ chức các lớp đào tạo chuyên môn về tạo video ngắn trên TikTok để quảng bá sản phẩm OCOP. Bên cạnh đó, TikTok cũng sẽ tổ chức các buổi hướng dẫn về bộ giải pháp quảng cáo sáng tạo TikTok for Business và bộ giải pháp thương mại điện tử toàn diện TikTok Shop.<br> <br> Tăng cường quá trình chuyển đổi số, cũng như đẩy mạnh ứng dụng công nghệ thông tin trong hoạt động truyền thông sẽ tạo ra những cơ hội phát triển rất lớn và năng lực hội nhập dành cho chủ thể có sản phẩm OCOP. Qua đó, thúc đẩy phát triển bền vững Chương trình OCOP của Hà Nội giai đoạn 2021 - 2025.<br> <br> Việc Hà Nội bắt tay với TikTok phát triển nền tảng và nâng cao năng lực số cho chủ thể cũng đặc biệt phù hợp với định hướng của Thủ tướng Chính phủ khi ban hành Chương trình OCOP. Đó là đẩy mạnh ứng dụng công nghệ thông tin và chuyển đổi số trong truyền thông, thúc đẩy phát triển thương mại điện tử cho sản phẩm OCOP thông qua các sàn thương mại điện tử, các kênh bán hàng trực tuyến (online), bán hàng tương tác trực tiếp (livestream). Đồng thời, triển khai sáng kiến “Mỗi nông dân là một thương nhân” nhằm tối ưu hóa ứng dụng công nghệ số trong sản xuất, thương mại sản phẩm OCOP.<br> <br> “Cái bắt tay” với DN công nghệ giải trí hàng đầu thế giới được kỳ vọng sẽ giúp hàng trăm chủ thể nâng cao kiến thức, kỹ năng, có khả năng ứng dụng công nghệ và các giải pháp tiếp thị sáng tạo vào quá trình tiêu thụ sản phẩm OCOP. Từ đó có thêm nhiều kênh tiếp cận với người tiêu dùng, giúp các chủ thể chủ động đầu ra, xây dựng được chuỗi giá trị bền vững cho sản phẩm OCOP.<br>   <p style="text-align: right;"><em>Bài và ảnh Trọng Tùng </em></p></div>',
            'idLT' => 3,
            'xem' => 10,
            'noiBat' => 1,
            'anHien' => 1,
            'tags' => ""
        ]);
    }
}
