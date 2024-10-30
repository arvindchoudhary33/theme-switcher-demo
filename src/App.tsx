import { createContext, useState, useCallback } from "react";
import { ThemeName } from "./constants";
import ThemeSwitcher from "./components/ThemeSwitcher.tsx";
import { Button } from "./components/ui/button.tsx";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "./components/ui/alert";
import { Badge } from "./components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./components/ui/tabs";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import { ScrollArea } from "./components/ui/scroll-area";
import { Switch } from "./components/ui/switch";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./components/ui/drawer";
import { Separator } from "./components/ui/separator";

type AppContextType = {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
};

export const AppContext = createContext<AppContextType>({} as AppContextType);

const App = () => {
  const [theme, setThemeState] = useState<ThemeName>("gruvbox-dark");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const setTheme = useCallback((newTheme: ThemeName) => {
    setThemeState(newTheme);
  }, []);

  const contextValue: AppContextType = {
    theme,
    setTheme,
  };

  return (
    <AppContext.Provider value={contextValue}>
      <div className="w-full h-[100vh] flex justify-center items-center">
        <div className="max-w-4xl w-full flex flex-col gap-5">
          <Alert>
            <AlertTitle className="flex justify-between items-center pt-3">
              <span>Hey there!</span>
              <ThemeSwitcher />
            </AlertTitle>
            <AlertDescription>
              Some random shadcn components with different themes
            </AlertDescription>
          </Alert>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>
                Frequently used settings and controls
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between space-x-4">
                <div className="flex-1 space-y-1">
                  <Label htmlFor="dark-mode">Dark Mode</Label>
                  <div className="text-sm text-muted-foreground">
                    Toggle system-wide dark mode
                  </div>
                </div>
                <Switch id="dark-mode" />
              </div>
              <Separator />
              <div className="flex items-center justify-between space-x-4">
                <div className="flex-1 space-y-1">
                  <Label htmlFor="notifications">Notifications</Label>
                  <div className="text-sm text-muted-foreground">
                    Enable push notifications
                  </div>
                </div>
                <Switch id="notifications" />
              </div>
              <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
                <DrawerTrigger asChild>
                  <Button className="w-full mt-4">
                    Open Advanced Settings
                  </Button>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle>Advanced Settings</DrawerTitle>
                    <DrawerDescription>
                      Configure advanced system settings.
                    </DrawerDescription>
                  </DrawerHeader>
                  <div className="p-4 space-y-4">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="developer-mode">Developer Mode</Label>
                      <Switch id="developer-mode" />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="experimental">
                        Experimental Features
                      </Label>
                      <Switch id="experimental" />
                    </div>
                  </div>
                  <DrawerFooter>
                    <Button onClick={() => setDrawerOpen(false)}>
                      Save Changes
                    </Button>
                    <DrawerClose asChild>
                      <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </CardContent>
          </Card>

          <Tabs defaultValue="account" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              <Card>
                <CardHeader>
                  <CardTitle>Account Information</CardTitle>
                  <CardDescription>
                    View and manage your account details.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="username">Username</Label>
                    <Input id="username" placeholder="Enter username" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Enter email" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="marketing" />
                    <Label htmlFor="marketing">Receive marketing emails</Label>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Cancel</Button>
                  <Button>Save Changes</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="settings">
              <Card>
                <CardHeader>
                  <CardTitle>Settings</CardTitle>
                  <CardDescription>
                    Manage your application settings.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[200px] w-full rounded-md border p-4">
                    <div className="space-y-4">
                      {[
                        "Profile",
                        "Notifications",
                        "Security",
                        "Appearance",
                        "Integration",
                      ].map((setting) => (
                        <div
                          key={setting}
                          className="flex items-center justify-between"
                        >
                          <span>{setting}</span>
                          <div className="flex items-center space-x-2">
                            <Switch id={`setting-${setting}`} />
                            <Badge variant="outline">Enabled</Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Update Settings</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </AppContext.Provider>
  );
};

export default App;
