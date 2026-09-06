# standalone 설정 추가
cat > next.config.ts << 'EOF'
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Docker standalone 배포용 (Dockerfile이 .next/standalone 복사)
  output: 'standalone',
};

export default nextConfig;

