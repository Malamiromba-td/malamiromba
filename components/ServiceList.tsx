interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
}

export default function ServiceList({ services }: { services: Service[] }) {
  return (
    <div>
      {services.map((service, i) => (
        <div key={service.id}>
          <div className="flex flex-col gap-4 py-6 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
            <div className="flex-1">
              <h3 className="font-display text-lg font-medium text-ink">
                {service.title}
              </h3>
              <p className="mt-1 max-w-md font-sans text-sm leading-relaxed text-muted">
                {service.description}
              </p>
            </div>
            <div className="flex items-center gap-4 sm:flex-col sm:items-end sm:gap-2">
              <span className="font-display text-xl font-bold text-ochre sm:text-2xl">
                {service.price}
              </span>
              <a
                href={`mailto:ibrahim@malamiromba.com?subject=Inquiry about ${service.title}`}
                className="font-sans text-sm text-indigo-mid underline underline-offset-[3px] transition-opacity hover:opacity-70"
              >
                Get in touch
              </a>
            </div>
          </div>
          {i < services.length - 1 && <div className="h-px bg-hairline" />}
        </div>
      ))}
    </div>
  );
}
