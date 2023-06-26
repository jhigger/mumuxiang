import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import md from "~/assets/markdown/tos.md";
import Head from "next/head";

const Terms = () => {
	return (
		<>
			<Head>
				<title>木目用户协议</title>
				<meta name="description" content="木目，你的美，刮目“相”看" />
				<meta name="author" content="https://github.com/jhigger" />
				<link rel="canonical" href="https://mumuxiang.com/" />
				<link rel="icon" href="/artisse favicon.png" />
			</Head>
			<div className="container mx-auto my-32 w-max">
				<ReactMarkdown
					remarkPlugins={[remarkGfm]}
					rehypePlugins={[rehypeRaw]}
					className="prose"
				>
					{md}
				</ReactMarkdown>
			</div>
		</>
	);
};

export default Terms;
