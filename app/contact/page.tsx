import PageWrapper from "@/components/PageWrapper";

export default function Contact() {
  return (
    <PageWrapper>
      <section>
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="mt-2">Email: your.email@example.com</p>
        <p>LinkedIn: <a href="https://linkedin.com/in/yourname" className="text-blue-500">YourName</a></p>
      </section>
    </PageWrapper>
  )
}
