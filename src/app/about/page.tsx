import ImageFallback from "@/helpers/ImageFallback";
import MDXContent from "@/helpers/MDXContent";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import SeoMeta from "@/partials/SeoMeta";
import { RegularPage } from "@/types";
import Image from "next/image";
import PageHeader from "@/partials/PageHeader";

const About = () => {
  const data: RegularPage = getListPage("pages/about.md");
  const { frontmatter, content } = data;
  const { title, meta_title, description, image } = frontmatter;

  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
      <PageHeader title={title} />
      <section className="section-sm">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-9 gap-x-20 pb-32">
            <div className="min-h-[200px] col-span-5">
              <h3 className="col-span-5">SẴN SÀNG, CHUYÊN NGHIỆP VÀ CHU ĐÁO</h3>
              <p>
                Công ty Cổ Phần Công Nghệ Liên Phát được thành lập từ đầu năm
                2013, với nền tảng là đội ngũ chuyên gia và kỹ sư có gần 10 năm
                kinh nghiệm trong lĩnh vực Công Nghệ Thông Tin. Với thế mạnh của
                một Công ty hàng đầu trong lĩnh vực cung cấp sản phẩm và tích
                hợp giải pháp Công Nghệ, chúng tôi đã cung cấp và triển khai
                thành công các gói sản phẩm dịch vụ, giải pháp và tích hợp hệ
                thống cho Quý khách hàng lớn trong nhiều lĩnh vực như: Ngân
                hàng, chuỗi bán lẻ, sản xuất, kho vận, các doanh nghiệp trong và
                ngoài nước…
              </p>
            </div>
            <div className="min-h-[50px] col-span-4">
              <div className="relative h-full">
                <Image
                  src="/images/about/lpc_team.jpeg"
                  width={500}
                  height={300}
                  alt="LPC team"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-9 gap-x-20 pb-32">
            <div className="min-h-[50px] col-span-4">
              <div className="relative h-full">
                <Image
                  src="/images/about/lpc_teambuilding.jpeg"
                  width={500}
                  height={300}
                  alt="LPC team"
                />
              </div>
            </div>
            <div className="min-h-[200px] col-span-5">
              <h3 className="col-span-5">TƯ TƯỞNG CỐT LÕI</h3>
              <p>
                LPC liên tục cải tiến trong mọi lĩnh vực hoạt động để phát triển
                và tạo ra những sản phẩm dịch vụ có giá trị hơn cho Khách Hàng.
                Chúng tôi luôn sẵn sàng đáp ứng công việc với sự chuyên nghiệp
                cao và chu đáo đến từng chi tiết nhỏ. Mang lại sự giàu có, hạnh
                phúc cho mỗi thành viên, đồng thời góp phần vào sự tiến bộ của
                xã hội đó cũng là trách nhiệm và nghĩa vụ của chúng tôi.
              </p>
            </div>
          </div>
          <div className="min-h-[500px] grid grid-cols-3 h-full relative">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Image
                src="/images/about/wm.png"
                height={400}
                width={400}
                alt="wm"
              />
            </div>
            <div className="min-h-[50px] flex flex-col items-center justify-center col-span-3">
              <h4 className="mb-1">NHỮNG CỘT MỐC QUAN TRỌNG</h4>
              <h2>Liên Phát đã hoàn thành hơn 700 dự án</h2>
            </div>
            <div className="min-h-[50px] col-span-1 flex flex-col items-center justify-center">
              <h2 className="mb-1">700+</h2>
              <h6>Dự án</h6>
            </div>
            <div className="min-h-[50px] col-span-1 flex flex-col items-center justify-center">
              <h2 className="mb-1">&gt;30</h2>
              <h6>Đối tác</h6>
            </div>
            <div className="min-h-[50px] col-span-1 flex flex-col items-center justify-center">
              <h2 className="mb-1">36</h2>
              <h6>Khách hàng</h6>
            </div>
          </div>
          <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <h3 className="text-center">
                CHÚNG TÔI LÀ ĐỐI TÁC VỚI NHỮNG CÔNG TY CÔNG NGHỆ HÀNG ĐẦU <br />
                THẾ GIỚI
              </h3>
              <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                <Image
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                  src="/images/partners/asus.png"
                  alt="Transistor"
                  width={158}
                  height={48}
                />
                <Image
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 sm:col-start-3 sm:col-span-2"
                  src="/images/partners/dell.png"
                  alt="Reform"
                  width={158}
                  height={48}
                />
                <Image
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 sm:col-start-5 sm:col-span-2"
                  src="/images/partners/f5.png"
                  alt="Tuple"
                  width={158}
                  height={48}
                />
                <Image
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                  src="/images/partners/ibm.png"
                  alt="Transistor"
                  width={158}
                  height={48}
                />
                <Image
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 sm:col-start-3 sm:col-span-2"
                  src="/images/partners/lenovo.png"
                  alt="Reform"
                  width={158}
                  height={48}
                />
                <Image
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 sm:col-start-5 sm:col-span-2"
                  src="/images/partners/microsoft.png"
                  alt="Tuple"
                  width={158}
                  height={48}
                />
                <Image
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                  src="/images/partners/okta.png"
                  alt="Transistor"
                  width={158}
                  height={48}
                />
                <Image
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 sm:col-start-3 sm:col-span-2"
                  src="/images/partners/paloalto.png"
                  alt="Reform"
                  width={158}
                  height={48}
                />
                <Image
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 sm:col-start-5 sm:col-span-2"
                  src="/images/partners/splunk.png"
                  alt="Tuple"
                  width={158}
                  height={48}
                />
                <Image
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                  src="/images/partners/trendmicro.png"
                  alt="Transistor"
                  width={158}
                  height={48}
                />
                <Image
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 sm:col-start-3 sm:col-span-2"
                  src="/images/partners/veeam.jpg"
                  alt="Reform"
                  width={158}
                  height={48}
                />
                <Image
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 sm:col-start-5 sm:col-span-2"
                  src="/images/partners/wmware.png"
                  alt="Tuple"
                  width={158}
                  height={48}
                />
              </div>
            </div>
          </div>
          <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <h3 className="text-center">
                ĐỒNG THỜI CHÚNG TÔI TỰ HÀO LÀ KHÁCH HÀNG TIÊU BIỂU VỚI CÁC{" "}
                <br />
                DOANH NGHIỆP TRÊN
              </h3>
              <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                <Image
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                  src="/images/customers/acb.png"
                  alt="Transistor"
                  width={158}
                  height={48}
                />
                <Image
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 sm:col-start-3 sm:col-span-2"
                  src="/images/customers/aih.png"
                  alt="Reform"
                  width={158}
                  height={48}
                />
                <Image
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 sm:col-start-5 sm:col-span-2"
                  src="/images/customers/bis1.png"
                  alt="Tuple"
                  width={158}
                  height={48}
                />
                <Image
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                  src="/images/customers/bvgiaan115.jpg"
                  alt="SavvyCal"
                  width={158}
                  height={48}
                />
                <Image
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 sm:col-start-3 sm:col-span-2"
                  src="/images/customers/bvqyq7.jpg"
                  alt="Statamic"
                  width={158}
                  height={48}
                />
                <Image
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 sm:col-start-5 sm:col-span-2"
                  src="/images/customers/cjgl.png"
                  alt="Statamic"
                  width={158}
                  height={48}
                />
                <Image
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                  src="/images/customers/dhyd_hcm.png"
                  alt="Statamic"
                  width={158}
                  height={48}
                />
                <Image
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 sm:col-start-3 sm:col-span-2"
                  src="/images/customers/emasi.jpg"
                  alt="Statamic"
                  width={158}
                  height={48}
                />
                <Image
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 sm:col-start-5 sm:col-span-2"
                  src="/images/customers/eximbank.png"
                  alt="Statamic"
                  width={158}
                  height={48}
                />
                <Image
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                  src="/images/customers/hanwhalife.png"
                  alt="Statamic"
                  width={158}
                  height={48}
                />
                <Image
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 sm:col-start-3 sm:col-span-2"
                  src="/images/customers/ivb.png"
                  alt="Statamic"
                  width={158}
                  height={48}
                />
                <Image
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 sm:col-start-5 sm:col-span-2"
                  src="/images/customers/manulife.png"
                  alt="Statamic"
                  width={158}
                  height={48}
                />
                <Image
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                  src="/images/customers/namlong.png"
                  alt="Statamic"
                  width={158}
                  height={48}
                />
                <Image
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 sm:col-start-3 sm:col-span-2"
                  src="/images/customers/ninjavan.png"
                  alt="Statamic"
                  width={158}
                  height={48}
                />
                <Image
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 sm:col-start-5 sm:col-span-2"
                  src="/images/customers/rmit.png"
                  alt="Statamic"
                  width={158}
                  height={48}
                />
                <Image
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                  src="/images/customers/sacombank.png"
                  alt="Statamic"
                  width={158}
                  height={48}
                />
                <Image
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 sm:col-start-3 sm:col-span-2"
                  src="/images/customers/samsung.png"
                  alt="Statamic"
                  width={158}
                  height={48}
                />
                <Image
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 sm:col-start-5 sm:col-span-2"
                  src="/images/customers/shinhanbank.jpg"
                  alt="Statamic"
                  width={158}
                  height={48}
                />
                <Image
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                  src="/images/customers/ssi.png"
                  alt="Statamic"
                  width={158}
                  height={48}
                />
                <Image
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 sm:col-start-3 sm:col-span-2"
                  src="/images/customers/tah.png"
                  alt="Statamic"
                  width={158}
                  height={48}
                />
                <Image
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 sm:col-start-5 sm:col-span-2"
                  src="/images/customers/uob.png"
                  alt="Statamic"
                  width={158}
                  height={48}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
