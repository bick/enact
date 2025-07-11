# Install dependencies only when needed
FROM node:22-alpine AS builder
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Detect and use the package manager based on lock files
COPY package.json package-lock.json* pnpm-lock.yaml* ./

# Install the appropriate package manager
RUN if [ -f "pnpm-lock.yaml" ]; then \
        corepack enable && corepack prepare pnpm@latest --activate && \
        pnpm install --no-frozen-lockfile; \
    else \
        npm ci; \
    fi

# Copy the rest of the application code
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1

# Add `ARG` instructions below if you need `NEXT_PUBLIC_` variables
# then put the value on your fly.toml
# Example:
# ARG NEXT_PUBLIC_EXAMPLE="value here"

RUN if [ -f "pnpm-lock.yaml" ]; then \
        pnpm run build; \
    else \
        npm run build; \
    fi

# Production image, copy all the files and run next
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy lock files and package.json
COPY --from=builder /app/package.json ./
COPY --from=builder /app/package-lock.json* ./
COPY --from=builder /app/pnpm-lock.yaml* ./

# Copy build artifacts
COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Install production dependencies based on the package manager detected
RUN if [ -f "pnpm-lock.yaml" ]; then \
        corepack enable && corepack prepare pnpm@latest --activate && \
        pnpm install --prod --no-frozen-lockfile; \
    else \
        npm ci --only=production; \
    fi

USER nextjs

CMD ["node", "server.js"]