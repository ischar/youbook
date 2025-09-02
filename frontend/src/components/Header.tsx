import { IconUserCircle } from '@tabler/icons-react';

export function Header() {
  return (
    <header className="h-16 px-4 md:px-6 bg-white border-b flex items-center justify-between">
      <h1 className="text-xl font-bold text-red-600">
        YouBook
      </h1>
      <IconUserCircle size="2.125rem" className="text-gray-600" />
    </header>
  );
}