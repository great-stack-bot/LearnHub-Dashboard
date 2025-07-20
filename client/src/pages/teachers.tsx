import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Teachers() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Teachers</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">Teacher management and profiles will be displayed here.</p>
      </CardContent>
    </Card>
  );
}
