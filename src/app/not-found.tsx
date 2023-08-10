import { Boundary } from '@/app/ui/boundary';

export default function NotFound() {
  return (
    <Boundary labels={['not-found.tsx']} color="pink">
      <div className="text-vercel-pink space-y-4">
        <h2 className="text-lg font-bold">Not Found</h2>
        <p className="text-sm">Page non trouver</p>
      </div>
    </Boundary>
  );
}