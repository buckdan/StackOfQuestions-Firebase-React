import React from 'react';
import { Link } from 'react-router-dom';
import { Text, Link as StyledLink, Flex } from '@chakra-ui/react';

export default function Policy() {
  return (
    <Flex justifyContent="center" alignItems="center" height="300vh" direction="column">
        <Text fontSize="3xl">
            MỘT SỐ CHÍNH SÁCH NỘI QUY CỦA TRANG FORUM<br /> 
 	    (Mặc dù đây là một trang forum mà mọi người có thể đặt câu hỏi về vấn đề mình muốn nhưng vẫn phải có một số nội quy để đảm bảo không gây ảnh hưởng đến cả cộng đồng forum hay là một cá nhân. Những điều luật này sẽ chỉ áp dụng khi người dùng tham gia vào cộng đồng của chúng tôi)<br /><br /> 
        </Text>
        <Text fontStyle="italic">
-	Những nội quy này được thành lập vào 30/10/2021<br /><br />
        </Text>

        <Text>
<Text fontSize="25px" fontWeight="bold">1./Một số quy định về đăng bài</Text><br />
-	Không được đăng những bài 18+, những bài mang nội dụng nhạy cảm, những bài mang dấu hiệu xâm phạm quyền riêng tư, những bài gây xúc phạm quá đáng đến người khác.<br /> 
-	Tránh tình trạng spam bài đăng. Hiện tại do giới hạn công nghệ không có công cụ tìm kiếm, nên người dùng tránh spam bài đăng để mọi người có thể tìm kiếm bài đăng dễ dàng.<br /> 
-	Tránh tình trạng sử dụng ngôn ngữ bậy bạ, thô tục. Hãy làm một người dùng có văn hóa và tránh sử dụng ngôn ngữ quá thô tục<br /><br /> 
 	<Text fontWeight="bold">+ Những hành vi phạm vào quy luật trên quản trị viên sẽ tiến hành xóa bài đăng (hoặc chỉnh sửa bài đăng) và tùy thuộc vào mức độ vi phạm sẽ tiến hành ban hoặc xóa tài khoản.</Text><br />
 
<Text fontSize="25px" fontWeight="bold">2./Một số quy định về bình luận</Text><br /> 
-	Không được đăng những binh luận với nội dung 18+, nội dung không lanh mạnh, mang tính xúc phạm đến cá nhân, phân biệt chủng tộc, những bình luận xâm phạm quyền riêng tư, mang tính công kích.<br /> 
-	Tránh tình trạng spam bài đăng của người khác, để tác giả có thể tìm thấy câu trả đúng cho vấn đề của mình.<br /> 
-	Hạn chế sử dụng ngôn ngữ thô tục. Hãy là một người dùng có văn hóa, để tránh ảnh hưởng đến bản thân mình và mọi người trong cộng đồng.<br /><br />
 	<Text fontWeight="bold">+ Những hành vi phạm đến điều luật trên sẽ được cảnh báo cho thời gian xóa bài bình luận. Trong trường hợp không tuân theo thì quản trị viên sẽ tiến hành ban người dùng. Trong trường hợp vi phạm quá nhiều quản trị viên sẽ tiến hành xem xét và đưa ra quyết định xóa tài khoản người dùng</Text><br /> 
 
<Text fontSize="25px" fontWeight="bold">3./Chính sách về thông tin cá nhân, thông tin đăng trên forum</Text><br />
-	Những thông tin cá nhân hay những thông tin được đăng trên forum trong thời điểm hiện tại sẽ được bảo mật và không bán lại cho bên quảng cáo, bên công ty, hay cho cá nhân nào. Thông tin về người dùng sẽ chỉ riêng quản trị viên biết và bảo mật. Nhưng quản trị viên sẽ không chịu trách nhiệm về trường hợp lộ thông tin do bên nền tảng khác hoặc do trường hợp người dùng tự đăng thông tin cá nhân lên bài đăng.<br />
-	Hiện tại trang vẫn chưa chứa những nội dung quảng cáo gây phiền nhiễu đến người dùng. Nhưng xin lưu ý rằng trong tương lai quảng cáo sẽ được thêm vào với lý do cá nhân của quản trị viên. <br />
-	Một số trường hợp đặc biệt người dùng có thể request hỗ trợ về thông tin như backup, xóa mọi dấu vết về tài khoản. Một số trường hợp nâng cao như xem thông tin tài khoản người khác, hoặc yêu cầu thay đổi dữ liệu bài đăng, quản trị viên sẽ cần thời gian xem xét và thực hiện yêu cầu.<br />
-	Người dùng sẽ được cập nhật thêm nhiều điều luật mới qua email hoặc thông báo từ quản trị viên.<br /><br/ >
<Text fontSize="25px" fontWeight="bold">4./Luật đạo đức cho quản trị viên</Text><br /><br />
<Text fontStyle="italic">(Đây là phần người dùng có quyền sử dụng chính sách này để bắt lỗi quản trị viên khi quản trị viên làm trái theo luật, trái theo lương tâm)</Text><br />
- Quản trị viên không được làm trái theo những chính sách dưới đây :<br /> 
 	+ Không được phép xóa bài đăng của người dùng nếu như người dùng không vi phạm những điều luật trên. <br />
 	+ Không được phép ăn hối lộ hoặc làm theo yêu cầu của người dùng hoặc người bên ngoài để lấy dữ liệu hoặc xóa dữ liệu của người dùng khác<br />
 	+ Nghiêm cấm hành vi ban hoặc xóa dữ liệu người dùng vô cớ<br />
 	+ Tránh tình trạng sửa đổi bài đăng của người dùng khác<br />
 	+ Tránh tình trạng bán dữ liệu người dùng<br />
 	+ Quản trị viên không được phép công kích cá nhân, phân biệt chủng tộc, phân biệt giới tính <br />
 	+ Quản trị viên không được phép đưa ra luật vô lý hoặc thay đổi luật một cách vô lý<br /><br />
 	<Text fontWeight="bold">Mọi hành vi phạm vào điều luật đạo đức của quản trị viên, thì sẽ tùy thuộc vào mức độ và đưa ra hình phạt. Một là ăn ban với thời hạn do cộng đồng quyết định. Hai là vị phạm quá nhiều lần hoặc vị phạm quá nặng nề thì hình phạt sẽ được quyết định do cộng đồng quyết định.</Text><br /><br />
 
    <Text fontSize="25px" fontWeight="bold">Hiện tại đây là những nội quy và chính sách chính thức của trang forum StackofQuestion. Mong người dùng tham gia vào cộng đồng forum hợp tác và tuân thủ. Người dùng muốn yêu cầu chỉnh sửa hay cập nhật do chính sách có những bất ổn xin vui lòng liên lạc với bên quản trị viên.</Text> 

        </Text>
        <StyledLink opacity="0.8" mt={4} as={Link} to="/">Quay trở về trang chủ</StyledLink>
    </Flex>
  )
}